import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["2/1"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[0], languageFocus.items[1], languageFocus.items[2], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Interview a partner, then introduce that person's work or studies to another student.",
  prompts: [
    "Round 1: use the model to ask about occupation and workplace.",
    "Ask one question about another person: What does ... do? or Where does ... work?",
    "Round 2: close the model and interview a new partner.",
    "Report two accurate facts about your partner or someone in your partner's life.",
  ],
  model: [
    ["A", "What do you do?"],
    ["B", "I'm a fitness instructor."],
    ["A", "Where do you work?"],
    ["B", "I work at a gym."],
  ] as const,
};

export const a2Unit2Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
