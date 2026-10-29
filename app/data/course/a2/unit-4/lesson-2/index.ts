import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["4/2"];

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Make plans with a partner and agree on one activity, day, and time.",
  prompts: [
    "Round 1: use the model. Change the activity, day, time, and reason.",
    "Accept one invitation and politely decline another with a reason.",
    "Round 2: close the model. Invite your partner and offer an alternative if necessary.",
    "Finish with one agreed activity, day, and time.",
  ],
  model: [
    ["A", "Would you like to see a movie tonight?"],
    ["B", "I'd love to."],
    ["A", "Do you want to meet at seven?"],
    ["B", "I'd like to, but I have to work. How about eight?"],
  ] as const,
};

export const a2Unit4Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return languageFocus;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
