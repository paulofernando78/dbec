import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["11/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Create a one-day visitor plan with recommendations and one caution.",
  prompts: [
    "Round 1: use the model. Change the places, activities, transport, and time.",
    "Include one can option, one should recommendation, one can't-miss experience, and one shouldn't caution.",
    "Round 2: close the model and create a plan for a real or imagined destination.",
    "Present the plan; your partner checks that all four functions are clear.",
  ],
  model: [
    ["Visitor", "What should I see?"],
    ["Guide", "You should visit the museum. You can't miss the old market."],
    ["Visitor", "What can I do in the evening?"],
    ["Guide", "You can see a concert, but you shouldn't go too late."],
  ] as const,
};

export const a2Unit11Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
