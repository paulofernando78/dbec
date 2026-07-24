import { Line } from "../Line";
import { Card } from "@/components/ui/Card";

import type { RichContent } from "@/helpers/content";

import { CircleQuestionMark } from "lucide-react";

export type CCQ = {
  display?: "block" | "inline";
  as?: "p" | "span";
  parts: RichContent;
};

export type CCQProps = {
  value?: CCQ[];
};

export const CCQ = ({ value = [] }: CCQProps) => {
  return (
    <Card className="bg-amber-100 border mb-4">
      <div className="flex gap-2">
        <CircleQuestionMark className="text-gray-400" />
        <span className="block mb-4 relative top-0.5">
          <b>Concept Checking Question!</b>
        </span>
      </div>
      {value.map((note, index) => (
        <Line
          key={index}
          display={note.display ?? "block"}
          as={note.as}
          value={note.parts}
        />
      ))}
    </Card>
  );
};
