import {
  useEffect,
  useState,
  type ChangeEvent,
} from "react";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { Check, RotateCcw} from 'lucide-react';


type FillBlankBlockItem = {
  text?: string;
  blank?: string | string[];
  placeholder?: string;
};

type FillBlankBlock = {
  lineBreak?: boolean;
  block?: FillBlankBlockItem[];
};

type FillInTheBlanksExercise = {
  description?: string;
  blocks?: FillBlankBlock[];
};

type FillInTheBlanksProps = {
  showWordBank?: boolean;
  instruction: string
  numbered?: boolean;
  exercise?: FillInTheBlanksExercise;
};

const shuffleItems = (items: string[]) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

const getWordBankItems = (
  descriptionText: string | undefined,
  blocks: FillBlankBlock[],
) => {
  if (typeof descriptionText === "string" && descriptionText.includes("•")) {
    return descriptionText
      .split("•")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return blocks.flatMap((bs) =>
    (bs.block || []).flatMap((b) => {
      if (!b.blank) return [];

      const word = Array.isArray(b.blank) ? b.blank[0] : b.blank;
      return typeof word === "string" && word.trim() ? [word] : [];
    }),
  );
};

const buildDescription = (
  descriptionText: string | undefined,
  blocks: FillBlankBlock[],
) => {
  const items = getWordBankItems(descriptionText, blocks);

  if (items.length === 0) {
    return typeof descriptionText === "string" ? descriptionText : "";
  }

  return shuffleItems(items).join(" • ");
};

export const FillInTheBlanks = ({
  showWordBank = true,
  instruction,
  numbered = true,
  exercise,
}: FillInTheBlanksProps) => {
  const descriptionText = exercise?.description;
  const rawBlocks = exercise?.blocks;
  const blocks = Array.isArray(rawBlocks) ? rawBlocks : [];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [description, setDescription] = useState<string>("");

  const normalizeAnswer = (value: string | undefined) =>
    String(value ?? "")
      .trim()
      .toLowerCase()
      .replaceAll("’", "'")
      .replaceAll("‘", "'");

  useEffect(() => {
    const nextBlocks = Array.isArray(rawBlocks) ? rawBlocks : [];
    setDescription(
      showWordBank ? buildDescription(descriptionText, nextBlocks) : "",
    );
  }, [descriptionText, rawBlocks, showWordBank]);

  if (!exercise || !rawBlocks) {
    return null;
  }

  const handleCheck = () => {
    let score = 0;
    const newResults: Record<string, boolean> = {};

    blocks.forEach((bs, bsIndex) => {
      (bs.block || []).forEach((b, bIndex) => {
        if (!b.blank) return;

        const key = `${bsIndex}-${bIndex}`;

        const user = normalizeAnswer(answers[key]);

        const correctAnswers = Array.isArray(b.blank)
          ? b.blank.map((a) => normalizeAnswer(a))
          : [normalizeAnswer(b.blank)];

        const isCorrect = correctAnswers.includes(user);
        newResults[key] = isCorrect;

        if (isCorrect) score++;
      });
    });

    setResults(newResults);
    setTotalScore(score);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setResults({});
    setChecked(false);
    setDescription(
      showWordBank ? buildDescription(descriptionText, blocks) : "",
    );
  };

  const totalBlanks = blocks.reduce((acc, bs) => {
    return acc + (bs.block || []).filter((b) => b.blank).length;
  }, 0);

  return (
    <div className="flex flex-col gap-4">
      {showWordBank && description && (
        <Card maxContent>
          <span>{description}</span>
        </Card>
      )}

      <div>
        <p className="font-bold mb-4">{instruction}</p>
        {blocks.map((bs, bsIndex) => (
          <div
            key={bsIndex}
            className={bs.lineBreak ? "block" : "inline"}
          >
            {(bs.block || []).map((b, bIndex) => {
              const key = `${bsIndex}-${bIndex}`;

              const maxLength = b.blank
                ? Array.isArray(b.blank)
                  ? Math.max(...b.blank.map((a) => a.length))
                  : b.blank.length
                : 2;

              return (
                <div key={key} className="inline">
                  {numbered && bIndex === 0 && <span>{bsIndex + 1}. </span>}
                  {b.text && <span>{b.text}</span>}
                  {b.blank && (
                    <input
                      type="text"
                      placeholder={b.placeholder}
                      value={answers[key] || ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      className={[
                        "font-mono text-[var(--gray-9)] box-content mx-[5px] mb-[2px] px-[4px] py-[2px] border border-[var(--slate-3)] rounded-[5px] bg-white",
                        "focus:outline-none focus:border-[var(--slate-4)]",
                        checked && results[key] === true && "border-[var(--green-5)] bg-[var(--green-1)]",
                        checked && results[key] === false && "border-[var(--red-5)] bg-[var(--red-1)]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      style={{ width: `${Math.max(maxLength, 2)}ch` }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <span>
        Score: {totalScore} out of {totalBlanks}
      </span>

      <div className="flex gap-2 mb-2">
        <Button icon={<Check />} onClick={handleCheck} />
        <Button icon={<RotateCcw />} onClick={handleReset} />
      </div>
    </div>
  );
};
