import { Dot } from "lucide-react";

import { Portuguese } from "@/components/content/Portuguese";
import { Image } from "@/components/ui/Image";
import { dictionary } from "@/helpers/content";
import type { DictionaryDefinition } from "@/utils/loadDictionaryWord";

type DictionaryWordCardProps = {
  entry: DictionaryDefinition;
  compact?: boolean;
};

const list = (value?: string[] | string) =>
  Array.isArray(value) ? value.filter(Boolean).join(", ") : value;

export function DictionaryWordCard({
  entry,
  compact = false,
}: DictionaryWordCardProps) {
  return (
    <article className="rounded-xl bg-[var(--background)] p-4 text-[var(--text-color)] ring-1 ring-slate-200 dark:ring-slate-700">
      <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-xl font-black">{entry.word}</h3>
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
            <div key={index} className="flex items-start gap-1 text-sm">
              <Dot className="mt-0.5 size-4 shrink-0" />
              <div>
                {example.enExample && <p>{example.enExample}</p>}
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
                .map((image, index) => (
                  <Image
                    key={`${image.src}-${index}`}
                    src={dictionary(image.src!)}
                    alt={image.alt || entry.word}
                    width={220}
                    height={220}
                  />
                ))}
            </div>
          )}
        </>
      )}
    </article>
  );
}
