import type { TryItData } from "../../../lesson-step-types";

export const tryIt = {
  type: "try-it",
  slug: "try-it",
  label: "Try it",
  instruction: "Put the words in the correct order.",
  items: [
    { words: ["Eric.", "Hi!", "I'm"], answer: ["Hi!", "I'm", "Eric."] },
    { words: ["Laura.", "is", "My", "name"], answer: ["My", "name", "is", "Laura."] },
    { words: ["name?", "your", "What's"], answer: ["What's", "your", "name?"] },
    { words: ["name?", "first", "What's", "your"], answer: ["What's", "your", "first", "name?"] },
    { words: ["last", "name?", "your", "What's"], answer: ["What's", "your", "last", "name?"] },
    { words: ["you.", "meet", "Nice", "to"], answer: ["Nice", "to", "meet", "you."] },
    { words: ["you.", "Nice", "meeting"], answer: ["Nice", "meeting", "you."] },
  ],
} satisfies TryItData;
