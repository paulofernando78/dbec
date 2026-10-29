import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["15/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare calendars and agree on one activity, day, and time.",
  prompts: [
    "Round 1: use the model. Change the activity and future time.",
    "Ask about two arrangements with the present continuous and state one intention with be going to.",
    "Round 2: close the model. Use your own or an imagined calendar and find a time when both people are free.",
    "Write the final activity, day, and time in both calendars.",
  ],
  model: [
    ["A", "What are you doing on Friday evening?"],
    ["B", "I'm meeting Leo. Are you doing anything on Saturday?"],
    ["A", "No, I'm not. I'm going to visit the street market."],
    ["B", "Great. Let's go together at ten."],
  ] as const,
};

export const a2Unit15Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
