import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type LineProps = {
  display?: "block" | "inline";
  as?: "p" | "span";
  value?: InlineRichContentValue[];
};

export const Line = ({
  as: Tag = "p",
  display,
  value = []
}: LineProps) => {
  const className = Tag === "span" ? display : undefined
  return (
    <Tag className={display}>
      <InlineRichContent value={value} />
    </Tag>
  );
};
