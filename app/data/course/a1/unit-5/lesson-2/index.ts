import { a1SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";
import { getReady } from "./get-ready";

const baseLesson = a1SkeletonLessons["5/2"];

export const a1Unit5Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "get-ready") return getReady;
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    return step;
  }),
};
