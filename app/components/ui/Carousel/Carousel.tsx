import { dictionary } from "@/helpers/content";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";
import { Image } from "@/components/ui/Image";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

import { useState, useRef, useEffect } from "react";

type ArrowProps = {
  className?: string;
};

type CarouselImage = {
  src?: string;
  alt?: string;
  dictionary?: string;
  word?: string;
  img?: number;
  content?: InlineRichContentValue[];
};

type ResolvedWord = {
  imgs?: {
    src?: string;
  }[];
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

type CarouselProps = {
  prompt: string;
  imgs?: CarouselImage[];
  aspectRatio?: "square" | "wide";
};

export const Carousel = ({ prompt, imgs = [], aspectRatio }: CarouselProps) => {
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
        imgs.map(async (img) => {
          if (!img.word) return null;

          const foundWord = await loadDictionaryWord(img.word);

          return [img.word, foundWord];
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
  }, [imgs]);

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

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev < imgs.length - 1 ? prev + 1 : prev));

    carouselRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      <p className="font-bold">{prompt}</p>
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
          {imgs.map((img, index) => {
            const resolvedSrc =
              resolvedWords[img.word ?? ""]?.imgs?.[img.img ?? 0]?.src;
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
                   ${aspectRatio === "wide" ? "aspect-[16/10]" : "aspect-square"}
                `}
              >
                {img.src && (
                  <Image
                    src={img.src}
                    alt={img.alt || `carousel-image-${index}`}
                    rounded={false}
                  />
                )}
                {img.dictionary && (
                  <Image
                    src={dictionary(img.dictionary)}
                    alt={img.alt || `carousel-image-${index}`}
                    rounded={false}
                  />
                )}

                {img.word && resolvedSrc && (
                  <Image
                    src={dictionary(resolvedSrc)}
                    alt={img.alt || img.word}
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
      <div className="mt-2 flex justify-center gap-2">
        {imgs.map((_, index) => (
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
      {imgs[visibleContentIndex]?.content && (
        <div
          className={`
          mx-auto
          h-22.5
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
            <InlineRichContent value={imgs[visibleContentIndex].content} />
          </div>
        </div>
      )}
    </>
  );
};
