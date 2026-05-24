"use client";

import { InlineRichContent } from "@/components/content/InlineRichContent";

export const Paragraph = ({ ...props }) => {
  return (
    <p>
      <InlineRichContent {...props} />
    </p>
  );
};
