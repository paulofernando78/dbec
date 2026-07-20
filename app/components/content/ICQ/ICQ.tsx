import { Line } from "../Line";
import { Card } from "@/components/ui/Card";

import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

import { ClipboardList } from "lucide-react";

export type ICQ = {
  as?: "p" | "span";
  parts: InlineRichContentValue[];
};

type ICQProps = {
  value?: ICQ[];
};

export const ICQ = ({ value = [] }: ICQProps) => {
  return (
    <Card className="bg-amber-100 border">
      <div className="flex gap-2">
        <ClipboardList className="text-gray-400" />
        <span className="block mb-4 relative top-0.5">
          <b>INSTRUCTIONS</b>
        </span>
      </div>
      {value.map((note, index) => (
        <Line key={index} as={note.as} value={note.parts} />
      ))}
    </Card>
  );
};
