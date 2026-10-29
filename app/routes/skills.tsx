import { Navigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";

const skillLabels = {
  listening: "Listening",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
} as const;

export default function Skills() {
  const { skill } = useParams();
  const label = skillLabels[skill as keyof typeof skillLabels];

  if (!label) return <Navigate to="/course" replace />;

  return (
    <div>
      <PageHeader title={label} />
      <PageSections showTableOfContents={false} subtitle="KEEP LEARNING">
        <Section id={skill!} label={label}>
          <p>Practice materials will be added here.</p>
        </Section>
      </PageSections>
    </div>
  );
}
