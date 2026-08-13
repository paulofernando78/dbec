import { InlineRichContent } from "@/components/content/InlineRichContent";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

import type { RichContent } from "@/helpers/content";

type DialogueLine = {
  speaker?: string;
  line: RichContent;
};

type DialogueProps = {
  instruction: RichContent | string;
  audioSrc: string;
  lines: DialogueLine[];
};

export const Dialogue = ({
  instruction,
  audioSrc,
  lines = [],
}: DialogueProps) => {
  return (
    <div className="space-y-4 mb-4">
      <div className="flex items-center gap-2">
        <b><InlineRichContent value={instruction}/></b>
      </div>
      {audioSrc && <AudioPlayer src={audioSrc} />}
      {lines.map((line, index) => (
        <p key={index}>
          <b className="py-1 px-1 border border-gray-400 rounded-lg">
            {line.speaker}
          </b>{" "}
          <InlineRichContent value={line.line ?? []} />
        </p>
      ))}
    </div>
  );
};
