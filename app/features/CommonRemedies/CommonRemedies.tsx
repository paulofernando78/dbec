import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const remedies = [
  "chamomile tea",
  "cough syrup",
  "chicken soup",
  "cold medicine",
  "eye drops",
  "aspirin",
  "antacid",
  "nasal spray",
  "ice pack",
] as const;

const audioFile = (remedy: string) =>
  wordAudio(`${remedy.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const CommonRemedies = () => (
  <Card title="Common Remedies" inset className="mb-4">
    <p className="mb-4">Listen to words for common remedies.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {remedies.map((remedy) => (
        <li
          key={remedy}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${remedy}`}
            src={audioFile(remedy)}
            fallbackText={remedy}
            wrapperClassName="shrink-0"
          />
          <span className="font-bold capitalize">{remedy}</span>
        </li>
      ))}
    </ul>
  </Card>
);
