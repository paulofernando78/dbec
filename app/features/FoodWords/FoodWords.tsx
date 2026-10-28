import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "Fruit and vegetables",
    words: [
      "apples",
      "blueberries",
      "tomatoes",
      "lemons",
      "oranges",
      "lettuce",
      "bananas",
      "onions",
      "carrots",
      "kiwis",
      "broccoli",
      "potatoes",
    ],
  },
  {
    title: "Grains",
    words: ["noodles", "rice", "bread", "cereal", "crackers", "pasta"],
  },
  {
    title: "Meat and other proteins",
    words: ["nuts", "chicken", "eggs", "fish", "beans", "beef"],
  },
  {
    title: "Dairy",
    words: ["milk", "cheese", "yogurt"],
  },
  {
    title: "Fats and oils",
    words: ["oil", "butter", "mayonnaise", "cream"],
  },
] as const;

const audioFile = (word: string) =>
  wordAudio(`${word.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const FoodWords = () => (
  <Card title="Food" inset className="mb-4">
    <p className="mb-4">Listen to words for food.</p>

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
