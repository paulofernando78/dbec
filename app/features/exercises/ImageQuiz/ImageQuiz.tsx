import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";

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

export type ImageQuizProps = {
  instruction?: string;
  questions?: ImageQuizQuestion[];
};

export const ImageQuiz = ({
  instruction,
  questions = [],
}: ImageQuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [meaning, setMeaning] = useState<string>("");

  const currentQuestion = questions[currentIndex];

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
    if (!isCorrect) return;

    const timeout = window.setTimeout(() => {
      if (currentIndex === questions.length - 1) {
        setCompleted(true);
        return;
      }

      setCurrentIndex((index) => index + 1);
      setSelectedIndex(null);
      setIsCorrect(false);
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, isCorrect, questions.length]);

  const selectOption = (optionIndex: number) => {
    if (isCorrect) return;

    setSelectedIndex(optionIndex);
    setIsCorrect(Boolean(currentQuestion.options[optionIndex]?.isCorrect));
  };

  const reset = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setIsCorrect(false);
    setCompleted(false);
  };

  const goToQuestion = (index: number) => {
    setCurrentIndex(index);
    setSelectedIndex(null);
    setIsCorrect(false);
    setCompleted(false);
  };

  if (!currentQuestion) return null;

  return (
    <div className="mb-4">
      {instruction && <p className="mb-4 font-bold">{instruction}</p>}

      {completed ? (
        <div className="flex flex-col items-center gap-4 rounded-lg border border-green-700 p-6">
          <p className="font-bold text-green-700">
            Great job! You completed all {questions.length} questions.
          </p>
          <Button variant="reset" icon={<RotateCcw />} onClick={reset} />
        </div>
      ) : (
        <>
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div>
              <div className="mb-4 flex justify-center gap-2">
                {questions.map((question, index) => (
                  <button
                    key={`${question.word}-${index}`}
                    type="button"
                    aria-label={`Question ${index + 1}`}
                    aria-current={currentIndex === index ? "step" : undefined}
                    onClick={() => goToQuestion(index)}
                    className={`
                      aspect-square
                      w-[1.6rem]
                      cursor-pointer
                      rounded-[5px]
                      border
                      border-slate-400
                      text-[0.9rem]
                      ${currentIndex === index ? "bg-slate-300" : "bg-slate-100"}
                    `}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="aspect-square w-full overflow-hidden rounded-lg border border-gray-300 bg-white p-2">
                <img
                  src={currentQuestion.imgSrc}
                  alt={currentQuestion.imgAlt ?? ""}
                  className="block h-full w-full object-contain"
                />
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
                    <button
                      key={`${option.option}-${optionIndex}`}
                      type="button"
                      disabled={isCorrect}
                      onClick={() => selectOption(optionIndex)}
                      className={[
                        "w-full cursor-pointer rounded-lg border p-3 text-left transition-colors",
                        selectedCorrect
                          ? "border-green-700 bg-green-50 text-green-800"
                          : selectedWrong
                            ? "border-red-700 bg-red-50 text-red-800"
                            : "border-gray-300 hover:bg-gray-50",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {option.option}
                    </button>
                  );
                })}
              </div>

              {selectedIndex !== null && (
                <p
                  className={`mt-3 font-medium ${
                    isCorrect ? "text-green-700" : "text-red-700"
                  }`}
                  aria-live="polite"
                >
                  {isCorrect ? "Correct!" : "Try again."}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
