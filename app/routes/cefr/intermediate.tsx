import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { SubSection } from "@/components/content/SubSection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/dashboard/lessonCardData";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Course" 
      subtitle="B1 Intermediate"
      descriptions={["..."]} />
      <div>
        <LessonCard {...lessons.intermediate.unitOne} />
        <LessonCard {...lessons.intermediate.unitTwo} />
        <LessonCard {...lessons.intermediate.unitThree} />
        <LessonCard {...lessons.intermediate.unitFour} />
        <LessonCard {...lessons.intermediate.unitFive} />
        <LessonCard {...lessons.intermediate.unitSix} />
        <LessonCard {...lessons.intermediate.unitSeven} />
        <LessonCard {...lessons.intermediate.unitEight} />
        <LessonCard {...lessons.intermediate.unitNine} />
        <LessonCard {...lessons.intermediate.unitTen} />
      </div>
    </>
  );
}
