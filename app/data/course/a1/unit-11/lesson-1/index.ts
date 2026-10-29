import { a1SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a1SkeletonLessons["11/1"];
const focusedLanguage = { ...languageFocus, items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[2], languageFocus.items[4]] };

export const a1Unit11Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
