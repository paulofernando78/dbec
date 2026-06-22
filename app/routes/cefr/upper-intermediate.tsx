import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/dashboard/lessonCardData";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Course"
        subtitle="B2 Upper-Intermediate"
        descriptions={["..."]}
      />
      <div>
        <LessonCard {...lessons.upperIntermediate.unitOne} />
        <LessonCard {...lessons.upperIntermediate.unitTwo} />
        <LessonCard {...lessons.upperIntermediate.unitThree} />
        <LessonCard {...lessons.upperIntermediate.unitFour} />
        <LessonCard {...lessons.upperIntermediate.unitFive} />
        <LessonCard {...lessons.upperIntermediate.unitSix} />
        <LessonCard {...lessons.upperIntermediate.unitSeven} />
        <LessonCard {...lessons.upperIntermediate.unitEight} />
        <LessonCard {...lessons.upperIntermediate.unitNine} />
        <LessonCard {...lessons.upperIntermediate.unitTen} />
      </div>
    </>
  );
}
