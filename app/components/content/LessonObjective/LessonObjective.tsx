import { Card } from "@/components/ui/Card";

import { Goal } from "lucide-react";

type LessonObjectiveProps = {
  objective: string;
  grammar: string;
  vocabulary: string;
};

export const LessonObjective = ({
  objective,
  grammar,
  vocabulary,
}: LessonObjectiveProps) => {
  return (
    <Card className="mt-10 mb-5 bg-amber-100 border">
      <div className="flex gap-2">
        <Goal className="text-gray-400" />
        <span className="block mb-4 relative top-0.5">
          <b>LESSON OBJECTIVE</b>
        </span>
      </div>
      <p>{objective}</p>
      <p>
        <span className="font-bold">Grammar:</span> {grammar}
      </p>
      <p>
        <span className="font-bold">Vocabulary:</span> {vocabulary}
      </p>
    </Card>
  );
};
