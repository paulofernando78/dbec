import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Image } from "@/components/ui/Image";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

import type { ContentToken } from "@/helpers/content";

type DialogueLine = {
  speaker?: string;
  line: (ContentToken | string)[];
};

type DialogueProps = {
  instruction: string;
  imgSrc: string,
  imgAlt: string,
  audioSrc: string,
  lines: DialogueLine[];
};

export const Dialogue = ({
  instruction,
  imgSrc,
  imgAlt,
  audioSrc,
  lines = [],
}: DialogueProps) => {
  return (
    <div className="space-y-4">
      <p><b>{instruction}</b></p>
      <Image src={imgSrc} alt={imgAlt} applyPadding/>
      <AudioPlayer src={audioSrc} />
      {lines.map((line, index) => (
        <p key={index}>
          <b>{line.speaker}:{" "}</b>
          <InlineRichContent value={line.line ?? []} />
        </p>
      ))}
    </div>
  );
};
