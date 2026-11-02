import { Fragment } from "react";
import { Plus } from "lucide-react";
import { Navigate, useParams } from "react-router";

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
import { wordAudio, type RichContent } from "@/helpers/content";

export function meta() {
  return [{ title: "Pronunciation | Daily Basis English Course" }];
}

const toPlainText = (value: string | RichContent | undefined) =>
  Array.isArray(value)
    ? value
        .map((part) => (typeof part === "string" ? part : part.part ?? ""))
        .join("")
    : value ?? "";

function PhoneticSoundRows({
  sounds,
}: {
  sounds: readonly {
    phoneme: string;
    audio: string;
    examples: readonly RichContent[];
  }[];
}) {
  if (sounds.length === 0) {
    return <p className="p-4 text-slate-500">No audio files available yet.</p>;
  }

  return (
    <div className="grid gap-3">
      {sounds.map(({ phoneme, audio, examples }) => (
        <div
          key={phoneme}
          className="flex min-w-0 items-center gap-3"
        >
          <Audio
            asButton
            src={[
              { src: audio, fallbackText: phoneme },
              ...examples.map((example) => {
                const word = toPlainText(example).toLowerCase();

                return {
                  src: wordAudio(`${word}.mp3`),
                  fallbackText: word,
                };
              }),
            ]}
            ariaLabel={`Play ${phoneme} and example words`}
            pauseAfterFirstMs={1000}
          />
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <Phonetics>{phoneme}</Phonetics>
            <span>:</span>
            {examples.map((example, index) => (
              <Fragment key={`${phoneme}-example-${index}`}>
                {index > 0 && <span aria-hidden="true">•</span>}
                <span className="min-w-0 text-base">
                  <InlineRichContent value={example} />
                </span>
              </Fragment>
            ))}
          </div>
        </div>
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
              fallbackText={phoneme}
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
        fallbackText={audioLabel}
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
  const { topic } = useParams();

  if (!topic) {
    return <Navigate to="/pronunciation/phonetics" replace />;
  }

  const isPhonetics = topic === "phonetics";
  const isLinkingSounds = topic === "linking-sounds";

  if (!isPhonetics && !isLinkingSounds) {
    return <Navigate to="/pronunciation/phonetics" replace />;
  }

  return (
    <div>
      <PageHeader
        title={isPhonetics ? "Phonetics" : "Linking Sounds"}
        description={
          isPhonetics
            ? "Learn English vowel and consonant sounds"
            : "Understand how native speakers connect words"
        }
      />

      <PageSections>
        {isPhonetics && phoneticSections.map((section) => (
          <Section
            key={section.title}
            id={`phonetics-${section.title.toLowerCase()}`}
            label={section.title}
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={section.title} inset>
              <PhoneticSoundRows sounds={section.sounds} />
            </Card>
          </Section>
        ))}
        {isLinkingSounds && pronunciationSections.map((section) => (
          <Section
            key={section.title}
            id={section.title.toLowerCase().replaceAll(" + ", "-").replaceAll(" ", "-")}
            label={section.title}
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

