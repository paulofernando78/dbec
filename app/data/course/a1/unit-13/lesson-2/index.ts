import { a1SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a1SkeletonLessons["13/2"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[3], languageFocus.items[4]],
};

export const a1Unit13Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
