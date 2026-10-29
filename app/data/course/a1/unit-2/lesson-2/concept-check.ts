import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check", slug: "check-meaning", label: "Check meaning",
  instruction: "Use the desk picture and choose the answer.",
  questions: [
    { context: "The card is in the drawer.", question: "Card location:", options: ["Inside", "Outside"], answer: "Inside" },
    { context: "The keys are on the desk.", question: "Keys location:", options: ["On top", "Below"], answer: "On top" },
    { context: "The charger is under the monitor.", question: "Charger location:", options: ["Above", "Below"], answer: "Below" },
    { context: "The folders are next to the printer.", question: "Folders location:", options: ["Beside", "Far from"], answer: "Beside" },
  ],
} satisfies ConceptCheckData;
