import type { UseItData } from "../../../lesson-step-types";

export const useIt = {
  type: "use-it",
  slug: "use-it",
  label: "Use it",
  instruction:
    "Meet a new classmate. Read the model once. Then cover it and use your real names.",
  prompts: [
    "Greet your partner.",
    "Say your name.",
    "Ask your partner's name.",
    "Say: Nice to meet you.",
    "Change roles. Repeat with new names.",
  ],
  model: [
    ["A", "Hello! My name is Julia. What's your name?"],
    ["B", "Hi, Julia. I'm Daniel."],
    ["A", "Nice to meet you, Daniel."],
    ["B", "Nice to meet you too."],
  ],
} satisfies UseItData;
