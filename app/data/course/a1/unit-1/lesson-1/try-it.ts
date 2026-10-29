import type { TryItData } from "../../../lesson-step-types";

export const tryIt = {
  type: "try-it",
  slug: "try-it",
  label: "Try it",
  instruction:
    "Build the sentences. Start with two words, then build the complete exchange.",
  items: [
    { words: ["Laura.", "I'm"], answer: ["I'm", "Laura."] },
    { words: ["name", "My", "Eric.", "is"], answer: ["My", "name", "is", "Eric."] },
    { words: ["name?", "your", "What's"], answer: ["What's", "your", "name?"] },
    { words: ["you.", "meet", "Nice", "to"], answer: ["Nice", "to", "meet", "you."] },
  ],
} satisfies TryItData;
