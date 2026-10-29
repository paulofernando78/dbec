import type { TryItData } from "../../../lesson-step-types";

export const tryIt = {
  type: "try-it", slug: "try-it", label: "Try it",
  instruction: "Build the answers first. Then build the questions.",
  items: [
    { words: ["tablet.", "a", "It’s"], answer: ["It’s", "a", "tablet."] },
    { words: ["notebooks.", "They’re"], answer: ["They’re", "notebooks."] },
    { words: ["this?", "What’s"], answer: ["What’s", "this?"] },
    { words: ["these?", "are", "What"], answer: ["What", "are", "these?"] },
  ],
} satisfies TryItData;
