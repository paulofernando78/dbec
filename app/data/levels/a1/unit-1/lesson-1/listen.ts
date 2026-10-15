import type { ListenData } from "../../../lesson-step-types";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to Laura and Eric meeting for the first time.",
  audio: "/media/levels/a1/unit-1/lesson-1-hello/listen/listen.mp3",
  dialogue: [
    ["Laura", "Hi! My name's Laura, Laura Palmer. What's your name?"],
    ["Eric", "Hello, I'm Eric Silva. Nice to meet you, Laura."],
    ["Laura", "Nice to meet you too, Eric."],
    ["Eric", "What's your last name again?"],
    ["Laura", "It's Palmer."],
    ["Eric", "How do you spell it?"],
    ["Laura", "It's P-A-L-M-E-R."],
    ["Eric", "Thanks. See you in the office."],
    ["Laura", "All right. Bye."],
  ],
  question: "Are Laura and Eric old friends?",
  options: ["True", "False"],
  answer: "False",
  followUp: [
    {
      question: "What is the woman's name?",
      answer: "Laura",
    },
    {
      question: "What is the man's name?",
      answer: "Eric",
    },
  ],
} satisfies ListenData;
