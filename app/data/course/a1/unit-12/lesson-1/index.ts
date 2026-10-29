import { a1SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a1SkeletonLessons["12/1"];
const focusedLanguage = { ...languageFocus, items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[2], languageFocus.items[5]] };

export const a1Unit12Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
