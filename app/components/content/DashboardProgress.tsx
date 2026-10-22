import { Check, Flame, Star } from "lucide-react";

import type { CourseProgressSummary } from "@/utils/course-progress";

type DashboardProgressProps = {
  progress: CourseProgressSummary;
};

const items = [
  { key: "lessons", label: "lessons", Icon: Check, color: "text-green-600" },
  { key: "xp", label: "total XP", Icon: Star, color: "text-orange-500" },
  { key: "streak", label: "day streak", Icon: Flame, color: "text-orange-600" },
] as const;

export function DashboardProgress({ progress }: DashboardProgressProps) {
  const values = {
    lessons: `${progress.completedLessons} of ${progress.totalLessons}`,
    xp: `${progress.earnedXp} of ${progress.totalXp}`,
    streak: String(progress.dayStreak),
  };

  return (
    <section
      aria-label="Course progress"
      className="mx-auto mb-4 grid w-fit max-w-full grid-cols-3 gap-2 max-[480px]:w-full"
    >
      {items.map(({ key, label, Icon, color }) => (
        <div
          key={key}
          className="flex min-w-28 flex-col items-center rounded-xl bg-gray-100 p-4 text-center max-[480px]:min-w-0 max-[480px]:p-2"
        >
          <Icon aria-hidden="true" className={`mb-4 ${color}`} size={28} />
          <span className="font-bold text-gray-500">{label}</span>
          <strong className="text-xl text-black">{values[key]}</strong>
        </div>
      ))}
    </section>
  );
}
