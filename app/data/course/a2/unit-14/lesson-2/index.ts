import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["14/2"];
const focusedLanguage = {
  ...languageFocus,
  items: [languageFocus.items[1], languageFocus.items[2], languageFocus.items[3], languageFocus.items[4]],
};

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Exchange measurement fact files and record four accurate facts.",
  prompts: [
    "Round 1: use the model. Change the feature, number, and metric unit.",
    "Ask about distance, area, height, and either length or depth.",
    "Round 2: each person creates four facts about real or clearly imagined places without showing them.",
    "Ask How + adjective questions and record all four answers with the correct metric units.",
  ],
  model: [
    ["A", "How far is the airport?"],
    ["B", "It's about fifteen kilometers away."],
    ["A", "How high is that mountain?"],
    ["B", "It's nearly two thousand meters high."],
  ] as const,
};

export const a2Unit14Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
