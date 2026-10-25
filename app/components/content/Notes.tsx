import { Text } from "./Text";
import { Card } from "@/components/ui/Card";
import { Audio } from "@/components/ui/Audio";

import type { RichContent } from "@/helpers/content";

export type Notes = {
  display?: "block" | "inline";
  as?: "p" | "span";
  parts: RichContent;
};

export type NotesProps = {
  value?: Notes[];
};

export const Notes = ({ value = [] }: NotesProps) => {
  return (
    <Card title="Notes" inset className="mb-4">
      <div className="grid gap-3">
        {value.map((note, index) => {
          const audio = note.parts.find(
            (part) => typeof part === "object" && part.audio,
          );
          const audioSource =
            typeof audio === "object" ? audio.audio : undefined;
          const text = note.parts.filter((part) => part !== audio);

          return (
            <div key={index} className="flex items-center gap-3">
              {audioSource && (
                <Audio
                  asButton
                  ariaLabel={`Play note ${index + 1}`}
                  src={audioSource}
                  wrapperClassName="shrink-0"
                />
              )}
              <Text
                display={note.display ?? "block"}
                as={note.as}
                value={text}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};
