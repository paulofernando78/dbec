import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talking about last weekend.",
  audio: "/media/audio/course/a2/unit-7/lesson-1-what-did-you-do/listen/listen.mp3",
  dialogue: [
    ["Mia", [mark("What did you do last weekend?")]],
    ["Noah", ["I worked on Saturday, but I had Sunday off."]],
    ["Mia", ["Did you go anywhere on Sunday?"]],
    ["Noah", ["Yes. I took a bike ride and went shopping downtown."]],
    ["Mia", [mark("Did you buy anything?")]],
    ["Noah", ["I bought a new video game. How did you spend your weekend?"]],
    ["Mia", ["I did the laundry, made a few phone calls, and went dancing with friends."]],
    ["Noah", ["Did you have a good time?"]],
    ["Mia", ["Yes, I did. We had a lot of fun."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Noah talks about:",
  options: ["Last weekend's activities", "Tomorrow's plans", "His daily routine"],
  answer: "Last weekend's activities",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "When did Noah work?", answer: "He worked on Saturday." },
    { question: "What did Noah do on Sunday?", answer: "He took a bike ride and went shopping." },
    { question: "Where did Mia go?", answer: "She went dancing with friends." },
  ],
} satisfies ListenData;
