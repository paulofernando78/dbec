import { useState } from "react";
import { Navigate, useParams } from "react-router";

import { MediaWrapper } from "@/components/content/MediaWrapper";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { audiobooks } from "@/data/skills/audiobooks";
import {
  type AudiobookSection,
} from "@/data/skills/a-new-zealand-adventure";

function SectionImage({ section }: { section: AudiobookSection }) {
  const [missing, setMissing] = useState(false);
  const isFullWidth =
    section.mediaPosition === "top" || section.mediaPosition === "bottom";

  return (
    <div
      className={`w-full overflow-hidden rounded-xl ${isFullWidth ? "" : "sm:w-60 sm:shrink-0"}`}
    >
      {missing ? (
        <div className="grid min-h-48 place-items-center rounded-xl bg-[var(--surface)] p-4 text-center text-sm text-slate-500">
          Add image to<br />{section.localMedia}
        </div>
      ) : (
        <img
          src={section.r2}
          alt={section.imageAlt ?? ""}
          loading="lazy"
          onError={() => setMissing(true)}
          className="mx-auto block h-auto w-full rounded-xl object-contain"
        />
      )}
    </div>
  );
}

export default function ListeningBookPage() {
  const { book } = useParams();
  const audiobook = book ? audiobooks[book as keyof typeof audiobooks] : undefined;

  if (!audiobook) {
    return <Navigate to="/audiobooks" replace />;
  }

  const storyText = audiobook.sections
    .filter((section) => section.id !== "summary")
    .map((section) => section.text)
    .join(" ");
  const [summary, ...sections] = audiobook.sections;

  const renderSection = (section: AudiobookSection) => (
    <article
      key={section.id}
      id={section.id}
      className="scroll-mt-28 rounded-xl bg-[var(--surface)] p-3 sm:p-4"
    >
      <header className="mb-3 px-1 py-2">
        <h2 className="text-2xl font-black">{section.title}</h2>
        {section.timestamp && (
          <p className="text-sm text-slate-500">{section.timestamp}</p>
        )}
      </header>

      <div className="rounded-lg bg-[var(--background)] p-3">
        <MediaWrapper mediaPosition={section.mediaPosition ?? "right"}>
          {section.r2 && (
            <MediaWrapper.Item>
              <SectionImage section={section} />
            </MediaWrapper.Item>
          )}
          <MediaWrapper.Content>
            <p className="text-lg leading-8">{section.text}</p>
          </MediaWrapper.Content>
        </MediaWrapper>
      </div>
    </article>
  );

  return (
    <div>
      <PageHeader title={audiobook.title} />

      <TableOfContents
        subtitle="Story"
        items={audiobook.sections.map((section) => ({
          href: section.id,
          label: section.title,
        }))}
      />

      {summary && <div className="mb-4">{renderSection(summary)}</div>}

      <div className="sticky top-2 z-20">
        <AudioPlayer
          src={audiobook.audio}
          fallbackText={storyText}
          ariaLabel={`Play ${audiobook.title}`}
        />
      </div>

      <div className="grid gap-4">
        {sections.map(renderSection)}
      </div>
    </div>
  );
}
