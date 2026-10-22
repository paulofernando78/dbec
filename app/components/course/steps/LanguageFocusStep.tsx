import { useState } from "react";

import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import type { LanguageFocusData } from "@/data/course/lesson-step-types";

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
          ([title, meaning, pronunciation, form, audio, translationPt]) => {
            const audioSource = audio?.[accent] ?? title;
            const speechLang = accent === "uk" ? "en-GB" : "en-US";

            return (
              <article
                key={title}
                className="rounded-xl bg-[var(--background)] p-4"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Button
                    ariaLabel={`Play ${title}`}
                    className="shrink-0"
                    icon={
                      <Audio
                        key={`${accent}-${audioSource}`}
                        src={audioSource}
                        speechLang={speechLang}
                        className="stroke-0!"
                        wrapperClassName="size-full items-center justify-center"
                      />
                    }
                  />
                  <h4 className="text-xl font-black">
                    {title}
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
            );
          },
        )}
      </div>
    </div>
  );
}
