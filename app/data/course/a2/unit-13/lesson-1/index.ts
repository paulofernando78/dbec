import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["13/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare food preferences and record three agreements and one disagreement.",
  prompts: [
    "Round 1: use the model. Change the food and the positive or negative statement.",
    "Respond with so/too, neither/either, or an opposite short response.",
    "Round 2: close the model. Use at least one statement with be, one with can, and two with the simple present.",
    "Report three shared preferences and one difference.",
  ],
  model: [
    ["A", "I love spicy food."],
    ["B", "So do I."],
    ["A", "I don't eat meat."],
    ["B", "Neither do I."],
  ] as const,
};

export const a2Unit13Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
