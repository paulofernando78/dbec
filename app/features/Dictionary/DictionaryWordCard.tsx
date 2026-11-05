import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Search, X } from "lucide-react";

import { Portuguese } from "@/components/content/Portuguese";
import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { dictionary } from "@/helpers/content";
import type { DictionaryDefinition } from "@/utils/loadDictionaryWord";

type DictionaryWordCardProps = {
  entry: DictionaryDefinition;
  compact?: boolean;
};

const list = (value?: string[] | string) =>
  Array.isArray(value) ? value.filter(Boolean).join(", ") : value;

const dictionaryTts = (text: string) =>
  `/api/dictionary-tts.wav?v=2&text=${encodeURIComponent(text)}`;

export function DictionaryWordCard({
  entry,
  compact = false,
}: DictionaryWordCardProps) {
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!expandedImage) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [expandedImage]);

  return (
    <>
      <article className="rounded-xl bg-[var(--background)] p-4 text-[var(--text-color)] ring-1 ring-slate-200 dark:ring-slate-700">
      <header className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <div className="flex items-center gap-2">
          <Audio
            asButton
            src={dictionaryTts(entry.word)}
            fallbackText={entry.word}
            allowSpeechFallback={false}
            speechLang="en-US"
            ariaLabel={`Play ${entry.word}`}
            wrapperClassName="shrink-0"
          />
          <h3 className="font-black">{entry.word}</h3>
        </div>
        {entry.partOfSpeech && (
          <span className="font-serif italic text-slate-500">
            {entry.partOfSpeech}
          </span>
        )}
        {entry.phonetics && (
          <span className="font-serif text-blue-600 dark:text-blue-400">
            {entry.phonetics}
          </span>
        )}
      </header>

      {(entry.enDefinition || entry.ptDefinition) && (
        <div className="mt-2">
          {entry.enDefinition && <p>{entry.enDefinition}</p>}
          {entry.ptDefinition && (
            <Portuguese>{entry.ptDefinition}</Portuguese>
          )}
        </div>
      )}

      {entry.examples?.length ? (
        <div className="mt-3 grid gap-2">
          {entry.examples.slice(0, compact ? 2 : undefined).map((example, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              {example.enExample && (
                <Audio
                  asButton
                  src={dictionaryTts(example.enExample)}
                  fallbackText={example.enExample}
                  allowSpeechFallback={false}
                  speechLang="en-US"
                  ariaLabel={`Play example: ${example.enExample}`}
                  wrapperClassName="shrink-0"
                />
              )}
              <div className="min-w-0 flex-1">
                {example.enExample && (
                  <p>{example.enExample}</p>
                )}
                {example.ptExample && (
                  <Portuguese>{example.ptExample}</Portuguese>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {!compact && (
        <>
          <div className="mt-3 grid gap-1 text-sm">
            {list(entry.synonyms) && (
              <p><span className="font-serif font-bold">synonyms:</span> {list(entry.synonyms)}</p>
            )}
            {list(entry.antonyms) && (
              <p><span className="font-serif font-bold">antonyms:</span> {list(entry.antonyms)}</p>
            )}
            {list(entry.seeAlso) && (
              <p><span className="font-serif font-bold">see also:</span> {list(entry.seeAlso)}</p>
            )}
          </div>

          {entry.notes?.map((note, index) => (
            <div key={index} className="mt-3 text-sm">
              <span className="font-serif font-bold">note: </span>
              {note.enNote}
              {note.ptNote && <Portuguese>{note.ptNote}</Portuguese>}
            </div>
          ))}

          {entry.imgs?.some((image) => image.src) && (
            <div className="mt-3 flex flex-wrap gap-3">
              {entry.imgs
                .filter((image) => Boolean(image.src))
                .map((image, index) => {
                  const src = dictionary(image.src!);
                  const alt = image.alt || entry.word;

                  return (
                    <div
                      key={`${image.src}-${index}`}
                      className="relative size-[220px] max-w-full"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={220}
                        height={220}
                        className="object-contain"
                      />
                      <Button
                        ariaLabel={`Ampliar imagem de ${entry.word}`}
                        icon={<Search />}
                        onClick={() => setExpandedImage({ src, alt })}
                        className="absolute! right-2 top-2 z-10 size-9! bg-white/90! shadow-md"
                      />
                    </div>
                  );
                })}
            </div>
          )}
        </>
      )}
      </article>

      {expandedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Imagem ampliada de ${entry.word}`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setExpandedImage(null);
            }}
          >
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] object-contain"
            />
            <Button
              ariaLabel="Fechar imagem ampliada"
              icon={<X />}
              onClick={() => setExpandedImage(null)}
              className="absolute! right-4 top-4 z-10 bg-white/95! shadow-xl"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
