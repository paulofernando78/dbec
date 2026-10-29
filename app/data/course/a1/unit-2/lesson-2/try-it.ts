import type { TryItData } from "../../../lesson-step-types";

export const tryIt = {
  type: "try-it", slug: "try-it", label: "Try it",
  instruction: "Build the location answers. Then build the questions.",
  items: [
    { words: ["drawer.", "the", "in", "It’s"], answer: ["It’s", "in", "the", "drawer."] },
    { words: ["desk.", "the", "on", "They’re"], answer: ["They’re", "on", "the", "desk."] },
    { words: ["charger?", "the", "Where’s"], answer: ["Where’s", "the", "charger?"] },
    { words: ["keys?", "the", "are", "Where"], answer: ["Where", "are", "the", "keys?"] },
  ],
} satisfies TryItData;
