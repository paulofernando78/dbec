import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["6/1"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Design a simple weekly activity plan with a partner.",
  prompts: [
    "Round 1: use the model. Change the activities, days, and places.",
    "Use one activity with play, one with go, and one with do.",
    "Round 2: close the model and ask about your partner's real or imagined habits.",
    "Agree on three activities for a balanced weekly plan.",
  ],
  model: [
    ["A", "Do you exercise at home?"],
    ["B", "Yes, I do weight training."],
    ["A", "What do you do on Saturdays?"],
    ["B", "I play tennis."],
  ] as const,
};

export const a2Unit6Lesson1 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
