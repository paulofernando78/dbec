import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Headphones,
  Pencil,
  Play,
} from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getLearningLesson, learningLessons } from "@/data/learning";
import { Button } from "@/components/ui/Button/Button";
import {
  advanceLearningStep,
  completeLearningLesson,
  getLearningStep,
  isLearningLessonCompleted,
} from "@/utils/learning-progress";

const steps = ["get-ready", "see-it", "try-it", "use-it", "can-you"];
const labels: Record<string, string> = {
  "get-ready": "Get ready",
  "see-it": "See it",
  "try-it": "Try it",
  "use-it": "Use it",
  "can-you": "Can you...?",
};

const material: Record<
  string,
  Record<string, { instruction: string; content: string; prompt: string }>
> = {
  hello: {
    "get-ready": {
      instruction: "Imagine your first day in a new class.",
      content:
        "You sit next to someone you have never met. They smile and turn to you. You want to start a conversation.",
      prompt:
        "Think: What would you say first? How would you tell them your name? You can say it out loud before moving on.",
    },
    "see-it": {
      instruction: "Listen and follow the conversation.",
      content:
        "A: Hi! My name is Ana.\nB: Hello, Ana. I’m Lucas.\nA: Nice to meet you.\nB: Nice to meet you, too.",
      prompt: "Notice: My name is… / What’s your name?",
    },
    "try-it": {
      instruction: "Complete and organize the sentences.",
      content:
        "Hello! ___ name is Laura.\nWhat’s ___ name?\nHi / my / name / is / Lucas.",
      prompt: "Use: my · your",
    },
    "use-it": {
      instruction: "Create your own introduction.",
      content: "Hi! My name is _____.\nI’m from _____.\nNice to meet you!",
      prompt: "Write it or record yourself speaking.",
    },
    "can-you": {
      instruction: "Check your progress.",
      content:
        "Can you say hello?\nCan you say your name?\nCan you ask someone’s name?\nCan you say Nice to meet you?",
      prompt: "Mark each sentence when you can do it.",
    },
  },
};

const fallback = (title: string) => ({
  instruction: `Practice the language from ${title}.`,
  content: "Review the examples from this lesson and complete the activity.",
  prompt: "Use the new language in a short answer.",
});

