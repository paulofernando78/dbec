import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import type { ListenData } from "@/data/course/lesson-step-types";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";

export function ListenStep({ data }: { data: ListenData }) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="space-y-4 rounded-2xl bg-[var(--surface)] p-4">
      {data.image ? (
        <Image
          src={data.image}
          alt={data.imageAlt ?? "Listening context"}
          className="aspect-video object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label="Listening image placeholder"
          className="grid aspect-video w-full place-items-center rounded-lg bg-linear-to-r from-slate-300 via-slate-200 to-slate-300 text-sm font-bold uppercase text-slate-500"
        >
          Listen image placeholder
        </div>
      )}
      <section className="rounded-xl bg-[var(--background)] p-4">
        <Dialogue
          instruction={data.instruction}
          audioSrc={data.audio}
          lines={data.dialogue.map(([speaker, line]) => ({ speaker, line }))}
        />
      </section>

      <section className="rounded-xl bg-[var(--background)] p-4">
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
          {data.followUp.map(({ question, answer: followUpAnswer }, index) => (
            <p key={question}>
              <span className="font-black">{index + 1}.</span> {question}
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
