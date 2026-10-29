import { useState } from "react";

import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { LanguageFocusData } from "@/data/course/lesson-step-types";
import { GrammarTopicCards } from "@/features/Grammar";
import { VocabularyTopicCards } from "@/features/Vocabulary";

type Accent = "us" | "uk";

const accents: { id: Accent; label: string }[] = [
  { id: "us", label: "US" },
  { id: "uk", label: "UK" },
];

export function LanguageFocusStep({ data }: { data: LanguageFocusData }) {
  const [accent, setAccent] = useState<Accent>("us");
  const [showPortuguese, setShowPortuguese] = useState(false);

  return (
    <div className="rounded-2xl bg-[var(--surface)] p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>

      <div
        className="mb-4 flex gap-2"
        aria-label="Pronunciation and translation options"
      >
        {accents.map(({ id, label }) => (
          <Button
            key={id}
            pressed={accent === id}
            onClick={() => setAccent(id)}
            className={
              accent === id ? "ring-2 ring-blue-500 text-blue-700!" : ""
            }
          >
            {label}
          </Button>
        ))}

        <Button
          pressed={showPortuguese}
          onClick={() => setShowPortuguese((current) => !current)}
          className={
            showPortuguese ? "ring-2 ring-blue-500 text-blue-700!" : ""
          }
        >
          PT
        </Button>
      </div>

      <div className="grid gap-4">
        {data.items.map(
          ([title, meaning, pronunciation, form, audio, translationPt, group], index) => {
            const previousGroup = index > 0 ? data.items[index - 1]?.[6] : undefined;
            const titleText =
              typeof title === "string"
                ? title
                : title
                    .map((part) =>
                      typeof part === "string" ? part : (part.part ?? ""),
                    )
                    .join("");
            const audioSource = audio?.[accent] ?? titleText;
            const speechLang = accent === "uk" ? "en-GB" : "en-US";

            return (
              <div key={titleText} className="grid gap-2">
                {group && group !== previousGroup && (
                  <h4 className="text-lg font-black">{group}</h4>
                )}
                <article className="rounded-xl bg-[var(--background)] p-4">
                <div className="mb-2 flex items-center gap-3">
                  <Audio
                    asButton
                    ariaLabel={`Play ${titleText}`}
                    key={`${accent}-${audioSource}`}
                    src={audioSource}
                    fallbackText={titleText}
                    speechLang={speechLang}
                    className="stroke-0!"
                    wrapperClassName="shrink-0"
                  />
                  <h4
                    className={`text-xl ${typeof title === "string" ? "font-black" : "font-normal"}`}
                  >
                    <InlineRichContent value={title} />
                    {showPortuguese && translationPt ? (
                      <span className="font-normal text-slate-500">
                        {" "}
                        — {translationPt}
                      </span>
                    ) : null}
                  </h4>
                </div>
                <p>
                  <b>Meaning:</b> {meaning}
                </p>
                <p>
                  <b>Pronunciation:</b>{" "}
                  <span className="text-blue-500">{pronunciation}</span>
                </p>
                <p>
                  <b>Form:</b> {form}
                </p>
                </article>
              </div>
            );
          },
        )}
      </div>
      {data.relatedGrammar?.length ? (
        <section className="mt-6" aria-label="Related grammar">
          <h3 className="mb-4 text-lg font-black">Related grammar</h3>
          <GrammarTopicCards topicIds={data.relatedGrammar} />
        </section>
      ) : null}
      {data.relatedVocabulary?.length ? (
        <section className="mt-6" aria-label="Related vocabulary">
          <h3 className="mb-4 text-lg font-black">Related vocabulary</h3>
          <VocabularyTopicCards topicIds={data.relatedVocabulary} />
        </section>
      ) : null}
    </div>
  );
}
