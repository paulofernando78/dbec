import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  pronunciationSections,
  type PronunciationItem,
} from "@/data/pronunciation";
import type { RichContent } from "@/helpers/content";

export function meta() {
  return [{ title: "Pronunciation | Daily Basis English Course" }];
}

function MarkedSentence({ text }: { text: string | RichContent }) {
  if (Array.isArray(text)) {
    return <InlineRichContent value={text} />;
  }

  const parts = text.split(/(\([^)]*\))/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("(") && part.endsWith(")") ? (
          <u key={`${part}-${index}`}>{part}</u>
        ) : (
          part
        ),
      )}
    </>
  );
}

const toPlainText = (value: string | RichContent | undefined) =>
  Array.isArray(value)
    ? value
        .map((part) => (typeof part === "string" ? part : part.part ?? ""))
        .join("")
    : value ?? "";

function PronunciationRow({ item }: { item: PronunciationItem }) {
  const audioSource = item.audio ?? item.phoneme ?? "";
  const audioLabel =
    toPlainText(item.english) || item.phoneme || "pronunciation";

  return (
    <li className="flex min-h-[68px] items-center gap-3">
      <Button
        ariaLabel={`Play ${audioLabel}`}
        icon={<Audio src={audioSource} className="size-6!" />}
      />
      <p className="min-w-0 text-sm leading-6 md:text-base">
        {item.phoneme ? (
          <span className="font-medium text-blue-500">{item.phoneme}</span>
        ) : (
          <>
            <span className="text-black">
              <MarkedSentence text={item.english ?? ""} />
            </span>{" "}
            <span className="text-slate-500">{item.translation}</span>
          </>
        )}
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

      <PageSections title="Linking Sounds">
        {pronunciationSections.map((section) => (
          <Section
            key={section.title}
            id={section.title.toLowerCase().replaceAll(" + ", "-").replaceAll(" ", "-")}
            label={section.title}
            heading={2}
            className="mb-7"
          >
            <ul className="grid gap-1">
              {section.items.map((item, index) => (
                <PronunciationRow
                  key={`${section.title}-${item.english ?? item.phoneme}-${index}`}
                  item={item}
                />
              ))}
            </ul>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
