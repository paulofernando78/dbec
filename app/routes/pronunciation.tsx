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

const toPlainText = (value: string | RichContent | undefined) =>
  Array.isArray(value)
    ? value
        .map((part) => (typeof part === "string" ? part : part.part ?? ""))
        .join("")
    : value ?? "";

const groupByPhoneme = (items: PronunciationItem[]) =>
  items.reduce<PronunciationItem[][]>((groups, item) => {
    if (item.phoneme || groups.length === 0) groups.push([]);
    groups[groups.length - 1].push(item);
    return groups;
  }, []);

function PronunciationRow({ item }: { item: PronunciationItem }) {
  const audioSource = item.audio ?? item.phoneme ?? "";
  const audioLabel =
    toPlainText(item.english) || item.phoneme || "pronunciation";

  return (
    <li className="flex min-h-[68px] items-center gap-3">
      <Button
        ariaLabel={`Play ${audioLabel}`}
        icon={
          <Audio
            src={audioSource}
            className="size-6!"
            wrapperClassName="size-full items-center justify-center"
          />
        }
      />
      <p className="min-w-0 text-sm leading-6 md:text-base">
        {item.phoneme ? (
          <span className="font-medium text-blue-500">{item.phoneme}</span>
        ) : (
          <>
            <span className="text-black">
              <InlineRichContent value={item.english ?? ""} />
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
            className="mb-4"
          >
            {groupByPhoneme(section.items).map((group, groupIndex) => (
              <ul
                key={`${section.title}-group-${groupIndex}`}
                className="grid gap-1 [&+&]:mt-5"
              >
                {group.map((item, itemIndex) => (
                  <PronunciationRow
                    key={`${section.title}-${item.english ?? item.phoneme}-${itemIndex}`}
                    item={item}
                  />
                ))}
              </ul>
            ))}
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
