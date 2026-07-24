import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";

type LineProps = {
  display?: "block" | "inline";
  as?: "p" | "span";
  value?: RichContent;
  className?: string
};

export const Line = ({
  as: Tag = "p",
  display,
  value = [],
  className
}: LineProps) => {
  const displayClass = Tag === "span" ? display : undefined
  return (
    <Tag className={[displayClass, className].filter(Boolean).join(" ")}>
      <InlineRichContent value={value}/>
    </Tag>
  );
};
