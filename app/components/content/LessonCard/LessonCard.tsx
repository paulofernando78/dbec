import { Card } from "@/components/ui/Card";
import { List } from "@/components/content/List";

import { lessons } from "@/data/dashboard/lessonCard";

type LessonCardProps = {
  lesson: typeof lessons.beginner.unitOne
  lesson: typeof lessons.beginner.unitTwo
  lesson: typeof lessons.beginner.unitThree
  lesson: typeof lessons.beginner.unitFour
  lesson: typeof lessons.beginner.unitFive
  lesson: typeof lessons.beginner.unitSix
  lesson: typeof lessons.beginner.unitSeven
  lesson: typeof lessons.beginner.unitEight
  lesson: typeof lessons.beginner.unitNine
  lesson: typeof lessons.beginner.unitten
  };

export const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <Card>
      <List
      type={lesson.task.type}
      items={lesson.task.items}
    />
      <p>{lesson.lessonObjective}</p>
      <span className="block"><b>Grammar:</b> {lesson.grammar}</span>
      <span><b>Vocabulary:</b> {lesson.vocabulary}</span>
    </Card>
  );
};
