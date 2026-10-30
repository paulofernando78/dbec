import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const courseRoot = path.resolve("app/data/course");

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });

const unwrap = (node) => {
  let current = node;
  while (
    ts.isSatisfiesExpression(current) ||
    ts.isAsExpression(current) ||
    ts.isParenthesizedExpression(current)
  ) {
    current = current.expression;
  }
  return current;
};

const propertyValue = (object, name) => {
  const property = object.properties.find(
    (item) =>
      ts.isPropertyAssignment(item) && item.name.getText().replaceAll('"', "") === name,
  );
  return property && ts.isPropertyAssignment(property)
    ? unwrap(property.initializer)
    : undefined;
};

const textOf = (node) => {
  const value = unwrap(node);
  if (
    ts.isStringLiteral(value) ||
    ts.isNoSubstitutionTemplateLiteral(value)
  ) {
    return value.text;
  }
  if (ts.isArrayLiteralExpression(value)) {
    return value.elements.map(textOf).join("");
  }
  if (ts.isCallExpression(value) && value.arguments[0]) {
    return textOf(value.arguments[0]);
  }
  if (ts.isObjectLiteralExpression(value)) {
    const part = propertyValue(value, "part");
    return part ? textOf(part) : "";
  }
  return "";
};

const grammarLabels = new Set([
  "subject",
  "object",
  "complement",
  "noun",
  "verb",
  "base verb",
  "past verb",
  "adjective",
  "adverb",
  "place",
  "person",
  "people",
  "name",
  "reason",
  "year",
  "time",
  "wh-word",
  "singular noun",
  "plural noun",
  "comparative adjective",
]);

const cleanWord = (value) =>
  value.toLowerCase().replace(/^[^a-zà-öø-ÿ]+|[^a-zà-öø-ÿ]+$/g, "");

const previewColumns = (form, title) =>
  form
    .split("·")
    .map((pattern) => pattern.trim())
    .filter((pattern) => pattern.includes(" + "))
    .map((pattern) => {
      const headers = pattern.split(/\s+\+\s+/).map((part) => part.trim());
      const words = title.split(/\s+/).filter(Boolean);
      let start = 0;

      for (const header of headers) {
        if (grammarLabels.has(header.toLowerCase())) continue;
        const alternatives = header.split("/").map(cleanWord).filter(Boolean);
        const found = words.findIndex((word) =>
          alternatives.includes(cleanWord(word)),
        );
        if (found >= 0) {
          start = found;
          break;
        }
      }

      const target = words.slice(start);
      const examples = headers.map((_, index) =>
        index === headers.length - 1
          ? target.slice(index).join(" ")
          : (target[index] ?? ""),
      );

      return {
        pattern,
        headers,
        examples,
        issue:
          target.length < headers.length || examples.some((example) => !example),
      };
    });

const records = [];

for (const file of walk(courseRoot).filter((name) => name.endsWith("language-focus.ts"))) {
  const source = ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  let languageFocus;

  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText() !== "languageFocus" || !declaration.initializer)
        continue;
      const initializer = unwrap(declaration.initializer);
      if (ts.isObjectLiteralExpression(initializer)) languageFocus = initializer;
    }
  });

  if (!languageFocus) continue;
  const items = propertyValue(languageFocus, "items");
  if (!items || !ts.isArrayLiteralExpression(items)) continue;

  items.elements.forEach((item, index) => {
    const tuple = unwrap(item);
    if (!ts.isArrayLiteralExpression(tuple) || tuple.elements.length < 4) return;
    const formNode = unwrap(tuple.elements[3]);
    const formText = ts.isStringLiteral(formNode) ? formNode.text : "[structured]";
    const titleText = textOf(tuple.elements[0]);
    const previews = ts.isStringLiteral(formNode)
      ? previewColumns(formText, titleText)
      : [];
    records.push({
      file: path.relative(courseRoot, file),
      level: path.relative(courseRoot, file).split(path.sep)[0],
      item: index + 1,
      title: titleText,
      form: formText,
      kind: ts.isArrayLiteralExpression(formNode)
        ? "structured"
        : ts.isStringLiteral(formNode) && formNode.text.includes(" + ")
          ? "columns"
          : ts.isStringLiteral(formNode) && /→|=/.test(formNode.text)
            ? "comparison"
            : "list",
      previews,
      issue: previews.some((preview) => preview.issue),
    });
  });
}

const summary = Object.groupBy(records, ({ level }) => level);
const counts = Object.fromEntries(
  Object.entries(summary).map(([level, entries]) => [
    level,
    Object.fromEntries(
      ["columns", "comparison", "list", "structured"].map((kind) => [
        kind,
        entries.filter((entry) => entry.kind === kind).length,
      ]),
    ),
  ]),
);

console.log(JSON.stringify({ counts, records }, null, 2));
