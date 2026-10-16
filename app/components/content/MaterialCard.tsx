import { Card } from "@/components/ui/Card";
import { List } from "@/components/content/List";

import type { ListProps } from "@/components/content/List";

import { Goal, FileText } from "lucide-react";

type MaterialCardProps = {
  task?: ListProps;
  lessonObjective: string;
  grammar?: string;
  vocabulary?: string;
};

export const MaterialCard = ({
  task,
  lessonObjective,
  grammar,
  vocabulary,
}: MaterialCardProps) => {
  return (
    <>
      <Card className="bg-gray-300 mb-4">
        {task && (
          <div className="mb-2">
            <b>
              <List type={task.type} items={task.items} />
            </b>
          </div>
        )}
        <p className="flex items-start gap-1 translate-x-[-0.1rem]">
          <Goal size={23} className="text-gray-400 shrink-0" />
          <span>{lessonObjective}</span>
        </p>
        <div className="italic">
          {grammar && (
            <div className="flex items-start gap-1 mt-2 translate-x-[-0.1rem]">
              <FileText size={23} className="text-gray-400 shrink-0" />
              <span className="block">Grammar: {grammar}</span>
            </div>
          )}
          {vocabulary && (
            <div className="flex items-start gap-1 mt-2 translate-x-[-0.1rem]">
              <FileText size={23} className="text-gray-400 shrink-0" />
              <span>Vocabulary: {vocabulary}</span>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
