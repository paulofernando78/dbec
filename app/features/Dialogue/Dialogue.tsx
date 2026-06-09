import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Line } from "@/components/content/Line";
import { Image } from "@/components/ui/Image";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

import type { ContentToken } from "@/helpers/content";

type DialogueLine = {
  speaker?: string;
  line: (ContentToken | string)[];
};

type DialogueSentence = (ContentToken | string)[];;

type DialogueProps = {
  prompt: string;
  imgSrc: string;
  imgAlt: string;
  sentences: DialogueSentence[];
  audioSrc: string;
  lines: DialogueLine[];
};

export const Dialogue = ({
  prompt,
  imgSrc,
  imgAlt,
  sentences = [],
  audioSrc,
  lines = [],
}: DialogueProps) => {
  return (
    <div className="space-y-4">
      <p>
        <b>{prompt}</b>
      </p>
      <Image src={imgSrc} alt={imgAlt} applyPadding />
      <div>
        {sentences.map((sentence, index) => (
          <Line key={index} value={sentence} as="p" />
        ))}
      </div>
      <AudioPlayer src={audioSrc} />
      {lines.map((line, index) => (
        <p key={index}>
          <b>{line.speaker}: </b>
          <InlineRichContent value={line.line ?? []} />
        </p>
      ))}
    </div>
  );
};
