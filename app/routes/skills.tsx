import { Navigate, useNavigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { Section } from "@/components/ui/Section";
import { listeningLevels } from "@/data/skills/listening";

const skillLabels = {
  listening: "Listening",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
} as const;

export default function Skills() {
  const { skill } = useParams();
  const navigate = useNavigate();
  const label = skillLabels[skill as keyof typeof skillLabels];

  if (!label) return <Navigate to="/course" replace />;

  return (
    <div>
      <PageHeader title={label} />
      {skill === "listening" ? (
        <div className="grid gap-4">
          {listeningLevels.map((level) => (
            <ProgressCollectionCard
              key={level.slug}
              title={level.title}
              eyebrow={level.exam}
              description={level.wordCount}
              completedCount={0}
              totalCount={level.titles.length}
              resetAriaLabel={`Reset ${level.title} progress`}
              onReset={() => undefined}
              disableResetWhenEmpty
              items={level.titles.map((item, index) => ({
                id: item.slug,
                eyebrow: `Title ${index + 1}`,
                title: item.title,
                description: item.duration,
                isCompleted: false,
                ariaLabel: `${item.title} is locked`,
                onClick:
                  level.slug === "starter-beginner" && index === 0
                    ? () => navigate(`/skills/listening/${item.slug}`)
                    : undefined,
              }))}
            />
          ))}
        </div>
      ) : (
        <PageSections subtitle="KEEP LEARNING">
          <Section id={skill!} label={label}>
            <p>Practice materials will be added here.</p>
          </Section>
        </PageSections>
      )}
    </div>
  );
}
