import {
  useState,
  type ChangeEvent,
} from "react";


import { Button } from "@/components/ui/Button";

import { Check, RotateCcw} from 'lucide-react';

import styles from "./Radio.module.css";

type RadioOption = {
  option?: string;
  isCorrect?: boolean;
};

type RadioQuestion = {
  question?: string;
  options?: RadioOption[];
};

type RadioExercise = {
  description?: string;
  questions?: RadioQuestion[];
};

type RadioProps = {
  exercise?: RadioExercise;
  score?: boolean;
};

export const Radio = ({
  exercise = {},
  score = true,
}: RadioProps) => {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const questions = Array.isArray(exercise.questions)
    ? exercise.questions
    : [];

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
    <div className="line-break">
      <div>
        <b>
          <p>Choose the correct answer.</p>
        </b>
        {exercise.description && <em className="display-block">{exercise.description}</em>}
      </div>
      {questions.map((q, qIndex) => (
        <div key={qIndex}>
          <p className={styles.question}>{qIndex + 1}. {q.question}</p>

          {(q.options || []).map((opt, optIndex) => {
            const isActive = selected[qIndex] === optIndex;
            const isChecked = checked;
            const isDisabled = checked;
            const isWrong = isChecked && isActive && !opt.isCorrect;
            const isCorrect = isChecked && isActive && opt.isCorrect;

            return (
              <label key={optIndex} className={styles.label}>
                <input
                  className={styles.input}
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
                    styles.radio,
                    isActive && styles.radioActive,
                    isCorrect && styles.radioGreen,
                    isWrong && styles.radioRed,
                    isDisabled && styles.radioDisabled,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {selected[qIndex] === optIndex && (
                    <span className={styles.radioInner} />
                  )}
                </span>

                {opt.option}
              </label>
            );
          })}
        </div>
      ))}
      {score && (
        <span>
          Score: {totalScore} out of {questions.length}
        </span>
      )}

      <div className="button-wrapper">
        <Button icon={<Check />} onClick={handleCheck} />
        <Button icon={<RotateCcw />} onClick={handleReset} />
      </div>
    </div>
  );
};
