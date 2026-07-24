import { Line } from "../Line";

import type { RichContent } from "@/helpers/content";

export type Meaning =
  | {
      display?: "block" | "inline";
      as?: "p" | "span";
      parts: RichContent;
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

        return (
          <Line
            key={index}
            display={note.display ?? "block"}
            as={note.as}
            value={note.parts}
          />
        );
      })}
    </div>
  );
};
