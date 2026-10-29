import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends discussing goals for the next year.",
  audio: "/media/audio/course/a2/unit-16/lesson-2-the-next-chapter/listen/listen.mp3",
  dialogue: [
    ["Sara", [mark("What are you going to do next year?")]],
    ["Evan", ["I plan to finish my online course, and I hope to get a pay raise."]],
    ["Sara", ["Do you want to stay in the same city?"]],
    ["Evan", ["For now, yes. But I'd like to travel abroad."]],
    ["Sara", [mark("Where would you like to go?")]],
    ["Evan", ["I'd love to visit Japan. What about you?"]],
    ["Sara", ["I want to learn a new sport and plan to take a trip to Canada."]],
    ["Evan", ["Those sound like great goals."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Evan talks about:",
  options: ["Future goals", "Past mistakes", "Health advice"],
  answer: "Future goals",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does Evan plan to finish?", answer: "His online course." },
    { question: "Where would Evan love to go?", answer: "Japan." },
    { question: "What does Sara plan to do?", answer: "Take a trip to Canada." },
  ],
} satisfies ListenData;
