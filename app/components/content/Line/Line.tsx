import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type LineProps = {
  as?: "p" | "span";
  value?: InlineRichContentValue[];
};

export const Line = ({as: Tag = "p", value = [] }: LineProps) => {
  return (
    <Tag className={Tag === "span" ? "block" : ""}>
      <InlineRichContent value={value} />
    </Tag>
  );
};
