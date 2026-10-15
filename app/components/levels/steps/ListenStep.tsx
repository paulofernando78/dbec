import { useState } from "react";
import { Check, Eye, EyeClosed, RotateCcw, X } from "lucide-react";

import { InlineRichContent } from "@/components/content/InlineRichContent";
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
    <div className="mt-12 space-y-4">
      <section className="rounded-2xl bg-gray-200 p-4">
        <h3 className="mb-4 font-bold">{data.instruction}</h3>
        <audio
          controls
          preload="metadata"
          src={data.audio}
          className="mb-4 w-full"
        />
        <div>
          {data.dialogue.map(([speaker, text], index) => (
            <p key={`${speaker}-${index}`}>
              <b>{speaker}:</b> <InlineRichContent value={text} />
            </p>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-gray-200 p-4">
        <h3 className="mb-4 font-bold">{data.questionInstruction}</h3>
        <fieldset>
          <legend className="mb-2 font-bold">{data.question}</legend>
          {data.options.map((option) => (
            <label
              key={option}
              className="mb-3 flex cursor-pointer items-center gap-3"
            >
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
              {checked &&
                answer === option &&
                (isCorrect ? (
                  <Check className="text-green-600" size={18} />
                ) : (
                  <X className="text-red-600" size={18} />
                ))}
            </label>
          ))}
        </fieldset>

        <div className="flex gap-3">
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
              <span className="font-black">•</span> {question}
              {showAnswers && (
                <>
                  {" "}
                  — <b>{followUpAnswer}</b>
                </>
              )}
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
      </section>
    </div>
  );
}
