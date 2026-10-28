import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe geography using comparative and superlative forms of adjectives.",
  items: [
    [
      ["Which country is ", bold("larger"), ", Australia or Mexico? — Australia is ", bold("larger than"), " Mexico."],
      "Use adjective + -er + than to compare two places with most short adjectives.",
      "In a choice question, intonation rises on the first option and falls on the final option.",
      "long → longer · large → larger · dry → drier · big → bigger · comparative + than",
      undefined,
      "Qual país é maior, Austrália ou México? — A Austrália é maior que o México.",
    ],
    [
      ["Which country is ", bold("the largest"), " in the world? — Russia is ", bold("the largest"), " country."],
      "Use the + adjective-est to compare one place with all others in a group.",
      "Stress the superlative adjective and the place name.",
      "the longest · the largest · the driest · the biggest",
      undefined,
      "Qual é o maior país do mundo? — A Rússia é o maior país.",
    ],
    [
      ["Which is ", bold("more crowded"), ", Malta or England? — Malta is ", bold("more crowded than"), " England."],
      "Use more + adjective + than with many longer adjectives.",
      "Stress more and the main adjective.",
      "more beautiful/crowded/expensive + than",
      undefined,
      "Qual é mais populoso, Malta ou Inglaterra? — Malta é mais populosa que a Inglaterra.",
    ],
    [
      ["Malta is ", bold("the most crowded"), " country in Europe. This beach is ", bold("the best"), ", and that one is ", bold("the worst"), "."],
      "Use the most with longer adjectives. Learn the irregular forms good, better, best and bad, worse, worst.",
      "Stress most, best, or worst when emphasizing the comparison.",
      "the most + adjective · good → better → the best · bad → worse → the worst",
      undefined,
      "Malta é o país mais populoso da Europa. Esta praia é a melhor, e aquela é a pior.",
    ],
    [
      ["The island has a ", bold("beach"), ", a ", bold("forest"), ", two ", bold("mountains"), ", and a ", bold("waterfall"), "."],
      "Use geographic-feature vocabulary to describe natural places.",
      "Stress the name of each geographic feature.",
      "beach · desert · forest · hill · island · lake · mountain · ocean · river · valley · volcano · waterfall",
      undefined,
      "A ilha tem uma praia, uma floresta, duas montanhas e uma cachoeira.",
    ],
  ],
} satisfies LanguageFocusData;
