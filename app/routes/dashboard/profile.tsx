import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { List } from "@/components/content/List";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

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
            {/* <LessonCard lesson={lessons.beginner.unitFour} />
            <LessonCard lesson={lessons.beginner.unitFive} />
            <LessonCard lesson={lessons.beginner.unitSix} />
            <LessonCard lesson={lessons.beginner.unitSeven} />
            <LessonCard lesson={lessons.beginner.unitEight} />
            <LessonCard lesson={lessons.beginner.unitNine} />
            <LessonCard lesson={lessons.beginner.unitTen} /> */}
          </Section>
          <Section id="a2-elementary" heading={3}>
            <List
              type={lessons.elementary.task.type}
              items={lessons.elementary.task.items}
            />
          </Section>
          <Section id="b1-intermediate" heading={3}>
            <List
              type={lessons.intermediate.task.type}
              items={lessons.intermediate.task.items}
            />
          </Section>
          <Section id="b2-upper-intermediate" heading={3}>
            <List
              type={lessons.upperIntermediate.task.type}
              items={lessons.upperIntermediate.task.items}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
