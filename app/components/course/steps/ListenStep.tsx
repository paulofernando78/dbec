import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { ListenData } from "@/data/course/lesson-step-types";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";

export function ListenStep({ data }: { data: ListenData }) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="space-y-4">
      <section className="rounded-2xl bg-gray-200 p-4">
        <Dialogue
          instruction={data.instruction}
          audioSrc={data.audio}
          lines={data.dialogue.map(([speaker, line]) => ({ speaker, line }))}
        />
      </section>

      <section className="rounded-2xl bg-gray-200 p-4">
        <Radio
          instruction={data.questionInstruction}
          score={false}
          exercise={{
            questions: [
              {
                question: data.question,
                options: data.options.map((option) => ({
                  option,
                  isCorrect: option === data.answer,
                })),
              },
            ],
          }}
        />

        <div className="mt-4">
          {data.followUpInstruction && (
            <h4 className="mb-2 font-bold">{data.followUpInstruction}</h4>
          )}
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
