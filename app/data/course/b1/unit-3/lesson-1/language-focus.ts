import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask for favors, borrow or lend things, and adjust a request from less to more formal.",
  items: [
    [
      [bold("Can I borrow"), " your truck, please? — ", bold("Could you lend"), " me your truck, please?"],
      "Use can for a direct informal request and could for a slightly more polite request.",
      "Use rising intonation and stress the requested item.",
      "Can I + base verb? · Could you + base verb? · borrow something · lend someone something",
      undefined,
      "Posso pegar seu caminhão emprestado? — Você poderia me emprestar seu caminhão?",
    ],
    [
      [bold("Is it OK if"), " I use your credit card? — ", bold("Would it be all right if"), " I used your credit card?"],
      "Use an if clause to ask permission. Would it be all right if ...? is more formal and commonly takes a past form.",
      "Stress OK or all right and the requested action.",
      "Is it OK if + present clause? · Would it be all right if + past clause?",
      undefined,
      "Tudo bem se eu usar seu cartão? — Tudo bem se eu usasse seu cartão?",
    ],
    [
      [bold("Do you mind if"), " I use your credit card? — ", bold("Would you mind if"), " I borrowed your truck?"],
      "Use Do/Would you mind if ...? for polite permission requests. Would you mind is more formal.",
      "Keep mind if linked in natural speech and use polite rising intonation.",
      "Do you mind if + present clause? · Would you mind if + past clause?",
      undefined,
      "Você se importa se eu usar seu cartão? — Você se importaria se eu pegasse seu caminhão emprestado?",
    ],
    [
      [bold("Would you mind helping"), " me on Sunday?"],
      "Use Would you mind + gerund to request that another person perform an action.",
      "Stress the main action and time expression.",
      "Would you mind + verb-ing + complement?",
      undefined,
      "Você se importaria de me ajudar no domingo?",
    ],
    [
      [bold("I was wondering if"), " you could help me move."],
      "Use I was wondering if ... for a very polite, indirect request.",
      "Use a soft tone and keep was wondering if flowing as one phrase.",
      "I was wondering if + subject + could/would + base verb",
      undefined,
      "Eu queria saber se você poderia me ajudar na mudança.",
    ],
  ],
} satisfies LanguageFocusData;
