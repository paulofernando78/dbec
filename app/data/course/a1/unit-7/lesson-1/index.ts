import { a1SkeletonLessons } from "../../skeleton-lessons";
import { getReady } from "./get-ready";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a1SkeletonLessons["7/1"];

export const a1Unit7Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "get-ready") return getReady;
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    return step;
  }),
};
