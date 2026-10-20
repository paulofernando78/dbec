import type { CanYouData } from "../../../lesson-step-types";

export const canYou = {
  type: "can-you",
  slug: "can-you",
  label: "Can you…?",
  instruction: "Check your progress.",
  checks: [
    "Can you say hello?",
    "Can you say your name?",
    "Can you ask someone’s name?",
    "Can you say “Nice to meet you”?",
  ],
} satisfies CanYouData;
