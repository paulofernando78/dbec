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
  context?: RichContent | string;
  segmented?: boolean;
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
  context,
  segmented = false,
}: DialogueProps) => {
  const speechText = lines
    .map(({ line }) => lineToSpeech(line))
    .filter(Boolean)
    .join(" ");

  if (segmented) return (
    <div className="mb-4 grid gap-4">
      <div className="grid gap-4 rounded-xl bg-(--background) p-3">
        <div className="flex items-center gap-2">
          <b><InlineRichContent value={instruction}/></b>
        </div>
        {(audioSrc || speechText) && (
          <AudioPlayer
            src={audioSrc}
            fallbackText={speechText}
            ariaLabel="Play dialogue"
            withBottomMargin={false}
          />
        )}
      </div>
      {context && (
        <p className="rounded-xl bg-white p-3 text-lg leading-8 text-gray-900">
          <InlineRichContent value={context} />
        </p>
      )}
      <div className="grid gap-4 rounded-xl bg-(--background) p-4">
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
    </div>
  );

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
      {context && (
        <p className="text-lg leading-8">
          <InlineRichContent value={context} />
        </p>
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
