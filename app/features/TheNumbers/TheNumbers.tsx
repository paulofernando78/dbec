import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";

const numbers = [
  { numeral: "0", word: "zero", phonetics: "/ˈzɪroʊ/" },
  { numeral: "1", word: "one", phonetics: "/wʌn/" },
  { numeral: "2", word: "two", phonetics: "/tuː/" },
  { numeral: "3", word: "three", phonetics: "/θriː/" },
  { numeral: "4", word: "four", phonetics: "/fɔːr/" },
  { numeral: "5", word: "five", phonetics: "/faɪv/" },
  { numeral: "6", word: "six", phonetics: "/sɪks/" },
  { numeral: "7", word: "seven", phonetics: "/ˈsevən/" },
  { numeral: "8", word: "eight", phonetics: "/eɪt/" },
  { numeral: "9", word: "nine", phonetics: "/naɪn/" },
  { numeral: "10", word: "ten", phonetics: "/ten/" },
] as const;

const moreNumbers = [
  ["11", "eleven"],
  ["12", "twelve"],
  ["13", "thirteen"],
  ["14", "fourteen"],
  ["15", "fifteen"],
  ["16", "sixteen"],
  ["17", "seventeen"],
  ["18", "eighteen"],
  ["19", "nineteen"],
  ["20", "twenty"],
  ["21", "twenty-one"],
  ["22", "twenty-two"],
  ["23", "twenty-three"],
  ["24", "twenty-four"],
  ["25", "twenty-five"],
  ["26", "twenty-six"],
  ["27", "twenty-seven"],
  ["28", "twenty-eight"],
  ["29", "twenty-nine"],
  ["30", "thirty"],
  ["40", "forty"],
  ["50", "fifty"],
  ["60", "sixty"],
  ["70", "seventy"],
  ["80", "eighty"],
  ["90", "ninety"],
  ["100", "one hundred"],
  ["101", "one hundred and one"],
  ["102", "one hundred and two"],
  ["103", "one hundred and three"],
] as const;

export const TheNumbers = () => (
  <Card title="Numbers" inset className="mb-4">
    <div className="flex items-center gap-3">
      <Audio
        asButton
        ariaLabel="Play numbers from zero to ten"
        src="/assets/audio/pronunciation/numbers/zero-to-ten.mp3"
        fallbackText="Listen to the numbers from 0 to 10."
        wrapperClassName="shrink-0"
      />
      <p>Listen to the numbers from 0 to 10.</p>
    </div>

    <ul className="my-4 grid grid-cols-1 gap-2 lg:grid-cols-2">
      {numbers.map(({ numeral, word, phonetics }) => (
        <li
          key={numeral}
          className="flex min-w-0 items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <span className="w-8 shrink-0 text-right font-bold">{numeral}</span>
          <Audio
            asButton
            ariaLabel={`Play number ${word}`}
            src={`/assets/audio/pronunciation/numbers/${word}.mp3`}
            fallbackText={word}
            wrapperClassName="shrink-0"
          />
          <span className="min-w-0">
            <span className="block font-bold capitalize leading-none">
              {word}
            </span>
            <span className="phonetics mt-1 block whitespace-nowrap text-sm leading-none">
              {phonetics}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </Card>
);

export const MoreNumbers = () => (
  <Card title="Numbers" inset className="mb-4">
    <div className="flex items-center gap-3">
      <Audio
        asButton
        ariaLabel="Play numbers from 11 to 103"
        src="/assets/audio/pronunciation/numbers/eleven-to-one-hundred-and-three.mp3"
        fallbackText="Listen to the numbers from 11 to 103."
        wrapperClassName="shrink-0"
      />
      <p>Listen to the numbers from 11 to 103.</p>
    </div>

    <ul className="my-4 grid grid-cols-1 gap-2 lg:grid-cols-2">
      {moreNumbers.map(([numeral, word]) => (
        <li
          key={numeral}
          className="flex min-w-0 items-center gap-3 rounded-xl bg-[var(--background)] p-2"
        >
          <span className="w-9 shrink-0 text-right font-bold">{numeral}</span>
          <Audio
            asButton
            ariaLabel={`Play number ${word}`}
            src={`/assets/audio/pronunciation/numbers/${word.replaceAll(" ", "-")}.mp3`}
            fallbackText={word}
            wrapperClassName="shrink-0"
          />
          <span className="min-w-0 font-bold capitalize leading-tight">
            {word}
          </span>
        </li>
      ))}
    </ul>
  </Card>
);
