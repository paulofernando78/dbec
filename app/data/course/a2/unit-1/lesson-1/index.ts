import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["1/1"];
const focusedLanguage = {
  ...languageFocus,
  items: languageFocus.items.slice(0, 4),
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Have two short first-meeting conversations.",
  prompts: [
    "Round 1: use the model. Change the names and countries.",
    "Introduce one classmate or friend using my, his, her, or our.",
    "Round 2: close the model and meet a new partner.",
    "Find out the person's name and country, then introduce that person to someone else.",
  ],
  model: [
    ["A", "Hi, I'm Camila. What's your name?"],
    ["B", "I'm Ben. It's nice to meet you."],
    ["A", "Where are you from?"],
    ["B", "I'm from Brazil."],
  ] as const,
};

export const a2Unit1Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
