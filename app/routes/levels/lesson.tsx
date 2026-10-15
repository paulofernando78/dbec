import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router";

import { LevelHeader } from "@/components/levels/LevelHeader";
import { StepRenderer } from "@/components/levels/steps/StepRenderer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Button } from "@/components/ui/Button";
import { a1 } from "@/data/levels/a1";
import { lessonRegistry } from "@/data/levels/lesson-registry";

export default function LessonPage() {
  const navigate = useNavigate();
  const {
    level = "a1",
    unit = "1",
    lesson = "1",
    step = "get-ready",
  } = useParams();
  const lessonData =
    lessonRegistry[`${level}/${unit}/${lesson}` as keyof typeof lessonRegistry];

  if (!lessonData) return <p>Lesson not found.</p>;

  const stepIndex = Math.max(
    0,
    lessonData.steps.findIndex((item) => item.slug === step),
  );
  const current = lessonData.steps[stepIndex];
  const previous = lessonData.steps[stepIndex - 1];
  const next = lessonData.steps[stepIndex + 1];
  const basePath = `/levels/${level}/unit/${unit}/lesson/${lesson}`;
  const go = (slug: string) => navigate(`${basePath}/${slug}`);
  const finish = () => {
    localStorage.setItem("dbec_a1_progress", "1");
    navigate(`/levels/${level}`);
  };

  return (
    <div className="mx-auto max-w-4xl mt-4 mb-2">
      <LevelHeader level={a1} />

      <header className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-300 max-[560px]:grid-cols-1">
        <div className="p-4 bg-gray-200">
          <p className="text-xs font-bold uppercase text-orange-700">
            Unit {lessonData.unit.number}
          </p>
          <h1 className="text-xl font-black">{lessonData.unit.title}</h1>
        </div>
        <div className="border-l border-slate-300 p-4 max-[560px]:border-l-0 max-[560px]:border-t">
          <p className="text-xs font-bold uppercase text-orange-700">
            Lesson {lessonData.lesson.number}
          </p>
          <h2 className="text-xl font-black">{lessonData.lesson.title}</h2>
        </div>
      </header>

      <p className="mt-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-sm font-bold">
        {current.slug} — Step {stepIndex + 1} of {lessonData.steps.length}
      </p>

      <StepRenderer data={current} />

      <nav
        className="relative mt-12 grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3"
        aria-label="Lesson steps"
      >
        <Button
          ariaLabel="Previous step"
          onClick={() =>
            previous ? go(previous.slug) : navigate(`/levels/${level}`)
          }
          icon={<ChevronLeft />}
        />
        <b>{previous?.label ?? `${a1.code} ${a1.name}`}</b>
        <ScrollToTop inline />
        <b className="text-right">{next?.label ?? "Stay in Touch"}</b>
        <Button
          ariaLabel="Next step"
          onClick={() => (next ? go(next.slug) : finish())}
          icon={<ChevronRight />}
        />
      </nav>
    </div>
  );
}
