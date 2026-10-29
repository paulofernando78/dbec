import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about childhood and school.",
  audio: "/media/audio/course/a1/unit-15/lesson-2-school-days/listen/listen.mp3",
  dialogue: [
    ["A", [mark("Where did you grow up"), ", Daniel?"]],
    ["B", ["I grew up in ", mark("Curitiba"), "."]],
    ["A", [mark("When did you move"), " to São Paulo?"]],
    ["B", ["I moved here in ", mark("2015"), "."]],
    ["A", ["Where were you born?"]],
    ["B", ["I was born in ", mark("Manaus"), " in 1995."]],
    ["A", ["How old were you in 2010?"]],
    ["B", ["I was ", mark("fifteen"), "."]],
    ["A", [mark("What was your favorite subject"), " at school?"]],
    ["B", ["It was ", mark("science"), "."]],
    ["A", ["Why did you study English?"]],
    ["B", ["Because I needed it for work."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Conversation topic:",
  options: ["Childhood and school", "Food and shopping", "Directions"],
  answer: "Childhood and school",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When did Daniel move to São Paulo?",
      answer: "In 2015.",
    },
    {
      question: "Where was Daniel born?",
      answer: "In Manaus.",
    },
    {
      question: "When was Daniel born?",
      answer: "In 1995.",
    },
    {
      question: "What was Daniel's favorite subject?",
      answer: "Science.",
    },
    {
      question: "Why did Daniel study English?",
      answer: "Because he needed it for work.",
    },
  ],
} satisfies ListenData;
