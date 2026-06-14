import { Card } from "@/components/ui/Card";

type ObjectiveProps = {
  objective: string
  grammar: string
  vocabulary: string
};

export const LessonObjective = ({ objective, grammar, vocabulary }: ObjectiveProps) => {
  return (
    <Card className="mt-10 mb-5 bg-amber-100 border">
      <p><span className="font-bold">Objective:</span>{" "}{objective}</p>
      <p><span className="font-bold">Grammar:</span>{" "}{grammar}</p>
      <p><span className="font-bold">Vocabulary:</span>{" "}{vocabulary}</p>
    </Card>
  );
};
