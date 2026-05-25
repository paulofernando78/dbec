import styles from "./Dialogue.module.css";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { ContentToken } from "@/helpers/content";

type DialogueLine = {
  speaker?: string;
  line?: (ContentToken | string)[];
};

type DialogueProps = {
  title?: string;
  speaker?: string;
  lines?: DialogueLine[];
};

export const Dialogue = ({
  title,
  speaker,
  lines = [],
}: DialogueProps) => {
  return (
    <div className="line-break">
      {lines.map((line, index) => (
        <p key={index} className={styles.lines}>
          {line.speaker && <b>{line.speaker}:{" "}</b>}
          <InlineRichContent value={line.line ?? []} />
        </p>
      ))}
    </div>
  );
};
