import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use adjectives after be or before a noun to give opinions about jobs.",
  items: [
    [
      ["A nurse's job ", bold("is rewarding"), ". — A nurse has a ", bold("rewarding job"), "."],
      "Put an adjective after be or before a noun. Both sentences have a similar meaning.",
      "Stress rewarding and job.",
      "be + adjective · adjective + noun",
      undefined,
      "O trabalho de enfermeiro é gratificante. — Um enfermeiro tem um trabalho gratificante.",
      "Placement of adjectives",
    ],
    [
      ["A taxi driver's job ", bold("is tiring"), ". — A taxi driver has a ", bold("tiring job"), "."],
      "Use is plus an adjective to describe the job. You can also put the adjective before job.",
      "Stress tiring and taxi driver.",
      "job + is + adjective · a/an + adjective + job",
      undefined,
      "O trabalho de taxista é cansativo. — Um taxista tem um trabalho cansativo.",
      "Placement of adjectives",
    ],
    [
      ["A cashier's job ", bold("is repetitive"), ". — A cashier has a ", bold("repetitive job"), "."],
      "Adjectives do not change for masculine, feminine, singular, or plural in English.",
      "Stress cashier and repetitive.",
      "be + adjective · adjective + noun",
      undefined,
      "O trabalho de caixa é repetitivo. — Um caixa tem um trabalho repetitivo.",
      "Placement of adjectives",
    ],
    [
      ["An office manager's job ", bold("is busy"), ". — An office manager has a ", bold("busy job"), "."],
      "Use an before office manager because office begins with a vowel sound.",
      "Stress office manager and busy.",
      "an + job title · a + adjective + job",
      undefined,
      "O trabalho de gerente de escritório é movimentado. — Um gerente de escritório tem um trabalho movimentado.",
      "Placement of adjectives",
    ],
  ],
} satisfies LanguageFocusData;
