import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["11/1"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Give a balanced four-sentence profile of a hometown or imagined destination.",
  prompts: [
    "Round 1: use the model. Change the place, adjectives, and degree adverbs.",
    "Include one sentence with and, one with but, and one contrast ending in though.",
    "Round 2: close the model and describe a real or imagined place.",
    "Your partner summarizes two positive features and one possible disadvantage.",
  ],
  model: [
    ["A", "What's your hometown like?"],
    ["B", "It's fairly small, but it's lively and interesting."],
    ["A", "What is downtown like?"],
    ["B", "It's crowded. The parks are quiet, though."],
  ] as const,
};

export const a2Unit11Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
