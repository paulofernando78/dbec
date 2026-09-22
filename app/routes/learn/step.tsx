import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Headphones,
  Pencil,
  Play,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { LevelBanner } from "@/components/learning/LevelBanner";
import { getLearningLesson, learningLessons } from "@/data/learning";
import {
  advanceLearningStep,
  completeLearningLesson,
  getLearningStep,
  isLearningLessonCompleted,
} from "@/utils/learning-progress";
import { getReadyMedia, getStepMaterial } from "./step/content";
import { GetReadySlider } from "./step/GetReadySlider";
import { LessonNavigation } from "./step/LessonNavigation";
import { TryItActivity } from "./step/TryItActivity";
import { learningSteps, stepLabels, type LearningStep } from "./step/types";

const stepIcons = {
  "get-ready": <Play />,
  "see-it": <Headphones />,
  "try-it": <Pencil />,
  "use-it": <BookOpen />,
  "can-you": <CheckCircle2 />,
} satisfies Record<LearningStep, React.ReactNode>;

const isLearningStep = (value: string): value is LearningStep =>
  learningSteps.some((step) => step === value);

export default function LearningStepRoute() {
  const { level = "", unit = "", lesson: slug = "", step = "" } = useParams();
  const navigate = useNavigate();
  const lesson = getLearningLesson(level, unit, slug);
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);
  const [accessAllowed, setAccessAllowed] = useState<boolean | null>(null);

  useEffect(() => setCheckedQuestions([]), [lesson?.id, step]);

  useEffect(() => {
    if (!lesson || !isLearningStep(step)) return;
    const currentStep = learningSteps.indexOf(step);
    const levelLessons = learningLessons.filter((item) => item.level === level);
    const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
    const previousLessonCompleted =
      lessonIndex === 0 ||
      (lessonIndex > 0 &&
        isLearningLessonCompleted(levelLessons[lessonIndex - 1].id));

    setAccessAllowed(
      previousLessonCompleted &&
        (isLearningLessonCompleted(lesson.id) ||
          currentStep <= getLearningStep(lesson.id)),
    );
  }, [lesson, level, step]);

  if (!lesson || !isLearningStep(step))
    return <Navigate to={`/learn/${level}`} replace />;
  if (accessAllowed === false)
    return <Navigate to={`/learn/${level}`} replace />;

  const material = getStepMaterial(lesson, step);
  const questions = (material.content ?? "").split("\n").filter(Boolean);
  const examples = (material.content ?? "").split("\n").filter(Boolean);
  const stepIndex = learningSteps.indexOf(step);
  const lessonPath = `/learn/${level}/${unit}/${slug}`;
  const levelLessons = learningLessons.filter((item) => item.level === level);
  const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
  const previousLesson = levelLessons[lessonIndex - 1];
  const nextLesson = levelLessons[lessonIndex + 1];
  const isA1 = level === "a1";

  const previousPath =
    stepIndex === 0
      ? previousLesson
        ? `/learn/${previousLesson.level}/${previousLesson.unitId}/${previousLesson.slug}/can-you`
        : `/learn/${level}`
      : `${lessonPath}/${learningSteps[stepIndex - 1]}`;
  const nextPath =
    stepIndex < learningSteps.length - 1
      ? `${lessonPath}/${learningSteps[stepIndex + 1]}`
      : nextLesson
        ? `/learn/${nextLesson.level}/${nextLesson.unitId}/${nextLesson.slug}/get-ready`
        : `/learn/${level}`;
  const previousLabel =
    stepIndex === 0
      ? previousLesson?.title || "Learning path"
      : stepLabels[learningSteps[stepIndex - 1]];
  const nextLabel =
    stepIndex === learningSteps.length - 1
      ? nextLesson?.title || "Finish lesson"
      : stepLabels[learningSteps[stepIndex + 1]];

  const advance = () => {
    if (stepIndex < learningSteps.length - 1) {
      advanceLearningStep(lesson.id, stepIndex + 1);
    } else {
      completeLearningLesson(lesson.id);
    }
    navigate(nextPath);
  };

  return (
    <main className="grid gap-4">
      <Link
        className="inline-flex items-center gap-2 font-bold text-slate-500"
        to={`/learn/${level}`}
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Back to learning path
      </Link>
      <LevelBanner levelId={isA1 ? "a1" : "a2"} />
      <section>
        <header className="grid grid-cols-2">
          <div className="grid rounded-tl-2xl rounded-bl-2xl border-2 border-r-0 border-slate-200 bg-slate-50 p-4 text-2xl font-black">
            <span className="text-xs text-amber-700 uppercase">unit 1</span>
            <span>Meeting People</span>
          </div>
          <div className="grid rounded-tr-2xl rounded-br-2xl border-2 border-slate-200 p-4 text-2xl font-black">
            <span className="text-xs text-amber-700 uppercase">
              Lesson {lesson.order}{" "}
            </span>
            <span>{lesson.title}</span>
          </div>
        </header>
        <div className="my-4 flex w-max items-center gap-2 rounded-2xl border border-slate-300 px-2 py-1">
          <span className="font-bold">{stepLabels[step]}</span>
          <span className="text-sm font-bold text-red-700">
            Step {stepIndex + 1} of {learningSteps.length}
          </span>
        </div>

        <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
          {material.instruction}
        </p>

        {step === "get-ready" && (
          <GetReadySlider slides={getReadyMedia[slug]} isA1={isA1} />
        )}
        {step === "see-it" && (
          <div className="my-6 min-h-32 rounded-2xl bg-slate-100 p-6 text-lg leading-relaxed text-slate-700 dark:bg-slate-700 dark:text-slate-100">
            {examples.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        )}
        {step === "try-it" && <TryItActivity lesson={lesson} isA1={isA1} />}
        {step === "use-it" && (
          <div className="my-6 rounded-2xl bg-slate-100 p-6 text-lg leading-relaxed whitespace-pre-line text-slate-700 dark:bg-slate-700 dark:text-slate-100">
            {material.content}
          </div>
        )}
        {step === "can-you" && (
          <>
            <div className="my-6 grid gap-3 rounded-2xl bg-slate-100 p-6 dark:bg-slate-700">
              {questions.map((question) => (
                <label
                  key={question}
                  className="flex cursor-pointer items-start gap-3 text-lg text-slate-700 dark:text-slate-100"
                >
                  <input
                    type="checkbox"
                    checked={checkedQuestions.includes(question)}
                    onChange={(event) =>
                      setCheckedQuestions((current) =>
                        event.target.checked
                          ? [...current, question]
                          : current.filter((item) => item !== question),
                      )
                    }
                    className={`mt-1 size-5 shrink-0 ${
                      isA1 ? "accent-yellow-500" : "accent-red-500"
                    }`}
                  />
                  <span>{question}</span>
                </label>
              ))}
            </div>
            <p className="m-0 rounded-xl border-2 border-slate-200 p-4 font-bold text-slate-500 dark:border-slate-600">
              {material.prompt}
            </p>
          </>
        )}

        <LessonNavigation
          isA1={isA1}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          onPrevious={() => navigate(previousPath)}
          onNext={advance}
          nextDisabled={
            step === "can-you" && checkedQuestions.length !== questions.length
          }
        />
      </section>
    </main>
  );
}
