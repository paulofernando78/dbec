import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["3/2"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[3], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare two possible gifts and agree on one.",
  prompts: [
    "Round 1: use the model. Change the products, materials, and adjectives.",
    "State your preference and give one short-adjective comparison and one long-adjective comparison.",
    "Round 2: close the model and compare two real or imagined gifts.",
    "Agree on one gift and give two reasons for the choice.",
  ],
  model: [
    ["A", "Which jacket do you prefer?"],
    ["B", "I prefer the lighter one."],
    ["A", "Is the blue one cheaper?"],
    ["B", "No, but the black one is more stylish."],
  ] as const,
};

export const a2Unit3Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
