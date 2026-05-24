import type { ReactNode } from "react";

import { Audio } from "@/components/ui/Audio";
import { Mark } from "@/components/content/Mark";
import { Underline } from "@/components/content/Underline";
import { PartOfSpeech } from "@/components/content/PartOfSpeech";
import { Stressed } from "@/components/content/Stressed";
import { Portuguese } from "@/components/content/Portuguese";
import { PortugueseBold } from "@/components/content/PortugueseBold";
import { Phonetics } from "@/components/content/Phonetics";
import { BulletPoint } from "@/components/content/BulletPoint";
import { SquarePoint } from "@/components/content/SquarePoint";
import { Connector } from "@/components/content/Connector";
import {
  Attention,
  USflag,
  UKflag,
  Correct,
  Incorrect,
  Arrow,
  Compare,
  Variation,
  Square,
} from "@/lib/svg-imports";

import styles from "./InlineRichContent.module.css";

type InlineRichContentValue =
  | string
  | {
      part?: string;
      type?: string;
      icons?: string[];
      audio?: string;
      bullet?: boolean;
      square?: boolean;
    };

type InlineRichContentProps = {
  value?: InlineRichContentValue[];
  text?: ReactNode;
  phonetics?: ReactNode;
  portuguese?: ReactNode;
};

export const InlineRichContent = ({ value, text }: InlineRichContentProps) => {
  const raw = value ?? text;
  const contentArray = Array.isArray(raw) ? raw : [raw];

  const squareCount = contentArray.filter(
    (part) => typeof part === "object" && part?.square,
  ).length;

  const iconMap: Record<string, React.ComponentType> = {
    attention: Attention,
    us: USflag,
    uk: UKflag,
  };

  const renderIcons = (part: Exclude<InlineRichContentValue, string>) => {
    const icons: ReactNode[] = [];

    if (Array.isArray(part.icons)) {
      part.icons.forEach((name) => {
        const Icon = iconMap[name];

        if (Icon) {
          icons.push(<Icon key={`icon-${name}`} />);
        }
      });
    }

    return icons;
  };

  return (
    <>
      {contentArray.map((part, i) => {
        if (typeof part === "string") return part;

        let content = part.part;

        const isSquare = part.square;
        const isLastSquare =
          isSquare &&
          squareCount > 1 &&
          !contentArray
            .slice(i + 1)
            .some((v) => typeof v === "object" && v?.square);

        switch (part.type) {
          case "bold":
            content = <b>{part.part}</b>;
            break;
          case "strong":
            content = <strong>{part.part}</strong>;
            break;
          case "italic":
            content = <em>{part.part}</em>;
            break;
          case "mark":
            content = <Mark>{part.part}</Mark>;
            break;
          case "bold-mark":
            content = (
              <b>
                <Mark>{part.part}</Mark>
              </b>
            );
            break;
          case "underline":
            content = <Underline>{part.part}</Underline>;
            break;
          case "partOfSpeech":
            content = <PartOfSpeech>{part.part}</PartOfSpeech>;
            break;
          case "stressed":
            content = <Stressed>{part.part}</Stressed>;
            break;
          case "phonetics":
            content = <Phonetics>{part.part}</Phonetics>;
            break;
          case "portuguese":
            content = <Portuguese>{part.part}</Portuguese>;
            break;
          case "bold-portuguese":
          case "portuguese-bold":
            content = <PortugueseBold>{part.part}</PortugueseBold>;
            break;
          case "connector":
            content = <Connector>{part.part}</Connector>;
            break;
        }

        return (
          <span key={i}>
            {typeof part === "object" && renderIcons(part)}
            {part.audio && (
              <span className="inline-audio">
                <Audio src={part.audio} />
              </span>
            )}
            {part.bullet && <BulletPoint />}
            {part.square && !isLastSquare && <SquarePoint />}
            {content}
          </span>
        );
      })}
    </>
  );
};
