import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/intermediate-lessons-card-data";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Course" subtitle="B1 Intermediate" />
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
