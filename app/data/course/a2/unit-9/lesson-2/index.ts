import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["9/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Identify three people at an imagined event from precise clues.",
  prompts: [
    "Round 1: use the model. Change the clothes, actions, features, and locations.",
    "Use one verb-ing phrase and one prepositional phrase for each person.",
    "Round 2: one partner invents three names and three descriptions; the other records the correct identities.",
    "Switch roles and check whether all six identities are clear.",
  ],
  model: [
    ["A", "Which person is your brother?"],
    ["B", "He's the man wearing a green jacket."],
    ["A", "Is he the one talking to Mia?"],
    ["B", "No, he's the one standing by the window."],
  ] as const,
};

export const a2Unit9Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
