import { Line } from "../Line";
import { Card } from "@/components/ui/Card";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

export type Note = {
  as?: "div" | "p" | "span";
  parts: InlineRichContentValue[];
};

type NotesProps = {
  value?: Note[];
};

export const Notes = ({ value = [] }: NotesProps) => {
  return (
    <Card className="mt-10 mb-5 bg-amber-100 border">
      {value.map((note, index) => (
        <Line key={index} as={note.as} value={note.parts} />
      ))}
    </Card>
  );
};
