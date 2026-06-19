import { Card } from "@/components/ui/Card";
import { List } from "@/components/content/List";

import type { ListProps } from "@/components/content/List";

import { Goal, FileText } from "lucide-react";

type Lesson = {
  task: ListProps;
  lessonObjective: string;
  grammar?: string;
  vocabulary?: string;
};

type LessonCardProps = {
  lesson: Lesson;
};

export const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Card className="bg-gray-300">
      <b>
        <List type={lesson.task.type} items={lesson.task.items} />
      </b>
      <p className="flex items-start gap-1 mt-2">
        <Goal size={23} className="text-gray-400 shrink-0" />
        <span>{lesson.lessonObjective}</span>
      </p>
      <div className="italic">
        {lesson.grammar && (
          <div className="flex items-start gap-1 mt-2">
            <FileText size={23} className="text-gray-400 shrink-0" />
            <span className="block">Grammar: {lesson.grammar}</span>
          </div>
        )}
        {lesson.vocabulary && (
          <div className="flex items-start gap-1 mt-2">
            <FileText size={23} className="text-gray-400 shrink-0" />
            <span>Vocabulary: {lesson.vocabulary}</span>
          </div>
        )}
      </div>
    </Card>
  );
};
