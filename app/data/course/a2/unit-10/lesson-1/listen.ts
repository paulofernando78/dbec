import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two visitors checking their Orlando activity list.",
  audio: "/media/audio/course/a2/unit-10/lesson-1-done-yet/listen/listen.mp3",
  dialogue: [
    ["Carlos", [mark("Have you visited the space center yet?")]],
    ["Nora", ["Yes, I've already been there. It was amazing."]],
    ["Carlos", ["Have you eaten Cuban food yet?"]],
    ["Nora", ["No, I haven't, but I've already tried two local restaurants."]],
    ["Carlos", [mark("Have you seen an alligator?")]],
    ["Nora", ["Yes, I have. I've seen three at the wildlife park."]],
    ["Carlos", ["What about the theme park?"]],
    ["Nora", ["I haven't visited it yet. Have you?"]],
    ["Carlos", ["Yes. I've already gone twice!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which activity hasn't Nora done yet?",
  options: ["Visit the space center", "See an alligator", "Visit the theme park"],
  answer: "Visit the theme park",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Has Nora visited the space center?", answer: "Yes, she has." },
    { question: "Has she eaten Cuban food?", answer: "No, she hasn't." },
    { question: "How many times has Carlos gone to the theme park?", answer: "Twice." },
  ],
} satisfies ListenData;
