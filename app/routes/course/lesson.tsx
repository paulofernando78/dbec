import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { StepRenderer } from "@/components/course/steps/StepRenderer";
import { Button } from "@/components/ui/Button";
import { levels } from "@/data/course";
import { lessonRegistry } from "@/data/course/lesson-registry";
import { travel } from "@/data/travel";
import { completeLesson } from "@/utils/course-progress";

export function meta() {
  return [
    { title: "Lesson | Daily Basis English Course" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function LessonPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    level: routeLevel,
    unit = "1",
    lesson = "1",
    step = "get-ready",
  } = useParams();
  const isTravel = location.pathname.startsWith("/travel/");
  const level = isTravel ? "travel" : (routeLevel ?? "a1");
  const sectionPath = isTravel ? "/travel" : `/course/${level}`;
  const lessonData =
    lessonRegistry[`${level}/${unit}/${lesson}` as keyof typeof lessonRegistry];
  const levelData = isTravel ? travel : levels[level as keyof typeof levels];
  const isFreeLesson = level === "a1" && Number(unit) <= 3;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (isFreeLesson) {
      setIsAuthenticated(false);
      return;
    }

    let active = true;
    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then((response) => {
        if (active) setIsAuthenticated(response.ok);
      })
      .catch(() => {
        if (active) setIsAuthenticated(false);
      });

    return () => {
      active = false;
    };
  }, [isFreeLesson]);

  useEffect(() => {
    if (!isFreeLesson && isAuthenticated === false) {
      navigate(sectionPath, { replace: true });
      window.dispatchEvent(new Event("dbec:open-login"));
    }
  }, [isAuthenticated, isFreeLesson, navigate, sectionPath]);

  if (!lessonData || !levelData) return <p>Lesson not found.</p>;
  if (!isFreeLesson && isAuthenticated !== true) return null;

  const stepIndex = Math.max(
    0,
    lessonData.steps.findIndex((item) => item.slug === step),
  );
  const current = lessonData.steps[stepIndex];
  const previous = lessonData.steps[stepIndex - 1];
  const next = lessonData.steps[stepIndex + 1];
  const basePath = `${sectionPath}/unit/${unit}/lesson/${lesson}`;
  const go = (slug: string) => navigate(`${basePath}/${slug}`);
  const finish = () => {
    completeLesson(level, unit, lesson);
    navigate(sectionPath);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title={`${levelData.code} ${levelData.name}`}
        subtitle={levelData.subtitle}
        description={levelData.description}
        footer={`${levelData.units.length} units available`}
        variant="level"
        levelTheme={levelData.theme}
      />

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

      <p className="mt-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-sm font-bold mb-12">
        {current.slug.charAt(0).toUpperCase() +
          current.slug.slice(1).replaceAll("-", " ")}
        {" — Step "}
        {stepIndex + 1} of {lessonData.steps.length}
      </p>

      <StepRenderer data={current} />

      <nav
        className="mt-4 grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3"
        aria-label="Lesson steps"
      >
        <Button
          ariaLabel="Previous step"
          onClick={() => (previous ? go(previous.slug) : navigate(sectionPath))}
          icon={<ChevronLeft />}
          className=""
        />
        <b>{previous?.label ?? `${levelData.code} ${levelData.name}`}</b>
        <b className="text-right">
          {next?.label ?? (isTravel ? "Travel" : "Course")}
        </b>
        <Button
          ariaLabel="Next step"
          onClick={() => (next ? go(next.slug) : finish())}
          icon={<ChevronRight />}
          className=""
        />
      </nav>
    </div>
  );
}
