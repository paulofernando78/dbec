import {
  LockKeyhole,
  LockKeyholeOpen,
  RotateCcw,
} from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/Button";
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
    <article className="mb-4 overflow-hidden rounded-xl border border-gray-300 bg-gray-50">
      <header className="flex items-start justify-between gap-4 border-b border-gray-300 bg-gray-200 p-4">
        <div>
          <h3 className="text-2xl font-black text-black">{year}</h3>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-3">
          <span className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-black">
            {completedLessons} / {lessons.length}
          </span>
          <Button
            ariaLabel={`Reset progress for ${year}`}
            icon={<RotateCcw />}
            onClick={resetDate}
            disabled={completedLessons === 0}
          />
        </div>
      </header>

      <ol className="px-4 py-4">
        {lessons.map(
          ({ date: _date, publishedAt, href, ...lesson }, index) => {
            const isLast = index === lessons.length - 1;
            const isCompleted = lessonCompletion[href] ?? false;
            const lessonDate = new Date(
              `${publishedAt}T00:00:00`,
            ).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });

            return (
              <li
                key={href}
                className="relative grid min-h-36 grid-cols-[60px_minmax(0,1fr)] gap-4 pb-5 last:min-h-15 last:pb-0"
              >
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-5 left-6.5 top-13 z-0 w-2 bg-slate-300"
                  />
                )}

                <Button
                ariaLabel={`Open ${lesson.label}`}
                icon={isCompleted ? <LockKeyholeOpen /> : <LockKeyhole />}
                onClick={() => navigate(href)}
                className={`z-10 ${
                  isCompleted ? "[&_svg]:stroke-slate-600!" : ""
                }`}
                />

                <div className="min-w-0 pt-1">
                  <p className="text-xs font-bold uppercase text-orange-700!">
                    {lessonDate}
                  </p>
                  <h4 className="text-xl font-black text-black">
                    {lesson.label}
                  </h4>
                  <p className="text-lg text-slate-500">
                    {lesson.description}
                  </p>
                </div>
              </li>
            );
          },
        )}
      </ol>
    </article>
  );
}
