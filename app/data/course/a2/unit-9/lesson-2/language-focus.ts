import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Identify people using present participles and prepositional phrases.",
  items: [
    [
      ["Who's Diego? — He's the man ", bold("wearing a blue shirt"), "."],
      "Use a present participle phrase to identify someone by what they are wearing or doing.",
      "Stress the clothing color or action that distinguishes the person.",
      "the man/woman/person + verb-ing phrase",
      undefined,
      "Quem é Diego? — É o homem que está usando uma camisa azul.",
    ],
    [
      ["Which one is Diego? — He's the one ", bold("talking to Brooke"), "."],
      "Use the one for one person and the ones for more than one person when the noun is understood.",
      "Stress one or ones and the identifying phrase.",
      "the one + modifier · the ones + modifier",
      undefined,
      "Qual deles é Diego? — É aquele que está conversando com Brooke.",
    ],
    [
      ["Who's Brooke? — She's the woman ", bold("with long black hair"), ". Which one is Paula? — She's the tall one ", bold("in jeans"), "."],
      "Use a prepositional phrase to identify someone by appearance, clothing, or location.",
      "Stress the distinguishing detail after the preposition.",
      "with + feature · in + clothing · next to + place/person · on + location",
      undefined,
      "Quem é Brooke? — É a mulher de cabelo preto comprido. Qual é Paula? — É a alta de jeans.",
    ],
    [
      ["Are the Harrisons the people next to the window? — No, they're the ones ", bold("on the couch"), "."],
      "Use location phrases to distinguish one person or group from another.",
      "Stress the corrected location in the response.",
      "next to the window · on the couch · by the door · behind the table",
      undefined,
      "Os Harrisons são as pessoas ao lado da janela? — Não, são as que estão no sofá.",
    ],
    [
      ["Is Rob the one wearing the ", bold("red"), " shirt? — No, he's the one wearing the ", bold("black"), " shirt."],
      "Use contrastive stress to emphasize the corrected detail in a response.",
      "Place the strongest stress on the word that contrasts with the incorrect information.",
      "incorrect detail → strongly stressed corrected detail",
      undefined,
      "Rob é o que está usando a camisa vermelha? — Não, é o que está usando a camisa preta.",
    ],
  ],
} satisfies LanguageFocusData;
