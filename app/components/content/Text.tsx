import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";

export type TextItem =
  | {
      display?: "block" | "inline";
      as?: "p" | "span";
      parts: RichContent;
    }
  | {
      type: "spacer";
    };

type LegacyTextItem = RichContent | TextItem;

type TextProps = {
  value?: RichContent | string | LegacyTextItem[];
  as?: "p" | "span";
  display?: "block" | "inline";
  className?: string;
};

const isTextItemList = (value: TextProps["value"]): value is LegacyTextItem[] =>
  Array.isArray(value) &&
  value.some(
    (item) =>
      Array.isArray(item) ||
      (typeof item === "object" &&
        item !== null &&
        ("parts" in item || ("type" in item && item.type === "spacer"))),
  );

const TextLine = ({
  value = [],
  as: Tag = "p",
  display,
  className,
}: {
  value?: RichContent | string;
  as?: "p" | "span";
  display?: "block" | "inline";
  className?: string;
}) => {
  const displayClass = Tag === "span" ? display : undefined;

  return (
    <Tag className={[displayClass, className].filter(Boolean).join(" ")}>
      <InlineRichContent value={value} />
    </Tag>
  );
};

export const Text = ({ value = [], as, display, className }: TextProps) => {
  if (!isTextItemList(value)) {
    return (
      <TextLine
        as={as}
        display={display}
        value={value}
        className={className}
      />
    );
  }

  return (
    <div className={["mb-4", className].filter(Boolean).join(" ")}>
      {value.map((item, index) => {
        if (Array.isArray(item)) {
          return <TextLine key={index} as={as} display={display} value={item} />;
        }

        if ("type" in item && item.type === "spacer") {
          return <div key={index} className="h-4" />;
        }

        if ("parts" in item) {
          return (
            <TextLine
              key={index}
              as={item.as ?? as}
              display={item.display ?? display}
              value={item.parts}
            />
          );
        }

        return null;
      })}
    </div>
  );
};
