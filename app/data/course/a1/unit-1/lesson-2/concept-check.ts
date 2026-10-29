import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check",
  slug: "check-meaning",
  label: "Check meaning",
  instruction: "Choose the answer. Use the examples to help you.",
  questions: [
    {
      context: "What’s your phone number?",
      question: "Name or number?",
      options: ["A name", "A number"],
      answer: "A number",
    },
    {
      context: "It’s 5510-8246.",
      question: "Question or answer?",
      options: ["Asking", "Answering"],
      answer: "Answering",
    },
    {
      context: "sofia@example.com",
      question: "@ =",
      options: ["At", "Dot"],
      answer: "At",
    },
    {
      context: "Goodbye. See you soon.",
      question: "Start or end?",
      options: ["Starting", "Ending"],
      answer: "Ending",
    },
  ],
} satisfies ConceptCheckData;
