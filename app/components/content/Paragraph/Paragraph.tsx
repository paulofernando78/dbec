"use client";

import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

type ParagraphProps = {
  value?: InlineRichContentValue[];
};

export const Paragraph = ({ value = [] }: ParagraphProps) => {
  return (
    <p className="mb-4">
      <InlineRichContent value={value} />
    </p>
  );
};
