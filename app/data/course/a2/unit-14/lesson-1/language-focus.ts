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
      ["Which is ", bold("more crowded"), ", City A or City B? — City A is ", bold("more crowded than"), " City B."],
      "Use more + adjective + than with many longer adjectives.",
      "Stress more and the main adjective.",
      "more beautiful/crowded/expensive + than",
      undefined,
      "Qual é mais populosa, a Cidade A ou a Cidade B? — A Cidade A é mais populosa que a Cidade B.",
    ],
    [
      ["In this chart, City C is ", bold("the most crowded"), " place."],
      "Use the most with many longer adjectives to compare one place with all others in a group.",
      "Stress most and the main adjective.",
      "the most + adjective",
      undefined,
      "Neste gráfico, a Cidade C é o lugar mais populoso.",
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
