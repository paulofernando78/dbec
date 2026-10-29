import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["10/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Interview a partner about experiences and one situation that continues now.",
  prompts: [
    "Round 1: use the model. Change the experience, past time, and duration.",
    "After a Yes answer, ask When ...? and use the simple past for the detail.",
    "Round 2: close the model and ask two Have you ever ...? questions and one How long have you ...? question.",
    "Report two experiences and one continuing situation, using for or since correctly.",
  ],
  model: [
    ["A", "Have you ever traveled alone?"],
    ["B", "Yes. I went to Chile last year."],
    ["A", "How long have you lived here?"],
    ["B", "I've lived here for five years."],
  ] as const,
};

export const a2Unit10Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
