import { Check, Flame, Star } from "lucide-react";

import { Card } from "@/components/ui/Card";
import type { CourseProgressSummary } from "@/utils/course-progress";

type DashboardProgressProps = {
  progress: CourseProgressSummary;
};

const items = [
  { key: "lessons", label: "Course Lessons", Icon: Check, color: "text-green-600" },
  { key: "xp", label: "Total XP", Icon: Star, color: "text-orange-500" },
  { key: "streak", label: "Day Streak", Icon: Flame, color: "text-orange-600" },
] as const;

export function DashboardProgress({ progress }: DashboardProgressProps) {
  const values = {
    lessons: `${progress.completedLessons} of ${progress.totalLessons}`,
    xp: `${progress.earnedXp} of ${progress.totalXp}`,
    streak: String(progress.dayStreak),
  };

  return (
    <Card title="Progress">
      <section
        aria-label="Course progress"
        className="grid w-full grid-cols-3 gap-4"
      >
        {items.map(({ key, label, Icon, color }) => (
          <Card key={key} className="bg-(--background) max-[480px]:p-2">
            <div className="flex min-w-0 flex-col items-center text-center">
              <Icon aria-hidden="true" className={`mb-4 ${color}`} size={28} />
              <span className="font-bold text-gray-500">{label}</span>
              <strong className="text-xl text-black">{values[key]}</strong>
            </div>
          </Card>
        ))}
      </section>
    </Card>
  );
}
