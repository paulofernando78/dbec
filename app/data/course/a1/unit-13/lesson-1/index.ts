import { a1SkeletonLessons } from "../../skeleton-lessons";
import { getReady } from "./get-ready";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a1SkeletonLessons["13/1"];
const focusedLanguage = {
  ...languageFocus,
  items: languageFocus.items.slice(0, 4),
};

export const a1Unit13Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "get-ready") return getReady;
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
