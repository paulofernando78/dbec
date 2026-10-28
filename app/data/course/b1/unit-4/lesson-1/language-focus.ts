import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe and connect past events using the past continuous and simple past.",
  items: [
    [
      ["While I ", bold("was working out"), ", the app calculated how many calories I burned."],
      "Use the past continuous for an action that was in progress at a particular past time.",
      "Give each clause its own intonation pattern, with a slight rise before the comma and a fall at the end.",
      "while/as + subject + was/were + verb-ing, subject + simple past",
      undefined,
      "Enquanto eu estava me exercitando, o aplicativo calculou quantas calorias queimei.",
    ],
    [
      ["As scientists ", bold("were doing"), " research, they ", bold("discovered"), " that women need more sleep than men."],
      "Use the simple past for the completed event that occurs during or interrupts an ongoing past action.",
      "Stress the discovery and use a falling tone in the final clause.",
      "ongoing action: was/were + verb-ing · interrupting/completed event: simple past",
      undefined,
      "Enquanto cientistas faziam pesquisas, descobriram que mulheres precisam dormir mais que homens.",
    ],
    [
      ["A man ", bold("was looking"), " for his cat when he ", bold("found"), " a suspicious package."],
      "Use when before the shorter completed event that interrupts the action in progress.",
      "Keep the first clause flowing, then place the strongest stress on the unexpected event.",
      "subject + was/were + verb-ing + when + subject + simple past",
      undefined,
      "Um homem procurava seu gato quando encontrou um pacote suspeito.",
    ],
    [
      ["As Marcia ", bold("was walking"), " home, she ", bold("remembered"), " she had left money in her pocket."],
      "Use as or while for simultaneous background action and the simple past for a new thought or event.",
      "Use separate intonation groups for the clauses and fall on the final information.",
      "as/while + background clause, main past event",
      undefined,
      "Enquanto Marcia caminhava para casa, lembrou que havia deixado dinheiro no bolso.",
    ],
    [
      ["The story appeared in the ", bold("news"), " and became a ", bold("trending topic"), " about health and technology."],
      "Use media-section vocabulary to categorize a news story and establish its context.",
      "Stress the section or topic label.",
      "news · health · trending topics · arts · science · tech",
      undefined,
      "A história apareceu nas notícias e virou assunto em alta sobre saúde e tecnologia.",
    ],
  ],
} satisfies LanguageFocusData;
