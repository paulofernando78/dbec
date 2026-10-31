import { useState } from "react";
import { Navigate, useParams } from "react-router";

import { MediaWrapper } from "@/components/content/MediaWrapper";
import { PageHeader } from "@/components/content/PageHeader";
import { TableOfContents } from "@/components/content/TableOfContents";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import {
  newZealandAdventure,
  type ListeningParagraph,
} from "@/data/skills/a-new-zealand-adventure";

function ParagraphImage({ paragraph }: { paragraph: ListeningParagraph }) {
  const [missing, setMissing] = useState(false);

  return (
    <div className="w-full sm:w-60 sm:shrink-0">
      {missing ? (
        <div className="grid min-h-48 place-items-center rounded-xl bg-[var(--surface)] p-4 text-center text-sm text-slate-500">
          Add image to<br />{paragraph.localMedia}
        </div>
      ) : (
        <img
          src={paragraph.r2}
          alt={paragraph.imageAlt}
          loading="lazy"
          onError={() => setMissing(true)}
          className="mx-auto block max-h-80 w-full rounded-xl object-contain"
        />
      )}
    </div>
  );
}

export default function ListeningBookPage() {
  const { book } = useParams();
  if (book !== newZealandAdventure.slug) {
    return <Navigate to="/skills/listening" replace />;
  }

  const storyText = newZealandAdventure.paragraphs
    .filter((paragraph) => paragraph.id !== "summary")
    .map((paragraph) => paragraph.text)
    .join(" ");
  const [summary, ...paragraphs] = newZealandAdventure.paragraphs;

  const renderParagraph = (paragraph: ListeningParagraph) => (
    <article
      key={paragraph.id}
      id={paragraph.id}
      className="scroll-mt-28 rounded-xl bg-[var(--surface)] p-3 sm:p-4"
    >
      <header className="mb-3 px-1 py-2">
        <h2 className="text-2xl font-black">{paragraph.title}</h2>
        {paragraph.timestamp && (
          <p className="text-sm text-slate-500">{paragraph.timestamp}</p>
        )}
      </header>

      <div className="rounded-lg bg-[var(--background)] p-3">
        <MediaWrapper mediaPosition={paragraph.mediaPosition ?? "right"}>
          <MediaWrapper.Item>
            <ParagraphImage paragraph={paragraph} />
          </MediaWrapper.Item>
          <MediaWrapper.Content>
            <p className="text-lg leading-8">{paragraph.text}</p>
          </MediaWrapper.Content>
        </MediaWrapper>
      </div>
    </article>
  );

  return (
    <div>
      <PageHeader title={newZealandAdventure.title} />

      <TableOfContents
        subtitle="Story"
        items={newZealandAdventure.paragraphs.map((paragraph) => ({
          href: paragraph.id,
          label: paragraph.title,
        }))}
      />

      {summary && <div className="mb-4">{renderParagraph(summary)}</div>}

      <div className="sticky top-2 z-20">
        <AudioPlayer
          src="/media/audio/skills/listening/a-new-zealand-adventure.mp3"
          fallbackText={storyText}
          ariaLabel={`Play ${newZealandAdventure.title}`}
        />
      </div>

      <div className="grid gap-4">
        {paragraphs.map(renderParagraph)}
      </div>
    </div>
  );
}
