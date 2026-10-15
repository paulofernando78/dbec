import type { TryItData } from "../../../lesson-step-types";

export const tryIt = {
  type: "try-it",
  slug: "try-it",
  label: "Try it",
  instruction: "Put the words in the correct order.",
  items: [
    ["Eric.", "Hi!", "I'm"],
    ["Laura.", "is", "My", "name"],
    ["name?", "your", "What's"],
    ["name?", "first", "What's", "your"],
    ["last", "name?", "your", "What's"],
    ["you.", "meet", "Nice", "to"],
    ["you.", "Nice", "meeting"],
  ],
} satisfies TryItData;
