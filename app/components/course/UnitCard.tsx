import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";
import type { Unit } from "@/data/course";
import { isLessonCompleted, resetLesson } from "@/utils/course-progress";
import type { LevelTheme } from "@/utils/level-theme";

type UnitCardProps = {
  unit: Unit;
  levelSlug: string;
  levelTheme?: LevelTheme;
  isAuthenticated: boolean;
  basePath?: string;
};

export function UnitCard({
  unit,
  levelSlug,
  levelTheme,
  isAuthenticated,
  basePath = `/course/${levelSlug}`,
}: UnitCardProps) {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    setCompletedLessons(
      new Set(
        unit.lessons
          .map((_, index) => index + 1)
          .filter((lessonNumber) =>
            isLessonCompleted(levelSlug, unit.number, lessonNumber),
          ),
      ),
    );
  }, [levelSlug, unit.number, unit.lessons]);

  const resetUnit = () => {
    unit.lessons.forEach((_, index) =>
      resetLesson(levelSlug, unit.number, index + 1),
    );
    setCompletedLessons(new Set());
  };

  return (
    <ProgressCollectionCard
      eyebrow={`Unit ${unit.number}`}
      title={unit.title}
      description={unit.description}
      completedCount={completedLessons.size}
      totalCount={unit.lessons.length}
      resetAriaLabel={`Reset unit ${unit.number}`}
      resetConfirmationMessage={`Are you sure you want to reset all lesson progress for Unit ${unit.number}?`}
      onReset={resetUnit}
      levelTheme={levelTheme}
      items={unit.lessons.map((lesson, index) => ({
        id: `${unit.number}-${index}`,
        eyebrow: `Lesson ${index + 1}`,
        title: lesson.title,
        description: lesson.description,
        isCompleted: completedLessons.has(index + 1),
        ariaLabel: `${completedLessons.has(index + 1) ? "Completed" : "Open"} lesson ${index + 1}`,
        onClick:
          index < 2
            ? () => {
                const isFreeLesson = levelSlug === "a1" && unit.number <= 3;

                if (!isAuthenticated && !isFreeLesson) {
                  window.dispatchEvent(new Event("dbec:open-login"));
                  return;
                }

                navigate(
                  `${basePath}/unit/${unit.number}/lesson/${index + 1}/get-ready`,
                );
              }
            : undefined,
      }))}
    />
  );
}
