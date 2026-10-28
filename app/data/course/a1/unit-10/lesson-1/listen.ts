import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about sports.",
  audio: "/media/audio/course/a1/unit-10/lesson-1-game-day/listen/listen.mp3",
  dialogue: [
    ["A", [mark("What sports do you play"), ", Alex?"]],
    ["B", ["I play ", mark("tennis and volleyball"), "."]],
    ["A", ["Who do you play tennis with?"]],
    ["B", ["I play with ", mark("my sister"), "."]],
    ["A", [mark("Where do you play"), "?"]],
    ["B", ["At the ", mark("sports center"), " near our house."]],
    ["A", [mark("How often do you practice"), "?"]],
    ["B", [mark("Three times a week"), "."]],
    ["A", [mark("When do you practice"), "?"]],
    ["B", ["On ", mark("Mondays, Wednesdays, and Fridays"), "."]],
    ["A", [mark("What time do you start"), "?"]],
    ["B", ["At ", mark("seven thirty in the evening"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which sports does Alex play?",
  options: ["Tennis and volleyball", "Soccer and basketball", "Golf and tennis"],
  answer: "Tennis and volleyball",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Who plays tennis with Alex?",
      answer: "Alex's sister.",
    },
    {
      question: "Where does Alex play?",
      answer: "At the sports center.",
    },
    {
      question: "How often does Alex practice?",
      answer: "Three times a week.",
    },
    {
      question: "On which days does Alex practice?",
      answer: "On Mondays, Wednesdays, and Fridays.",
    },
    {
      question: "What time does Alex start?",
      answer: "At 7:30 P.M.",
    },
  ],
} satisfies ListenData;
