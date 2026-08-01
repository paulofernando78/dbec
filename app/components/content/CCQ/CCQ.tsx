import { useState } from "react";

import { Line } from "../Line";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

import type { RichContent } from "@/helpers/content";

import { Check, CircleQuestionMark, RotateCcw } from "lucide-react";

export type CCQ = {
  display?: "block" | "inline";
  as?: "p" | "span";
  parts: RichContent;
  options?: {
    option: string;
    isCorrect?: boolean;
  }[];
};

export type CCQProps = {
  value?: CCQ[];
};

export const CCQ = ({ value = [] }: CCQProps) => {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const questions = value.filter((question) => question.options?.length);

  const handleCheck = () => {
    const score = value.reduce((total, question, questionIndex) => {
      const selectedOptionIndex = selected[questionIndex];
      const selectedOption = question.options?.[selectedOptionIndex];

      return total + (selectedOption?.isCorrect ? 1 : 0);
    }, 0);

    setTotalScore(score);
    setChecked(true);
  };

  const handleReset = () => {
    setSelected({});
    setChecked(false);
    setTotalScore(0);
  };

  return (
    <Card className="bg-amber-100 border mb-4">
      <div className="flex gap-2">
        <CircleQuestionMark className="text-gray-400" />
        <span className="block mb-4 relative top-0.5">
          <b>Concept Checking Question!</b>
        </span>
      </div>
      {value.map((note, index) => {
        const selectedIndex = selected[index];

        return (
          <div key={index} className="mb-3 last:mb-0">
            <Line
              display={note.display ?? "block"}
              as={note.as}
              value={note.parts}
            />

            {note.options && (
              <div className="mt-1 flex flex-col items-start pl-1">
                {note.options.map((option, optionIndex) => {
                  const isActive = selectedIndex === optionIndex;
                  const isWrong = checked && isActive && !option.isCorrect;
                  const isCorrect = checked && isActive && option.isCorrect;

                  return (
                    <label
                      key={`${option.option}-${optionIndex}`}
                      className="flex gap-1.25 mt-1.75 mr-1.25"
                    >
                      <input
                        className="hidden"
                        type="radio"
                        name={`ccq-${index}`}
                        checked={isActive}
                        disabled={checked}
                        onChange={() =>
                          setSelected((current) => ({
                            ...current,
                            [index]: optionIndex,
                          }))
                        }
                      />

                      <span
                        className={[
                          "relative min-w-5 h-5 border border-gray-5 rounded-full",
                          checked &&
                            "pointer-events-none opacity-50 grayscale-40",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {isActive && (
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

                      {option.option}
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {questions.length > 0 && (
        <>
          <span>
            Score: {totalScore} out of {questions.length}
          </span>

          <div className="flex gap-2 mt-2">
            <Button variant="check" icon={<Check />} onClick={handleCheck} />
            <Button
              variant="reset"
              icon={<RotateCcw />}
              onClick={handleReset}
            />
          </div>
        </>
      )}
    </Card>
  );
};
