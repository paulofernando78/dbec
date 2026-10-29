import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["14/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Create and exchange a four-question geography comparison quiz.",
  prompts: [
    "Round 1: use the model. Change the places and adjectives.",
    "Include one short comparative, one short superlative, one long comparative, and one long superlative.",
    "Round 2: close the model and create four new questions using real or clearly imagined geography.",
    "Exchange quizzes, answer them, and check that each comparison has the correct group or pair.",
  ],
  model: [
    ["A", "Which is larger, Lake Superior or Lake Victoria?"],
    ["B", "Lake Superior is larger."],
    ["A", "Which is the highest mountain in the world?"],
    ["B", "Mount Everest is the highest."],
  ] as const,
};

export const a2Unit14Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
