import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to neighbors discuss problems in their community.",
  audio: "/media/audio/course/b1/unit-15/lesson-2-dont-you-agree/listen/listen.mp3",
  dialogue: [
    ["Nora", ["Noise pollution has become a serious problem, hasn't it?"]],
    ["Emil", ["It has. There aren't enough regulations, are there?"]],
    ["Nora", [mark("The city should limit late-night construction, shouldn't it?")]],
    ["Emil", ["Yes, but street crime is a more urgent issue, isn't it?"]],
    ["Nora", ["That's important too. The community can't solve every problem at once, can it?"]],
    ["Emil", [mark("No, so residents should help set priorities, shouldn't they?")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which issue does Emil consider more urgent?",
  options: ["Noise pollution", "Street crime", "Child care"],
  answer: "Street crime",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does Nora want the city to limit?", answer: "Late-night construction." },
    { question: "Can the community solve every problem at once?", answer: "No, it cannot." },
    { question: "Who should help set priorities?", answer: "Residents." },
  ],
} satisfies ListenData;
