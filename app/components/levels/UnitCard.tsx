import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import type { Unit } from "@/data/levels";
import { isLessonCompleted, resetLesson } from "@/utils/course-progress";
import { LessonItem } from "./LessonItem";

type UnitCardProps = {
  unit: Unit;
  levelSlug: string;
  isAuthenticated: boolean;
};

export function UnitCard({ unit, levelSlug, isAuthenticated }: UnitCardProps) {
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
    <article className="overflow-hidden rounded-xl border border-gray-300 bg-gray-50">
      <header className="flex items-start justify-between gap-4 border-b border-gray-300 bg-gray-200 p-4">
        <div>
          <p className="text-xs font-bold uppercase text-orange-700!">
            Unit {unit.number}
          </p>
          <h2 className="text-2xl font-black text-black">{unit.title}</h2>
          <p className="text-lg text-slate-500">{unit.description}</p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-3">
          <span className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-black">
            {completedLessons.size} / {unit.lessons.length}
          </span>
          <Button
            ariaLabel={`Reset unit ${unit.number}`}
            icon={<RotateCcw />}
            onClick={resetUnit}
          />
        </div>
      </header>

      <ol className="px-4 py-4">
        {unit.lessons.map((lesson, index) => (
          <LessonItem
            key={`${unit.number}-${index}`}
            lesson={lesson}
            number={index + 1}
            isLast={index === unit.lessons.length - 1}
            isCompleted={completedLessons.has(index + 1)}
            onClick={
              index < 2
                ? () => {
                    const isFreeLesson =
                      levelSlug === "a1" && unit.number <= 3;

                    if (!isAuthenticated && !isFreeLesson) {
                      window.dispatchEvent(new Event("dbec:open-login"));
                      return;
                    }

                    navigate(
                      `/course/${levelSlug}/unit/${unit.number}/lesson/${index + 1}/get-ready`,
                    );
                  }
                : undefined
            }
          />
        ))}
      </ol>
    </article>
  );
}
