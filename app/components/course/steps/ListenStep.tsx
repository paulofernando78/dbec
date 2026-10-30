import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Image } from "@/components/ui/Image";
import type { ListenData } from "@/data/course/lesson-step-types";
import { Dialogue } from "@/features/Dialogue";
import { Radio } from "@/features/exercises/Radio";

export function ListenStep({ data }: { data: ListenData }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [showExtraConversation, setShowExtraConversation] = useState(false);
  const extraDialogueSpeech = data.extraDialogue?.dialogue
    .map(([, line]) =>
      line
        .map((part) => (typeof part === "string" ? part : (part.part ?? "")))
        .join("")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean)
    .join(" ");

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
      </section>

      <section className="rounded-xl bg-[var(--background)] p-4">
        <div>
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

      {data.extraDialogue && (
        <section className="rounded-xl bg-[var(--background)] p-4">
          <h4 className="mb-4 font-bold">{data.extraDialogue.instruction}</h4>

          <AudioPlayer
            src={data.extraDialogue.audio}
            fallbackText={extraDialogueSpeech}
            ariaLabel="Play second dialogue"
          />

          <div className="mt-4">
            <h4 className="mb-2 font-bold">
              {data.extraDialogue.questionInstruction}
            </h4>
            {data.extraDialogue.questions.map((question, index) => (
              <p key={question}>
                <span className="font-black">{index + 1}.</span> {question}
              </p>
            ))}
          </div>

          <div className="mt-3">
            <Button
              ariaLabel={
                showExtraConversation
                  ? "Hide second conversation"
                  : "Show second conversation"
              }
              pressed={showExtraConversation}
              icon={showExtraConversation ? <EyeClosed /> : <Eye />}
              onClick={() =>
                setShowExtraConversation((current) => !current)
              }
            />
          </div>

          {showExtraConversation && (
            <div className="mt-4 space-y-3 rounded-xl bg-[var(--surface)] p-4">
              {data.extraDialogue.dialogue.map(([speaker, line], index) => (
                <p key={`${speaker}-${index}`}>
                  <b className="rounded-lg border border-gray-400 px-1 py-1">
                    {speaker}
                  </b>{" "}
                  <InlineRichContent value={line} />
                </p>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
