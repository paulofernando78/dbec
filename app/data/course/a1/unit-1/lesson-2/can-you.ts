import type { CanYouData } from "../../../lesson-step-types";

export const canYou = {
  type: "can-you",
  slug: "can-you",
  label: "Your progress",
  instruction: "Exchange contact information without the model. Check each success.",
  checks: [
    "What’s your phone number?",
    "Numbers 0–9",
    "What’s your email address?",
    "Goodbye. / See you soon.",
  ],
} satisfies CanYouData;
