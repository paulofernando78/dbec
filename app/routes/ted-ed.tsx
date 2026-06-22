import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { SubSection } from "@/components/content/SubSection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/dashboard/lessonCardData";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle="Student's Name"
        descriptions={["..."]}
      />
      <div >
        <PageSections>
          <Section id="b2-upper-intermediate" heading={3}>
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
          </Section>
          <Section id="Advanced (Ted Videos)" heading={3}>
            <LessonCard {...lessons.advanced.howMemoryWorks} />
          </Section>
          <Section id="Games" heading={3}>
            <SubSection label="Lucas Arts" heading={4}>
              <LessonCard {...lessons.games.thimbleWeedPark} />
            </SubSection>
          </Section>
        </PageSections>
      </div>
    </>
  );
}
