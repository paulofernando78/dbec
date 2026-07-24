import type { ReactNode } from "react";
import type { ContentToken, RichContent } from "@/helpers/content";

import { Audio } from "@/components/ui/Audio";
import { Mark } from "@/components/content/Mark";
import { AttentionMark } from "@/components/content/AttentionMark";
import { BoldMark } from "@/components/content/BoldMark";
import { Underline } from "@/components/content/Underline";
import { PartOfSpeech } from "@/components/content/PartOfSpeech";
import { Stressed } from "@/components/content/Stressed";
import { Portuguese } from "@/components/content/Portuguese";
import { PortugueseBold } from "@/components/content/PortugueseBold";
import { Phonetics } from "@/components/content/Phonetics";
import { CircleCheck, CircleX, Dot, Spotlight, ArrowRight } from "lucide-react";

import styles from "./InlineRichContent.module.css";

type InlineRichContentProps = {
  value: RichContent;
};

export const InlineRichContent = ({ value }: InlineRichContentProps) => {
  const contentArray = value || [];

  const bulletCount = contentArray.filter(
    (part) => typeof part === "object" && part?.bullet,
  ).length;

  const FlagIcon = ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => (
    <img src={src} alt={alt} className={`${styles.flagIcon} ${className}`} />
  );

  const iconMap = {
    us: () => (
      <FlagIcon src="/assets/img/icons/flags/us.svg" alt="US Flag icon" />
    ),
    uk: () => (
      <FlagIcon src="/assets/img/icons/flags/uk.svg" alt="UK Flag icon" />
    ),
    correct: () => (
      <CircleCheck
        size={19}
        color="green"
        className={`
          ${styles.iconPosition}
          ${styles.extraIconPosition}`}
      />
    ),
    incorrect: () => (
      <CircleX
        size={19}
        color="red"
        className={`${styles.iconPosition} ${styles.extraIconPosition}`}
      />
    ),
    spotlight: () => (
      <Spotlight
        size={19}
        className={styles.iconPosition}
        color="var(--icon-color)"
      />
    ),
    bullet: () => (
      <Dot size={19} strokeWidth={4} className={styles.iconPosition} />
    ),
    arrow: () => (
      <ArrowRight size={18} strokeWidth={4} className={`text-gray-400 ${styles.iconPosition}`} />
    ),
  };

  type IconName = keyof typeof iconMap;

  const isIconName = (name: string): name is IconName => {
    return name in iconMap;
  };

  const renderIcons = (part: ContentToken) => {
    const icons: ReactNode[] = [];

    if (Array.isArray(part.icons)) {
      part.icons.forEach((name) => {
        if (!isIconName(name)) return;

        const Icon = iconMap[name];
        icons.push(<Icon key={`icon-${name}`} />);
      });
    }

    return icons;
  };

  return (
    <>
      {contentArray.map((part, i) => {
        if (typeof part === "string") return part;

        if (part.lineBreak) {
          return <span key={i} className="block" aria-hidden="true" />;
        }

        let content: ReactNode = part.part;

        const isBullet = part.bullet;
        const isLastBullet =
          isBullet &&
          bulletCount > 1 &&
          !contentArray
            .slice(i + 1)
            .some((v) => typeof v === "object" && v?.bullet);

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
          case "attentionMark":
            content = <AttentionMark>{part.part}</AttentionMark>;
            break;
          case "bold-mark":
            content = <BoldMark>{part.part}</BoldMark>;
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
        }

        return (
          <span key={i} className={styles.inlineItem}>
            {renderIcons(part)}
            {part.audio && (
              <span className="inline-audio">
                <Audio
                  src={part.audio}
                  className={`${styles.iconPosition} ${styles.iconPositionAudio}`}
                />
              </span>
            )}
            {content}
          </span>
        );
      })}
    </>
  );
};
