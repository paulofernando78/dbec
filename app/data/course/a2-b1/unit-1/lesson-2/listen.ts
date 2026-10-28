import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends comparing their childhood routines.",
  audio:
    "/media/audio/course/a2-b1/unit-1/lesson-2-when-i-was-younger/listen/listen.mp3",
  dialogue: [
    ["A", ["How did you get to school when you were younger?"]],
    ["B", ["I ", mark("used to walk"), " to school every day."]],
    ["A", [mark("Did"), " you ", mark("use to play"), " outside after school?"]],
    [
      "B",
      ["Yes, I ", mark("did"), ". My friends and I ", mark("used to spend"), " every afternoon at the park."],
    ],
    ["A", ["Did your parents call you when it was time to come home?"]],
    ["B", ["No. I ", mark("didn't use to own"), " a phone back then."]],
    ["A", ["So you were outdoors most of the day?"]],
    ["B", ["Exactly. I ", mark("didn't use to stay"), " indoors very much."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is speaker B mainly describing?",
  options: ["Childhood routines", "A current school schedule", "Plans for the weekend"],
  answer: "Childhood routines",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How did speaker B get to school?",
      answer: "Speaker B used to walk to school.",
    },
    {
      question: "Where did speaker B spend afternoons?",
      answer: "At the park with friends.",
    },
    {
      question: "Did speaker B use to own a phone?",
      answer: "No, speaker B didn't use to own a phone.",
    },
  ],
} satisfies ListenData;
