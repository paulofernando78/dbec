import { useState } from "react";

import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import type { LanguageFocusData } from "@/data/levels/lesson-step-types";

type Language = "us" | "uk" | "pt";

const languages: { id: Language; label: string }[] = [
  { id: "us", label: "US" },
  { id: "uk", label: "UK" },
  { id: "pt", label: "PT" },
];

export function LanguageFocusStep({ data }: { data: LanguageFocusData }) {
  const [language, setLanguage] = useState<Language>("us");

  return (
    <div className="rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>

      <div className="mb-4 flex gap-2" aria-label="Audio language">
        {languages.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={language === id}
            onClick={() => setLanguage(id)}
            className={`min-w-12 cursor-pointer rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${
              language === id
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-300 bg-gray-100 text-slate-600 hover:bg-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {data.items.map(
          ([title, meaning, pronunciation, form, audio, translationPt]) => {
            const isPortuguese = language === "pt";
            const spokenText = isPortuguese ? translationPt ?? title : title;
            const audioSource = isPortuguese
              ? spokenText
              : audio?.[language] ?? title;
            const speechLang =
              language === "pt" ? "pt-BR" : language === "uk" ? "en-GB" : "en-US";

            return (
              <article
                key={title}
                className="rounded-xl border border-gray-300 p-4"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Button
                    ariaLabel={`Play ${spokenText}`}
                    icon={
                      <Audio
                        key={`${language}-${audioSource}`}
                        src={audioSource}
                        speechLang={speechLang}
                        wrapperClassName="size-full items-center justify-center"
                      />
                    }
                  />
                  <h4 className="text-xl font-black">
                    {title}
                    {isPortuguese && translationPt ? (
                      <span className="font-normal text-slate-500">
                        {" "}— {translationPt}
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
