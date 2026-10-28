import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const activities = [
  "answer email",
  "clean the house",
  "do the laundry",
  "exercise",
  "go grocery shopping",
  "visit relatives",
  "wash the car",
  "work or study",
] as const;

const audioFile = (activity: string) =>
  wordAudio(`${activity.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const WeekendActivities = () => (
  <Card title="Things to Do on the Weekend" inset className="mb-4">
    <p className="mb-4">Listen to common weekend activities.</p>

    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {activities.map((activity) => (
        <li
          key={activity}
          className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <Audio
            asButton
            ariaLabel={`Play ${activity}`}
            src={audioFile(activity)}
            fallbackText={activity}
            wrapperClassName="shrink-0"
          />
          <span className="font-bold">{activity}</span>
        </li>
      ))}
    </ul>
  </Card>
);
