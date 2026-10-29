import { b2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = b2SkeletonLessons["11/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

export const b2Unit11Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
