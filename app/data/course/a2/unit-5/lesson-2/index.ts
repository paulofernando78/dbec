import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["5/2"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare family sizes and find two similarities or differences.",
  prompts: [
    "Round 1: use the model. Change the family members and quantities.",
    "Ask How many ...? and use a lot of, a few, or any in the answers.",
    "Round 2: close the model and compare real or imagined families.",
    "Report two similarities or differences between the families.",
  ],
  model: [
    ["A", "How many cousins do you have?"],
    ["B", "I have a lot of cousins."],
    ["A", "Do you have any brothers or sisters?"],
    ["B", "No, I don't have any."],
  ] as const,
};

export const a2Unit5Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
