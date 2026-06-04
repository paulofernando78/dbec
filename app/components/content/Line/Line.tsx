import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type LineProps = {
  as?: "div" | "p" | "span";
  value?: InlineRichContentValue[];
};

export const Line = ({ as: Tag = "div", value = [] }: LineProps) => {
  return (
    <Tag>
      <InlineRichContent value={value} />
    </Tag>
  );
};
