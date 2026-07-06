import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/beginner-lessons-card-data";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Course" subtitle="A1 Beginner" />
      <div>
        <LessonCard {...lessons.unitOne} />
        <LessonCard {...lessons.unitTwo} />
        <LessonCard {...lessons.unitThree} />
        <LessonCard {...lessons.unitFour} />
        <LessonCard {...lessons.unitFive} />
        <LessonCard {...lessons.unitSix} />
        <LessonCard {...lessons.unitSeven} />
        <LessonCard {...lessons.unitEight} />
        <LessonCard {...lessons.unitNine} />
        <LessonCard {...lessons.unitTen} />
      </div>
    </>
  );
}
