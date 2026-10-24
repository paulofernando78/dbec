import type { ListenData } from "../../../lesson-step-types";
import { bold, mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to Laura and Eric talking about names.",
  audio: "/media/audio/course/a1/unit-1/lesson-1-hello/listen/listen.mp3",
  dialogue: [
    ["Laura",[mark("Hello. My name is Laura Palmer."), " ", mark("What's your name?")]],
    ["Eric", [mark("Hi. My name is Eric Silva.")]],
    ["Laura", [mark("It’s nice to meet you, Eric.")]],
    ["Eric", [mark("Nice to meet you, too. I’m sorry. What’s your last name again?")]],
    ["Laura", [mark("It’s Palmer.")]],
    ["Eric:", [mark("How do you spell it?")]],
    ["Laura", [mark("It’s P-A-L-M-E-R. And your first name is spelled with K?")]],
    ["Eric:", [mark("No, it’s with C.")]],
    ["", [bold("...")]],
    ["Laura", ["Who is that man?", mark("What’s his name?")]],
    ["Eric", [mark("His name’s Tony. He’s the boss.")]],
    ["Laura", ["And who is that woman?", mark("What’s her name?")]],
    ["Eric", [mark("Her name’s Kate. She’s the receptionist.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is the man’s name?",
  options: ["Carlos", "Joshua", "Isabella"],
  answer: "Joshua",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What’s the man’s name?",
      answer: "His name’s Eric.",
    },
    {
      question: "What’s the woman’s name?",
      answer: "Her name’s Laura.",
    },
  ],
} satisfies ListenData;
