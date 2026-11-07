import { useNavigate } from "react-router";

import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import {
  availableTedEdLessonHrefs,
  type AuthenticContentTedEdLesson,
} from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
type AuthenticDateCardProps = {
  year: string;
  lessons: AuthenticContentTedEdLesson[];
  lessonCompletion: Record<string, boolean>;
  onLessonCompletionChange: (lessonId: string, completed: boolean) => void;
  hasLocalOwnerAccess: boolean;
};

export function AuthenticDateCard({
  year,
  lessons,
  lessonCompletion,
  onLessonCompletionChange,
  hasLocalOwnerAccess,
}: AuthenticDateCardProps) {
  const navigate = useNavigate();
  const completedLessons = lessons.filter(
    (lesson) =>
      (hasLocalOwnerAccess || availableTedEdLessonHrefs.has(lesson.href)) &&
      lessonCompletion[lesson.href],
  ).length;

  const resetDate = () => {
    lessons.forEach((lesson) => {
      if (
        (hasLocalOwnerAccess || availableTedEdLessonHrefs.has(lesson.href)) &&
        lessonCompletion[lesson.href]
      ) {
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
      items={lessons.map(({ publishedAt, href, ...lesson }) => {
        const isAvailable =
          hasLocalOwnerAccess || availableTedEdLessonHrefs.has(href);
        const isCompleted = isAvailable && (lessonCompletion[href] ?? false);

        return {
          id: href,
          eyebrow: new Date(`${publishedAt}T00:00:00`).toLocaleDateString(
            "en-US",
            { month: "long", day: "numeric" },
          ),
          title: lesson.label,
          description: lesson.description,
          isCompleted,
          isLocked: !isAvailable,
          ariaLabel: `${isAvailable ? (isCompleted ? "Completed" : "Open") : "Locked"} ${lesson.label}`,
          onClick: isAvailable ? () => navigate(href) : undefined,
        };
      })}
    />
  );
}
