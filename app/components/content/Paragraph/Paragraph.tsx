import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";

type ParagraphProps = {
  value?: RichContent;
};

export const Paragraph = ({ value = [] }: ParagraphProps) => {
  return (
    <p>
      <InlineRichContent value={value} />
    </p>
  );
};
