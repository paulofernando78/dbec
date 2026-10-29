import type { UseItData } from "../../../lesson-step-types";

export const useIt = {
  type: "use-it",
  slug: "use-it",
  label: "Use it",
  instruction:
    "Exchange contact information. Real or invented information—your choice.",
  prompts: [
    "Greet your partner and say your name.",
    "Ask for a phone number.",
    "Listen and repeat the number to check it.",
    "Ask for an email address.",
    "Say goodbye, then change roles.",
  ],
  model: [
    ["A", "Hi, I’m Julia. What’s your phone number?"],
    ["B", "It’s 555-0182."],
    ["A", "555-0182?"],
    ["B", "Yes. What’s your email address?"],
    ["A", "It’s julia@example.com."],
    ["B", "Thanks. Goodbye. See you soon."],
  ],
} satisfies UseItData;
