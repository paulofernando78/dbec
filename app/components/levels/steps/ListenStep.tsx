import { useState } from "react";
import { Check, Eye, EyeClosed, RotateCcw, Volume2, X } from "lucide-react";

import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import type { ListenData } from "@/data/levels/lesson-step-types";

export function ListenStep({ data }: { data: ListenData }) {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const isCorrect = answer === data.answer;

  const reset = () => {
    setAnswer("");
    setChecked(false);
    setShowAnswers(false);
  };

  return (
    <div className="mt-12 rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="mb-4 flex items-center gap-3 rounded-full bg-white p-4">
        <Audio src={data.audio} />
        <span className="h-1 flex-1 rounded bg-gray-400" />
        <Volume2 size={18} />
      </div>
      <div className="mb-4">
        {data.dialogue.map(([speaker, text]) => <p key={`${speaker}-${text}`}><b>{speaker}:</b> <mark className="rounded bg-amber-200 px-1">{text}</mark></p>)}
      </div>
      <fieldset>
        <legend className="mb-2 font-bold">{data.question}</legend>
        {data.options.map((option) => (
          <label key={option} className="mb-3 flex cursor-pointer items-center gap-3">
            <input
              type="radio"
              name="listen-answer"
              value={option}
              className="peer sr-only"
              checked={answer === option}
              onChange={() => {
                setAnswer(option);
                setChecked(false);
              }}
            />
            <span className="grid size-5 shrink-0 place-items-center rounded-full border-2 border-slate-500 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-slate-500">
              {answer === option && (
                <span className="size-3 rounded-full bg-slate-500" />
              )}
            </span>
            {option}
            {checked && answer === option &&
              (isCorrect ? (
                <Check className="text-green-600" size={18} />
              ) : (
                <X className="text-red-600" size={18} />
              ))}
          </label>
        ))}
      </fieldset>

      <div className="mt-4 flex gap-3">
        <Button
          ariaLabel="Check answer"
          icon={<Check />}
          onClick={() => setChecked(true)}
        />
        <Button
          ariaLabel="Reset answer"
          icon={<RotateCcw />}
          onClick={reset}
        />
      </div>

      <div className="mt-4">
        {data.followUp.map(({ question, answer: followUpAnswer }) => (
          <p key={question}>
            • {question}
            {showAnswers && <> — <b>{followUpAnswer}</b></>}
          </p>
        ))}
      </div>

      <div className="mt-3">
        <Button
          ariaLabel={showAnswers ? "Hide answers" : "Show answers"}
          icon={showAnswers ? <EyeClosed /> : <Eye />}
          onClick={() => setShowAnswers((current) => !current)}
        />
      </div>
    </div>
  );
}
