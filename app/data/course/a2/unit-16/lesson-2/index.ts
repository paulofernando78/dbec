import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["16/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Exchange three future goals and report your partner's goal map.",
  prompts: [
    "Round 1: use the model. Change the course, skill, and possible result.",
    "State one intention with plan to, one desire with want to, and one desired but uncertain result with hope to.",
    "Round 2: close the model. Ask about your partner's next year and note the three different goals.",
    "Report the goal map accurately: one plan, one desire, and one hope.",
  ],
  model: [
    ["A", "What do you plan to do next year?"],
    ["B", "I plan to finish my course. I want to learn to drive, and I hope to get a new job."],
    ["A", "So you plan to finish your course, you want to learn to drive, and you hope to get a new job."],
  ] as const,
};

export const a2Unit16Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
