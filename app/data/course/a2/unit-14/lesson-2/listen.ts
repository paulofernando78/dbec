import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to students answering geography questions with measurements.",
  audio: "/media/audio/course/a2/unit-14/lesson-2-how-far/listen/listen.mp3",
  dialogue: [
    ["Teacher", [mark("How high is Mount Everest?")]],
    ["Student", ["It's 8,848 meters high."]],
    ["Teacher", ["How long is the Mississippi River?"]],
    ["Student", ["It's about 3,700 kilometers long."]],
    ["Teacher", [mark("How deep is the Grand Canyon?")]],
    ["Student", ["It's about 1,828 meters deep."]],
    ["Teacher", ["How big is Seoul?"]],
    ["Student", ["It's about 605 square kilometers."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How high is Mount Everest?",
  options: ["3,700 meters", "8,848 meters", "1,828 meters"],
  answer: "8,848 meters",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How long is the Mississippi River?", answer: "About 3,700 kilometers." },
    { question: "How deep is the Grand Canyon?", answer: "About 1,828 meters." },
    { question: "How big is Seoul?", answer: "About 605 square kilometers." },
  ],
} satisfies ListenData;
