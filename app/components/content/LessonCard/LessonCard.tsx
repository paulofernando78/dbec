import { Card } from "@/components/ui/Card";
import { List } from "@/components/content/List";

type Lesson = {
  task: {
    type: string;
    items: string[];
  };
  lessonObjective: string;
  grammar: string;
  vocabulary: string;
};

type LessonCardProps = {
  lesson: Lesson;
};

export const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Card>
      <b>
        <List type={lesson.task.type} items={lesson.task.items} />
      </b>
      <p>{lesson.lessonObjective}</p>
      <div className="italic">
        <span className="block">Grammar: {lesson.grammar}</span>
        <span>Vocabulary: {lesson.vocabulary}</span>
      </div>
    </Card>
  );
};
