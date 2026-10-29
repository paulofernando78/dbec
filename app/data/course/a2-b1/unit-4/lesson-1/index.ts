import { a2B1SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2B1SkeletonLessons["4/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

export const a2B1Unit4Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") {
      return {
        ...listen,
        questionInstruction: step.questionInstruction,
        question: step.question,
        options: step.options,
        answer: step.answer,
        followUp: [{ question: listen.question, answer: listen.answer }, ...listen.followUp],
      };
    }
    if (step.type === "language-focus") return focusedLanguage;
    return step;
  }),
};
