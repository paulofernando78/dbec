import type { ConceptCheckData } from "../../../lesson-step-types";

export const conceptCheck = {
  type: "concept-check",
  slug: "check-meaning",
  label: "Check meaning",
  instruction: "Choose the answer. Use the examples to help you.",
  questions: [
    {
      context: "Hello. I’m Laura.",
      question: "Laura’s name:",
      options: ["Laura", "Eric"],
      answer: "Laura",
    },
    {
      context: "What’s your name?",
      question: "Your name or my name?",
      options: ["Your name", "My name"],
      answer: "Your name",
    },
    {
      context: "Eric: My name is Eric.",
      question: "The name:",
      options: ["Eric’s", "Laura’s"],
      answer: "Eric’s",
    },
    {
      context: "Nice to meet you.",
      question: "First meeting or goodbye?",
      options: ["A first meeting", "A goodbye"],
      answer: "A first meeting",
    },
  ],
} satisfies ConceptCheckData;
