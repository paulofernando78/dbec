import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["2/2"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare schedules and find one possible time to meet.",
  prompts: [
    "Round 1: use the model and change the clock times and days.",
    "Include at + time, in + part of day, on + day, and one expression such as around or until.",
    "Round 2: close the model and compare your real schedules.",
    "Agree on one day and time when both people are free.",
  ],
  model: [
    ["A", "When do you work?"],
    ["B", "I work on weekdays until six."],
    ["A", "Are you free on Saturday morning?"],
    ["B", "Yes. I'm free around ten."],
  ] as const,
};

export const a2Unit2Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
