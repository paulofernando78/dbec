import { Line } from "../Line";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

export type Meaning =
  | {
      as?: "p" | "span";
      parts: InlineRichContentValue[];
    }
  | {
      type: "spacer";
    };

export type MeaningProps = {
  value?: Meaning[];
};

export const Meaning = ({ value = [] }: MeaningProps) => {
  return (
    <div className="mb-4">
      {value.map((note, index) => {
        if ("type" in note) {
          return <div key={index} className="h-4" />;
        }

        return <Line key={index} as={note.as} value={note.parts} />;
      })}
    </div>
  );
};
