import { InlineRichContent } from "@/components/content/InlineRichContent";
import { Audio } from "@/components/ui/Audio";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

import type { RichContent } from "@/helpers/content";
import { useState } from "react";

type DialogueLine = {
  speaker?: string;
  line: RichContent;
};

type DialogueProps = {
  instruction: string;
  audioSrc: string;
  lines: DialogueLine[];
};

export const Dialogue = ({
  instruction,

  audioSrc,
  lines = [],
}: DialogueProps) => {
  const isListeningFirst =
    /\blisten\b/i.test(instruction) && !/\bread\b/i.test(instruction);
  const [isTranscriptVisible, setIsTranscriptVisible] = useState(
    !isListeningFirst,
  );
  const dialogueText = lines
    .map(({ speaker, line }) => {
      const text = line
        .map((part) => (typeof part === "string" ? part : (part.part ?? "")))
        .join("");

      return `${speaker ?? ""}. ${text}`;
    })
    .join(" ");

  return (
    <div className="space-y-4 mb-4">
      <div className="flex items-center gap-2">
        {!audioSrc && dialogueText && <Audio src={dialogueText} />}
        <b>{instruction}</b>
      </div>
      {audioSrc && <AudioPlayer src={audioSrc} />}
      {isListeningFirst && (
        <button
          type="button"
          className="rounded-lg border border-slate-400 bg-slate-100 px-3 py-2 font-semibold text-slate-700 hover:bg-slate-200"
          aria-expanded={isTranscriptVisible}
          onClick={() => setIsTranscriptVisible((visible) => !visible)}
        >
          {isTranscriptVisible
            ? "Hide transcript"
            : "Show transcript after the first listening"}
        </button>
      )}
      {isTranscriptVisible &&
        lines.map((line, index) => (
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
