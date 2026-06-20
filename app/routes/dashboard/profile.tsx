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
      <div className="line-break">
        <PageSections>
          <Section id="a1-beginner" heading={3}>
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
          </Section>
          <Section id="a2-elementary" heading={3}>
            <LessonCard {...lessons.elementary.unitOne} />
            <LessonCard {...lessons.elementary.unitTwo} />
            <LessonCard {...lessons.elementary.unitThree} />
            <LessonCard {...lessons.elementary.unitFour} />
            <LessonCard {...lessons.elementary.unitFive} />
            <LessonCard {...lessons.elementary.unitSix} />
            <LessonCard {...lessons.elementary.unitSeven} />
            <LessonCard {...lessons.elementary.unitEight} />
            <LessonCard {...lessons.elementary.unitNine} />
            <LessonCard {...lessons.elementary.unitTen} />
          </Section>
          <Section id="b1-intermediate" heading={3}>
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
          </Section>
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
          <Section id="c1-•-c2-advanced" heading={3}>
            <LessonCard {...lessons.advanced.tedED} />
          </Section>
          <Section id="Miscellaneous" heading={3}>
            <SubSection label="Lucas Arts Games" heading={4}>
              <LessonCard {...lessons.games.thimbleWeedPark} />
            </SubSection>
          </Section>
        </PageSections>
      </div>
    </>
  );
}
