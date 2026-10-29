import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["3/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Complete a short customer–sales associate role-play and choose one product.",
  prompts: [
    "Round 1: use the model. Change the products, colors, and prices.",
    "Ask about one nearby item and one item farther away.",
    "Round 2: close the model. The customer has a $60 budget.",
    "Ask at least two prices and decide which one or ones to buy.",
  ],
  model: [
    ["Customer", "How much is this backpack?"],
    ["Sales associate", "This one is forty-five dollars."],
    ["Customer", "How much are those shoes?"],
    ["Sales associate", "They're sixty dollars."],
  ] as const,
};

export const a2Unit3Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
