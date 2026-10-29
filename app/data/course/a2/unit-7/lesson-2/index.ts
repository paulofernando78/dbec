import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["7/2"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Interview a partner about a past vacation and create a three-fact summary.",
  prompts: [
    "Round 1: use the model. Change the destination, weather, and duration.",
    "Ask one yes/no question and two Wh-questions with was or were.",
    "Round 2: close the model and discuss a real or imagined vacation.",
    "Report the destination, weather, and duration accurately.",
  ],
  model: [
    ["A", "Where were you on vacation?"],
    ["B", "I was in Florianópolis."],
    ["A", "How was the weather?"],
    ["B", "It was warm and sunny."],
  ] as const,
};

export const a2Unit7Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
