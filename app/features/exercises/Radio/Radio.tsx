import { useState, type ChangeEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";

import { Check, RotateCcw } from "lucide-react";

type RadioOption = {
  option?: string;
  isCorrect?: boolean;
};

type RadioQuestion = {
  question?: string;
  options?: RadioOption[];
  imgSrc?: string;
  imgAlt?: string;
};

type RadioExercise = {
  description?: string;
  questions?: RadioQuestion[];
};

type RadioProps = {
  instruction?: string;
  exercise?: RadioExercise;
  score?: boolean;
};

export const Radio = ({
  instruction,
  exercise = {},
  score = true,
}: RadioProps) => {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const questions = Array.isArray(exercise.questions) ? exercise.questions : [];

  const handleCheck = () => {
    let score = 0;
    questions.forEach((question, qIndex) => {
      const selectedOptionIndex = selected[qIndex];
      if (selectedOptionIndex === undefined) return;
      const selectedOption = question.options?.[selectedOptionIndex];
      if (selectedOption?.isCorrect) {
        score++;
      }
    });

    setTotalScore(score);
    setChecked(true);
  };

  const handleReset = () => {
    setSelected({});
    setChecked(false);
    setTotalScore(0);
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      {instruction && <p className="font-bold">{instruction}</p>}
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="flex items-start gap-4">
          {q.imgSrc && (
            <div>
              <Image
                src={q.imgSrc}
                alt={q.imgAlt ?? ""}
                width={200}
                height={200}
                // className="object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <p className="mb-px">
              {qIndex + 1}. {q.question}
            </p>

            {(q.options || []).map((opt, optIndex) => {
              const isActive = selected[qIndex] === optIndex;
              const isChecked = checked;
              const isDisabled = checked;
              const isWrong = isChecked && isActive && !opt.isCorrect;
              const isCorrect = isChecked && isActive && opt.isCorrect;

              return (
                <label key={optIndex} className="flex gap-1.25 mt-1.75 mr-1.25">
                  <input
                    className="hidden"
                    type="radio"
                    name={`radio-${qIndex}`}
                    checked={selected[qIndex] === optIndex}
                    disabled={checked}
                    onChange={(_e: ChangeEvent<HTMLInputElement>) =>
                      setSelected((prev) => ({
                        ...prev,
                        [qIndex]: optIndex,
                      }))
                    }
                  />

                  <span
                    className={[
                      "relative min-w-5 h-5 border border-gray-5 rounded-full",
                      isDisabled &&
                        "pointer-events-none opacity-50 grayscale-40",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {selected[qIndex] === optIndex && (
                      <span
                        className={[
                          "absolute left-1/2 top-1/2 w-3.25 h-3.25 rounded-full -translate-x-1/2 -translate-y-1/2",
                          isCorrect
                            ? "bg-green-700"
                            : isWrong
                              ? "bg-red-700"
                              : "bg-gray-500",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      />
                    )}
                  </span>

                  {opt.option}
                </label>
              );
            })}
          </div>
        </div>
      ))}
      {score && (
        <span>
          Score: {totalScore} out of {questions.length}
        </span>
      )}

      <div className="flex gap-2 mb-2">
        <Button variant="check" icon={<Check />} onClick={handleCheck} />
        <Button variant="reset" icon={<RotateCcw />} onClick={handleReset} />
      </div>
    </div>
  );
};
