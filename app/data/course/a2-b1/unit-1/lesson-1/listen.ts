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
    ["A", [mark("Where were you born?")]],
    ["B", [mark("I was born in Argentina.")]],
    ["A", [mark("Were you born in Buenos Aires?")]],
    ["B", [mark("No, I wasn't. I was born in Córdoba.")]],
    ["A", [mark("When did you move to Los Angeles?")]],
    ["B", [mark("I moved here ten years ago. I didn't speak English then.")]],
    ["A", [mark("Did you take English classes in Argentina?")]],
    ["B", [mark("Yes, I did. I took classes for a year. My aunt also taught me at home.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where was Elena born?",
  options: ["Buenos Aires", "Córdoba", "Los Angeles"],
  answer: "Córdoba",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When did Elena move to Los Angeles?",
      answer: "She moved there ten years ago.",
    },
    {
      question: "Did she speak English when she moved?",
      answer: "No, she didn't.",
    },
    {
      question: "Who taught her English at home?",
      answer: "Her aunt taught her at home.",
    },
  ],
} satisfies ListenData;
