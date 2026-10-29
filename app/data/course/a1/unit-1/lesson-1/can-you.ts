import type { CanYouData } from "../../../lesson-step-types";

export const canYou = {
  type: "can-you",
  slug: "can-you",
  label: "Your progress",
  instruction: "Mini-conversation without the model. Check each success.",
  checks: [
    "Hello / Hi",
    "I’m… / My name is…",
    "What’s your name?",
    "Nice to meet you, too.",
  ],
} satisfies CanYouData;
