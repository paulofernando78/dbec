import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to old friends discussing recent life changes.",
  audio: "/media/audio/course/a2/unit-16/lesson-1-life-changes/listen/listen.mp3",
  dialogue: [
    ["Sara", ["It's great to see you again. You look different!"]],
    ["Evan", ["I wear contacts now, and I've grown a beard."]],
    ["Sara", [mark("What else has changed?")]],
    ["Evan", ["I've just started a new job and bought an apartment."]],
    ["Sara", ["How is your new neighborhood?"]],
    ["Evan", ["It's quieter and less crowded than downtown."]],
    ["Sara", [mark("Have you learned anything new?")]],
    ["Evan", ["Yes. I've started an online course, and I'm learning how to dance."]],
    ["Sara", ["You've made a lot of changes!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Evan describes:",
  options: ["Changes in his life", "A restaurant meal", "A school subject"],
  answer: "Changes in his life",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How has Evan's appearance changed?", answer: "He wears contacts and has grown a beard." },
    { question: "How is his new neighborhood different?", answer: "It's quieter and less crowded." },
    { question: "What is he learning?", answer: "He's learning how to dance." },
  ],
} satisfies ListenData;
