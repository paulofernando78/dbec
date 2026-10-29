import { a2SkeletonLessons } from "../../skeleton-lessons";
import { languageFocus } from "./language-focus";
import { listen } from "./listen";

const baseLesson = a2SkeletonLessons["15/2"];
const focusedLanguage = { ...languageFocus, items: languageFocus.items.slice(0, 4) };

const useIt = {
  type: "use-it" as const,
  slug: "use-it",
  label: "Use it",
  instruction: "Leave, relay, and check a two-part message.",
  prompts: [
    "Round 1: use the model. Change the person, fact, and requested action.",
    "Student A leaves one fact and one requested action for Student C. Student B takes notes.",
    "Round 2: close the model. Student B passes both parts to a new receiver using tell and ask.",
    "The final receiver repeats the fact and action. Compare them with Student A's original and correct any change.",
  ],
  model: [
    ["A", "Please tell Maya that the meeting is at ten. Ask her to bring the report."],
    ["B", "Okay. The meeting is at ten, and Maya needs to bring the report."],
    ["B", "Please tell Maya that the meeting is at ten. Please ask her to bring the report."],
    ["C", "The meeting is at ten, and I need to bring the report. Is that right?"],
  ] as const,
};

export const a2Unit15Lesson2 = {
  ...baseLesson,
  steps: baseLesson.steps.map((step) => {
    if (step.type === "listen") return listen;
    if (step.type === "language-focus") return focusedLanguage;
    if (step.type === "use-it") return useIt;
    return step;
  }),
};