export default function LearningStepRoute() {
  const { level = "", unit = "", lesson: slug = "", step = "" } = useParams();
  const navigate = useNavigate();
  const lesson = getLearningLesson(level, unit, slug);
  const [revealed, setRevealed] = useState(0);
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);
  const [accessAllowed, setAccessAllowed] = useState<boolean | null>(null);
  useEffect(() => {
    if (!lesson) return;
    const currentStep = steps.indexOf(step);
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
  if (!lesson || !steps.includes(step))
    return <Navigate to={`/learn/${level}`} replace />;
  if (accessAllowed === false)
    return <Navigate to={`/learn/${level}`} replace />;
  const content = material[slug]?.[step] ?? fallback(lesson.title);
  const canYouQuestions = content.content.split("\n").filter(Boolean);
  const stepIndex = steps.indexOf(step);
  const lessonPath = `/learn/${level}/${unit}/${slug}`;
  const levelLessons = learningLessons.filter((item) => item.level === level);
  const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
  const previousLesson = levelLessons[lessonIndex - 1];
  const previousPath =
    stepIndex === 0
      ? previousLesson
        ? `/learn/${previousLesson.level}/${previousLesson.unitId}/${previousLesson.slug}/can-you`
        : `/learn/${level}`
      : `${lessonPath}/${steps[stepIndex - 1]}`;
  const nextLesson = levelLessons[lessonIndex + 1];
  const nextPath =
    stepIndex < steps.length - 1
      ? `${lessonPath}/${steps[stepIndex + 1]}`
      : nextLesson
        ? `/learn/${nextLesson.level}/${nextLesson.unitId}/${nextLesson.slug}/get-ready`
        : `/learn/${level}`;
  const previousLabel =
    stepIndex === 0
      ? previousLesson
        ? previousLesson.title
        : "Learning path"
      : labels[steps[stepIndex - 1]];
  const nextLabel =
    stepIndex === steps.length - 1
      ? nextLesson
        ? nextLesson.title
        : "Finish lesson"
      : labels[steps[stepIndex + 1]];
  const advance = () => {
    if (stepIndex < steps.length - 1) {
      advanceLearningStep(lesson.id, stepIndex + 1);
    } else {
      completeLearningLesson(lesson.id);
    }
    navigate(nextPath);
  };
  const icon =
    step === "get-ready" ? (
      <Play />
    ) : step === "see-it" ? (
      <Headphones />
    ) : step === "try-it" ? (
      <Pencil />
    ) : step === "use-it" ? (
      <BookOpen />
    ) : (
      <CheckCircle2 />
    );
  const dialogue = [
    "A: Hi! My name is Ana.",
    "B: Hello, Ana. I’m Lucas.",
    "A: Nice to meet you.",
    "B: Nice to meet you, too.",
  ];

  return (
    <main className="mx-auto w-[calc(100%_-_32px)] max-w-[700px] py-12 pb-20 max-[620px]:w-[calc(100%_-_20px)] max-[620px]:pt-6">
      <Link
        className="mb-6 inline-flex items-center gap-2 font-bold text-slate-500"
        to={`/learn/${level}`}
      >
        <ArrowLeft size={18} /> Back to learning path
      </Link>
      <section className="rounded-[22px] border-2 border-slate-200 bg-white p-7 shadow-sm dark:border-slate-600 dark:bg-slate-800">
        <div className="mb-6 flex items-center gap-4">
          <div className="grid size-12 place-items-center rounded-xl bg-yellow-400 text-slate-900">
            {icon}
          </div>
          <div>
            <span className="text-xs font-black tracking-widest text-amber-700 uppercase">
              Step {stepIndex + 1} of 5
            </span>
            <h1 className="m-0 text-3xl font-black text-slate-800 dark:text-slate-100">
              {labels[step]}
            </h1>
            <p className="m-0 text-slate-500">{lesson.title}</p>
          </div>
        </div>
        <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
          {content.instruction}
        </p>
        {step === "get-ready" ? (
          <div className="my-6 grid gap-3">
            <div className="rounded-2xl bg-slate-100 p-6 text-lg text-slate-700 dark:bg-slate-700 dark:text-slate-100">
              {content.content}
            </div>
          </div>
        ) : step === "see-it" ? (
          <div className="my-6 grid gap-3">
            <div className="min-h-32 rounded-2xl bg-slate-100 p-6 text-lg leading-relaxed text-slate-700 dark:bg-slate-700 dark:text-slate-100">
              {dialogue.slice(0, revealed).map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setRevealed((value) => Math.min(value + 1, dialogue.length))
              }
              disabled={revealed === dialogue.length}
              className="rounded-xl bg-slate-800 px-4 py-3 font-bold text-white disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900"
            >
              {revealed === 0
                ? "Start dialogue"
                : revealed === dialogue.length
                  ? "Dialogue complete"
                  : "Show next line"}
            </button>
          </div>
        ) : step === "can-you" ? (
          <div className="my-6 grid gap-3 rounded-2xl bg-slate-100 p-6 dark:bg-slate-700">
            {canYouQuestions.map((question) => (
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
                  className="mt-1 size-5 shrink-0 accent-yellow-500"
                />
                <span>{question}</span>
              </label>
            ))}
          </div>
        ) : (
          <div className="my-6 rounded-2xl bg-slate-100 p-6 text-lg leading-relaxed whitespace-pre-line text-slate-700 dark:bg-slate-700 dark:text-slate-100">
            {content.content}
          </div>
        )}
        <p className="m-0 rounded-xl border-2 border-slate-200 p-4 font-bold text-slate-500 dark:border-slate-600">
          {content.prompt}
        </p>
      </section>
      <nav
        className="mt-6 flex flex-wrap items-center justify-between gap-3"
        aria-label="Lesson navigation"
      >
        <div className="flex items-center gap-2">
          <Button
            onClick={() => navigate(previousPath)}
            ariaLabel={previousLabel}
            icon={<ArrowLeft aria-hidden="true" />}
            className="!size-11 !rounded-xl"
          />
          <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
            {previousLabel}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
            {nextLabel}
          </span>
          <Button
            onClick={advance}
            disabled={
              step === "can-you" &&
              checkedQuestions.length !== canYouQuestions.length
            }
            ariaLabel={nextLabel}
            icon={<ArrowRight aria-hidden="true" />}
            variant={level === "a1" ? "answer" : "danger"}
            className="!size-11 !rounded-xl"
          />
        </div>
      </nav>
    </main>
  );
}
