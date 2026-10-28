import type { LanguageFocusData } from "../../../lesson-step-types";
import { TimeExpressions } from "@/features/TimeExpressions";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: TimeExpressions,
  instruction: "Use simple present questions to ask about routines.",
  items: [
    [
      [bold("Do you study"), " in the morning? — Yes, I do. / No, I don't."],
      "Use do before you to ask about a routine.",
      "Use rising intonation in the yes/no question.",
      "Do + you + verb? · Yes, I do. · No, I don't.",
      undefined,
      "Você estuda de manhã? — Sim. / Não.",
      "Simple present yes/no questions",
    ],
    [
      [bold("Does he walk"), " to school? — Yes, he does. / No, he doesn't."],
      "Use does with he or she. Use the base verb after does.",
      "Use rising intonation in the yes/no question.",
      "Does + he/she + verb? · Yes, he/she does. · No, he/she doesn't.",
      undefined,
      "Ele vai a pé para a escola? — Sim. / Não.",
      "Simple present yes/no questions",
    ],
    [
      [bold("Do they take"), " the train? — Yes, they do. / No, they don't."],
      "Use do with they. Use the base verb after do.",
      "Stress train, yes, and no.",
      "Do + they + verb? · Yes, they do. · No, they don't.",
      undefined,
      "Eles pegam o trem? — Sim. / Não.",
      "Simple present yes/no questions",
    ],
    [
      [bold("What time do you leave"), " home? — At eight o'clock."],
      "Use What time to ask for an exact time.",
      "Stress what time, leave, and eight.",
      "What time + do + you + verb? · At + time.",
      undefined,
      "A que horas você sai de casa? — Às oito horas.",
      "What time questions",
    ],
    [
      [bold("What time does she start"), " work? — At nine thirty."],
      "Use does with he or she. The main verb stays in the base form.",
      "Stress what time, start, and nine thirty.",
      "What time + does + he/she + verb? · At + time.",
      undefined,
      "A que horas ela começa a trabalhar? — Às nove e meia.",
      "What time questions",
    ],
    [
      [bold("When do they visit"), " their parents? — On weekends."],
      "Use when to ask about a day or general time.",
      "Stress when, visit, parents, and weekends.",
      "When + do + they + verb? · On + day.",
      undefined,
      "Quando eles visitam os pais? — Nos fins de semana.",
      "When questions",
    ],
  ],
} satisfies LanguageFocusData;
