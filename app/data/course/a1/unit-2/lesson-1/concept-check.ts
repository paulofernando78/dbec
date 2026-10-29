import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check", slug: "check-meaning", label: "Check meaning",
  instruction: "Look at the words and choose the answer.",
  questions: [
    { context: "this tablet", question: "One tablet or two tablets?", options: ["One", "Two"], answer: "One" },
    { context: "these notebooks", question: "One notebook or more than one?", options: ["One", "More than one"], answer: "More than one" },
    { context: "It’s an adapter.", question: "One or more than one?", options: ["One", "More than one"], answer: "One" },
    { context: "They’re headphones.", question: "One or more than one?", options: ["One", "More than one"], answer: "More than one" },
  ],
} satisfies ConceptCheckData;
