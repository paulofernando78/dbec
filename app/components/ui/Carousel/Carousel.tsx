import { dictionary, content, type ContentValue } from "@/helpers/content";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";
import { Line } from "@/components/content/Line";
import { Dot } from "lucide-react";
import { Image } from "@/components/ui/Image";

import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

import { useState, useRef, useEffect } from "react";

type ArrowProps = {
  className?: string;
};

type CarouselWord = {
  src?: string;
  alt?: string;
  dictionary?: string;
  word?: string;
  img?: number;
  content?: InlineRichContentValue[];
};

type ResolvedWord = {
  enDefinition?: string;
  imgs?: {
    src?: string;
  }[];
};

type MatchingContentItem = {
  display?: string;
  as?: string;
  parts: ContentValue[];
};

type CarouselProps = {
  instruction?: string;
  matchingContent?: MatchingContentItem[];
  words?: CarouselWord[];
  imgs?: CarouselWord[];
  aspectRatio?: "square" | "wide";
};

const Arrow = ({ className }: ArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width="1em"
    height="1em"
    fill="#e3e3e3"
    className={className}
  >
    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
  </svg>
);

export const Carousel = ({
  instruction,
  matchingContent,
  words,
  imgs,
  aspectRatio,
}: CarouselProps) => {
  const finalInstruction = instruction || "";
  const finalWords = words || imgs || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleContentIndex, setVisibleContentIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);
  const [resolvedWords, setResolvedWords] = useState<
    Record<string, ResolvedWord>
  >({});

  useEffect(() => {
    const loadWords = async () => {
      const entries = await Promise.all(
        finalWords.map(async (word) => {
          if (!word.word) return null;

          const foundWord = await loadDictionaryWord(word.word);

          return [word.word, foundWord];
        }),
      );

      setResolvedWords(
        Object.fromEntries(
          entries.filter(
            (entry): entry is [string, ResolvedWord] => entry !== null,
          ),
        ),
      );
    };

    loadWords();
  }, [finalWords]);

  useEffect(() => {
    if (currentIndex === visibleContentIndex) {
      setIsContentVisible(true);
      return;
    }

    setIsContentVisible(false);

    const timeout = window.setTimeout(() => {
      setVisibleContentIndex(currentIndex);
      setIsContentVisible(true);
    }, 180);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, visibleContentIndex]);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));

    carouselRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const currentImg = finalWords[visibleContentIndex];

  const currentContent =
    currentImg?.content ??
    (currentImg?.word && resolvedWords[currentImg.word]?.enDefinition
      ? content({
          parts: [resolvedWords[currentImg.word]!.enDefinition!],
        })
      : undefined);

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev < finalWords.length - 1 ? prev + 1 : prev));

    carouselRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      <p className="font-bold mb-4">{finalInstruction}</p>
      {matchingContent && (
        <div
          className={`
            mx-auto
            h-20
            mb-4
            py-1 px-2
            overflow-x-auto
            border
            border-gray-300
            rounded-lg
            ${aspectRatio === "wide" ? "max-w-150" : "max-w-100"}
          `}
        >
          {matchingContent.map((item, index) => {
            const display =
              item.display === "block" || item.display === "inline"
                ? item.display
                : undefined;
            const as =
              item.as === "p" || item.as === "span" ? item.as : undefined;

            return (
              <span key={index} className="inline-flex items-center">
                <Line
                  display={display}
                  as={as}
                  value={content({ parts: item.parts })}
                />
                {index < matchingContent.length - 1 && (
                  <Dot className="inline size-4" />
                )}
              </span>
            );
          })}
        </div>
      )}
      <div
        className={`
        relative
        mx-auto
        ${aspectRatio === "wide" ? "max-w-150" : "max-w-100"}
        px-[1.6rem]
        `}
      >
        <button
          className="
          w-6
          h-full
          absolute
          left-0
          top-1/2
          text-[1.7rem]
          flex
          cursor-pointer
          items-center
          justify-center
          rounded-l-[5px]
          bg-gray-400
          hover:bg-slate-500
          -translate-y-1/2
          z-10
        "
          onClick={scrollLeft}
        >
          <Arrow className="block translate-x-1.5" />
        </button>

        <div
          className={`
            flex
            gap-[0.7em]
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            [&::-webkit-scrollbar]:hidden
            mb-4
          `}
          ref={carouselRef}
          onScroll={() => {
            const carousel = carouselRef.current;

            if (!carousel) return;

            const closestIndex = cardRef.current.findIndex((card) => {
              if (!card) return false;

              return (
                Math.abs(card.offsetLeft - carousel.scrollLeft) <
                card.offsetWidth / 2
              );
            });

            if (closestIndex !== -1) {
              setCurrentIndex((current) =>
                current === closestIndex ? current : closestIndex,
              );
            }
          }}
        >
          {finalWords.map((word, index) => {
            const resolvedSrc =
              resolvedWords[word.word ?? ""]?.imgs?.[word.img ?? 0]?.src;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRef.current[index] = el;
                }}
                className={`
                  flex-none
                  basis-full
                  snap-start
                  h-full
                   ${aspectRatio === "wide" ? "aspect-[16/10]" : "aspect-square"}
                `}
              >
                {word.src && (
                  <Image
                    src={word.src}
                    alt={word.alt || `carousel-image-${index}`}
                    rounded={false}
                  />
                )}
                {word.dictionary && (
                  <Image
                    src={dictionary(word.dictionary)}
                    alt={word.alt || `carousel-image-${index}`}
                    rounded={false}
                  />
                )}

                {word.word && resolvedSrc && (
                  <Image
                    src={dictionary(resolvedSrc)}
                    alt={word.alt || word.word}
                    rounded={false}
                  />
                )}
              </div>
            );
          })}
        </div>

        <button
          className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          z-10
          flex
          h-full
          w-6
          cursor-pointer
          items-center
          justify-center
          rounded-r-[5px]
          bg-gray-400
          text-[1.7rem]
          hover:bg-slate-500
        "
          onClick={scrollRight}
        >
          <Arrow className="block rotate-180 -translate-x-1.5" />
        </button>
      </div>
      <div className="mt-2 flex justify-center gap-2 mb-4">
        {finalWords.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              cardRef.current[index]?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
              });
            }}
            className={`
              aspect-square
              w-[1.6rem]
              cursor-pointer
              rounded-[5px]
              border
              border-slate-400
              text-[0.9rem]
              ${currentIndex === index ? "bg-slate-300" : "bg-slate-100"}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {currentContent && (
        <div
          className={`
          mx-auto
          h-20
          mb-4
          py-1 px-2
          overflow-x-auto
          border
          border-gray-300
          rounded-lg
          ${aspectRatio === "wide" ? "max-w-150" : "max-w-100"}
        `}
        >
          <div
            className={`
              transition-opacity
              duration-200
              ease-in-out
              ${isContentVisible ? "opacity-100" : "opacity-0"}
            `}
          >
            <span className="font-bold">Hint:</span>{" "}
            <InlineRichContent value={currentContent} />
          </div>
        </div>
      )}
    </>
  );
};
