import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Line } from "@/components/content/Line";
import { List } from "@/components/content/List";

import { lessons } from "@/data/dashboard/profile";

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
            <List
              type={lessons.beginner.task.type}
              items={lessons.beginner.task.items}
            />
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
