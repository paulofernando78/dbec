import { Line } from "../Line";
import { Card } from "@/components/ui/Card";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

import { CircleQuestionMark } from "lucide-react";

export type CCQ = {
  as?: "div" | "p" | "span";
  parts: InlineRichContentValue[];
};

type CCQProps = {
  value?: CCQ[];
};

export const CCQ = ({ value = [] }: CCQProps) => {
  return (
    <Card className="mt-10 mb-5 bg-amber-100 border">
      <div className="flex gap-2">
        <CircleQuestionMark className="text-gray-400" />
        <span className="block mb-4 relative top-0.5">
          <b>CHECKING</b>
        </span>
      </div>
      {value.map((note, index) => (
        <Line key={index} as={note.as} value={note.parts} />
      ))}
    </Card>
  );
};
