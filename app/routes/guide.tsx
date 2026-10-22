import {
  BookOpenCheck,
  Check,
  Flame,
  LockKeyholeOpen,
  RotateCcw,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/Card";
import { XP_BY_LEVEL } from "@/utils/course-progress";

const levels = [
  ["A1", "a1", "bg-orange-500"],
  ["A2", "a2", "bg-red-600"],
  ["A2–B1", "a2-b1", "bg-blue-600"],
  ["B1", "b1", "bg-green-600"],
  ["B2", "b2", "bg-purple-600"],
  ["C1", "c1", "bg-indigo-700"],
] as const;

function GuideTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white">{icon}</span>
      <h2 className="text-xl font-black text-black">{children}</h2>
    </div>
  );
}

export default function Guide() {
  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-4">
        <h1 className="text-4xl font-black text-black">How it works</h1>
        <p className="text-slate-500">Learn how progress, XP, streaks, and lessons work.</p>
      </header>

      <div className="grid gap-4">
        <Card className="bg-gray-100">
          <GuideTitle icon={<Star className="text-orange-500" />}>XP by level</GuideTitle>
          <p className="mb-3 text-slate-500">
            Complete a lesson for the first time to earn XP. More advanced levels are worth more XP.
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-300 bg-white">
            {levels.map(([label, slug, color], index) => (
              <div
                key={slug}
                className={`flex items-center justify-between px-4 py-3 ${index ? "border-t border-gray-300" : ""}`}
              >
                <span className="flex items-center gap-3 font-bold">
                  <span className={`size-3 rounded-full ${color}`} />{label}
                </span>
                <strong>{XP_BY_LEVEL[slug]} XP</strong>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gray-100">
          <GuideTitle icon={<Flame className="text-orange-600" />}>Day streak</GuideTitle>
          <p className="text-slate-500">
            Finish at least one new lesson on consecutive days to grow your streak. Completing several lessons on the same day still counts as one active day.
          </p>
        </Card>

        <Card className="bg-gray-100">
          <GuideTitle icon={<LockKeyholeOpen className="text-green-600" />}>Unlocking lessons</GuideTitle>
          <p className="text-slate-500">
            Lessons unlock in order. Finish every step of the current lesson to open the next one. A completed lesson displays the color of its level.
          </p>
        </Card>

        <Card className="bg-gray-100">
          <GuideTitle icon={<BookOpenCheck className="text-blue-600" />}>Completing a lesson</GuideTitle>
          <div className="grid gap-2 text-slate-500">
            <p className="flex items-start gap-3"><Check className="shrink-0 text-green-600" size={18} />Move through every activity and use the final navigation button.</p>
            <p className="flex items-start gap-3"><RotateCcw className="shrink-0" size={18} />Resetting progress removes the lesson completion and its XP, but keeps your study-day history.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
