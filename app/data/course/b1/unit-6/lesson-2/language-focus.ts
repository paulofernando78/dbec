import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Explain what requires repair using need with gerunds or passive infinitives and keep with gerunds.",
  items: [
    [
      ["The oven ", bold("needs adjusting"), ". The alarm ", bold("needs fixing"), "."],
      "Use need + gerund to say that an object requires an action. The gerund has a passive meaning.",
      "Stress needs and the repair action.",
      "object + need/needs + verb-ing",
      undefined,
      "O forno precisa de ajuste. O alarme precisa ser consertado.",
    ],
    [
      ["The oven ", bold("needs to be adjusted"), ". The alarm ", bold("needs to be fixed"), "."],
      "Use need + passive infinitive as an equivalent, more explicit repair structure.",
      "Keep to be light and stress the final participle.",
      "object + need/needs + to be + past participle",
      undefined,
      "O forno precisa ser ajustado. O alarme precisa ser consertado.",
    ],
    [
      ["Everything ", bold("keeps burning"), ". The alarm ", bold("keeps going off"), "."],
      "Use keep + gerund to describe a problem that happens repeatedly.",
      "Stress keeps and the repeated problem.",
      "subject + keep/keeps + verb-ing",
      undefined,
      "Tudo continua queimando. O alarme continua disparando.",
    ],
    [
      ["The TV screen keeps ", bold("flickering"), ", the music keeps ", bold("skipping"), ", and the game keeps ", bold("crashing"), "."],
      "Choose a specific -ing verb to describe a repeated electronics problem.",
      "Stress the technical problem word.",
      "flicker · stick · freeze · die · crash · jam · drop calls · skip",
      undefined,
      "A tela continua piscando, a música continua pulando e o jogo continua travando.",
    ],
    [
      ["The printer ", bold("needs to be replaced"), " because it keeps jamming."],
      "Combine need with a passive infinitive and keep with a gerund to state the required solution and recurring cause.",
      "Stress the solution and recurring fault.",
      "object + needs to be + past participle + because + it keeps + verb-ing",
      undefined,
      "A impressora precisa ser substituída porque continua atolando.",
    ],
  ],
} satisfies LanguageFocusData;
