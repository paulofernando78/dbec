import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing their spring break plans.",
  audio:
    "/media/audio/course/a2-b1/unit-5/lesson-1-future-plans/listen/listen.mp3",
  dialogue: [
    ["A", ["What ", mark("are"), " you ", mark("going to do"), " during spring break?"]],
    [
      "B",
      ["I", mark("'m going to visit"), " my cousin in Florianópolis."],
    ],
    ["A", ["That sounds fun. Do you have any activities planned?"]],
    [
      "B",
      ["We", mark("'re going to hike"), " on Saturday, but we", mark("'re not going to rent"), " a car."],
    ],
    ["B", ["What ", mark("will"), " you do during the break?"]],
    [
      "A",
      ["I'm not sure. I guess I", mark("'ll catch up"), " on sleep. Maybe I", mark("'ll join"), " a cooking workshop."],
    ],
    ["B", ["Do you think you'll travel anywhere?"]],
    [
      "A",
      ["I don't know. I think I", mark("'ll take"), " a short road trip. I probably ", mark("won't stay"), " home all week."],
    ],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Who is speaker B going to visit?",
  options: ["A cousin", "A teacher", "A coworker"],
  answer: "A cousin",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where is speaker B going?",
      answer: "Speaker B is going to Florianópolis.",
    },
    {
      question: "What are speaker B and the cousin going to do on Saturday?",
      answer: "They are going to hike.",
    },
    {
      question: "What aren't they going to rent?",
      answer: "They aren't going to rent a car.",
    },
    {
      question: "What workshop might speaker A join?",
      answer: "A cooking workshop.",
    },
    {
      question: "What trip does speaker A think they will take?",
      answer: "A short road trip.",
    },
  ],
} satisfies ListenData;
