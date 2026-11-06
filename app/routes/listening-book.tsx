import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

import { MediaWrapper } from "@/components/content/MediaWrapper";
import { PageHeader } from "@/components/content/PageHeader";
import { SequenceNavigation } from "@/components/content/SequenceNavigation";
import { TableOfContents } from "@/components/content/TableOfContents";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import {
  audiobooks,
  availableAudiobookSlugs,
  type AudiobookSlug,
} from "@/data/skills/audiobooks";
import { audiobookQuestions } from "@/data/skills/audiobook-questions";
import {
  type AudiobookSection,
} from "@/data/skills/a-new-zealand-adventure";
import { completeAudiobook } from "@/utils/audiobook-progress";

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
  const navigate = useNavigate();
  const { book } = useParams();
  const audiobook = book ? audiobooks[book as keyof typeof audiobooks] : undefined;
  const completionSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = completionSentinelRef.current;
    if (!audiobook || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          completeAudiobook(audiobook.slug);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [audiobook]);

  if (
    !audiobook ||
    !availableAudiobookSlugs.has(audiobook.slug as AudiobookSlug)
  ) {
    return <Navigate to="/audiobooks" replace />;
  }

  const [summary, ...sections] = audiobook.sections;
  const audiobookList = Object.values(audiobooks).filter((item) =>
    availableAudiobookSlugs.has(item.slug as AudiobookSlug),
  );
  const audiobookIndex = audiobookList.findIndex((item) => item.slug === audiobook.slug);
  const previousAudiobook = audiobookList[audiobookIndex - 1];
  const nextAudiobook = audiobookList[audiobookIndex + 1];

  const renderSection = (section: AudiobookSection) => {
    const questions =
      section.questions ?? audiobookQuestions[audiobook.slug]?.[section.id] ?? [];

    return (
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

      <div>
        <MediaWrapper mediaPosition={section.mediaPosition ?? "right"}>
          {section.r2 && (
            <MediaWrapper.Item>
              <SectionImage section={section} />
            </MediaWrapper.Item>
          )}
          <MediaWrapper.Content className="flex-1">
            {section.r2Audio && (
              <AudioPlayer
                src={section.r2Audio}
                fallbackText={section.text}
                ariaLabel={`Play ${audiobook.title}: ${section.title}`}
                background="background"
              />
            )}
            <div
              className="rounded-lg bg-(--background) p-3"
            >
              <p className="text-lg leading-8">{section.text}</p>
            </div>
            {questions.length > 0 && (
              <div className="mt-3 rounded-lg bg-(--background) p-3">
                <h3 className="mb-2 text-lg font-black">Ask and answer.</h3>
                <ul className="space-y-1">
                  {questions.map((question, index) => (
                    <li key={question}>
                      {index + 1}. {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </MediaWrapper.Content>
        </MediaWrapper>
      </div>
    </article>
    );
  };

  return (
    <div>
      <PageHeader title={audiobook.title} />

      <TableOfContents
        items={audiobook.sections.map((section) => ({
          href: section.id,
          label: section.title,
        }))}
      />

      {summary && <div className="mb-4">{renderSection(summary)}</div>}

      <div className="grid gap-4">
        {sections.map(renderSection)}
      </div>

      <div ref={completionSentinelRef} className="h-px" aria-hidden="true" />

      <SequenceNavigation
        previousLabel={previousAudiobook?.title ?? "Audiobooks"}
        nextLabel={nextAudiobook?.title ?? "Audiobooks"}
        onPrevious={() => navigate(previousAudiobook ? `/audiobooks/${previousAudiobook.slug}` : "/audiobooks")}
        onNext={() => navigate(nextAudiobook ? `/audiobooks/${nextAudiobook.slug}` : "/audiobooks")}
        ariaLabel="Audiobooks"
      />
    </div>
  );
}
