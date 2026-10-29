import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask and answer questions about frequency, duration, ability, and performance.",
  items: [
    [
      [bold("How often"), " do you exercise? — Every day. / Once a week. / Twice a month."],
      "Use How often to ask about frequency and answer with a frequency expression.",
      "Stress often and the frequency in the answer.",
      "every day · once a week · twice a month · three times a year · not very often",
      undefined,
      "Com que frequência você se exercita? — Todos os dias. / Uma vez por semana. / Duas vezes por mês.",
    ],
    [
      ["I ", bold("always"), " exercise before work. I ", bold("sometimes"), " watch TV before bed. I ", bold("never"), " skip breakfast."],
      "Put most adverbs of frequency before the main verb. Usually and sometimes may also begin a sentence.",
      "Stress the frequency adverb when correcting or emphasizing a habit.",
      "always · usually · sometimes · never",
      undefined,
      "Sempre me exercito antes do trabalho. Às vezes vejo TV antes de dormir. Nunca pulo o café da manhã.",
    ],
    [
      [bold("How long"), " do you spend at the gym? — Thirty minutes a day. / About an hour on weekends."],
      "Use How long to ask about the duration of an activity.",
      "Stress long and the amount of time in the answer.",
      "How long + do/does + subject + base verb? · amount of time + a day/week",
      undefined,
      "Quanto tempo você passa na academia? — Trinta minutos por dia. / Cerca de uma hora nos fins de semana.",
    ],
    [
      [bold("How well"), " do you play tennis? — Pretty well. ", bold("How good"), " are you at sports? — Pretty good."],
      "Use How well with an action and How good ... at with a noun or activity.",
      "Stress well or good in the question and the degree expression in the answer.",
      "How well + do/does + subject + verb? · How good + be + subject + at + noun?",
      undefined,
      "Você joga tênis bem? — Muito bem. Você é bom em esportes? — Muito bom.",
    ],
  ],
} satisfies LanguageFocusData;
