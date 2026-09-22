import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Headphones,
  Pencil,
  Play,
} from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getLearningLesson, learningLessons } from "@/data/learning";
import type { LearningLesson } from "@/data/learning/types";
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
  "stay-in-touch": {
    "get-ready": {
      instruction:
        "Imagine you have just met someone you want to contact again.",
      content:
        "Before you leave, you exchange a phone number or email address and say goodbye in a friendly way.",
      prompt:
        "Think: How would you ask for contact information? What would you say before leaving?",
    },
    "see-it": {
      instruction: "Read how two new friends exchange contact information.",
      content:
        "A: What is your phone number?\nB: My number is 555-0198.\nA: And what is your email address?\nB: It is marina@email.com. See you!",
      prompt: "Notice: What is your…? / My … is… / See you!",
    },
    "try-it": {
      instruction: "Complete the contact details with the correct words.",
      content:
        "What ___ your phone number?\n___ number is 555-0124.\nWhat is ___ email address?",
      prompt: "Use: is · my · your",
    },
    "use-it": {
      instruction: "Create a short conversation with a new contact.",
      content:
        "A: What is your phone number?\nB: My number is _____.\nA: What is your email address?\nB: My email address is _____. See you!",
      prompt: "Replace the blanks with your own example information.",
    },
    "can-you": {
      instruction: "Check your progress.",
      content:
        "Can you ask for a phone number?\nCan you share an email address?\nCan you use I am, he is, and she is?\nCan you say goodbye in a friendly way?",
      prompt: "Mark each sentence when you can do it.",
    },
  },
};

const exerciseExample = (exercise: LearningLesson["exercises"][number]) => {
  if (exercise.type === "word-order") return exercise.correctAnswer;
  return exercise.prompt.includes("___")
    ? exercise.prompt.replace("___", exercise.correctAnswer)
    : `${exercise.prompt} — ${exercise.correctAnswer}`;
};

const lessonContent = (lesson: LearningLesson, step: string) => {
  const vocabulary = lesson.vocabulary.join(" · ");
  const examples = lesson.exercises.slice(0, 4).map(exerciseExample);
  const prompts = lesson.exercises
    .slice(0, 3)
    .map((exercise) =>
      exercise.type === "word-order"
        ? exercise.prompt || exercise.words.join(" / ")
        : exercise.prompt,
    );

  if (step === "get-ready") {
    return {
      instruction: lesson.description,
      content: lesson.objective,
      prompt: `Key language: ${vocabulary}`,
    };
  }

  if (step === "see-it") {
    return {
      instruction: `Study useful examples for ${lesson.title}.`,
      content: examples.join("\n"),
      prompt: `Notice how these words are used: ${vocabulary}`,
    };
  }

  if (step === "try-it") {
    return {
      instruction: `Try the language from ${lesson.title}.`,
      content: prompts.join("\n"),
      prompt: "Answer each prompt before checking the lesson examples.",
    };
  }

  if (step === "use-it") {
    return {
      instruction: lesson.description,
      content: `Create a short response about this topic. Include at least three of these expressions:\n${vocabulary}`,
      prompt: `Use the language to show that you can ${lesson.description.toLowerCase()}`,
    };
  }

  return {
    instruction: `Check what you can do after ${lesson.title}.`,
    content: [
      `Can you ${lesson.description.toLowerCase()}`,
      `Can you use ${lesson.vocabulary.slice(0, 2).join(" and ")}?`,
      `Can you understand an example about ${lesson.title.toLowerCase()}?`,
      `Can you create your own response about this topic?`,
    ].join("\n"),
    prompt: "Mark each sentence when you can do it confidently.",
  };
};

type TryToken = { id: string; text: string };

function ScrambleActivity({
  sentence,
  isA1,
  number,
}: {
  sentence: string;
  isA1: boolean;
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
              isA1 ? "bg-yellow-300 text-slate-900" : "bg-red-400 text-white"
            }`}
          >
            {token.text}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant={isA1 ? "answer" : "danger"}
          icon={<Check aria-hidden="true" />}
          disabled={available.length > 0}
          className={isA1 ? "disabled:!bg-yellow-300" : "disabled:!bg-red-400"}
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

function TryItActivity({
  lesson,
  isA1,
}: {
  lesson: LearningLesson;
  isA1: boolean;
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
                        ? isA1
                          ? "border-yellow-500 bg-yellow-100 text-slate-900"
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
                  variant={isA1 ? "answer" : "danger"}
                  icon={<Check aria-hidden="true" />}
                  disabled={!selected}
                  className={
                    isA1 ? "disabled:!bg-yellow-300" : "disabled:!bg-red-400"
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
            isA1={isA1}
            number={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function LearningStepRoute() {
  const { level = "", unit = "", lesson: slug = "", step = "" } = useParams();
  const navigate = useNavigate();
  const lesson = getLearningLesson(level, unit, slug);
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);
  const [accessAllowed, setAccessAllowed] = useState<boolean | null>(null);
  useEffect(() => {
    setCheckedQuestions([]);
  }, [lesson?.id, step]);
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
  const content = material[slug]?.[step] ?? lessonContent(lesson, step);
  const canYouQuestions = content.content.split("\n").filter(Boolean);
  const stepIndex = steps.indexOf(step);
  const lessonPath = `/learn/${level}/${unit}/${slug}`;
  const levelLessons = learningLessons.filter((item) => item.level === level);
  const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
  const isA1 = level === "a1";
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
  const examples = content.content.split("\n").filter(Boolean);

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
          <div
            className={`grid size-12 place-items-center rounded-xl ${
              isA1
                ? "bg-yellow-400 text-slate-900"
                : "bg-red-400 text-white [&_svg]:stroke-red-700"
            }`}
          >
            {icon}
          </div>
          <div>
            <span
              className={`text-xs font-black tracking-widest uppercase ${
                isA1 ? "text-amber-700" : "text-red-700 dark:text-red-400"
              }`}
            >
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
          <div className="my-6">
            <div className="min-h-32 rounded-2xl bg-slate-100 p-6 text-lg leading-relaxed text-slate-700 dark:bg-slate-700 dark:text-slate-100">
              {examples.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        ) : step === "try-it" ? (
          <TryItActivity lesson={lesson} isA1={isA1} />
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
                  className={`mt-1 size-5 shrink-0 ${
                    isA1 ? "accent-yellow-500" : "accent-red-500"
                  }`}
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
        {(step === "get-ready" || step === "can-you") && (
          <p className="m-0 rounded-xl border-2 border-slate-200 p-4 font-bold text-slate-500 dark:border-slate-600">
            {content.prompt}
          </p>
        )}
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
            variant={isA1 ? "answer" : "danger"}
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
            variant={isA1 ? "answer" : "danger"}
            className={`!size-11 !rounded-xl ${
              isA1 ? "disabled:!bg-yellow-300" : "disabled:!bg-red-400"
            }`}
          />
        </div>
      </nav>
    </main>
  );
}
