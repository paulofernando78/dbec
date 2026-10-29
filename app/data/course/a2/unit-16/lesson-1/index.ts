import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["16/1"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Exchange a four-part life update and create an accurate change profile.",
  prompts: [
    "Round 1: use the model. Change the details and keep the time meaning of each sentence.",
    "Include one situation true now, one completed event with a finished past time, one recent change relevant now, and one comparison.",
    "Round 2: close the model. Use your own information or invent a character and exchange all four changes.",
    "Write your partner's or character's four-part profile. Check that each change has the correct time reference.",
  ],
  model: [
    ["A", "I work from home now. I changed jobs in March."],
    ["A", "I've just started a design course. My schedule is more flexible now."],
    ["B", "So you work from home, you changed jobs in March, you've just started a course, and your schedule is more flexible."],
  ] as const,
};

export const a2Unit16Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
