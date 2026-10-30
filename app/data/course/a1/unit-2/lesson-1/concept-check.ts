import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check", slug: "check-meaning", label: "Check meaning",
  instruction: "Look at the words and choose the answer.",
  questions: [
    { context: "this laptop", question: "One laptop or two laptops?", options: ["One", "Two"], answer: "One" },
    { context: "these notebooks", question: "One notebook or more than one?", options: ["One", "More than one"], answer: "More than one" },
    { context: "It’s an adapter.", question: "One or more than one?", options: ["One", "More than one"], answer: "One" },
    { context: "It’s a headset.", question: "One or more than one?", options: ["One", "More than one"], answer: "One" },
  ],
} satisfies ConceptCheckData;
