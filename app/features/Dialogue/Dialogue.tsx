import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Line } from "@/components/content/Line";
import { Image } from "@/components/ui/Image";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

import type { ContentToken } from "@/helpers/content";

type DialogueLine = {
  speaker?: string;
  line: (ContentToken | string)[];
};

type DialogueSentence = (ContentToken | string)[];

type DialogueProps = {
  prompt: string;
  audioSrc: string;
  lines: DialogueLine[];
};

export const Dialogue = ({
  prompt,

  audioSrc,
  lines = [],
}: DialogueProps) => {
  return (
    <div className="space-y-4 mb-4">
      <p>
        <b>{prompt}</b>
      </p>
      {audioSrc && <AudioPlayer src={audioSrc} />}
      {lines.map((line, index) => (
        <p key={index}>
          <b className="py-1 px-1 border border-gray-400 rounded-lg">{line.speaker}</b>{" "}
          <InlineRichContent value={line.line ?? []} />
        </p>
      ))}
    </div>
  );
};
