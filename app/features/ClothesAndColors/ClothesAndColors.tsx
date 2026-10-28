import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "Clothes for work",
    words: [
      "jacket",
      "shirt",
      "blouse",
      "tie",
      "suit",
      "belt",
      "pants",
      "skirt",
      "shoes",
      "raincoat",
      "dress",
      "high heels",
      "coat",
    ],
  },
  {
    title: "Clothes for free time",
    words: [
      "hat",
      "scarf",
      "gloves",
      "sweater",
      "T-shirt",
      "shorts",
      "jeans",
      "boots",
      "socks",
      "sneakers",
      "pajamas",
      "cap",
      "swimsuits",
    ],
  },
  {
    title: "Colors",
    words: [
      "white",
      "light gray",
      "gray",
      "dark gray",
      "beige",
      "light brown",
      "brown",
      "dark brown",
      "black",
      "purple",
      "dark blue",
      "blue",
      "light blue",
      "dark green",
      "green",
      "light green",
      "red",
      "pink",
      "orange",
      "yellow",
    ],
  },
] as const;

const audioFile = (word: string) =>
  wordAudio(`${word.toLowerCase().replaceAll(" ", "-")}.mp3`);

const WordList = ({ words }: { words: readonly string[] }) => (
  <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
    {words.map((word) => (
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
);

export const ClothesAndColors = () => (
  <>
    <Card title="Clothes" inset className="mb-4">
      <p className="mb-4">Listen to words for clothes.</p>
      <div className="grid gap-4">
        {groups.slice(0, 2).map((group) => (
          <section key={group.title}>
            <h4 className="mb-2 text-lg font-black">{group.title}</h4>
            <WordList words={group.words} />
          </section>
        ))}
      </div>
    </Card>

    <Card title="Colors" inset className="mb-4">
      <p className="mb-4">Listen to words for colors.</p>
      {groups.slice(2).map((group) => (
        <section key={group.title}>
          <WordList words={group.words} />
        </section>
      ))}
    </Card>
  </>
);
