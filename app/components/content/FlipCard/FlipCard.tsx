import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Image } from "@/components/ui/Image";
import { dictionary } from "@/helpers/content";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";

import { FlipHorizontal2 } from "lucide-react";

import styles from "./FlipCard.module.css";

type ResolvedCardImage = {
  src: string;
  alt: string;
};

type FlipCardProps = {
  frontContent?: ReactNode;
  frontImg?: string;
  frontAlt?: string;

  backContent?: ReactNode;
  backImg?: string;
  backAlt?: string;
};

const isDirectImageSrc = (
  value: string = "",
) => value.startsWith("/");

const resolveCardImage = async (
  value?: string,
  fallbackAlt?: string,
): Promise<ResolvedCardImage | null> => {
  if (!value) return null;

  if (isDirectImageSrc(value)) {
    return {
      src: value,
      alt: fallbackAlt || "",
    };
  }

  const entry = await loadDictionaryWord(value);
  const firstImage = entry?.imgs?.[0];

  if (!firstImage?.src) {
    return null;
  }

  return {
    src: dictionary(firstImage.src),
    alt: fallbackAlt || firstImage.alt || entry?.word || value,
  };
};

export const FlipCard = ({
  frontContent,
  frontImg,
  frontAlt,
  backContent,
  backImg,
  backAlt,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [resolvedFrontImg, setResolvedFrontImg] =
    useState<ResolvedCardImage | null>(null);
  const [resolvedBackImg, setResolvedBackImg] =
    useState<ResolvedCardImage | null>(null);

  useEffect(() => {
    let active = true;

    resolveCardImage(frontImg, frontAlt).then((result) => {
      if (active) setResolvedFrontImg(result);
    });

    return () => {
      active = false;
    };
  }, [frontAlt, frontImg]);

  useEffect(() => {
    let active = true;

    resolveCardImage(backImg, backAlt).then((result) => {
      if (active) setResolvedBackImg(result);
    });

    return () => {
      active = false;
    };
  }, [backAlt, backImg]);

  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ""}`}
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div className={styles.front}>
          <FlipHorizontal2 className={styles.flipIcon} />
          {frontContent ? (
            <div className={styles.content}>{frontContent}</div>
          ) : resolvedFrontImg ? (
            <Image
              src={resolvedFrontImg.src}
              alt={resolvedFrontImg.alt}
              className={styles.img}
            />
          ) : (
            <Image
              src="/assets/img/ui/question-mark.gif"
              alt="Question mark gif"
              className={styles.placeholderImg}
            />
          )}
        </div>
        <div className={styles.back}>
          {backContent ? (
            <div className={styles.content}>{backContent}</div>
          ) : resolvedBackImg ? (
            <Image
              src={resolvedBackImg.src}
              alt={resolvedBackImg.alt}
              className={styles.img}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
