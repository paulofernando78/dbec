import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["8/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare two neighborhoods and recommend one for a new resident.",
  prompts: [
    "Round 1: use the model. Change the facilities and quantities.",
    "Ask one How many ...? question and one How much ...? question.",
    "Round 2: compare a downtown neighborhood and a suburban neighborhood.",
    "Choose one for the new resident and give two quantity-based reasons.",
  ],
  model: [
    ["A", "Are there many stores nearby?"],
    ["B", "There are a few."],
    ["A", "How much traffic is there?"],
    ["B", "There isn't much traffic at night."],
  ] as const,
};

export const a2Unit8Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
