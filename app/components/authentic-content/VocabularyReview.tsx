import { useEffect, useState } from "react";
import { FlipHorizontal2, Shuffle } from "lucide-react";

import { Phonetics } from "@/components/content/Phonetics";
import { Button } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
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

const ReviewFlipCard = ({ card, resetKey }: { card: ReviewCard; resetKey: number }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => setFlipped(false), [resetKey]);

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${flipped ? "Showing" : "Reveal"} the word for: ${card.meaning}`}
      className="group aspect-square w-full max-w-80 cursor-pointer perspective-[1400px]"
      onClick={() => setFlipped((current) => !current)}
    >
      <span
        className={`relative block size-full transform-3d transition-transform duration-700 ${flipped ? "transform-[rotateY(180deg)]" : ""}`}
      >
        <span className="absolute inset-0 flex backface-hidden flex-col items-center justify-center gap-4 rounded-xl border-4 border-slate-300 bg-(--background) p-6 text-center shadow-sm">
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

        <span className="absolute inset-0 flex backface-hidden transform-[rotateY(180deg)] flex-col items-center justify-center gap-3 rounded-xl border-4 border-blue-300 bg-(--background) p-4 text-center shadow-sm">
          {card.imageSrc && (
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              className="min-h-0 w-full flex-1 rounded-lg border-0 object-contain"
            />
          )}
          <span className="text-xl font-black">{card.word}</span>
          {card.phonetic && <Phonetics>{card.phonetic}</Phonetics>}
        </span>
      </span>
    </button>
  );
};

export function VocabularyReview({ words }: VocabularyReviewProps) {
  const wordsSignature = JSON.stringify(words);
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [resetKey, setResetKey] = useState(0);

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
          <ReviewFlipCard key={`${resetKey}-${card.word}`} card={card} resetKey={resetKey} />
        ))}
      </div>
    </div>
  );
}
