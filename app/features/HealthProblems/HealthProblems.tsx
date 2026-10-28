import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const healthProblems = [
  "a backache",
  "an earache",
  "a headache",
  "a stomachache",
  "a toothache",
  "a cold",
  "a cough",
  "a fever",
  "the flu",
  "a sore throat",
] as const;

const audioFile = (problem: string) =>
  wordAudio(`${problem.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const HealthProblems = () => (
  <Card title="Health Problems" inset className="mb-4">
    <p className="mb-4">Listen to common health problems.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {healthProblems.map((problem) => (
        <li
          key={problem}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${problem}`}
            src={audioFile(problem)}
            fallbackText={problem}
            wrapperClassName="shrink-0"
          />
          <span className="font-bold">{problem}</span>
        </li>
      ))}
    </ul>
  </Card>
);
