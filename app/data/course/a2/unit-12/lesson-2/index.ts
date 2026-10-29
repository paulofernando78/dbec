import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["12/2"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[1], languageFocus.items[2], languageFocus.items[3], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Complete a pharmacy role-play and choose two products.",
  prompts: [
    "Round 1: use the model. Change the problem, product, and container.",
    "The customer makes a polite request; the pharmacist gives one possible and one stronger suggestion.",
    "Round 2: close the model and change roles.",
    "Finish with the customer clearly choosing two products.",
  ],
  model: [
    ["Customer", "Could I have something for a cough?"],
    ["Pharmacist", "You could try these tablets."],
    ["Customer", "May I have a bottle of pain medicine, too?"],
    ["Pharmacist", "Of course. Why don't you try these pills?"],
  ] as const,
};

export const a2Unit12Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
