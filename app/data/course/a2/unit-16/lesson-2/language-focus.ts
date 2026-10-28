import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Describe future plans and goals using verb + infinitive.",
  items: [
    [
      ["What are you going to do this year? — I'm going to ", bold("take"), " a trip to the Caribbean."],
      "Use be going to + base verb for a future plan or intention.",
      "Going to is often reduced in conversation. Stress the main action and destination.",
      "am/is/are + going to + base verb",
      undefined,
      "O que você vai fazer este ano? — Vou fazer uma viagem ao Caribe.",
    ],
    [
      ["I ", bold("plan to take"), " guitar lessons. I don't plan to move this year."],
      "Use plan + infinitive for an intended future action. Place don't or doesn't before plan for a negative intention.",
      "Stress plan and the main action.",
      "plan/don't plan + to + base verb",
      undefined,
      "Planejo fazer aulas de violão. Não planejo me mudar este ano.",
    ],
    [
      ["I ", bold("want to learn"), " to dance. I don't want to change jobs."],
      "Use want + infinitive to express a personal goal or desire.",
      "Want to is often reduced in casual speech. Stress the desired action.",
      "want/don't want + to + base verb",
      undefined,
      "Quero aprender a dançar. Não quero mudar de emprego.",
    ],
    [
      ["I ", bold("hope to get"), " a new job."],
      "Use hope + infinitive for a desired future result that is possible but not certain.",
      "Stress hope and the hoped-for result.",
      "hope + to + base verb",
      undefined,
      "Espero conseguir um novo emprego.",
    ],
    [
      ["I'd ", bold("like to travel"), " around the United States. I'd ", bold("love to play"), " the guitar."],
      "Use would like or would love + infinitive for polite or enthusiastic wishes.",
      "Stress love for enthusiasm and the main action. I'd means I would.",
      "would like/love + to + base verb · I'd = I would",
      undefined,
      "Gostaria de viajar pelos Estados Unidos. Adoraria tocar violão.",
    ],
  ],
} satisfies LanguageFocusData;
