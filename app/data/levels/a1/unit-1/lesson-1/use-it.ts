import type { UseItData } from "../../../lesson-step-types";

export const useIt = {
  type: "use-it",
  slug: "use-it",
  label: "Use it",
  instruction: "Meet a new classmate. Use the model, then use your own names.",
  prompts: [
    "Greet your partner.",
    "Say your name.",
    "Ask your partner's name.",
    "Say: Nice to meet you.",
  ],
  model: [
    ["A", "Hello! My name is Julia. What's your name?"],
    ["B", "Hi, Julia. I'm Daniel."],
    ["A", "Nice to meet you, Daniel."],
    ["B", "Nice to meet you too."],
  ],
} satisfies UseItData;
