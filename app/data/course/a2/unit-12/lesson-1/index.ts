import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["12/1"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[3], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Match three fictional health problems with clear, appropriate next steps.",
  prompts: [
    "Round 1: use the model. Change the problem and suggested action.",
    "Use It's important to ... and It's a good idea to ... at least once.",
    "Round 2: close the model. One partner states three fictional problems; the other gives one next step for each.",
    "Include seeing a doctor or dentist when professional help is the appropriate option.",
  ],
  model: [
    ["A", "I have a bad headache."],
    ["B", "It's important to get some rest."],
    ["A", "I have a cold."],
    ["B", "It's a good idea to drink liquids."],
  ] as const,
};

export const a2Unit12Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
