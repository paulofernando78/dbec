import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["7/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Interview a partner and reconstruct a three-event weekend timeline.",
  prompts: [
    "Round 1: use the model. Change the activities and places.",
    "Ask one Wh-question and at least one yes/no question with did.",
    "Round 2: close the model and ask about a real or imagined weekend.",
    "Report three completed events in a clear order.",
  ],
  model: [
    ["A", "What did you do last weekend?"],
    ["B", "I went shopping downtown."],
    ["A", "Did you have dinner there?"],
    ["B", "Yes, we went to a new restaurant."],
  ] as const,
};

export const a2Unit7Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
