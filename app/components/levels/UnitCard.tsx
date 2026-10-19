import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import type { Unit } from "@/data/levels";
import { LessonItem } from "./LessonItem";

type UnitCardProps = {
  unit: Unit;
  levelSlug: string;
};

export function UnitCard({ unit, levelSlug }: UnitCardProps) {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState(0);

  useEffect(() => {
    if (levelSlug === "a1" && unit.number === 1) {
      setCompletedLessons(Number(localStorage.getItem("dbec_a1_progress") ?? 0));
    }
  }, [levelSlug, unit.number]);

  const resetUnit = () => {
    if (levelSlug === "a1" && unit.number === 1) {
      localStorage.removeItem("dbec_a1_progress");
    }
    setCompletedLessons(0);
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
            {completedLessons} / {unit.lessons.length}
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
            onClick={
              ["a1", "a2"].includes(levelSlug) && index < 2
                ? () =>
                    navigate(
                      `/course/${levelSlug}/unit/${unit.number}/lesson/${index + 1}/get-ready`,
                    )
                : undefined
            }
          />
        ))}
      </ol>
    </article>
  );
}
