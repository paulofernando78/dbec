import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle2,
  Lock,
  LockOpen,
  MessageCircle,
  Pencil,
  Play,
  RotateCcw,
  Star,
  X,
} from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { Button } from "@/components/ui/Button/Button";
import { learningLessons, learningLevels } from "@/data/learning";
import {
  getLearningStep,
  isLearningLessonCompleted,
  resetLearningLessons,
} from "@/utils/learning-progress";

type ResetConfirmation = {
  title: string;
  description: string;
  lessonIds: string[];
};

export default function LearningLevel() {
  const { level: levelId } = useParams();
  const location = useLocation();
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(
    new Set(),
  );
  const [stepProgress, setStepProgress] = useState<Record<string, number>>({});
  const [resetConfirmation, setResetConfirmation] =
    useState<ResetConfirmation | null>(null);
  const level =
    levelId && levelId in learningLevels
      ? learningLevels[levelId as keyof typeof learningLevels]
      : undefined;

  const levelLessons = learningLessons.filter(
    (lesson) => lesson.level === levelId,
  );

  const refreshProgress = () => {
    setStepProgress(
      Object.fromEntries(
        levelLessons.map((lesson) => [lesson.id, getLearningStep(lesson.id)]),
      ),
    );
    setCompletedLessonIds(
      new Set(
        levelLessons
          .filter((lesson) => isLearningLessonCompleted(lesson.id))
          .map((lesson) => lesson.id),
      ),
    );
  };

  useEffect(() => {
    refreshProgress();
  }, [levelId]);

  useLayoutEffect(() => {
    if (!location.state?.restoreLearningScroll || !levelId) return;
    const savedPosition = sessionStorage.getItem(`learning-scroll:${levelId}`);
    const scrollContainer = document.querySelector<HTMLElement>(
      "[data-scroll-container]",
    );
    if (!savedPosition || !scrollContainer) return;
    const { x, y } = JSON.parse(savedPosition) as { x: number; y: number };
    scrollContainer.scrollTo(x, y);
  }, [levelId, location.key, location.state]);

  useEffect(() => {
    if (!resetConfirmation) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResetConfirmation(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [resetConfirmation]);

  if (!level) return <Navigate to="/learn" replace />;

  const isA1 = level.id === "a1";
  const accentText = isA1
    ? "text-amber-700 dark:text-yellow-400"
    : "text-red-700 dark:text-red-400";

  return (
    <div className="mx-auto w-[calc(100%_-_32px)] max-w-[760px] py-12 pb-20 max-[620px]:w-[calc(100%_-_20px)] max-[620px]:pt-6">
      <header
        className={`mb-7 flex items-center gap-5.5 rounded-[22px] bg-linear-to-br p-6 max-[620px]:items-start max-[620px]:p-5 ${isA1 ? "from-yellow-400 to-amber-600 text-slate-900" : "from-red-500 to-red-700 text-white"}`}
      >
        <div>
          <div className="text-[clamp(2rem,8vw,3rem)] leading-none font-black">
            {level.label}
          </div>
          <h1 className="text-[clamp(1.6rem,5vw,2.3rem)] font-black">
            {level.title}
          </h1>
          <p className="mb-6 opacity-90">{level.description}</p>
          <Button
            variant={isA1 ? "answer" : "danger"}
            icon={<RotateCcw aria-hidden="true" />}
            onClick={() => {
              setResetConfirmation({
                title: `Reset ${level.label}?`,
                description:
                  "All completed lessons and scores in this level will be removed.",
                lessonIds: levelLessons.map((lesson) => lesson.id),
              });
            }}
          >
            <span>Reset all</span>
          </Button>
        </div>
      </header>

      {level.units.map((unit) => (
        <section
          className="mb-6 overflow-hidden rounded-[22px] border-2 border-slate-200 dark:border-slate-600"
          key={unit.id}
        >
          <header className="flex justify-between gap-5 border-b-2 border-slate-200 bg-slate-50 p-6 max-[620px]:flex-col dark:border-slate-600 dark:bg-slate-800">
            <div>
              <span
                className={`text-xs font-extrabold tracking-[.12em] ${accentText}`}
              >
                UNIT {unit.order}
              </span>
              <h2 className="my-1 text-[1.65rem] font-black text-slate-800 dark:text-slate-100">
                {unit.title}
              </h2>
              <p className="m-0 text-slate-500 dark:text-slate-300">
                {unit.description}
              </p>
            </div>
            <div className="flex gap-2 self-start max-[620px]:self-start">
              <div className="rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
                {
                  unit.lessons.filter((lesson) =>
                    completedLessonIds.has(lesson.id),
                  ).length
                }{" "}
                / {unit.lessons.length}
              </div>
              <Button
                variant={isA1 ? "answer" : "danger"}
                icon={<RotateCcw aria-hidden="true" />}
                ariaLabel={`Reset ${unit.title} progress`}
                title="Reset unit progress"
                onClick={() => {
                  const firstLessonIndex = levelLessons.findIndex(
                    (lesson) => lesson.unitId === unit.id,
                  );
                  if (firstLessonIndex === -1) return;
                  setResetConfirmation({
                    title: `Reset ${unit.title}?`,
                    description:
                      "This unit and all progress after it will be reset to preserve the lesson order.",
                    lessonIds: levelLessons
                      .slice(firstLessonIndex)
                      .map((lesson) => lesson.id),
                  });
                }}
                className="translate-y-[-0.1rem]"
              />
            </div>
          </header>

          <div className="px-[clamp(22px,7vw,60px)] py-7.5 max-[620px]:px-5">
            {unit.lessons.map((lesson, index) => {
              const lessonIndex = levelLessons.findIndex(
                (item) => item.id === lesson.id,
              );
              const hasExercises = lessonIndex !== -1;
              const completed =
                hasExercises && completedLessonIds.has(lesson.id);
              const locked =
                !hasExercises ||
                (!completed &&
                  lessonIndex > 0 &&
                  !levelLessons
                    .slice(0, lessonIndex)
                    .every((item) => completedLessonIds.has(item.id)));
              const checkpoint = "checkpoint" in lesson && lesson.checkpoint;
              const href = `/learn/${level.id}/${unit.id}/${lesson.slug}`;
              const showLessonSteps = true;
              const lessonSteps = [
                "Get ready",
                "See it",
                "Try it",
                "Use it",
                "Can you...?",
              ];
              const lessonStepSlugs = [
                "get-ready",
                "see-it",
                "try-it",
                "use-it",
                "can-you",
              ];

              return (
                <div
                  className="relative grid min-h-32 grid-cols-[74px_1fr] items-center gap-6 max-[620px]:grid-cols-[64px_1fr] max-[620px]:gap-4"
                  key={lesson.id}
                >
                  {index < unit.lessons.length - 1 && (
                    <div className="absolute inset-y-0 left-8.5 z-0 w-1.5 bg-slate-200 max-[620px]:left-7.25 dark:bg-slate-600" />
                  )}
                  {index === unit.lessons.length - 1 && index > 0 && (
                    <div className="absolute top-0 bottom-[50%] left-8.5 z-0 w-1.5 bg-slate-200 max-[620px]:left-7.25 dark:bg-slate-600" />
                  )}
                  <div
                    className={`z-1 grid h-[66px] w-[72px] place-items-center self-start rounded-full border-2 pt-0 max-[620px]:h-[58px] max-[620px]:w-[64px] [&_svg]:size-[25px] ${
                      locked
                        ? "border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-800 [&_svg]:stroke-gray-400"
                        : isA1
                          ? "border-yellow-400 bg-yellow-400 text-slate-900 shadow-md shadow-yellow-600"
                          : "border-red-500 bg-red-500 text-white shadow-md shadow-red-600"
                    }`}
                    aria-label={`${lesson.title}${locked ? ", locked" : ""}`}
                    title={locked ? `${lesson.title}, locked` : lesson.title}
                  >
                    {locked ? (
                      checkpoint ? (
                        <Star aria-hidden="true" />
                      ) : (
                        <Lock aria-hidden="true" />
                      )
                    ) : completed ? (
                      <Check aria-hidden="true" />
                    ) : (
                      <LockOpen aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <span
                      className={`text-xs font-extrabold tracking-[.12em] ${locked ? "text-slate-400" : accentText}`}
                    >
                      LESSON {lesson.order}
                    </span>
                    <h3 className="my-0.5 text-lg font-extrabold text-slate-800 dark:text-slate-100">
                      {lesson.title}
                    </h3>
                    <p className="m-0 text-sm text-slate-500 dark:text-slate-300">
                      {lesson.description}
                    </p>
                    {!locked && (
                      <>
                        {showLessonSteps ? (
                          <div className="mt-3 max-w-[500px]">
                            <div className="mb-2 flex items-center justify-between gap-3">
                              <small
                                className={`flex items-center gap-1 font-bold ${accentText}`}
                              >
                                <Check size={14} />
                                {completed
                                  ? "Completed"
                                  : `${Math.min((stepProgress[lesson.id] ?? 0) + 1, 5)} of 5 steps`}
                              </small>
                            </div>
                            <div className="flex flex-col gap-3">
                              {lessonSteps.map((step, stepIndex) => {
                                const stepAvailable =
                                  completed ||
                                  stepIndex <= (stepProgress[lesson.id] ?? 0);
                                const stepCompleted =
                                  completed ||
                                  stepIndex < (stepProgress[lesson.id] ?? 0);
                                return (
                                  <div
                                    key={step}
                                    className="flex items-center gap-3"
                                  >
                                    <Button
                                      variant={isA1 ? "answer" : "danger"}
                                      className={`!rounded-lg ${
                                        isA1
                                          ? "disabled:!bg-yellow-300 [&_svg]:!stroke-yellow-700"
                                          : "disabled:!bg-red-400 [&_svg]:!stroke-red-800"
                                      }`}
                                      disabled={!stepAvailable}
                                      to={
                                        stepAvailable
                                          ? `${href}/${lessonStepSlugs[stepIndex]}`
                                          : undefined
                                      }
                                      icon={
                                        stepCompleted ? (
                                          <Check aria-hidden="true" />
                                        ) : stepIndex === 0 ? (
                                          <Play aria-hidden="true" />
                                        ) : stepIndex === 1 ? (
                                          <BookOpen aria-hidden="true" />
                                        ) : stepIndex === 2 ? (
                                          <Pencil aria-hidden="true" />
                                        ) : stepIndex === 3 ? (
                                          <MessageCircle aria-hidden="true" />
                                        ) : (
                                          <CheckCircle2 aria-hidden="true" />
                                        )
                                      }
                                      ariaLabel={`${step}${stepAvailable ? " available" : ", locked"}`}
                                    />
                                    <span
                                      className={`translate-y-1.5 font-bold ${stepAvailable ? "text-slate-700 dark:text-slate-200" : "text-slate-400 dark:text-slate-500"}`}
                                    >
                                      {step}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <p className="mt-6 mb-0 text-xs text-slate-400 dark:text-slate-500">
                              Complete each step to unlock the next.
                            </p>
                          </div>
                        ) : (
                          <small
                            className={`mt-1 flex items-center gap-1 font-bold ${accentText}`}
                          >
                            <Check size={14} />
                            {completed ? "Completed" : "Ready to start"}
                          </small>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {resetConfirmation && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget)
              setResetConfirmation(null);
          }}
        >
          <section
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="reset-dialog-title"
            aria-describedby="reset-dialog-description"
            className="w-full max-w-[430px] rounded-[24px] border-2 border-slate-200 bg-white p-6 text-slate-800 shadow-2xl dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <div className="flex items-start gap-4">
              <div
                className={`grid size-12 shrink-0 place-items-center rounded-2xl ${
                  isA1
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400"
                    : "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
                }`}
              >
                <AlertTriangle size={24} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 id="reset-dialog-title" className="m-0 text-xl font-black">
                  {resetConfirmation.title}
                </h2>
                <p
                  id="reset-dialog-description"
                  className="mt-2 mb-0 text-sm leading-relaxed text-slate-500 dark:text-slate-300"
                >
                  {resetConfirmation.description}
                </p>
              </div>
              <Button
                className="shrink-0"
                icon={<X aria-hidden="true" />}
                ariaLabel="Close reset confirmation"
                onClick={() => setResetConfirmation(null)}
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button onClick={() => setResetConfirmation(null)}>Cancel</Button>
              <Button
                variant={isA1 ? "answer" : "danger"}
                icon={<RotateCcw aria-hidden="true" />}
                onClick={() => {
                  resetLearningLessons(resetConfirmation.lessonIds);
                  refreshProgress();
                  setResetConfirmation(null);
                }}
              >
                Reset progress
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
