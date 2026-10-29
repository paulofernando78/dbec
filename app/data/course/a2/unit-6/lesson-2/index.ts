import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["6/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 3) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare exercise routines and find one shared habit.",
  prompts: [
    "Round 1: use the model. Change the activity, frequency, and duration.",
    "Ask both How often ...? and How long ...?",
    "Round 2: close the model and compare real or imagined routines.",
    "Report one shared habit and one difference.",
  ],
  model: [
    ["A", "How often do you go swimming?"],
    ["B", "I go twice a week."],
    ["A", "How long do you swim?"],
    ["B", "About an hour each time."],
  ] as const,
};

export const a2Unit6Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
