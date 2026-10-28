import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use expressions of quantity with count and noncount nouns.",
  items: [
    [
      ["There are ", bold("too many"), " cars. — There is ", bold("too much"), " pollution."],
      "Use too many with plural count nouns and too much with noncount nouns to express an excessive quantity.",
      "Stress too many or too much and the noun that follows.",
      "too many + plural count noun · too much + noncount noun",
      undefined,
      "Há carros demais. — Há poluição demais.",
    ],
    [
      ["There should be ", bold("fewer"), " cars. — There should be ", bold("less"), " pollution."],
      "Use fewer with plural count nouns and less with noncount nouns to describe a smaller quantity.",
      "Stress fewer or less and the noun that follows.",
      "fewer + plural count noun · less + noncount noun",
      undefined,
      "Deveria haver menos carros. — Deveria haver menos poluição.",
    ],
    [
      ["We need ", bold("more"), " streetlights. — We need ", bold("more"), " public transportation."],
      "Use more with both count and noncount nouns to describe a larger quantity.",
      "Stress more and the main noun.",
      "more + plural count noun or noncount noun",
      undefined,
      "Precisamos de mais postes de iluminação. — Precisamos de mais transporte público.",
    ],
    [
      ["There aren't ", bold("enough"), " police officers. — There isn't ", bold("enough"), " parking."],
      "Use enough before count and noncount nouns to mean the necessary quantity.",
      "Stress enough when emphasizing that the quantity is insufficient.",
      "enough + plural count noun or noncount noun",
      undefined,
      "Não há policiais suficientes. — Não há estacionamento suficiente.",
    ],
  ],
} satisfies LanguageFocusData;
