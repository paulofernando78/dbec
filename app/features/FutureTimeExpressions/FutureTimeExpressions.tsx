import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const expressions = [
  "tonight",
  "tomorrow",
  "tomorrow afternoon",
  "tomorrow night",
  "next week",
  "next month",
  "next summer",
  "next year",
] as const;

const audioFile = (expression: string) =>
  wordAudio(`${expression.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const FutureTimeExpressions = () => (
  <Card title="Future Time Expressions" inset className="mb-4">
    <p className="mb-4">Listen to expressions for future plans.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {expressions.map((expression) => (
        <li
          key={expression}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${expression}`}
            src={audioFile(expression)}
            fallbackText={expression}
            wrapperClassName="shrink-0"
          />
          <span className="font-bold">{expression}</span>
        </li>
      ))}
    </ul>
  </Card>
);
