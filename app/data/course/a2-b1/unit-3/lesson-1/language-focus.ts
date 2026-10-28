import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Make evaluations and comparisons with adjectives and nouns.",
  items: [
    [
      ["This house ", bold("isn't spacious enough"), " for six people. — The kitchen is ", bold("too narrow"), "."],
      "Use adjective plus enough for an insufficient quality and too plus adjective for an excessive quality.",
      "Stress the adjective and enough or too.",
      "be + not + adjective + enough · be + too + adjective",
      undefined,
      "Esta casa não é espaçosa o suficiente para seis pessoas. — A cozinha é estreita demais.",
      "Evaluations with adjectives",
    ],
    [
      ["The neighborhood ", bold("isn't as lively as"), " downtown. — The balcony is ", bold("just as sunny as"), " the one in our old apartment."],
      "Use not as ... as for a difference and just as ... as for equality.",
      "Stress the adjective in each comparison.",
      "not as + adjective + as · just as + adjective + as",
      undefined,
      "O bairro não é tão animado quanto o centro. — A varanda é tão ensolarada quanto a do nosso antigo apartamento.",
      "Comparisons with adjectives",
    ],
    [
      ["There ", bold("aren't enough electrical outlets"), ". — The tenants make ", bold("too much noise"), " in the hallway."],
      "Use enough with plural count nouns and too much with noncount nouns.",
      "Stress enough outlets and too much noise.",
      "not enough + plural count noun · too much + noncount noun",
      undefined,
      "Não há tomadas suficientes. — Os moradores fazem barulho demais no corredor.",
      "Evaluations with nouns",
    ],
    [
      ["This house doesn't have ", bold("as many closets as"), " the other one. — We don't get ", bold("as much natural light as"), " before."],
      "Use as many ... as with count nouns and as much ... as with noncount nouns.",
      "Stress the quantity expression and the noun.",
      "as many + plural count noun + as · as much + noncount noun + as",
      undefined,
      "Esta casa não tem tantos armários quanto a outra. — Não recebemos tanta luz natural quanto antes.",
      "Comparisons with nouns",
    ],
  ],
} satisfies LanguageFocusData;
