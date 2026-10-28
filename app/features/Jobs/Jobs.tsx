import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const jobs = [
  "accountant",
  "bellhop",
  "cashier",
  "chef",
  "doctor",
  "front desk clerk",
  "host",
  "nurse",
  "office manager",
  "police officer",
  "receptionist",
  "salesperson",
  "security guard",
  "server",
  "taxi driver",
  "vendor",
] as const;

const audioFile = (job: string) =>
  wordAudio(`${job.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const Jobs = () => (
  <Card title="Jobs" inset className="mb-4">
    <p className="mb-4">Listen to words for jobs.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {jobs.map((job) => (
        <li
          key={job}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${job}`}
            src={audioFile(job)}
            fallbackText={job}
            wrapperClassName="shrink-0"
          />
          <span className="font-bold capitalize">{job}</span>
        </li>
      ))}
    </ul>
  </Card>
);
