import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends compare the time in different cities.",
  audio: "/media/audio/course/a1/unit-5/lesson-1-what-time-is-it-there/listen/listen.mp3",
  dialogue: [
    ["A", ["Hi, Nina. Where are you now?"]],
    ["B", ["I'm in London. Where are you?"]],
    ["A", ["I'm in São Paulo. ", mark("What time is it"), " in London?"]],
    ["B", ["It's ", mark("ten forty-five A.M."), ". It's a quarter to eleven in the morning."]],
    ["A", ["It's ", mark("six forty-five A.M."), " here. It's morning in São Paulo."]],
    ["B", ["My meeting is at ", mark("eleven o'clock A.M."), "."]],
    ["A", ["My class is at ", mark("seven fifteen A.M."), ". That's a quarter after seven."]],
    ["B", ["And lunch?"]],
    ["A", ["Lunch is at ", mark("twelve thirty P.M."), ". It's in the afternoon."]],
    ["B", ["Great. Talk to you later!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What time is it in London?",
  options: ["10:45", "6:45", "11:00"],
  answer: "10:45",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where is speaker A?",
      answer: "In São Paulo.",
    },
    {
      question: "What time is it in São Paulo?",
      answer: "6:45 A.M.",
    },
    {
      question: "What time is Nina's meeting?",
      answer: "11:00 A.M.",
    },
    {
      question: "What time is speaker A's class?",
      answer: "7:15 A.M.",
    },
    {
      question: "What time is lunch?",
      answer: "12:30 P.M.",
    },
  ],
} satisfies ListenData;
