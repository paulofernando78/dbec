import { Line } from "../Line";
import { Card } from "@/components/ui/Card";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

import { Megaphone } from 'lucide-react';

export type Notes = {
  as?: "div" | "p" | "span";
  parts: InlineRichContentValue[];
};

export type NotesProps = {
  value?: Notes[];
};

export const Notes = ({ value = [] }: NotesProps) => {
  return (
    <Card className="bg-amber-100 border">
      <div className="flex gap-2">
        <Megaphone className="text-gray-400" />
        <span className="block mb-4 relative top-0.5">
          <b>NOTES</b>
        </span>
      </div>
      {value.map((note, index) => (
        <Line key={index} as={note.as} value={note.parts} />
      ))}
    </Card>
  );
};
