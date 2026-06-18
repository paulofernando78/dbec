import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";
import { List } from "@/components/content/List";

// DATA
import { lessons } from "@/data/dashboard/lessonCard";

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
            <LessonCard lesson={lessons.beginner.unitOne} />
            <LessonCard lesson={lessons.beginner.unitTwo} />
            <LessonCard lesson={lessons.beginner.unitThree} />
            <LessonCard lesson={lessons.beginner.unitFour} />
            <LessonCard lesson={lessons.beginner.unitFive} />
            <LessonCard lesson={lessons.beginner.unitSix} />
            <LessonCard lesson={lessons.beginner.unitSeven} />
            <LessonCard lesson={lessons.beginner.unitEight} />
            <LessonCard lesson={lessons.beginner.unitNine} />
            <LessonCard lesson={lessons.beginner.unitTen} />
          </Section>
          <Section id="a2-elementary" heading={3}>
            <LessonCard lesson={lessons.elementary.unitOne} />
            <LessonCard lesson={lessons.elementary.unitTwo} />
            <LessonCard lesson={lessons.elementary.unitThree} />
            <LessonCard lesson={lessons.elementary.unitFour} />
            <LessonCard lesson={lessons.elementary.unitFive} />
            <LessonCard lesson={lessons.elementary.unitSix} />
            <LessonCard lesson={lessons.elementary.unitSeven} />
            <LessonCard lesson={lessons.elementary.unitEight} />
            <LessonCard lesson={lessons.elementary.unitNine} />
            <LessonCard lesson={lessons.elementary.unitTen} />
          </Section>
          <Section id="b1-intermediate" heading={3}>
            <LessonCard lesson={lessons.intermediate.unitOne} />
            <LessonCard lesson={lessons.intermediate.unitTwo} />
            <LessonCard lesson={lessons.intermediate.unitThree} />
            <LessonCard lesson={lessons.intermediate.unitFour} />
            <LessonCard lesson={lessons.intermediate.unitFive} />
            <LessonCard lesson={lessons.intermediate.unitSix} />
            <LessonCard lesson={lessons.intermediate.unitSeven} />
            <LessonCard lesson={lessons.intermediate.unitEight} />
            <LessonCard lesson={lessons.intermediate.unitNine} />
            <LessonCard lesson={lessons.intermediate.unitTen} />
          </Section>
          <Section id="b2-upper-intermediate" heading={3}>
            <LessonCard lesson={lessons.upperIntermediate.unitOne} />
            <LessonCard lesson={lessons.upperIntermediate.unitTwo} />
            <LessonCard lesson={lessons.upperIntermediate.unitThree} />
            <LessonCard lesson={lessons.upperIntermediate.unitFour} />
            <LessonCard lesson={lessons.upperIntermediate.unitFive} />
            <LessonCard lesson={lessons.upperIntermediate.unitSix} />
            <LessonCard lesson={lessons.upperIntermediate.unitSeven} />
            <LessonCard lesson={lessons.upperIntermediate.unitEight} />
            <LessonCard lesson={lessons.upperIntermediate.unitNine} />
            <LessonCard lesson={lessons.upperIntermediate.unitTen} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
