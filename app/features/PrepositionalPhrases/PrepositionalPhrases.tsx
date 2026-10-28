import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "At",
    phrases: ["at home", "at work", "at school", "at the mall", "at the library", "at the beach"],
  },
  {
    title: "In",
    phrases: ["in bed", "in class", "in Mexico", "in the shower", "in the hospital", "in a meeting"],
  },
  {
    title: "On",
    phrases: ["on vacation", "on a trip", "on his or her break"],
  },
] as const;

const audioFile = (phrase: string) =>
  wordAudio(`${phrase.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const PrepositionalPhrases = () => (
  <Card title="Prepositional Phrases" inset className="mb-4">
    <p className="mb-4">Listen to common phrases with at, in, and on.</p>

    <div className="grid gap-4">
      {groups.map((group) => (
        <section key={group.title}>
          <h4 className="mb-2 text-lg font-black">{group.title}</h4>
          <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {group.phrases.map((phrase) => (
              <li
                key={phrase}
                className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
              >
                <Audio
                  asButton
                  ariaLabel={`Play ${phrase}`}
                  src={audioFile(phrase)}
                  fallbackText={phrase}
                  wrapperClassName="shrink-0"
                />
                <span className="font-bold">{phrase}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Card>
);
