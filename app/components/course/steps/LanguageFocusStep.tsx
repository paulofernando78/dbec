import { useState } from "react";

import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { LanguageFocusData } from "@/data/course/lesson-step-types";
import { GrammarTopicCards } from "@/features/Grammar";
import { VocabularyTopicCards } from "@/features/Vocabulary";

type Accent = "us" | "uk";

const accents: { id: Accent; label: string; image: string }[] = [
  {
    id: "us",
    label: "American English",
    image: "https://img.icons8.com/stickers/100/usa.png",
  },
  {
    id: "uk",
    label: "British English",
    image: "https://img.icons8.com/stickers/100/great-britain.png",
  },
];

const brazilFlag = "https://img.icons8.com/stickers/100/brazil.png";

const stressPattern = /(\*\*[^*]+\*\*|[A-ZÀ-ÖØ-Þ]{2,}(?:[’'][A-ZÀ-ÖØ-Þ]+)?)/g;
const stressedPartPattern = /^[A-ZÀ-ÖØ-Þ]{2,}(?:[’'][A-ZÀ-ÖØ-Þ]+)?$/;

const renderPronunciation = (pronunciation: string) => {
  const parts = pronunciation.split(stressPattern);

  return parts.map((part, index) => {
    const isExplicitStress = part.startsWith("**");
    const isLegacyStress = stressedPartPattern.test(part);

    if (!isExplicitStress && !isLegacyStress) return part;

    const previousText = parts.slice(0, index).join("").trimEnd();
    const nextPart = parts[index + 1] ?? "";
    const startsSentence = !previousText || /[.!?]$/.test(previousText);
    const rawText = isExplicitStress ? part.slice(2, -2) : part;
    const normalizedText = isExplicitStress
      ? rawText
      : startsSentence || /^[a-zà-öø-ÿ]/.test(nextPart)
        ? `${rawText.charAt(0)}${rawText.slice(1).toLowerCase()}`
        : rawText.toLowerCase();

    return (
      <mark
        key={`${part}-${index}`}
        className="rounded bg-yellow-300 px-0.5 text-[1em] font-[inherit] leading-[inherit] text-gray-900"
      >
        {normalizedText}
      </mark>
    );
  });
};

type FormBlock =
  | {
      kind: "table";
      columns: readonly { header: string; example: string }[];
    }
  | {
      kind: "comparison";
      left: string;
      right: string;
    }
  | {
      kind: "list";
      values: string[];
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

const cleanFormWord = (value: string) =>
  value.toLowerCase().replace(/^[^a-zà-öø-ÿ]+|[^a-zà-öø-ÿ]+$/g, "");

const splitModelClauses = (title: string) => {
  const clauses = title
    .split(/\s+—\s+|\s+\/\s+/)
    .map((clause) => clause.trim())
    .filter(Boolean);

  return clauses.length ? clauses : [title];
};

const isGrammarLabel = (header: string) => {
  const normalized = header.toLowerCase().replace(/[?.]/g, "").trim();
  return (
    grammarLabels.has(normalized) ||
    /(auxiliary|modal|gerund|infinitive|participle|tense|clause|statement|feature|amount|pronoun|particle|possessive|article|determiner|quantifier|two-part|positive verb|negative verb)/.test(
      normalized,
    )
  );
};

const normalizedHeaderWords = (header: string) =>
  header
    .replace(/[?.]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

const headerMatchesAt = (words: string[], header: string, start: number) => {
  const headerWords = normalizedHeaderWords(header);
  if (!headerWords.length || start + headerWords.length > words.length)
    return false;

  return headerWords.every((headerWord, offset) => {
    const alternatives = headerWord.split("/").map(cleanFormWord);
    return alternatives.includes(cleanFormWord(words[start + offset]));
  });
};

const findHeaderStart = (words: string[], header: string) => {
  for (let index = 0; index < words.length; index += 1) {
    if (headerMatchesAt(words, header, index)) return index;
  }
  return -1;
};

const scoreClauseForHeaders = (clause: string, headers: string[]) => {
  const words = clause.split(/\s+/).filter(Boolean);
  return headers.reduce(
    (score, header) =>
      score +
      (!isGrammarLabel(header) && findHeaderStart(words, header) >= 0 ? 1 : 0),
    0,
  );
};

const findTargetStart = (words: string[], headers: string[]) => {
  for (const header of headers) {
    if (isGrammarLabel(header)) continue;
    const matchIndex = findHeaderStart(words, header);
    if (matchIndex >= 0) return matchIndex;
  }

  return 0;
};

const buildLegacyFormBlocks = (form: string, title: string): FormBlock[] => {
  const patterns = form.split("·").map((pattern) => pattern.trim());
  const clauses = splitModelClauses(title);
  const blocks: FormBlock[] = [];
  const listValues: string[] = [];

  patterns.forEach((pattern, tableIndex) => {
    if (!pattern.includes(" + ")) {
      const comparison = pattern.split(/\s*(?:→|=)\s*/);

      if (comparison.length === 2) {
        blocks.push({
          kind: "comparison",
          left: comparison[0].trim(),
          right: comparison[1].trim(),
        });
      } else {
        listValues.push(pattern);
      }
      return;
    }

    const normalizedPattern = pattern.replace(
      /^(Yes|No),\s+(subject)(?=\s+\+)/i,
      "$1, + $2",
    );
    const headers = normalizedPattern
      .split(/\s+\+\s+/)
      .map((header) => header.trim())
      .filter(Boolean);
    const bestClause = clauses
      .map((clause) => ({
        clause,
        score: scoreClauseForHeaders(clause, headers),
      }))
      .sort((left, right) => right.score - left.score)[0];
    const clause =
      bestClause && bestClause.score > 0
        ? bestClause.clause
        : (clauses[Math.min(tableIndex, clauses.length - 1)] ?? title);

    const clauseWords = clause.split(/\s+/).filter(Boolean);
    const targetWords = clauseWords.slice(findTargetStart(clauseWords, headers));

    let wordCursor = 0;
    blocks.push({
      kind: "table",
      columns: headers.map((header, columnIndex) => {
        const isLast = columnIndex === headers.length - 1;
        const literalWidth = isGrammarLabel(header)
          ? 1
          : normalizedHeaderWords(header).length;
        const example = isLast
          ? targetWords.slice(wordCursor).join(" ")
          : targetWords.slice(wordCursor, wordCursor + literalWidth).join(" ");
        wordCursor += literalWidth;

        return { header, example: example || "—" };
      }),
    });
  });

  if (listValues.length) {
    blocks.push({ kind: "list", values: listValues });
  }

  return blocks;
};

export function LanguageFocusStep({ data }: { data: LanguageFocusData }) {
  const [accent, setAccent] = useState<Accent>("us");
  const [showPortuguese, setShowPortuguese] = useState(false);
  const usesPortugueseSupport = data.supportLanguage === "pt-BR";

  return (
    <div className="rounded-2xl bg-[var(--surface)] p-4">
      <div
        className="mb-4 flex gap-2"
        aria-label="Pronunciation and translation options"
      >
        {accents.map(({ id, label, image }) => (
          <Button
            key={id}
            ariaLabel={label}
            pressed={accent === id}
            onClick={() => setAccent(id)}
            className={
              accent === id ? "ring-2 ring-blue-500 text-blue-700!" : ""
            }
          >
            <img
              width="100"
              height="100"
              src={image}
              alt=""
              className="size-10 object-contain"
            />
          </Button>
        ))}

        <Button
          ariaLabel="Português do Brasil"
          pressed={showPortuguese}
          onClick={() => setShowPortuguese((current) => !current)}
          className={
            showPortuguese ? "ring-2 ring-blue-500 text-blue-700!" : ""
          }
        >
          <img
            width="100"
            height="100"
            src={brazilFlag}
            alt=""
            className="size-10 object-contain"
          />
        </Button>
      </div>

      <div className="grid gap-4">
        {data.items.map(
          ([title, meaning, pronunciation, form, audio, translationPt, group], index) => {
            const previousGroup = index > 0 ? data.items[index - 1]?.[6] : undefined;
            const titleText =
              typeof title === "string"
                ? title
                : title
                    .map((part) =>
                      typeof part === "string" ? part : (part.part ?? ""),
                    )
                    .join("");
            const audioSource = audio?.[accent] ?? titleText;
            const speechLang = accent === "uk" ? "en-GB" : "en-US";
            const formBlocks: FormBlock[] =
              typeof form === "string"
                ? buildLegacyFormBlocks(form, titleText)
                : form.map(({ columns }) => ({ kind: "table", columns }));

            return (
              <div key={titleText} className="grid gap-2">
                {group && group !== previousGroup && (
                  <h4 className="text-lg font-black">{group}</h4>
                )}
                <article className="space-y-4 rounded-xl bg-[var(--background)] p-4">
                <div>
                  <h4
                    className={`text-xl ${typeof title === "string" ? "font-black" : "font-normal"}`}
                  >
                    <InlineRichContent value={title} />
                    {showPortuguese && translationPt ? (
                      <span className="font-normal text-gray-500">
                        {" "}
                        — {translationPt}
                      </span>
                    ) : null}
                  </h4>
                </div>
                <section>
                  <h5
                    className={`mb-1 font-black ${usesPortugueseSupport ? "text-gray-500" : ""}`}
                  >
                    {usesPortugueseSupport ? "Significado" : "Meaning"}
                  </h5>
                  <p className={usesPortugueseSupport ? "text-gray-500" : ""}>
                    {meaning}
                  </p>
                </section>
                <section>
                  <h5
                    className={`mb-1 font-black ${usesPortugueseSupport ? "text-gray-500" : ""}`}
                  >
                    {usesPortugueseSupport ? "Pronúncia" : "Pronunciation"}
                  </h5>
                  <div className="flex items-center gap-3">
                    <Audio
                      asButton
                      ariaLabel={`Play ${titleText}`}
                      key={`${accent}-${audioSource}`}
                      src={audioSource}
                      fallbackText={titleText}
                      speechLang={speechLang}
                      className="stroke-0!"
                      wrapperClassName="shrink-0"
                    />
                    <p
                      className="text-xl font-black leading-7 text-[var(--text-color)]"
                    >
                      {renderPronunciation(pronunciation)}
                    </p>
                  </div>
                </section>
                <section className="space-y-3">
                  <h5
                    className={`font-black ${usesPortugueseSupport ? "text-gray-500" : ""}`}
                  >
                    {usesPortugueseSupport ? "Forma" : "Form"}
                  </h5>
                  {formBlocks.map((block, blockIndex) => {
                    if (block.kind === "list") {
                      return (
                        <div
                          key={`list-${blockIndex}`}
                          className="flex flex-wrap gap-2"
                        >
                          {block.values.map((value) => (
                            <span
                              key={value}
                              className="rounded-lg bg-[var(--surface)] px-3 py-2"
                            >
                              {value}
                            </span>
                          ))}
                        </div>
                      );
                    }

                    const columns =
                      block.kind === "comparison"
                        ? [
                            {
                              header: usesPortugueseSupport
                                ? "Forma"
                                : "Form",
                              example: block.left,
                            },
                            {
                              header: usesPortugueseSupport
                                ? "Forma equivalente"
                                : "Equivalent form",
                              example: block.right,
                            },
                          ]
                        : block.columns;

                    return (
                      <div
                        key={`${blockIndex}-${columns.map(({ header }) => header).join("-")}`}
                        className="overflow-hidden rounded-lg border border-gray-300"
                      >
                        <table className="w-full table-fixed border-collapse text-left text-xs sm:text-sm">
                          <thead className="bg-[var(--surface)]">
                            <tr>
                              {columns.map(({ header }, columnIndex) => (
                                <th
                                  key={`${columnIndex}-${header}`}
                                  className={`${columnIndex > 0 ? "border-l" : ""} break-words border-b border-gray-300 px-2 py-2 font-black ${usesPortugueseSupport ? "text-gray-500" : ""}`}
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {columns.map(
                                ({ header, example }, columnIndex) => (
                                  <td
                                    key={`${columnIndex}-${header}-${example}`}
                                    className={`${columnIndex > 0 ? "border-l" : ""} break-words border-gray-300 px-2 py-2`}
                                  >
                                    {example}
                                  </td>
                                ),
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  })}
                </section>
                </article>
              </div>
            );
          },
        )}
      </div>
      {data.relatedGrammar?.length ? (
        <section className="mt-6" aria-label="Related grammar">
          <h3 className="mb-4 text-lg font-black">Related grammar</h3>
          <GrammarTopicCards topicIds={data.relatedGrammar} />
        </section>
      ) : null}
      {data.relatedVocabulary?.length ? (
        <section className="mt-6" aria-label="Related vocabulary">
          <h3 className="mb-4 text-lg font-black">Related vocabulary</h3>
          <VocabularyTopicCards topicIds={data.relatedVocabulary} />
        </section>
      ) : null}
    </div>
  );
}
