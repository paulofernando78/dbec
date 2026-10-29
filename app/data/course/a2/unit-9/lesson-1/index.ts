import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["9/1"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[2], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Describe a real public figure or fictional character for a partner to identify.",
  prompts: [
    "Round 1: use the model. Change the height, hair, features, and age group.",
    "Give at least four physical details without saying the person's name.",
    "Round 2: close the model and describe a different public or fictional person.",
    "Your partner identifies the person and repeats two clues that helped.",
  ],
  model: [
    ["A", "What does this person look like?"],
    ["B", "She's tall, has curly hair, and wears glasses."],
    ["A", "How old is she?"],
    ["B", "She's in her thirties."],
  ] as const,
};

export const a2Unit9Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
