"use client";

import styles from "./Carousel.module.css";

import { dictionary } from "@/helpers/content";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";
import { Image } from "@/components/ui/Image";

import { useState, useRef, useEffect } from "react";

type ArrowProps = {
  direction?: "back" | "forward";
  className?: string;
};

type CarouselImage = {
  src?: string;
  alt?: string;
  dictionary?: string;
  word?: string;
  img?: number;
};

type ResolvedWord = {
  imgs?: {
    src?: string;
  }[];
};

const Arrow = ({ direction = "back", className }: ArrowProps) => (
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
  imgs?: CarouselImage[];
};

export const Carousel = ({ imgs = [] }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      <span className={styles.title}>Remember?</span>
      <div className={styles.wrapper}>
        <button className={styles.leftArrow} onClick={scrollLeft}>
          <Arrow
            direction="back"
            className={`${styles.arrow} ${styles.back}`}
          />
        </button>
        <div className={styles.carousel} ref={carouselRef}>
          {imgs.map((img, index) => {
            const resolvedSrc =
              resolvedWords[img.word ?? ""]?.imgs?.[img.img ?? 0]?.src;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRef.current[index] = el;
                }}
                className={styles.card}
              >
                {/* <div className={styles.cardPagination}>
                {index + 1}
              </div> */}
                {img.src && (
                  <Image
                    src={img.src}
                    alt={img.alt || `carousel-image-${index}`}
                  />
                )}
                {img.dictionary && (
                  <Image
                    src={dictionary(img.dictionary)}
                    alt={img.alt || `carousel-image-${index}`}
                  />
                )}

                {img.word && resolvedSrc && (
                  <Image
                    src={dictionary(resolvedSrc)}
                    alt={img.alt || img.word}
                  />
                )}
              </div>
            );
          })}
        </div>
        <button className={styles.rightArrow} onClick={scrollRight}>
          <Arrow
            direction="forward"
            className={`${styles.arrow} ${styles.forward}`}
          />
        </button>
      </div>
      <div className={styles.pagination}>
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
            className={currentIndex === index ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};
