import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["10/1"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare two trip checklists and create one shared list of completed and incomplete activities.",
  prompts: [
    "Round 1: use the model. Change the activities and results.",
    "Use already for completed activities and yet in questions or incomplete activities.",
    "Round 2: each person secretly marks four imagined trip activities as complete or incomplete.",
    "Ask and answer until you can report two completed and two incomplete activities.",
  ],
  model: [
    ["A", "Have you visited the space center yet?"],
    ["B", "Yes, I've already visited it."],
    ["A", "Have you tried Cuban food yet?"],
    ["B", "No, I haven't tried it yet."],
  ] as const,
};

export const a2Unit10Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
