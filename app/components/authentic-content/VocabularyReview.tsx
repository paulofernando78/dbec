import { useEffect, useState } from "react";
import { Check, FlipHorizontal2, Shuffle } from "lucide-react";

import { Phonetics } from "@/components/content/Phonetics";
import { Button } from "@/components/ui/Button";
import { dictionary } from "@/helpers/content";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";
import { shuffle } from "@/utils/shuffle";

type ReviewWord = {
  word: string;
  phonetic?: string;
  img?: number;
};

type ReviewCard = {
  word: string;
  phonetic: string;
  meaning: string;
  imageSrc?: string;
  imageAlt: string;
};

type VocabularyReviewProps = {
  words: readonly ReviewWord[];
};

const ReviewFlipCard = ({
  card,
  mastered,
  onMasteredChange,
  resetKey,
}: {
  card: ReviewCard;
  mastered: boolean;
  onMasteredChange: () => void;
  resetKey: number;
}) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => setFlipped(false), [resetKey]);

  const borderClass = mastered ? "border-green-500" : "border-slate-300";

  return (
    <div className="relative aspect-[4/5] w-full max-w-72 perspective-[1400px]">
      {!flipped && (
        <Button
          pressed={mastered}
          ariaLabel={`Mark ${card.word} as ${mastered ? "needs review" : "known"}`}
          icon={<Check />}
          className={`absolute! left-3 top-3 z-20 ${
            mastered
              ? "border-green-600! bg-green-100! [&>span]:bg-green-100! [&_svg]:stroke-green-700!"
              : "hover:border-green-500! hover:[&_svg]:stroke-green-600!"
          }`}
          onClick={onMasteredChange}
        />
      )}

      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${flipped ? "Showing" : "Reveal"} the word for: ${card.meaning}`}
        className="group block size-full cursor-pointer"
        onClick={() => setFlipped((current) => !current)}
      >
        <span
          className={`relative block size-full transform-3d transition-transform duration-700 ${flipped ? "transform-[rotateY(180deg)]" : ""}`}
        >
          <span className={`absolute inset-0 flex backface-hidden flex-col items-center justify-center gap-4 rounded-xl border-4 ${borderClass} bg-(--background) p-6 text-center shadow-sm`}>
            <FlipHorizontal2
              aria-hidden="true"
              className="absolute right-3 top-3 size-6 text-slate-400"
            />
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">
              Meaning
            </span>
            <span className="text-base font-semibold leading-7 text-slate-700">
              {card.meaning}
            </span>
            <span className="text-xs text-slate-400">Think of the word, then flip.</span>
          </span>

          <span className={`absolute inset-0 flex backface-hidden transform-[rotateY(180deg)] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border-4 ${mastered ? "border-green-500" : "border-blue-300"} bg-(--background) p-4 text-center shadow-sm`}>
            {card.imageSrc && (
              <span className="block h-48 w-full min-h-0 shrink overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  loading="lazy"
                  className="size-full object-contain"
                />
              </span>
            )}
            <span className="shrink-0 text-xl font-black leading-tight">{card.word}</span>
            {card.phonetic && (
              <span className="shrink-0">
                <Phonetics>{card.phonetic}</Phonetics>
              </span>
            )}
          </span>
        </span>
      </button>
    </div>
  );
};

export function VocabularyReview({ words }: VocabularyReviewProps) {
  const wordsSignature = JSON.stringify(words);
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [resetKey, setResetKey] = useState(0);
  const [masteredWords, setMasteredWords] = useState<Set<string>>(new Set());

  useEffect(() => {
    let active = true;

    Promise.all(
      words.map(async (item) => {
        const entry = await loadDictionaryWord(item.word);
        const image = entry?.imgs?.[item.img ?? 0];

        return {
          word: item.word,
          phonetic: item.phonetic ?? entry?.phonetics ?? "",
          meaning: entry?.enDefinition ?? `Review the meaning of “${item.word}”.`,
          imageSrc: image?.src ? dictionary(image.src) : undefined,
          imageAlt: image?.alt ?? item.word,
        };
      }),
    ).then((nextCards) => {
      if (active) setCards(nextCards);
    });

    return () => {
      active = false;
    };
  }, [wordsSignature]);

  const shuffleCards = () => {
    setCards((current) => shuffle(current));
    setResetKey((current) => current + 1);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-black">Recall the word from its meaning.</h3>
          <p className="text-sm text-slate-500">
            Think of the answer, then flip the card to check the word, pronunciation, and image.
          </p>
          <p className="mt-1 text-xs font-semibold text-green-700">
            Known: {masteredWords.size} of {cards.length}
          </p>
        </div>
        <Button
          ariaLabel="Shuffle vocabulary cards"
          icon={<Shuffle />}
          onClick={shuffleCards}
          className="shrink-0"
        />
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <ReviewFlipCard
            key={`${resetKey}-${card.word}`}
            card={card}
            mastered={masteredWords.has(card.word)}
            onMasteredChange={() =>
              setMasteredWords((current) => {
                const next = new Set(current);
                if (next.has(card.word)) next.delete(card.word);
                else next.add(card.word);
                return next;
              })
            }
            resetKey={resetKey}
          />
        ))}
      </div>
    </div>
  );
}
