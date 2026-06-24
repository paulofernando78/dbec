import { Ribbon } from "@/components/ui/Ribbon";
// import { Line } from "@/components/molecules/Line";
import { Card } from "@/components/ui/Card";
import { Audio } from "@/components/ui/Audio";
import { Line } from "@/components/content/Line";
import { LineBreak } from "@/components/content/LineBreak";
import { content } from "@/helpers/content";
import { Notes } from "@/components/content/Notes";

const alphabet = [
  {
    number: "1",
    letter: "A",
    phonetics: "/eɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/a.mp3",
  },
  {
    number: "2",
    letter: "B",
    phonetics: "/biː/",
    audio: "/assets/audio/pronunciation/the-alphabet/b.mp3",
  },
  {
    number: "3",
    letter: "C",
    phonetics: "/siː/",
    audio: "/assets/audio/pronunciation/the-alphabet/c.mp3",
  },
  {
    number: "4",
    letter: "D",
    phonetics: "/diː/",
    audio: "/assets/audio/pronunciation/the-alphabet/d.mp3",
  },
  {
    number: "5",
    letter: "E",
    phonetics: "/iː/",
    audio: "/assets/audio/pronunciation/the-alphabet/e.mp3",
  },
  {
    number: "6",
    letter: "F",
    phonetics: "/ef/",
    audio: "/assets/audio/pronunciation/the-alphabet/f.mp3",
  },
  {
    number: "7",
    letter: "G",
    phonetics: "/dʒiː/",
    audio: "/assets/audio/pronunciation/the-alphabet/g.mp3",
  },
  {
    number: "8",
    letter: "H",
    phonetics: "/eɪtʃ/",
    audio: "/assets/audio/pronunciation/the-alphabet/h.mp3",
  },
  {
    number: "9",
    letter: "I",
    phonetics: "/aɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/i.mp3",
  },
  {
    number: "10",
    letter: "J",
    phonetics: "/dʒeɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/j.mp3",
  },
  {
    number: "11",
    letter: "K",
    phonetics: "/keɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/k.mp3",
  },
  {
    number: "12",
    letter: "L",
    phonetics: "/el/",
    audio: "/assets/audio/pronunciation/the-alphabet/l.mp3",
  },
  {
    number: "13",
    letter: "M",
    phonetics: "/em/",
    audio: "/assets/audio/pronunciation/the-alphabet/m.mp3",
  },
  {
    number: "14",
    letter: "N",
    phonetics: "/en/",
    audio: "/assets/audio/pronunciation/the-alphabet/n.mp3",
  },
  {
    number: "15",
    letter: "O",
    phonetics: "/oʊ/",
    audio: "/assets/audio/pronunciation/the-alphabet/o.mp3",
  },
  {
    number: "16",
    letter: "P",
    phonetics: "/piː/",
    audio: "/assets/audio/pronunciation/the-alphabet/p.mp3",
  },
  {
    number: "17",
    letter: "Q",
    phonetics: "/kjuː/",
    audio: "/assets/audio/pronunciation/the-alphabet/q.mp3",
  },
  {
    number: "18",
    letter: "R",
    phonetics: "/ɑːr/",
    audio: "/assets/audio/pronunciation/the-alphabet/r.mp3",
  },
  {
    number: "19",
    letter: "S",
    phonetics: "/es/",
    audio: "/assets/audio/pronunciation/the-alphabet/s.mp3",
  },
  {
    number: "20",
    letter: "T",
    phonetics: "/tiː/",
    audio: "/assets/audio/pronunciation/the-alphabet/t.mp3",
  },
  {
    number: "21",
    letter: "U",
    phonetics: "/juː/",
    audio: "/assets/audio/pronunciation/the-alphabet/u.mp3",
  },
  {
    number: "22",
    letter: "V",
    phonetics: "/viː/",
    audio: "/assets/audio/pronunciation/the-alphabet/v.mp3",
  },
  {
    number: "23",
    letter: "W",
    phonetics: "/ˈdʌb.əl.juː/",
    audio: "/assets/audio/pronunciation/the-alphabet/w.mp3",
  },
  {
    number: "24",
    letter: "X",
    phonetics: "/eks/",
    audio: "/assets/audio/pronunciation/the-alphabet/x.mp3",
  },
  {
    number: "25",
    letter: "Y",
    phonetics: "/waɪ/",
    audio: "/assets/audio/pronunciation/the-alphabet/y.mp3",
  },
  {
    number: "26",
    letter: "Z",
    phonetics: "/ziː/",
    audio: "/assets/audio/pronunciation/the-alphabet/z.mp3",
  },
];

const notes = [
  {
    audio: "/assets/audio/pronunciation/the-alphabet/letter-c.mp3",
    note: "“C” has the same sound as the verb “see” and the noun “sea.”",
  },
  {
    audio: "/assets/audio/pronunciation/the-alphabet/letter-d.mp3",
    note: "“D” is pronounced differently from letter “G.”",
  },
  {
    audio: "/assets/audio/pronunciation/the-alphabet/number-eight.mp3",
    note: "Number “eight” is pronounced differently from letter “H.”",
  },
  {
    audio: "/assets/audio/pronunciation/the-alphabet/letter-t.mp3",
    note: "“T” has the same sound as in “tea.”",
  },
  {
    audio: "/assets/audio/pronunciation/the-alphabet/letter-u.mp3",
    note: "“U” has the same sound as in “you.”",
  },
  {
    audio: "/assets/audio/pronunciation/the-alphabet/letter-z.mp3",
    note: "“Z” in British is pronounced “zed.”",
  },
];

export const TheAlphabet = () => {
  return (
    <>
      <Ribbon label="The Alphabet" bgColor="bg-slate-500" />
      <LineBreak />
      <Line
        as="p"
        value={[
          ...content({
            audio: "/assets/audio/pronunciation/the-alphabet/26-letters.mp3",
            parts: ["There are 26 letters in the english alphabet."],
          }),
        ]}
      />
      <div className="flex justify-center flex-wrap gap-2">
        {alphabet.map((a, i) => (
          <div
            key={i}
            className="w-25.5 px-1.25 py-2.25  flex flex-col items-center justify-center gap-1.25 border border-gray-400 rounded-lg"
          >
            <>
              <span className="text-[0.8rem]">{a.number}</span>
              <span className="text-[1.4rem] font-bold">{a.letter}</span>
              <span className="phonetics">{a.phonetics}</span>
              <Audio src={a.audio} />
            </>
          </div>
        ))}
      </div>
      <div>
        <Notes
          value={notes.map((n) => ({
            as: "p",
            parts: [
              ...content({
                audio: n.audio,
                parts: [n.note],
              }),
            ],
          }))}
        />
      </div>
    </>
  );
};
