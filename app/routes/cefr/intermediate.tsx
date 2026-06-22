import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { SubSection } from "@/components/content/SubSection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/intermediateLessonCard";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Course" 
      subtitle="B1 Intermediate"
      descriptions={["..."]} />
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
