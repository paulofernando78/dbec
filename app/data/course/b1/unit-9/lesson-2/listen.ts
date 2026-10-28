import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends suggesting solutions to a social problem.",
  audio: "/media/audio/course/b1/unit-9/lesson-2-coming-up-with-solutions/listen/listen.mp3",
  dialogue: [
    ["Noah", ["I'm new here, and I'm having trouble meeting people."]],
    ["Priya", [mark("What about joining a running club?")]],
    ["Noah", ["I can't keep up with serious runners."]],
    ["Priya", ["Then maybe you could take part in a volunteer project."]],
    ["Noah", ["That's possible. How can I find one?"]],
    ["Priya", [mark("It might be a good idea to look into local community groups.")]],
    ["Noah", ["Have you thought about coming with me to the first meeting?"]],
    ["Priya", ["Sure. We can come up with a plan together."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What problem does Noah have?",
  options: ["Meeting new people", "Repairing his computer", "Finding a car wash"],
  answer: "Meeting new people",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Why doesn't Noah want a running club?", answer: "He can't keep up with serious runners." },
    { question: "What does Priya suggest instead?", answer: "A volunteer project." },
    { question: "Will Priya attend the first meeting?", answer: "Yes, she will." },
  ],
} satisfies ListenData;
