import { Audio } from "@/components/ui/Audio";
import { Card } from "@/components/ui/Card";
import { wordAudio } from "@/helpers/content";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const dates = [
  ["1st", "first"],
  ["2nd", "second"],
  ["3rd", "third"],
  ["4th", "fourth"],
  ["5th", "fifth"],
  ["6th", "sixth"],
  ["7th", "seventh"],
  ["8th", "eighth"],
  ["9th", "ninth"],
  ["10th", "tenth"],
  ["11th", "eleventh"],
  ["12th", "twelfth"],
  ["13th", "thirteenth"],
  ["14th", "fourteenth"],
  ["15th", "fifteenth"],
  ["16th", "sixteenth"],
  ["17th", "seventeenth"],
  ["18th", "eighteenth"],
  ["19th", "nineteenth"],
  ["20th", "twentieth"],
  ["21st", "twenty-first"],
  ["22nd", "twenty-second"],
  ["23rd", "twenty-third"],
  ["24th", "twenty-fourth"],
  ["25th", "twenty-fifth"],
  ["26th", "twenty-sixth"],
  ["27th", "twenty-seventh"],
  ["28th", "twenty-eighth"],
  ["29th", "twenty-ninth"],
  ["30th", "thirtieth"],
  ["31st", "thirty-first"],
] as const;

const audioFile = (text: string) =>
  wordAudio(`${text.toLowerCase().replaceAll(" ", "-")}.mp3`);

export const MonthsAndDates = () => (
  <Card title="Months and Dates" inset className="mb-4">
    <section className="mb-4">
      <h4 className="mb-2 text-lg font-black">Months</h4>
      <p className="mb-4">Listen to the months of the year.</p>
      <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {months.map((month) => (
          <li
            key={month}
            className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
          >
            <Audio
              asButton
              ariaLabel={`Play ${month}`}
              src={audioFile(month)}
              fallbackText={month}
              wrapperClassName="shrink-0"
            />
            <span className="font-bold">{month}</span>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <h4 className="mb-2 text-lg font-black">Dates</h4>
      <p className="mb-4">Listen to ordinal numbers for dates.</p>
      <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {dates.map(([date, word]) => (
          <li
            key={date}
            className="flex items-center gap-3 rounded-xl bg-[var(--background)] p-2"
          >
            <Audio
              asButton
              ariaLabel={`Play ${word}`}
              src={audioFile(word)}
              fallbackText={word}
              wrapperClassName="shrink-0"
            />
            <span className="w-12 font-bold">{date}</span>
            <span className="font-bold capitalize">{word}</span>
          </li>
        ))}
      </ul>
    </section>
  </Card>
);
