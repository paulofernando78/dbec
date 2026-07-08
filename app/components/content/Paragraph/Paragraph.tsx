import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

type ParagraphProps = {
  value?: InlineRichContentValue[];
};

export const Paragraph = ({ value = [] }: ParagraphProps) => {
  return (
    <p>
      <InlineRichContent value={value} />
    </p>
  );
};
