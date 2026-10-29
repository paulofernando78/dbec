import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["1/2"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Find three things you and a partner have in common.",
  prompts: [
    "Round 1: use the model and ask about availability, hometown, and classes.",
    "Give a short answer first: Yes, I am/is/are or No, I'm not/isn't/aren't.",
    "Round 2: close the model and ask three new yes/no questions with be.",
    "Report one thing you have in common.",
  ],
  model: [
    ["A", "Are you free after class?"],
    ["B", "Yes, I am."],
    ["A", "Is biology your favorite subject?"],
    ["B", "No, it isn't."],
  ] as const,
};

export const a2Unit1Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
