import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Image } from "@/components/ui/Image";
import { dictionary } from "@/helpers/content";
import { loadDictionaryWord } from "@/utils/loadDictionaryWord";

import { FlipHorizontal2 } from "lucide-react";

import { Line } from "@/components/content/Line";
import type { ContentValue } from "@/helpers/content";


type ResolvedCardImage = {
  src: string;
  alt: string;
};

type FlipCardItem = {
  frontContent?: ReactNode;
  frontImg?: string;
  frontAlt?: string;
  frontLine?: ContentValue[];
  backContent?: ReactNode;
  backImg?: string;
  backAlt?: string;
  backLine?: ContentValue[];
};

type FlipCardsProps = {
  cards?: FlipCardItem[];
};

const isDirectImageSrc = (
  value: string = "",
) =>
  value.startsWith("/") ||
  value.startsWith("http://") ||
  value.startsWith("https://");

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

const SingleFlipCard = ({
  frontContent,
  frontImg,
  frontAlt,
  frontLine,
  backContent,
  backImg,
  backAlt,
  backLine,
}: FlipCardItem) => {
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
    <div className="
      relative
      w-full
      aspect-square
      perspective-[5000px]
      rounded-[5px]
      overflow-hidden
      p-1.25
      ">
      <div
        className={`
          relative
          w-full h-full border 
          transition-transform duration-1000
          border-slate-300
          rounded-lg
          transform-3d
          ${flipped ?
            "transform-[rotateY(180deg)]"
            :
            ""}`
          }
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div className="
          absolute
          w-full
          h-full
          backface-hidden
          grid place-items-center
        bg-slate-200 rounded-[5px]
          transform-[rotateY(0deg)]
        ">
          <FlipHorizontal2 className="
            absolute
            top-1.5
            right-1.25
            border-2 
            border-slate-400
            rounded-full
            outline-2
            outline-white
            bg-[aliceblue] z-2"
          />
          {frontContent ? (
            <span className="
              text-center 
              text-black 
              text-[1rem]
            ">
              {frontContent}
            </span>
          ) : frontLine ? (
            <span className="
              text-center
              text-black
              text-[1rem]
            ">
              <Line value={frontLine} />
            </span>
          ) : resolvedFrontImg ? (
            <Image
              src={resolvedFrontImg.src}
              alt={resolvedFrontImg.alt}
              className="
                w-full
                h-full
                border-0"
            />
          ) : (
            <Image
              src="/assets/img/icons/question-mark.gif"
              alt="Question mark gif"
              width={100}
            />
          )}
        </div>
        <div className="
          absolute
          w-full
          h-full
          grid place-items-center
          bg-slate-200 rounded-1.25
          backface-hidden
          transform-[rotateY(180deg)]">
          {backContent ? (
            <div className="
              text-center 
              text-black
              text-[1rem]">{backContent}</div>
          ) : backLine ? (
            <div className="t
              ext-center 
              text-black
              text-[1rem]">
              <Line value={backLine} />
            </div>
          ) : resolvedBackImg ? (
            <Image
              src={resolvedBackImg.src}
              alt={resolvedBackImg.alt}
              className="
                w-full
                h-full
                border-0"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const FlipCards = ({
  cards = [],
}: FlipCardsProps) => {
  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-87.5"
        >
          <SingleFlipCard {...card} />
        </div>
      ))}
    </div>
  );
};
