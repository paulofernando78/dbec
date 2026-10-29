import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["5/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Exchange family updates and identify two temporary activities happening now or these days.",
  prompts: [
    "Round 1: use the model. Change the family members, activities, and places.",
    "Ask one yes/no question and one Wh-question in the present continuous.",
    "Round 2: close the model and share real or imagined family updates.",
    "Tell the class two things happening in your partner's family now or these days.",
  ],
  model: [
    ["A", "Is your sister working in another city?"],
    ["B", "Yes, she is."],
    ["A", "What are your parents doing these days?"],
    ["B", "They're studying English."],
  ] as const,
};

export const a2Unit5Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
