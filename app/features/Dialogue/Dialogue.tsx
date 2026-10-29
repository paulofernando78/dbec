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

const lineToSpeech = (line: RichContent) =>
  line
    .map((part) => (typeof part === "string" ? part : (part.part ?? "")))
    .join("")
    .replace(/\s+/g, " ")
    .trim();

export const Dialogue = ({
  instruction,
  audioSrc,
  lines = [],
}: DialogueProps) => {
  const speechText = lines
    .map(({ line }) => lineToSpeech(line))
    .filter(Boolean)
    .join(" ");

  return (
    <div className="space-y-4 mb-4">
      <div className="flex items-center gap-2">
        <b><InlineRichContent value={instruction}/></b>
      </div>
      {(audioSrc || speechText) && (
        <AudioPlayer
          src={audioSrc}
          fallbackText={speechText}
          ariaLabel="Play dialogue"
        />
      )}
      {lines.map((line, index) => (
        <p key={index}>
          {line.speaker && (
            <>
              <b className="rounded-lg border border-gray-400 px-1 py-1">
                {line.speaker}
              </b>{" "}
            </>
          )}
          <InlineRichContent value={line.line ?? []} />
        </p>
      ))}
    </div>
  );
};
