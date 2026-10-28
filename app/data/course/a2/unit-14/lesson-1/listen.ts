import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to students comparing geographic places.",
  audio: "/media/audio/course/a2/unit-14/lesson-1-amazing-geography/listen/listen.mp3",
  dialogue: [
    ["Teacher", [mark("Which is larger, Lake Superior or Lake Victoria?")]],
    ["Student", ["Lake Superior is larger than Lake Victoria."]],
    ["Teacher", ["Which is the highest mountain in the world?"]],
    ["Student", ["Mount Everest is the highest."]],
    ["Teacher", [mark("Which desert is drier, the Sahara or the Atacama?")]],
    ["Student", ["The Atacama is drier than the Sahara."]],
    ["Teacher", ["And which ocean is the largest?"]],
    ["Student", ["The Pacific is the largest ocean in the world."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which desert is drier?",
  options: ["The Sahara", "The Atacama", "The Gobi"],
  answer: "The Atacama",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Which lake is larger?", answer: "Lake Superior." },
    { question: "Which mountain is the highest?", answer: "Mount Everest." },
    { question: "Which ocean is the largest?", answer: "The Pacific Ocean." },
  ],
} satisfies ListenData;
