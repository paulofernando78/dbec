import { useNavigate } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { listeningLevels } from "@/data/skills/listening";

export default function Audiobooks() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="Audiobooks" />

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
                  ? () => navigate(`/audiobooks/${item.slug}`)
                  : undefined,
            }))}
          />
        ))}
      </div>
    </div>
  );
}
