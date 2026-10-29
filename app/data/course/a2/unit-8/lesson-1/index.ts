import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["8/1"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Complete a neighborhood map information gap.",
  prompts: [
    "Round 1: use the model. Change the places and locations.",
    "Ask about one singular place and one plural group of places.",
    "Round 2: each person secretly chooses three places and their locations in an imagined neighborhood.",
    "Ask and answer until both people can list all six places and locations.",
  ],
  model: [
    ["A", "Is there a bank near here?"],
    ["B", "Yes. There's one across from the park."],
    ["A", "Are there any cafés nearby?"],
    ["B", "Yes. There are some on King Street."],
  ] as const,
};

export const a2Unit8Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
