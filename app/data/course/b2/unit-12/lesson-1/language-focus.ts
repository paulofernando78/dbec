import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss progress and adaptation abroad using future perfect forms and expressions completed by prepositions.",
  items: [
    [
      ["By this time next year, your confidence ", bold("will have increased"), "."],
      "Use the future perfect to emphasize that an action or change will be completed by a particular future point.",
      "Stress the future deadline and the completed result; reduce will have in fluent speech.",
      "will have + past participle · by + future point",
      undefined,
      "A esta altura no próximo ano, sua confiança terá aumentado.",
      "Future perfect",
    ],
    [
      ["By the end of the program, I ", bold("will have become"), " familiar with local customs."],
      "Use the future perfect for a state or achievement expected to be in place by a deadline.",
      "Emphasize the achieved state and the deadline.",
      "by + future deadline, subject + will have + past participle",
      undefined,
      "Até o final do programa, terei me familiarizado com os costumes locais.",
      "Future achievements",
    ],
    [
      ["By next June, I ", bold("will have been studying"), " French for eighteen months."],
      "Use the future perfect continuous to emphasize the duration of an activity in progress at a future point.",
      "Stress the duration and ongoing activity; keep will have been light.",
      "will have been + verb-ing + for + duration",
      undefined,
      "Em junho do próximo ano, estarei estudando francês há dezoito meses.",
      "Future perfect continuous",
    ],
    [
      ["You'll ", bold("adjust to"), " the culture and ", bold("get accustomed to"), " daily life."],
      "Complete these verbs and expressions with to; when to is a preposition, follow it with a noun or gerund.",
      "Link each expression to its complement and stress the final content word.",
      "adjust to · get accustomed to · look forward to",
      undefined,
      "Você vai se adaptar à cultura e se acostumar com a vida cotidiana.",
      "Expressions with to",
    ],
    [
      ["I'm ", bold("excited about"), " the program but ", bold("scared of"), " making mistakes."],
      "Use about after excited and of after scared; both prepositions can be followed by a noun or gerund.",
      "Stress the emotion and its complement.",
      "be excited about + noun/verb-ing · be scared of + noun/verb-ing",
      undefined,
      "Estou animado com o programa, mas com medo de cometer erros.",
      "Emotions and prepositions",
    ],
    [
      ["Become ", bold("aware of"), " local expectations, be ", bold("familiar with"), " the rules, and ", bold("participate in"), " community life."],
      "Learn the fixed preposition that completes each expression.",
      "Keep the preposition linked to the expression and emphasize the complement.",
      "become aware of · be familiar with · participate in · take advantage of",
      undefined,
      "Tome consciência das expectativas locais, familiarize-se com as regras e participe da vida comunitária.",
      "Fixed prepositions",
    ],
  ],
} satisfies LanguageFocusData;
