import { LockKeyhole, LockKeyholeOpen } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { Lesson } from "@/data/course";

type LessonItemProps = {
  lesson: Lesson;
  number: number;
  isLast: boolean;
  isCompleted: boolean;
  onClick?: () => void;
};

export function LessonItem({
  lesson,
  number,
  isLast,
  isCompleted,
  onClick,
}: LessonItemProps) {
  return (
    <li className="relative grid min-h-36 grid-cols-[60px_1fr] gap-4 pb-5 last:min-h-15 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute -bottom-5 left-6.5 top-13 z-0 w-2 bg-slate-300 dark:bg-slate-600"
        />
      )}
      <Button
        ariaLabel={`${isCompleted ? "Completed" : "Open"} lesson ${number}`}
        icon={isCompleted ? <LockKeyholeOpen /> : <LockKeyhole />}
        onClick={onClick}
        className="z-10"
      />
      <div className="pt-1">
        <p className="text-xs font-bold uppercase text-orange-700!">
          Lesson {number}
        </p>
        <h3 className="text-xl font-black text-black dark:text-[var(--text-color)]">
          {lesson.title}
        </h3>
        <p className="text-lg text-slate-500">{lesson.description}</p>
      </div>
    </li>
  );
}
