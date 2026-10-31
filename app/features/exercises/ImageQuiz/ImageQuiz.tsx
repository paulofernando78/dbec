import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Audio } from "@/components/ui/Audio";
import { Phonetics } from "@/components/content/Phonetics";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";
import { shuffle } from "@/utils/shuffle";

import { RotateCcw } from "lucide-react";

export type ImageQuizOption = {
  option: string;
  isCorrect?: boolean;
};

export type ImageQuizQuestion = {
  word: string;
  imgSrc: string;
  imgAlt?: string;
  question?: string;
  options: ImageQuizOption[];
};

export type ImageQuizWord = {
  word: string;
  img?: number;
};

export type ImageQuizProps = {
  questions?: ImageQuizQuestion[];
  words?: ImageQuizWord[];
};

export const ImageQuiz = ({
  questions: explicitQuestions = [],
  words = [],
}: ImageQuizProps) => {
  const explicitQuestionsSignature = JSON.stringify(explicitQuestions);
  const wordsSignature = JSON.stringify(words);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [meaning, setMeaning] = useState<string>("");
  const [optionPhonetics, setOptionPhonetics] = useState<
    Record<string, string>
  >({});
  const [generatedQuestions, setGeneratedQuestions] = useState<
    ImageQuizQuestion[]
  >([]);
  const restartButtonRef = useRef<HTMLDivElement | null>(null);
  const feedbackTimeoutRef = useRef<number | null>(null);
  const celebratedRef = useRef(false);

  const questions = explicitQuestions.length
    ? explicitQuestions
    : generatedQuestions;

  const currentQuestion = questions[currentIndex];
  const completedQuestions = Math.min(
    questions.length,
    currentIndex + (isCorrect ? 1 : 0),
  );
  const progressPercentage = questions.length
    ? (completedQuestions / questions.length) * 100
    : 0;

  useEffect(
    () => () => {
      if (feedbackTimeoutRef.current) {
        window.clearTimeout(feedbackTimeoutRef.current);
      }
    },
    [],
  );

  useEffect(() => {
    if (!completed) {
      celebratedRef.current = false;
      return;
    }

    if (celebratedRef.current) return;
    celebratedRef.current = true;

    const frame = window.requestAnimationFrame(async () => {
      const buttonRect = restartButtonRef.current?.getBoundingClientRect();
      if (!buttonRect) return;

      const { default: confetti } = await import("@hiseb/confetti");

      confetti({
        position: {
          x: buttonRect.left + buttonRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2,
        },
        count: 140,
        size: 1,
        velocity: 220,
        fade: false,
        color: [
          "#22c55e",
          "#3b82f6",
          "#eab308",
          "#f97316",
          "#a855f7",
        ],
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [completed]);

  useEffect(() => {
    if (explicitQuestions.length || !words.length) {
      setGeneratedQuestions([]);
      return;
    }

    let active = true;

    const generateQuestions = async () => {
      const entries = await Promise.all(
        words.map(({ word }) => loadDictionaryWord(word)),
      );

      const nextQuestions = words.flatMap((item, index) => {
        const dictionaryEntry = entries[index];
        const image = dictionaryEntry?.imgs?.[item.img ?? 0];
        if (!image?.src) return [];

        const optionCount = Math.min(8, words.length);
        const distractorIndexes = shuffle(
          words
            .map((_, wordIndex) => wordIndex)
            .filter((wordIndex) => wordIndex !== index),
        ).slice(0, optionCount - 1);
        const optionIndexes = shuffle([index, ...distractorIndexes]);

        return [
          {
            word: item.word,
            imgSrc: `/media/images/dictionary/${item.word[0].toLowerCase()}/${image.src}`,
            imgAlt: image.alt ?? item.word,
            options: optionIndexes.map((wordIndex) => ({
              option: words[wordIndex].word,
              isCorrect: wordIndex === index,
            })),
          },
        ];
      });

      if (active) {
        setCurrentIndex(0);
        setGeneratedQuestions(shuffle(nextQuestions));
      }
    };

    generateQuestions();

    return () => {
      active = false;
    };
  }, [explicitQuestions.length, wordsSignature]);

  useEffect(() => {
    let active = true;

    const loadMeaning = async () => {
      if (!currentQuestion?.word) {
        setMeaning("");
        return;
      }

      const dictionaryEntry = await loadDictionaryWord(currentQuestion.word);
      if (active) setMeaning(dictionaryEntry?.enDefinition ?? "");
    };

    loadMeaning();

    return () => {
      active = false;
    };
  }, [currentQuestion?.word]);

  useEffect(() => {
    let active = true;

    const loadOptionPhonetics = async () => {
      const entries = await Promise.all(
        (currentQuestion?.options ?? []).map(async ({ option }) => {
          const dictionaryEntry = await loadDictionaryWord(option);
          return [option.toLowerCase(), dictionaryEntry?.phonetics ?? ""] as const;
        }),
      );

      if (active) setOptionPhonetics(Object.fromEntries(entries));
    };

    loadOptionPhonetics();

    return () => {
      active = false;
    };
  }, [currentQuestion?.word, explicitQuestionsSignature]);

  useEffect(() => {
    if (!isCorrect) return;

    const timeout = window.setTimeout(() => {
      if (currentIndex === questions.length - 1) {
        setCompleted(true);
        return;
      }

      setCurrentIndex((index) => index + 1);
      setSelectedIndex(null);
      setIsCorrect(false);
    }, 1300);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, isCorrect, questions.length]);

  const selectOption = (optionIndex: number) => {
    if (isCorrect) return;

    setSelectedIndex(optionIndex);
    setIsCorrect(Boolean(currentQuestion.options[optionIndex]?.isCorrect));
    setIsFeedbackVisible(true);

    if (feedbackTimeoutRef.current) {
      window.clearTimeout(feedbackTimeoutRef.current);
    }
    feedbackTimeoutRef.current = window.setTimeout(() => {
      setIsFeedbackVisible(false);
    }, 1400);
  };

  const reset = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsCorrect(false);
    setIsFeedbackVisible(false);
    setCompleted(false);
  };

  if (!currentQuestion) return null;

  return (
    <div className="mb-4">
      <p className="mb-4 font-bold">
        Look at the pictures. Describe what you see.
      </p>

      {completed ? (
        <div className="flex flex-col items-center gap-4 rounded-lg border border-gray-300 p-6">
          <p className="font-bold text-green-700">
            Great job! You completed all {questions.length} questions.
          </p>
          <div ref={restartButtonRef}>
            <Button variant="reset" icon={<RotateCcw />} onClick={reset} />
          </div>
        </div>
      ) : (
        <>
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-300 bg-white">
                <img
                  src={currentQuestion.imgSrc}
                  alt={currentQuestion.imgAlt ?? ""}
                  className="block h-full w-full object-contain"
                />
                {selectedIndex !== null && isFeedbackVisible && (
                  <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/10 p-4 backdrop-blur-[1px]">
                    <div
                      className={`flex items-center gap-2 rounded-full bg-[var(--surface)] px-5 py-3 text-lg font-black shadow-2xl ring-1 ${
                        isCorrect
                          ? "text-green-700 ring-green-300"
                          : "text-red-700 ring-red-300"
                      }`}
                    >
                      <span>{isCorrect ? "Correct!" : "Try again."}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <div className="mb-1.5 flex justify-end text-sm font-semibold text-slate-500">
                  <span>
                    {completedQuestions} of {questions.length} completed
                  </span>
                </div>
                <div
                  role="progressbar"
                  aria-label="Quiz progress"
                  aria-valuemin={0}
                  aria-valuemax={questions.length}
                  aria-valuenow={completedQuestions}
                  className="h-2.5 overflow-hidden rounded-full bg-slate-200"
                >
                  <div
                    className="h-full rounded-full bg-green-500 transition-[width] duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {meaning && (
                <p className="mt-3 rounded-lg border border-gray-300 p-3">
                  <strong>Meaning:</strong> {meaning}
                </p>
              )}
            </div>

            <div className="min-w-0">
              <p className="mb-4 font-semibold">
                {currentQuestion.question ?? "Which word matches the picture?"}
              </p>

              <div className="flex flex-col items-start gap-2">
                {currentQuestion.options.map((option, optionIndex) => {
                  const isSelected = selectedIndex === optionIndex;
                  const selectedCorrect = isSelected && option.isCorrect;
                  const selectedWrong = isSelected && !option.isCorrect;

                  return (
                    <Button
                      key={`${option.option}-${optionIndex}`}
                      ariaLabel={`Choose ${option.option}`}
                      pressed={isSelected}
                      onClick={() => selectOption(optionIndex)}
                      icon={
                        <Audio
                          src={option.option}
                          fallbackText={option.option}
                          ariaLabel={`Play ${option.option}`}
                          wrapperClassName="grid size-8 shrink-0 place-items-center text-[var(--button-icon)]"
                        />
                      }
                      className={[
                        "h-auto! min-h-18! w-full! min-w-0! justify-start! rounded-xl! p-[3px]! text-left! [&>span]:h-full! [&>span]:w-full! [&>span]:place-items-stretch! [&>span]:rounded-lg! [&>span]:px-4! [&>span]:py-3! [&>span>span]:w-full!",
                        selectedCorrect
                          ? "border-green-600! ring-2 ring-green-300"
                          : selectedWrong
                            ? "border-red-600! ring-2 ring-red-300"
                            : "hover:brightness-[1.03]",
                      ].join(" ")}
                    >
                      <span className="flex min-w-0 flex-1 flex-col items-start justify-center">
                        <span>{option.option}</span>
                        {optionPhonetics[option.option.toLowerCase()] && (
                          <Phonetics>
                            {optionPhonetics[option.option.toLowerCase()]}
                          </Phonetics>
                        )}
                      </span>
                    </Button>
                  );
                })}
              </div>

              <span className="sr-only" aria-live="polite">
                {selectedIndex !== null
                  ? isCorrect
                    ? "Correct!"
                    : "Try again."
                  : ""}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
