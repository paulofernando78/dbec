import { useNavigate } from "react-router";

import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import type { AuthenticContentTedEdLesson } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

type AuthenticDateCardProps = {
  year: string;
  lessons: AuthenticContentTedEdLesson[];
  lessonCompletion: Record<string, boolean>;
  onLessonCompletionChange: (lessonId: string, completed: boolean) => void;
};

export function AuthenticDateCard({
  year,
  lessons,
  lessonCompletion,
  onLessonCompletionChange,
}: AuthenticDateCardProps) {
  const navigate = useNavigate();
  const completedLessons = lessons.filter(
    (lesson) => lessonCompletion[lesson.href],
  ).length;

  const resetDate = () => {
    lessons.forEach((lesson) => {
      if (lessonCompletion[lesson.href]) {
        onLessonCompletionChange(lesson.href, false);
      }
    });
  };

  return (
    <ProgressCollectionCard
      className="mb-4"
      title={year}
      completedCount={completedLessons}
      totalCount={lessons.length}
      resetAriaLabel={`Reset progress for ${year}`}
      onReset={resetDate}
      disableResetWhenEmpty
      items={lessons.map(({ publishedAt, href, ...lesson }) => ({
        id: href,
        eyebrow: new Date(`${publishedAt}T00:00:00`).toLocaleDateString(
          "en-US",
          { month: "long", day: "numeric" },
        ),
        title: lesson.label,
        description: lesson.description,
        isCompleted: lessonCompletion[href] ?? false,
        ariaLabel: `Open ${lesson.label}`,
        onClick: () => navigate(href),
      }))}
    />
  );
}
