import type { LanguageFocusData } from "../../../lesson-step-types";
import { TheNumbers } from "@/features/TheNumbers";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: TheNumbers,
  instruction:
    "Listen, repeat, and notice four useful expressions for exchanging contact information.",
  items: [
    [
      [bold("What’s your phone number"), "?"],
      "Ask this when you want someone’s phone number.",
      "Stress PHONE and NUMber. Use falling intonation.",
      "What’s + your + phone number?",
      undefined,
      "Qual é o seu número de telefone?",
      "Phone number",
    ],
    [
      [bold("It’s"), " 5510-8246."],
      "Use It’s plus the number to answer. Say phone numbers one digit at a time.",
      "Pause between small groups of numbers: five five one zero / eight two four six.",
      "It’s + phone number",
      undefined,
      "É 5510-8246.",
      "Phone number",
    ],
    [
      [bold("What’s your email address"), "? — It’s sofia@example.com."],
      "Ask this when you want someone’s email address. Use It’s to answer.",
      "Stress E-mail and ADDRESS. Say @ as at and . as dot.",
      "What’s + your + email address? · It’s + email",
      undefined,
      "Qual é o seu endereço de e-mail? — É sofia@example.com.",
      "Email address",
    ],
    [
      [bold("Goodbye"), ". — ", bold("See you soon"), "."],
      "Use these expressions to end a conversation politely.",
      "Stress BYE in goodbye and SEE and SOON in See you soon.",
      "Goodbye. · See you + time.",
      undefined,
      "Tchau. — Até logo.",
      "Ending the conversation",
    ],
  ],
} satisfies LanguageFocusData;
