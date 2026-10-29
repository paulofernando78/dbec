import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends comparing gifts in a store.",
  audio: "/media/audio/course/a2/unit-3/lesson-2-better-choices/listen/listen.mp3",
  dialogue: [
    ["Lena", ["Which bracelet do you prefer?"]],
    ["Omar", ["I prefer the silver one. It's nicer than the plastic one."]],
    ["Lena", [mark("Is it cheaper, too?")]],
    ["Omar", ["No, it's more expensive, but it's more stylish."]],
    ["Lena", ["What about these scarves?"]],
    ["Omar", ["The blue one is silk, and the gray one is wool."]],
    ["Lena", [mark("Which one do you like better?")]],
    ["Omar", ["I like the blue one better. It's lighter than the gray one."]],
    ["Lena", ["Good choice. Let's get that one."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Lena and Omar are:",
  options: ["Choosing a gift", "Planning a trip", "Discussing a movie"],
  answer: "Choosing a gift",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Which bracelet does Omar prefer?", answer: "He prefers the silver one." },
    { question: "Is the silver bracelet cheaper?", answer: "No, it isn't." },
    { question: "Why does Omar prefer the blue scarf?", answer: "It's lighter than the gray one." },
  ],
} satisfies ListenData;
