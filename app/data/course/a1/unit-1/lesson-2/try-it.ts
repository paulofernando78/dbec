import type { TryItData } from "../../../lesson-step-types";

export const tryIt = {
  type: "try-it",
  slug: "try-it",
  label: "Try it",
  instruction:
    "Build the sentences. Start with the short answer, then build the questions.",
  items: [
    { words: ["5510-8246.", "It’s"], answer: ["It’s", "5510-8246."] },
    {
      words: ["number?", "phone", "your", "What’s"],
      answer: ["What’s", "your", "phone", "number?"],
    },
    {
      words: ["address?", "your", "email", "What’s"],
      answer: ["What’s", "your", "email", "address?"],
    },
    {
      words: ["soon.", "you", "See"],
      answer: ["See", "you", "soon."],
    },
  ],
} satisfies TryItData;
