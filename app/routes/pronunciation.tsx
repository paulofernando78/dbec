import { Fragment } from "react";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Phonetics } from "@/components/content/Phonetics";
import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  phoneticSections,
  pronunciationSections,
  type PronunciationItem,
} from "@/data/pronunciation";
import type { RichContent } from "@/helpers/content";

export function meta() {
  return [{ title: "Pronunciation | Daily Basis English Course" }];
}

const toPlainText = (value: string | RichContent | undefined) =>
  Array.isArray(value)
    ? value
        .map((part) => (typeof part === "string" ? part : part.part ?? ""))
        .join("")
    : value ?? "";

function PhoneticSoundGrid({
  sounds,
}: {
  sounds: readonly { phoneme: string; audio: string }[];
}) {
  if (sounds.length === 0) {
    return <p className="p-4 text-slate-500">No audio files available yet.</p>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,60px)] justify-center gap-3">
      {sounds.map(({ phoneme, audio }) => (
        <Audio
          key={phoneme}
          src={audio}
          ariaLabel={`Play ${phoneme}`}
          showIcon={false}
          wrapperClassName="w-[60px]! min-w-[60px]!"
        >
          <span className="text-base font-medium leading-none">
            <Phonetics>{phoneme}</Phonetics>
          </span>
        </Audio>
      ))}
    </div>
  );
}

function PronunciationRow({ item }: { item: PronunciationItem }) {
  const phonemes = item.phoneme
    ? Array.isArray(item.phoneme)
      ? item.phoneme
      : item.phoneme.split(/\s*\+\s*/)
    : [];
  const audioSources = Array.isArray(item.audio)
    ? item.audio
    : item.audio
      ? [item.audio]
      : [];
  const audioSource =
    audioSources[0] ?? phonemes[0] ?? toPlainText(item.english) ?? "";
  const audioLabel =
    toPlainText(item.english) || phonemes.join(" + ") || "pronunciation";

  if (phonemes.length > 0) {
    return (
      <li className="flex min-h-[68px] flex-wrap items-center gap-3">
        {phonemes.map((phoneme, index) => (
          <Fragment key={`${phoneme}-${index}`}>
            {index > 0 && (
              <Plus
                aria-hidden="true"
                size={18}
                strokeWidth={4}
                className="shrink-0 text-[var(--button-icon)]"
              />
            )}
            <Audio
              ariaLabel={`Play ${phoneme}`}
              src={audioSources[index] ?? phoneme}
              showIcon={false}
              wrapperClassName="w-[60px]! min-w-[60px]!"
            >
              <Phonetics>{phoneme}</Phonetics>
            </Audio>
          </Fragment>
        ))}
      </li>
    );
  }

  return (
    <li className="flex min-h-[68px] items-center gap-3">
      <Audio
        asButton
        ariaLabel={`Play ${audioLabel}`}
        src={audioSource}
        className="size-6!"
      />
      <p className="min-w-0 text-sm leading-6 md:text-base">
        <span className="text-black">
          <InlineRichContent value={item.english ?? ""} />
        </span>{" "}
        <span className="text-slate-500">{item.translation}</span>
      </p>
    </li>
  );
}

export default function Pronunciation() {
  return (
    <div>
      <PageHeader
        title="Pronunciation"
        subtitle="Linking Sounds"
        description="Understand how native speakers sound"
      />

      <PageSections>
        {phoneticSections.map((section, sectionIndex) => (
          <Section
            key={section.title}
            id={`phonetics-${section.title.toLowerCase()}`}
            label={section.title}
            tocTitle={sectionIndex === 0 ? "Phonetics" : undefined}
            tocItemClassName={
              sectionIndex === phoneticSections.length - 1 ? "mb-4" : undefined
            }
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={section.title} inset>
              <PhoneticSoundGrid sounds={section.sounds} />
            </Card>
          </Section>
        ))}
        {pronunciationSections.map((section, sectionIndex) => (
          <Section
            key={section.title}
            id={section.title.toLowerCase().replaceAll(" + ", "-").replaceAll(" ", "-")}
            label={section.title}
            tocTitle={sectionIndex === 0 ? "Linking Sounds" : undefined}
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={section.title} className="grid gap-4">
              {section.items.map((item, itemIndex) => (
                <ul
                  key={`${section.title}-group-${itemIndex}`}
                  className="grid gap-1 rounded-xl bg-(--background) p-4"
                >
                  {item.title && (
                    <li>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                    </li>
                  )}
                  {(item.phoneme || item.english || item.audio) && (
                    <PronunciationRow item={item} />
                  )}
                  {item.group?.map((example, exampleIndex) => (
                    <PronunciationRow
                      key={`${section.title}-example-${itemIndex}-${exampleIndex}`}
                      item={example}
                    />
                  ))}
                </ul>
              ))}
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}

