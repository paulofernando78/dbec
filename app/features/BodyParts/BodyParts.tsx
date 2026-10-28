import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const groups = [
  {
    title: "Head and face",
    words: [
      "head",
      "hair",
      "eye",
      "eyebrow",
      "ear",
      "nose",
      "mouth",
      "tooth / teeth",
      "chin",
      "neck",
      "throat",
    ],
  },
  {
    title: "Upper body",
    words: [
      "shoulder",
      "back",
      "chest",
      "arm",
      "elbow",
      "wrist",
      "hand",
      "finger",
      "thumb",
      "stomach",
      "hip",
    ],
  },
  {
    title: "Lower body",
    words: ["leg", "knee", "ankle", "foot / feet", "toe"],
  },
] as const;

const audioFile = (word: string) =>
  wordAudio(
    `${word.toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-")}.mp3`,
  );

export const BodyParts = () => (
  <Card title="Parts of the Body" inset className="mb-4">
    <p className="mb-4">Listen to words for parts of the body.</p>

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
                  fallbackText={word.replace(" / ", ", ")}
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
