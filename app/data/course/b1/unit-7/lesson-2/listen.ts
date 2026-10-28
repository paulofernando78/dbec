import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to students proposing solutions to global challenges.",
  audio: "/media/audio/course/b1/unit-7/lesson-2-taking-action/listen/listen.mp3",
  dialogue: [
    ["Student A", ["Which global challenge concerns you most?"]],
    ["Student B", ["Unemployment. The best way to fight it is to create more jobs."]],
    ["Student A", [mark("What else could governments do?")]],
    ["Student B", ["Another way to reduce unemployment is to expand vocational training."]],
    ["Student A", ["I'm most concerned about global warming."]],
    ["Student B", [mark("One way to slow it is to increase the use of clean energy.")]],
    ["Student A", ["We also need to protect forests and improve public transportation."]],
    ["Student B", ["Exactly. The best solutions address several causes at once."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is one proposed response to unemployment?",
  options: ["Expand vocational training", "Reduce public transportation", "Build more landfills"],
  answer: "Expand vocational training",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Which challenge most concerns Student B?", answer: "Unemployment." },
    { question: "What can slow global warming?", answer: "Increasing the use of clean energy." },
    { question: "What else should be protected?", answer: "Forests." },
  ],
} satisfies ListenData;
