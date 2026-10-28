import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe cultural expectations and etiquette using when and if clauses.",
  items: [
    [
      [bold("When"), " you visit someone, it's the custom to bring a small gift."],
      "Use a when clause for a situation that is expected to occur, followed by the customary behavior.",
      "Pause after the when clause and stress the custom.",
      "When + present clause, it's the custom to + base verb",
      undefined,
      "Quando você visita alguém, é costume levar um pequeno presente.",
    ],
    [
      ["When you visit someone, you ", bold("aren't supposed to"), " arrive early."],
      "Use be supposed to for a social expectation and not be supposed to for behavior people should avoid.",
      "Stress supposed and the expected or avoided action.",
      "subject + be (not) supposed to + base verb",
      undefined,
      "Quando você visita alguém, não deve chegar cedo.",
    ],
    [
      [bold("If"), " you want to bring others, you're expected to ask if it's OK first."],
      "Use an if clause for a possible situation and be expected to for a social requirement.",
      "Pause after the if clause and stress expected and the required action.",
      "If + present clause, subject + be expected to + base verb",
      undefined,
      "Se quiser levar outras pessoas, espera-se que você pergunte antes se tudo bem.",
    ],
    [
      ["If you bring a guest, it's ", bold("not acceptable to"), " bring them without asking."],
      "Use it's acceptable/not acceptable to to judge behavior according to local etiquette.",
      "Stress acceptable and the behavior being judged.",
      "It's (not) acceptable to + base verb",
      undefined,
      "Se você levar um convidado, não é aceitável levá-lo sem perguntar.",
    ],
    [
      ["In Japan, take off your shoes before entering a house; in Thailand, never touch someone's head."],
      "Use country-specific etiquette vocabulary to compare customs for international travelers.",
      "Stress the country and the key action. Use a respectful, neutral tone.",
      "bring a host gift · arrive on time · remove shoes · avoid pointing · respect table customs · avoid touching someone's head",
      undefined,
      "No Japão, tire os sapatos antes de entrar em uma casa; na Tailândia, nunca toque a cabeça de alguém.",
    ],
  ],
} satisfies LanguageFocusData;
