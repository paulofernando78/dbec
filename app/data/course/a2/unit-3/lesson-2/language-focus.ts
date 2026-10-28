import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe materials, express preferences, and compare products with adjectives.",
  items: [
    [
      ["What's the belt made of? — It's made of ", bold("leather"), ". The shirt is ", bold("cotton"), "."],
      "Use material words to describe what clothes, accessories, and other products are made of.",
      "Stress the material word because it carries the main information.",
      "cotton · gold · leather · plastic · rubber · silk · silver · wool",
      undefined,
      "Do que é feito o cinto? — É feito de couro. A camisa é de algodão.",
    ],
    [
      ["Which dress do you ", bold("prefer"), "? — I prefer the blue one."],
      "Use prefer to ask about and state a choice between products.",
      "Stress prefer and the chosen item.",
      "Which + noun + do you prefer? · I prefer + noun/one.",
      undefined,
      "Qual vestido você prefere? — Prefiro o azul.",
    ],
    [
      ["Which one do you like ", bold("more"), "? — I like the blue one more. Which one do you like ", bold("better"), "? — I like the black one better."],
      "Use like ... more or like ... better to express a stronger preference.",
      "Stress more or better and the preferred item.",
      "Which one do you like more/better? · I like + item + more/better.",
      undefined,
      "De qual você gosta mais? — Gosto mais do azul. — Gosto mais do preto.",
    ],
    [
      ["The blue dress is ", bold("nicer than"), " the black one. It's ", bold("lighter than"), " the black one."],
      "Use adjective + -er + than to compare most short adjectives.",
      "Stress the comparative adjective and the two items being contrasted.",
      "cheap → cheaper · nice → nicer · big → bigger · pretty → prettier · adjective-er + than",
      undefined,
      "O vestido azul é mais bonito que o preto. É mais leve que o preto.",
    ],
    [
      ["The black dress is ", bold("more stylish than"), " the blue one."],
      "Use more + adjective + than with many longer adjectives.",
      "Stress more and the main stressed syllable of the adjective.",
      "more + adjective + than · more stylish than · more expensive than",
      undefined,
      "O vestido preto é mais elegante que o azul.",
    ],
  ],
} satisfies LanguageFocusData;
