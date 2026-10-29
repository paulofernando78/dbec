import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["13/2"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Complete a restaurant order, close it politely, and switch roles.",
  prompts: [
    "Round 1: use the model. Choose a main dish, a specific type or side, a drink, and an optional extra.",
    "Use both I'd like ... and I'll have ... during the order.",
    "Round 2: close the model and change roles with a new imagined menu.",
    "The server repeats the final order; the customer confirms it and closes with That's all, thanks.",
  ],
  model: [
    ["Server", "What would you like?"],
    ["Customer", "I'd like the vegetable soup, please."],
    ["Server", "What would you like to drink?"],
    ["Customer", "I'll have sparkling water. That's all, thanks."],
  ] as const,
};

export const a2Unit13Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
