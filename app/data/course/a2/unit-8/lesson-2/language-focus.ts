import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe neighborhoods using count and noncount nouns, quantifiers, and how many or how much.",
  items: [
    [
      [bold("Are there many"), " restaurants? — Yes, there are ", bold("a lot"), ". / There are a few. / No, there aren't many."],
      "Use many with plural count nouns and answer with a lot, a few, not many, any, or none.",
      "Stress many and the quantity in the answer.",
      "many + plural count noun · a lot · a few · not many · not any · none",
      undefined,
      "Há muitos restaurantes? — Sim, há muitos. / Há alguns. / Não, não há muitos.",
    ],
    [
      [bold("How many"), " restaurants are there? — There are ten or twelve."],
      "Use How many to ask for the number of plural count nouns.",
      "Stress many, the noun, and the number in the answer.",
      "How many + plural count noun + are there?",
      undefined,
      "Quantos restaurantes há? — Há dez ou doze.",
    ],
    [
      [bold("Is there much"), " crime? — There's a lot. / There's a little. / No, there isn't much."],
      "Use much with noncount nouns and answer with a lot, a little, not much, any, or none.",
      "Stress much and the quantity in the answer.",
      "much + noncount noun · a lot · a little · not much · not any · none",
      undefined,
      "Há muita criminalidade? — Há muita. / Há um pouco. / Não há muita.",
    ],
    [
      [bold("How much"), " traffic is there? — There's a lot of traffic downtown."],
      "Use How much to ask about the amount of a noncount noun.",
      "Stress much, the noun, and the quantity in the answer.",
      "How much + noncount noun + is there?",
      undefined,
      "Quanto trânsito há? — Há muito trânsito no centro.",
    ],
    [
      ["There are a few cafés in ", bold("the suburbs"), ", but there are a lot in ", bold("the shopping district"), "."],
      "Use neighborhood vocabulary to compare different parts of a town or city.",
      "Stress the neighborhood type being contrasted.",
      "downtown/main street · the suburbs · a shopping district · a college campus · a business district · a theater district · an industrial district · a small town",
      undefined,
      "Há algumas cafeterias nos subúrbios, mas há muitas no distrito comercial.",
    ],
  ],
} satisfies LanguageFocusData;
