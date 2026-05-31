import { useEffect, useState, type ChangeEvent } from "react";

import { Button } from "@/components/ui/Button";

import { Check, Eye, EyeClosed, RotateCcw } from "lucide-react";

type UnscrambleBlock = {
  prompt: string;
  answer: string;
};

type UnscrambleExercise = {
  description?: string;
  items?: UnscrambleBlock[];
};

type UnscrambleProps = {
  showWordBank?: boolean;
  instruction: string;
  numbered?: boolean;
  exercise?: UnscrambleExercise;
};

export const Unscramble = ({
  showWordBank = true,
  instruction,
  numbered = true,
  exercise,
}: UnscrambleProps) => {
  const descriptionText = exercise?.description;
  const rawItems = exercise?.items;
  const items = Array.isArray(rawItems) ? rawItems : [];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [isShown, setIsShown] = useState(false)

  const normalizeAnswer = (value: string | undefined) =>
    String(value ?? "")
      .trim()
      .toLowerCase()
      .replaceAll("’", "'")
      .replaceAll("‘", "'");

  if (!exercise || !rawItems) {
    return null;
  }

  const handleCheck = () => {
    let score = 0;
    const newResults: Record<string, boolean> = {};
    items.forEach((item, index) => {
      const key = String(index);
      const user = normalizeAnswer(answers[key]);
      const correctAnswer = normalizeAnswer(item.answer);
      const isCorrect = user === correctAnswer;
      newResults[key] = isCorrect;
      if (isCorrect) score++;
    });
    setResults(newResults);
    setTotalScore(score);
    setChecked(true);
  };

  const handleShowAnswers = () => {
    setIsShown((prev) => !prev)
  }

  const handleReset = () => {
    setAnswers({});
    setResults({});
    setChecked(false);
  };

  const totalBlanks = items.length;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="font-bold mb-4">{instruction}</p>
        {items.map((item, index) => {
          const key = String(index);

          return (
            <div key={key} className="mb-4">
              <p>
                {numbered && `${index + 1}. `}
                {item.prompt}
              </p>

              <input
                type="text"
                value={answers[key] || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
                className={[
                  "font-mono text-gray-900 w-full mt-2 px-2 py-1 border rounded-lg",
                  "focus:outline-none focus:border-slate-400",
                  checked
                    ? results[key]
                      ? "border-green-200 bg-green-100"
                      : "border-red-200 bg-red-100"
                    : "border-slate-300 bg-white",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
              {isShown && <p className="text-sm"><em>{item.answer}</em></p>}
            </div>
          );
        })}
      </div>

      <span>
        Score: {totalScore} out of {totalBlanks}
      </span>

      <div className="flex gap-2 mb-2">
        <Button icon={<Check />} onClick={handleCheck} />
        <Button icon={isShown ? <EyeClosed /> : <Eye />} onClick={handleShowAnswers} />
        <Button icon={<RotateCcw />} onClick={handleReset} />
      </div>
    </div>
  );
};
