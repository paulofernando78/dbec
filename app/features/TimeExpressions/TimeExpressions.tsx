import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const expressions = [
  "early",
  "late",
  "every day",
  "at 9:00",
  "at noon",
  "at midnight",
  "at night",
  "in the morning",
  "in the afternoon",
  "in the evening",
  "on Sundays",
  "on weekdays",
  "on weekends",
] as const;

const audioFile = (expression: string) =>
  wordAudio(`${expression.toLowerCase().replaceAll(" ", "-").replaceAll(":", "")}.mp3`);

export const TimeExpressions = () => (
  <Card title="Time Expressions" inset className="mb-4">
    <p className="mb-4">Listen to expressions for routines and time.</p>

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
