import { useRef, useState, type PointerEvent } from "react";
import { Link } from "react-router";

import { Checkbox } from "@/components/ui/Checkbox";
import type { LessonCardContent } from "@/components/content/LessonCard";

type DashboardLesson = LessonCardContent & {
  href: string;
  label: string;
};

type DashboardLessonTableProps = {
  lessons: DashboardLesson[];
  startIndex: number;
  updateProgress: () => void;
};

type LessonRowProps = {
  lesson: DashboardLesson;
  lessonNumber: number;
  updateProgress: () => void;
};

const columns: Array<{
  key: keyof LessonCardContent;
  label: string;
  className: string;
}> = [
  {
    key: "objective",
    label: "Objective",
    className: "w-64 border-l-2 border-gray-300" },
  {
    key: "usefulLanguage",
    label: "Useful language",
    className: "w-64 border-l-2 border-gray-300",
  },
  { key: "vocabulary",
    label: "Vocabulary",
    className: "w-64 border-l-2 border-gray-300" },
  {
    key: "pronunciation",
    label: "Pronunciation",
    className: "w-64 border-l-2 border-gray-300",
  },
  {
    key: "finalTask",
    label: "Final task",
    className: "w-64 border-l-2 border-gray-300" },
];

function LessonRow({ lesson, lessonNumber, updateProgress }: LessonRowProps) {
  const storageKey = `lesson-completed:${lesson.href}`;
  const [checked, setChecked] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(storageKey) === "true";
  });

  const updateChecked = (nextChecked: boolean) => {
    setChecked(nextChecked);
    localStorage.setItem(storageKey, JSON.stringify(nextChecked));
    updateProgress();
  };

  return (
    <tr className="group border-b border-gray-200 align-top last:border-b-0 select-none">
      <th
        scope="row"
        className="sticky left-0 z-10 min-w-40 max-w-40 bg-white px-4 py-4 text-left shadow-[6px_0_10px_-9px_rgba(0,0,0,0.7)] group-even:bg-gray-50"
      >
        <div className="flex items-start gap-2">
          <Checkbox checked={checked} onCheckedChange={updateChecked} />
          <Link className="min-w-0 leading-snug hover:underline" to={lesson.href}>
            <span className="block">Lesson {lessonNumber}</span>
            <span className="block font-normal">{lesson.label}</span>
          </Link>
        </div>
      </th>

      {columns.map(({ key, className }) => {
        const value = lesson[key];

        return (
          <td
            key={key}
            className={`${className} px-4 py-4 leading-relaxed text-gray-700 group-even:bg-gray-50`}
          >
            {Array.isArray(value) ? (
              <ul className="list-disc space-y-1 pl-5">
                {value.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              value || <span className="text-gray-400">—</span>
            )}
          </td>
        );
      })}
    </tr>
  );
}

export function DashboardLessonTable({
  lessons,
  startIndex,
  updateProgress,
}: DashboardLessonTableProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, x: 0, scrollLeft: 0 });

  const startDragging = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a, button, input, label")) return;

    const container = scrollRef.current;
    if (!container) return;

    dragState.current = {
      active: true,
      x: event.clientX,
      scrollLeft: container.scrollLeft,
    };
    container.setPointerCapture(event.pointerId);
  };

  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || !dragState.current.active) return;

    container.scrollLeft =
      dragState.current.scrollLeft - (event.clientX - dragState.current.x);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    dragState.current.active = false;
    if (scrollRef.current?.hasPointerCapture(event.pointerId)) {
      scrollRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={scrollRef}
      className="mb-6 cursor-grab overflow-x-auto rounded-lg border border-gray-200 bg-white active:cursor-grabbing"
      onPointerDown={startDragging}
      onPointerMove={drag}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      aria-label="Lessons table; drag horizontally to see more columns"
    >
      <table className="w-max min-w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-gray-300 bg-gray-100 text-left">
            <th className="sticky left-0 z-20 min-w-40 max-w-40 bg-gray-100 px-4 py-3 shadow-[6px_0_10px_-9px_rgba(0,0,0,0.7)]">
              Lesson / Topic
            </th>
            {columns.map(({ key, label, className }) => (
              <th key={key} className={`${className} px-4 py-3`}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson, index) => (
            <LessonRow
              key={lesson.href}
              lesson={lesson}
              lessonNumber={startIndex + index + 1}
              updateProgress={updateProgress}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
