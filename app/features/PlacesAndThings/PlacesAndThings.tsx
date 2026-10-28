import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "Places to go",
    words: [
      "post office",
      "drugstore",
      "gas station",
      "department store",
      "bank",
      "bookstore",
      "coffee shop",
      "supermarket",
    ],
  },
  {
    title: "Things to buy",
    words: [
      "backpack",
      "cold medicine",
      "debit card",
      "eggs",
      "espresso",
      "gasoline",
      "magazine",
      "stamps",
    ],
  },
] as const;

const audioFile = (word: string) =>
  wordAudio(`${word.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const PlacesAndThings = () => (
  <Card title="Places to Go, Things to Buy" inset className="mb-4">
    <p className="mb-4">Listen to places in town and things you can buy there.</p>

    <div className="grid gap-4">
      {groups.map((group) => (
        <section key={group.title}>
          <h4 className="mb-2 text-lg font-black">{group.title}</h4>
          <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {group.words.map((word) => (
              <li
                key={word}
                className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
              >
                <Audio
                  asButton
                  ariaLabel={`Play ${word}`}
                  src={audioFile(word)}
                  fallbackText={word}
                  wrapperClassName="shrink-0"
                />
                <span className="font-bold capitalize">{word}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Card>
);
