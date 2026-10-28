import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people talking about the past.",
  audio:
    "/media/audio/course/a2-b1/unit-1/lesson-1-asking-about-the-past/listen/listen.mp3",
  dialogue: [
    ["A", ["Where ", mark("were"), " you born?"]],
    ["B", ["I ", mark("was"), " born in Argentina."]],
    ["A", [mark("Were"), " you born in Buenos Aires?"]],
    [
      "B",
      ["No, I ", mark("wasn't"), ". I ", mark("was"), " born in Córdoba."],
    ],
    ["A", ["When ", mark("did"), " you ", mark("move"), " to Los Angeles?"]],
    [
      "B",
      [
        "I ",
        mark("moved"),
        " here ten years ago. I ",
        mark("didn't speak"),
        " English then.",
      ],
    ],
    [
      "A",
      [mark("Did"), " you ", mark("take"), " English classes in Argentina?"],
    ],
    [
      "B",
      [
        "Yes, I ",
        mark("did"),
        ". I ",
        mark("took"),
        " classes for a year. My aunt also ",
        mark("taught"),
        " me at home.",
      ],
    ],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where was speaker B born?",
  options: ["Buenos Aires", "Córdoba", "Los Angeles"],
  answer: "Córdoba",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When did speaker B move to Los Angeles?",
      answer: "Speaker B moved there ten years ago.",
    },
    {
      question: "Did speaker B speak English after moving?",
      answer: "No, speaker B didn't.",
    },
    {
      question: "Who taught speaker B English at home?",
      answer: "Speaker B's aunt taught them at home.",
    },
  ],
} satisfies ListenData;
