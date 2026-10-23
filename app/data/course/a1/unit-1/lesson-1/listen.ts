import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to Laura and Eric meeting for the first time.",
  audio: "/media/audio/course/a1/unit-1/lesson-1-hello/listen/listen.mp3",
  dialogue: [
    [
      "Laura",
      [
        mark("Hi!"),
        " ",
        mark("My name's"),
        " Laura, Laura Palmer. ",
        mark("What's your name?"),
      ],
    ],
    [
      "Eric",
      [
        mark("Hello,"),
        " ",
        mark("I'm"),
        " Eric Silva. ",
        mark("Nice to meet you"),
        ", Laura.",
      ],
    ],
    ["Laura", [mark("Nice to meet you too"), ", Eric."]],
    ["Eric", [mark("What's your last name again?")]],
    ["Laura", ["It's Palmer."]],
    ["Eric", [mark("How do you spell it?")]],
    ["Laura", ["It's P-A-L-M-E-R."]],
    ["Eric", [mark("Thanks."), " ", mark("See you"), " in the office."]],
    ["Laura", ["All right. ", mark("Bye.")]],
  ],
  questionInstruction: "Answer the questions.",
  question: "Are Laura and Eric old friends?",
  options: ["True", "False"],
  answer: "False",
  followUp: [
    {
      question: "What is the woman's first name?",
      answer: "Laura",
    },
    {
      question: "What is the man's first name?",
      answer: "Eric",
    },
    {
      question: "What is the woman's last name?",
      answer: "Palmer",
    },
    {
      question: "What is the man's last name?",
      answer: "Silva",
    },
  ],
} satisfies ListenData;
