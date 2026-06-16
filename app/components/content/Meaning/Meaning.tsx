import { Line } from "../Line";
import { Card } from "@/components/ui/Card";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

export type Meaning = {
  as?: "div" | "p" | "span";
  parts: InlineRichContentValue[];
};

export type MeaningProps = {
  value?: Meaning[];
};

export const Meaning = ({ value = [] }: MeaningProps) => {
  return (
    <div>
      {value.map((note, index) => (
        <Line key={index} as={note.as} value={note.parts} />
      ))}
    </div>
  );
};
