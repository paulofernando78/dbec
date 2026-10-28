import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to someone ask where to buy things in town.",
  audio: "/media/audio/course/a1/unit-13/lesson-1-shopping-around/listen/listen.mp3",
  dialogue: [
    ["A", ["Excuse me. Where can I buy cold medicine?"]],
    ["B", ["At the drugstore. It's ", mark("next to the bookstore"), "."]],
    ["A", ["Where is the bookstore?"]],
    ["B", ["It's ", mark("on Pine Street"), "."]],
    ["A", ["I also need stamps. Where is the post office?"]],
    ["B", ["It's ", mark("between the bank and the coffee shop"), "."]],
    ["A", ["Is the bank on Pine Street too?"]],
    ["B", ["Yes. It's ", mark("across from the supermarket"), "."]],
    ["A", ["And where is the coffee shop?"]],
    ["B", ["It's ", mark("on the corner of Pine and First"), "."]],
    ["A", ["Great. Thank you!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where can speaker A buy cold medicine?",
  options: ["At the drugstore", "At the bookstore", "At the supermarket"],
  answer: "At the drugstore",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What street is the bookstore on?",
      answer: "Pine Street.",
    },
    {
      question: "Where is the post office?",
      answer: "Between the bank and the coffee shop.",
    },
    {
      question: "What is across from the supermarket?",
      answer: "The bank.",
    },
    {
      question: "Where is the coffee shop?",
      answer: "On the corner of Pine and First.",
    },
    {
      question: "What does speaker A need from the post office?",
      answer: "Stamps.",
    },
  ],
} satisfies ListenData;
