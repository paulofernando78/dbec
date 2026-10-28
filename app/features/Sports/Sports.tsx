import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const sports = [
  "soccer",
  "basketball",
  "volleyball",
  "tennis",
  "baseball",
  "golf",
  "swimming",
  "running",
  "cycling",
  "boxing",
  "table tennis",
  "badminton",
] as const;

const audioFile = (sport: string) =>
  wordAudio(`${sport.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const Sports = () => (
  <Card title="Sports" inset className="mb-4">
    <p className="mb-4">Listen to the names of common sports.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {sports.map((sport) => (
        <li
          key={sport}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${sport}`}
            src={audioFile(sport)}
            fallbackText={sport}
            wrapperClassName="shrink-0"
          />
          <span className="font-bold capitalize">{sport}</span>
        </li>
      ))}
    </ul>
  </Card>
);
