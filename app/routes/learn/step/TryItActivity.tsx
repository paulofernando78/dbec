import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import type { LearningLesson } from "@/data/learning/types";
import { exerciseExample } from "./content";

type TryToken = { id: string; text: string };

function ScrambleActivity({
  sentence,
  variant,
  number,
}: {
  sentence: string;
  variant: "answer" | "check" | "danger" | "reset" | "purple" | "indigo";
  number: number;
}) {
  const targetWords = sentence.split(/\s+/);
  const tokens = targetWords.map((text, index) => ({
    id: `${index}-${text}`,
    text,
  }));
  const offset = tokens.length > 1 ? number % tokens.length || 1 : 0;
  const shuffled =
    tokens.length > 1
      ? [...tokens.slice(offset), ...tokens.slice(0, offset)]
      : tokens;
  const [available, setAvailable] = useState<TryToken[]>(shuffled);
  const [answer, setAnswer] = useState<TryToken[]>([]);
  const [dragged, setDragged] = useState<{
    id: string;
    source: "available" | "answer";
  } | null>(null);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  useEffect(() => {
    setAvailable(shuffled);
    setAnswer([]);
    setResult(null);
  }, [sentence]);

  const moveToken = (
    id: string,
    source: "available" | "answer",
    destination: "available" | "answer",
  ) => {
    if (source === destination) return;
    const sourceItems = source === "available" ? available : answer;
    const token = sourceItems.find((item) => item.id === id);
    if (!token) return;

    if (source === "available") {
      setAvailable((items) => items.filter((item) => item.id !== id));
      setAnswer((items) => [...items, token]);
    } else {
      setAnswer((items) => items.filter((item) => item.id !== id));
      setAvailable((items) => [...items, token]);
    }
    setResult(null);
  };

  const dropInto = (destination: "available" | "answer") => {
    if (!dragged) return;
    moveToken(dragged.id, dragged.source, destination);
    setDragged(null);
  };

  return (
    <section className="grid gap-3 rounded-2xl border-2 border-slate-200 p-4 dark:border-slate-600">
      <h3 className="m-0 text-base font-black text-slate-700 dark:text-slate-100">
        Scramble {number}
      </h3>
      <div
        className="flex min-h-16 flex-wrap content-start gap-2 rounded-xl bg-slate-100 p-4 dark:bg-slate-700"
        onDragOver={(event) => event.preventDefault()}
        onDrop={() => dropInto("available")}
        aria-label="Available words"
      >
        {available.map((token) => (
          <button
            key={token.id}
            type="button"
            draggable
            onDragStart={() =>
              setDragged({ id: token.id, source: "available" })
            }
            onClick={() => moveToken(token.id, "available", "answer")}
            className="cursor-grab rounded-xl border-2 border-slate-200 bg-white px-3 py-2 font-bold text-slate-700 shadow-sm active:cursor-grabbing dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100"
          >
            {token.text}
          </button>
        ))}
      </div>
      <div
        className={`flex min-h-16 flex-wrap content-start gap-2 rounded-xl border-2 border-dashed p-4 ${
          result === "correct"
            ? "border-green-500 bg-green-50 dark:bg-green-950"
            : result === "incorrect"
              ? "border-red-500 bg-red-50 dark:bg-red-950"
              : "border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-800"
        }`}
        onDragOver={(event) => event.preventDefault()}
        onDrop={() => dropInto("answer")}
        aria-label="Your answer"
      >
        {answer.length === 0 && (
          <span className="text-sm font-bold text-slate-400">
            Drag the words here
          </span>
        )}
        {answer.map((token) => (
          <button
            key={token.id}
            type="button"
            draggable
            onDragStart={() => setDragged({ id: token.id, source: "answer" })}
            onClick={() => moveToken(token.id, "answer", "available")}
            className={`cursor-grab rounded-xl px-3 py-2 font-bold active:cursor-grabbing ${
              variant === "answer"
                ? "bg-yellow-300 text-slate-900"
                : variant === "reset"
                  ? "bg-blue-300 text-slate-900"
                  : variant === "check"
                    ? "bg-green-300 text-slate-900"
                    : "bg-red-400 text-white"
            }`}
          >
            {token.text}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant={variant}
          icon={<Check aria-hidden="true" />}
          disabled={available.length > 0}
          className={
            variant === "answer"
              ? "disabled:!bg-yellow-300"
              : variant === "reset"
                ? "disabled:!bg-blue-300"
                : variant === "check"
                  ? "disabled:!bg-green-300"
                  : "disabled:!bg-red-400"
          }
          onClick={() =>
            setResult(
              answer.map((token) => token.text).join(" ") ===
                targetWords.join(" ")
                ? "correct"
                : "incorrect",
            )
          }
        >
          Check
        </Button>
        {result && (
          <strong
            className={result === "correct" ? "text-green-600" : "text-red-600"}
          >
            {result === "correct" ? "Correct!" : "Try again."}
          </strong>
        )}
      </div>
    </section>
  );
}

export function TryItActivity({
  lesson,
  variant,
}: {
  lesson: LearningLesson;
  variant: "answer" | "check" | "danger" | "reset" | "purple" | "indigo";
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>(
    {},
  );
  const exercises = Array.from(
    { length: 3 },
    (_, index) => lesson.exercises[index % lesson.exercises.length],
  );
  const multipleChoice = exercises.map((exercise) => {
    if (exercise.type === "multiple-choice") return exercise;
    const correct = exercise.correctAnswer;
    const words = correct.split(/\s+/);
    return {
      ...exercise,
      prompt: exercise.prompt || "Choose the correctly ordered sentence.",
      choices: [
        correct,
        [...words].reverse().join(" "),
        [...words.slice(1), words[0]].join(" "),
      ],
    };
  });
  const scrambleSentences = exercises.map(exerciseExample);

  useEffect(() => {
    setSelectedAnswers({});
    setCheckedAnswers({});
  }, [lesson.id]);

  return (
    <div className="my-6 grid gap-5">
      <div className="grid gap-3">
        <h2 className="m-0 text-lg font-black text-slate-800 dark:text-slate-100">
          Multiple choice
        </h2>
        {multipleChoice.map((exercise, index) => {
          const selected = selectedAnswers[index];
          const wasChecked = index in checkedAnswers;
          const isCorrect = selected === exercise.correctAnswer;
          return (
            <section
              key={`${exercise.id}-${index}`}
              className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-700"
            >
              <h3 className="mt-0 mb-3 text-base font-bold text-slate-700 dark:text-slate-100">
                {index + 1}. {exercise.prompt}
              </h3>
              <div className="grid gap-2">
                {exercise.choices.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => {
                      setSelectedAnswers((current) => ({
                        ...current,
                        [index]: choice,
                      }));
                      setCheckedAnswers((current) => {
                        const next = { ...current };
                        delete next[index];
                        return next;
                      });
                    }}
                    className={`rounded-xl border-2 px-4 py-3 text-left font-bold ${
                      selected === choice
                        ? variant === "answer"
                          ? "border-yellow-500 bg-yellow-100 text-slate-900"
                          : variant === "reset"
                            ? "border-blue-500 bg-blue-100 text-blue-900"
                            : variant === "check"
                              ? "border-green-500 bg-green-100 text-green-900"
                              : "border-red-500 bg-red-100 text-red-900"
                        : "border-slate-200 bg-white text-slate-700 dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100"
                    }`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Button
                  variant={variant}
                  icon={<Check aria-hidden="true" />}
                  disabled={!selected}
                  className={
                    variant === "answer"
                      ? "disabled:!bg-yellow-300"
                      : variant === "reset"
                        ? "disabled:!bg-blue-300"
                        : variant === "check"
                          ? "disabled:!bg-green-300"
                          : "disabled:!bg-red-400"
                  }
                  onClick={() =>
                    setCheckedAnswers((current) => ({
                      ...current,
                      [index]: isCorrect,
                    }))
                  }
                >
                  Check
                </Button>
                {wasChecked && (
                  <strong
                    className={isCorrect ? "text-green-600" : "text-red-600"}
                  >
                    {isCorrect ? "Correct!" : "Try again."}
                  </strong>
                )}
              </div>
            </section>
          );
        })}
      </div>
      <div className="grid gap-3">
        <h2 className="m-0 text-lg font-black text-slate-800 dark:text-slate-100">
          Drag and drop
        </h2>
        {scrambleSentences.map((sentence, index) => (
          <ScrambleActivity
            key={`${lesson.id}-${index}`}
            sentence={sentence}
            variant={variant}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
