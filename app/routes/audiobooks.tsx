import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import { audiobooks } from "@/data/skills/audiobooks";
import { listeningLevels } from "@/data/skills/listening";
import {
  isAudiobookCompleted,
  resetAudiobook,
} from "@/utils/audiobook-progress";

export default function Audiobooks() {
  const navigate = useNavigate();
  const [completedAudiobooks, setCompletedAudiobooks] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    setCompletedAudiobooks(
      new Set(
        listeningLevels.flatMap((level) =>
          level.titles
            .filter((item) => isAudiobookCompleted(item.slug))
            .map((item) => item.slug),
        ),
      ),
    );
  }, []);

  return (
    <div>
      <PageHeader title="Audiobooks" />

      <div className="grid gap-4">
        {listeningLevels.map((level) => {
          const completedCount = level.titles.filter((item) =>
            completedAudiobooks.has(item.slug),
          ).length;
          const resetLevel = () => {
            level.titles.forEach((item) => resetAudiobook(item.slug));
            setCompletedAudiobooks((current) => {
              const next = new Set(current);
              level.titles.forEach((item) => next.delete(item.slug));
              return next;
            });
          };

          return (
          <ProgressCollectionCard
            key={level.slug}
            title={level.title}
            eyebrow={level.exam}
            description={level.wordCount}
            completedCount={completedCount}
            totalCount={level.titles.length}
            resetAriaLabel={`Reset ${level.title} progress`}
            onReset={resetLevel}
            disableResetWhenEmpty
            emptyMessage="Books coming soon."
            items={level.titles.map((item) => ({
              id: item.slug,
              title: item.title,
              description: item.description,
              meta: item.duration,
              isCompleted: completedAudiobooks.has(item.slug),
              ariaLabel: `${completedAudiobooks.has(item.slug) ? "Completed" : "Open"} ${item.title}`,
              onClick:
                item.slug in audiobooks
                  ? () => navigate(`/audiobooks/${item.slug}`)
                  : undefined,
            }))}
          />
          );
        })}
      </div>
    </div>
  );
}
