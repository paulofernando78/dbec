import { b1SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = b1SkeletonLessons["10/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

export const b1Unit10Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
