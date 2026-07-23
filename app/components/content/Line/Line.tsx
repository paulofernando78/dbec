import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type LineProps = {
  display?: "block" | "inline";
  as?: "p" | "span";
  value?: InlineRichContentValue[];
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
