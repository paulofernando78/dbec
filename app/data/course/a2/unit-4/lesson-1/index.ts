import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["4/1"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[0], languageFocus.items[2], languageFocus.items[3], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Compare entertainment preferences and agree on one thing to watch or listen to.",
  prompts: [
    "Round 1: use the model. Change the genres and titles.",
    "Ask one yes/no question and one What kind of ...? question.",
    "Round 2: close the model and compare your real preferences.",
    "Find one shared preference and recommend one movie, show, artist, or song.",
  ],
  model: [
    ["A", "What kind of shows do you watch?"],
    ["B", "I really like comedies."],
    ["A", "Do you enjoy documentaries?"],
    ["B", "No, I don't watch them very often."],
  ] as const,
};

export const a2Unit4Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
