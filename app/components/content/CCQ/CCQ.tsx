import { Card } from "@/components/ui/Card";
import { Radio } from "@/features/exercises/Radio";

import type { RichContent } from "@/helpers/content";

import { CircleQuestionMark } from "lucide-react";

export type CCQ = {
  display?: "block" | "inline";
  as?: "p" | "span";
  parts: RichContent;
  options?: {
    option: string;
    isCorrect?: boolean;
  }[];
};

export type CCQProps = {
  value?: CCQ[];
};

export const CCQ = ({ value = [] }: CCQProps) => (
  <Card className="mb-4 bg-amber-100 border">
    <div className="flex gap-2">
      <CircleQuestionMark className="text-gray-400" />
      <span className="block mb-4 relative top-0.5">
        <b>Concept Checking Question!</b>
      </span>
    </div>
    <Radio
      exercise={{
        questions: value.map(({ parts, options }) => ({
          question: parts,
          options,
        })),
      }}
    />
  </Card>
);
