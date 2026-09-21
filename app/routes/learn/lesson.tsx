import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Heart, RotateCcw, X } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { Button } from "@/components/ui/Button/Button";
import { getLearningLesson, learningLessons } from "@/data/learning";
import type { LearningExercise } from "@/data/learning/types";
import {
  completeLearningLesson,
  isLearningLessonCompleted,
} from "@/utils/learning-progress";

const threeDimensionalButton =
  "border-0 transition-[transform,box-shadow,background-color,color] duration-150 ease-out active:translate-y-[.225em]";

const wordButton = `${threeDimensionalButton} rounded-xl bg-white px-4 py-3 font-bold text-slate-700 shadow-[0_.35em_0_#cbd5e1] active:shadow-[0_.175em_0_#cbd5e1] disabled:cursor-default dark:bg-slate-700 dark:text-slate-100 dark:shadow-[0_.35em_0_#334155] dark:active:shadow-[0_.175em_0_#334155]`;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const shuffleChoices = (choices: string[]) => {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
};

function WordOrder({
  exercise,
  answer,
  onChange,
  disabled,
}: {
  exercise: Extract<LearningExercise, { type: "word-order" }>;
  answer: string;
  onChange: (answer: string) => void;
  disabled: boolean;
}) {
  const selected = answer ? answer.split(" ") : [];
  const remaining = exercise.words.filter((word) => !selected.includes(word));

  return (
    <div className="mt-8 grid gap-7">
      <div className="flex min-h-20 flex-wrap items-center gap-3 border-b-2 border-slate-200 px-1 pb-4 dark:border-slate-600">
        {selected.length === 0 && (
          <span className="text-slate-400 dark:text-slate-500">
            Tap the words below
          </span>
        )}
        {selected.map((word) => (
          <button
            className={wordButton}
            type="button"
            key={word}
            disabled={disabled}
            onClick={() =>
              onChange(selected.filter((item) => item !== word).join(" "))
            }
          >
            {word}
          </button>
        ))}
      </div>
      <div className="flex min-h-16 flex-wrap justify-center gap-3">
        {remaining.map((word) => (
          <button
            className={wordButton}
            type="button"
            key={word}
            disabled={disabled}
            onClick={() => onChange([...selected, word].join(" "))}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LearningLessonRoute() {
  const { level = "", unit = "", lesson: slug = "" } = useParams();
  const lesson = useMemo(
    () => getLearningLesson(level, unit, slug),
    [level, unit, slug],
  );
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const [accessAllowed, setAccessAllowed] = useState<boolean | null>(null);
  const [choiceOrders, setChoiceOrders] = useState<{
    lessonId: string;
    choices: Record<string, string[]>;
  } | null>(null);

  useEffect(() => {
    setIndex(0);
    setAnswer("");
    setResult(null);
    setCorrectAnswers(0);
    setFinished(false);
  }, [lesson?.id]);

  useEffect(() => {
    if (!lesson) return;

    setChoiceOrders({
      lessonId: lesson.id,
      choices: Object.fromEntries(
        lesson.exercises
          .filter((exercise) => exercise.type === "multiple-choice")
          .map((exercise) => [exercise.id, shuffleChoices(exercise.choices)]),
      ),
    });

    const levelLessons = learningLessons.filter(
      (item) => item.level === lesson.level,
    );
    const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
    setAccessAllowed(
      lessonIndex === 0 ||
        (lessonIndex > 0 &&
          isLearningLessonCompleted(levelLessons[lessonIndex - 1].id)),
    );
  }, [lesson]);

  if (!lesson) return <Navigate to="/learn" replace />;
  if (accessAllowed === false) {
    return <Navigate to={`/learn/${lesson.level}`} replace />;
  }

  const exercise = lesson.exercises[index];
  const choices =
    exercise.type === "multiple-choice"
      ? choiceOrders?.lessonId === lesson.id
        ? choiceOrders.choices[exercise.id]
        : []
      : [];
  const progress = finished ? 100 : (index / lesson.exercises.length) * 100;
  const isA1 = lesson.level === "a1";
  const accentText = isA1
    ? "text-amber-700 dark:text-yellow-400"
    : "text-red-700 dark:text-red-400";
  const accentBackground = isA1
    ? "bg-yellow-400 text-slate-900"
    : "bg-red-500 text-white";
  const primaryButton = isA1
    ? "bg-yellow-400 text-slate-900 shadow-[0_.45em_0_#d97706] active:shadow-[0_.225em_0_#d97706]"
    : "bg-red-500 text-white shadow-[0_.45em_0_#b91c1c] active:shadow-[0_.225em_0_#b91c1c]";

  const checkAnswer = () => {
    const isCorrect = normalize(answer) === normalize(exercise.correctAnswer);
    setResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) setCorrectAnswers((value) => value + 1);
  };

  const continueLesson = () => {
    if (index === lesson.exercises.length - 1) {
      setFinished(true);
      completeLearningLesson(lesson.id);
      localStorage.setItem(
        `learning:${lesson.id}:score`,
        String(correctAnswers),
      );
      return;
    }
    setIndex((value) => value + 1);
    setAnswer("");
    setResult(null);
  };

  if (finished) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-white px-4 py-14 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
        <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
          <div
            className={`mb-5 grid size-24 place-items-center rounded-full ${accentBackground}`}
          >
            <Check size={48} />
          </div>
          <span className={`text-xs font-black tracking-[.14em] ${accentText}`}>
            LESSON COMPLETE
          </span>
          <h1 className="mt-2 mb-2 text-[clamp(2.2rem,8vw,3.5rem)] font-black">
            Great work!
          </h1>
          <p className="max-w-[500px] text-slate-500 dark:text-slate-300">
            {lesson.description}
          </p>
          <div className="my-8 grid w-full grid-cols-2 gap-4 max-[480px]:grid-cols-1">
            <div className="grid gap-1 rounded-[18px] border-2 border-amber-200 bg-amber-50 p-5 dark:border-amber-700 dark:bg-amber-950/50">
              <strong className="text-2xl font-black text-amber-600 dark:text-amber-400">
                +{lesson.xpReward}
              </strong>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-300">
                XP earned
              </span>
            </div>
            <div className="grid gap-1 rounded-[18px] border-2 border-sky-200 bg-sky-50 p-5 dark:border-sky-700 dark:bg-sky-950/50">
              <strong className="text-2xl font-black text-sky-600 dark:text-sky-400">
                {correctAnswers}/{lesson.exercises.length}
              </strong>
              <span className="text-sm font-bold text-slate-500 dark:text-slate-300">
                correct
              </span>
            </div>
          </div>
          <div className="mb-8 w-full rounded-[18px] bg-slate-100 p-5 text-left dark:bg-slate-800">
            <strong className="mb-3 block">Words practiced</strong>
            <div className="flex flex-wrap gap-2">
              {lesson.vocabulary.map((word) => (
                <span
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-600 shadow-sm dark:bg-slate-700 dark:text-slate-200"
                  key={word}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
          <Link
            className={`${threeDimensionalButton} ${primaryButton} w-full rounded-[15px] px-6 py-4 font-black no-underline`}
            to={`/learn/${lesson.level}`}
            state={{ restoreLearningScroll: true }}
          >
            Continue path
          </Link>
          <button
            className="mt-6 flex items-center gap-2 border-0 bg-transparent font-extrabold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
            onClick={() => {
              setIndex(0);
              setAnswer("");
              setResult(null);
              setCorrectAnswers(0);
              setFinished(false);
            }}
          >
            <RotateCcw size={17} /> Practice again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <header className="mx-auto flex w-[calc(100%_-_32px)] max-w-[900px] items-center gap-5 py-6 max-[620px]:gap-3 max-[620px]:py-4">
        <Link
          className="grid size-10 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          to={`/learn/${lesson.level}`}
          aria-label="Leave lesson"
        >
          <X />
        </Link>
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <span
            className={`block h-full rounded-full transition-[width] duration-300 ${isA1 ? "bg-yellow-400" : "bg-red-500"}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex shrink-0 items-center gap-1 font-black text-rose-500">
          <Heart fill="currentColor" /> 5
        </div>
      </header>

      <main className="mx-auto w-[calc(100%_-_32px)] max-w-[680px] flex-1 pt-[clamp(28px,7vh,70px)] pb-40 max-[620px]:w-[calc(100%_-_24px)]">
        <span className={`text-xs font-black tracking-[.12em] ${accentText}`}>
          QUESTION {index + 1} OF {lesson.exercises.length}
        </span>
        <h1 className="mt-2 mb-3 text-[clamp(1.65rem,5vw,2.3rem)] leading-tight font-black">
          {exercise.instruction}
        </h1>
        {exercise.prompt && (
          <p className="mb-7 rounded-[16px] bg-slate-100 p-5 text-lg text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {exercise.prompt}
          </p>
        )}

        {exercise.type === "multiple-choice" ? (
          <div className="mt-7 grid gap-4">
            {choices.map((choice, choiceIndex) => (
              <Button
                size="choice"
                variant={
                  result && choice === exercise.correctAnswer
                    ? "check"
                    : result === "incorrect" && answer === choice
                      ? "danger"
                      : answer === choice
                        ? isA1
                          ? "answer"
                          : "danger"
                        : "default"
                }
                disabled={result !== null}
                key={choice}
                onClick={() => setAnswer(choice)}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-[9px] border-2 border-current text-sm">
                  {choiceIndex + 1}
                </span>
                <span className="min-w-0 flex-1 leading-snug">{choice}</span>
              </Button>
            ))}
          </div>
        ) : (
          <WordOrder
            exercise={exercise}
            answer={answer}
            onChange={setAnswer}
            disabled={result !== null}
          />
        )}
      </main>

      <footer
        className={`sticky bottom-0 shrink-0 border-t-2 border-slate-200 bg-white/95 px-6 py-5 backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 ${result === "correct" ? "border-green-200 bg-green-50/95 dark:border-green-800 dark:bg-green-950/95" : ""} ${result === "incorrect" ? "border-red-200 bg-red-50/95 dark:border-red-800 dark:bg-red-950/95" : ""}`}
      >
        <div className="mx-auto flex max-w-[900px] items-center justify-between gap-6 max-[620px]:items-end max-[620px]:gap-3">
          {result ? (
            <div
              className={`flex items-center gap-4 ${result === "correct" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}
            >
              <div
                className={`grid size-12 shrink-0 place-items-center rounded-full ${result === "correct" ? "bg-green-200 dark:bg-green-900" : "bg-red-200 dark:bg-red-900"}`}
              >
                {result === "correct" ? <Check /> : <ArrowLeft />}
              </div>
              <div>
                <strong className="text-lg font-black">
                  {result === "correct" ? "Excellent!" : "Not quite"}
                </strong>
                <p className="m-0 text-sm text-slate-600 dark:text-slate-300">
                  {result === "incorrect" &&
                    `Correct answer: ${exercise.correctAnswer}. `}
                  {exercise.explanation}
                </p>
              </div>
            </div>
          ) : (
            <span />
          )}
          <button
            className={`${threeDimensionalButton} ${primaryButton} min-w-36 rounded-[15px] px-7 py-3.5 font-black disabled:!bg-slate-200 disabled:!text-slate-400 disabled:!shadow-[0_.45em_0_#cbd5e1] disabled:active:translate-y-0 dark:disabled:!bg-slate-700 dark:disabled:!text-slate-500 dark:disabled:!shadow-[0_.45em_0_#334155]`}
            type="button"
            disabled={!answer}
            onClick={result ? continueLesson : checkAnswer}
          >
            {result ? "Continue" : "Check"}
          </button>
        </div>
      </footer>
    </div>
  );
}
