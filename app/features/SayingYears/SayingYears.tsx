import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const years = [
  ["1900", "nineteen hundred"],
  ["1906", "nineteen oh six"],
  ["1995", "nineteen ninety-five"],
  ["2000", "two thousand"],
  ["2007", "two thousand seven"],
  ["2015", "two thousand fifteen or twenty fifteen"],
] as const;

export const SayingYears = () => (
  <Card title="Saying Years" inset className="mb-4">
    <p className="mb-4">Listen to common ways to say years.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {years.map(([year, spoken]) => (
        <li
          key={year}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${year}`}
            src={wordAudio(`${year}.mp3`)}
            fallbackText={spoken}
            wrapperClassName="shrink-0"
          />
          <span className="w-14 font-bold">{year}</span>
          <span className="font-bold">{spoken}</span>
        </li>
      ))}
    </ul>
  </Card>
);
