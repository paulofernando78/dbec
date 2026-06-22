import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/dashboard/lessonCardData";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Course"
      subtitle="A1 Beginner"
      descriptions={["..."]} />
      <div>
        <LessonCard {...lessons.beginner.unitOne} />
        <LessonCard {...lessons.beginner.unitTwo} />
        <LessonCard {...lessons.beginner.unitThree} />
        <LessonCard {...lessons.beginner.unitFour} />
        <LessonCard {...lessons.beginner.unitFive} />
        <LessonCard {...lessons.beginner.unitSix} />
        <LessonCard {...lessons.beginner.unitSeven} />
        <LessonCard {...lessons.beginner.unitEight} />
        <LessonCard {...lessons.beginner.unitNine} />
        <LessonCard {...lessons.beginner.unitTen} />
      </div>
    </>
  );
}
