import {
  useEffect,
  useState,
  type ChangeEvent,
} from "react";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { Check, RotateCcw} from 'lucide-react';

import styles from "./FillInTheBlanks.module.css";

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
  exercise?: FillInTheBlanksExercise;
  showWordBank?: boolean;
  numbered?: boolean;
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
  exercise,
  showWordBank = true,
  numbered = true,
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
    <div className="line-break">
      <div>
        <b>
          <p>Fill in blanks with the correct answer.</p>
        </b>
        {exercise.description && <em className="display-block">{exercise.description}</em>}
      </div>
      {showWordBank && description && (
        <Card maxContent>
          <span>{description}</span>
        </Card>
      )}

      <div>
        {blocks.map((bs, bsIndex) => (
          <div
            key={bsIndex}
            className={bs.lineBreak ? styles.block : styles.inline}
          >
            {(bs.block || []).map((b, bIndex) => {
              const key = `${bsIndex}-${bIndex}`;

              const maxLength = b.blank
                ? Array.isArray(b.blank)
                  ? Math.max(...b.blank.map((a) => a.length))
                  : b.blank.length
                : 2;

              return (
                <div key={key} className={styles.inline}>
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
                        styles.blank,
                        checked && results[key] === true && styles.correct,
                        checked && results[key] === false && styles.incorrect,
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

      <div className="button-wrapper">
        <Button icon={<Check />} onClick={handleCheck} />
        <Button icon={<RotateCcw />} onClick={handleReset} />
      </div>
    </div>
  );
};
