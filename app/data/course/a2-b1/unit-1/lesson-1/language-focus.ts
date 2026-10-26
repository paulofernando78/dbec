import type { LanguageFocusData } from "../../../lesson-step-types";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Ask and answer questions about the past.",
  items: [
    [
      "Where were you born? — I was born in Argentina.",
      "Use was or were to ask and answer about a past situation.",
      "Stress born and the place: Where were you BORN? — I was born in ArGENtina.",
      "Where + was/were + subject + complement? · Subject + was/were + complement.",
      undefined,
      "Onde você nasceu? — Eu nasci na Argentina.",
    ],
    [
      "Were you born in Buenos Aires? — Yes, I was. / No, I wasn't. I was born in Córdoba.",
      "Use was or were in short answers to questions with the verb be.",
      "Were is usually unstressed in the question. Stress was or wasn't in the answer.",
      "Was/Were + subject + complement? · Yes, subject + was/were. · No, subject + wasn't/weren't.",
      undefined,
      "Você nasceu em Buenos Aires? — Sim. / Não. Eu nasci em Córdoba.",
    ],
    [
      "When did you move to Los Angeles? — I moved here ten years ago. I didn't speak English.",
      "Use did to ask about a completed past action. Use the simple past in affirmative answers.",
      "Did is usually unstressed. Stress move, moved, and didn't.",
      "Wh-word + did + subject + base verb? · Subject + past verb. · Subject + didn't + base verb.",
      undefined,
      "Quando você se mudou para Los Angeles? — Eu me mudei para cá há dez anos. Eu não falava inglês.",
    ],
    [
      "Did you take English classes in Argentina? — Yes, I did. I took classes for a year. / No, I didn't. My aunt taught me at home.",
      "Use did and didn't in short answers. After did or didn't, use the base form of the verb.",
      "Stress did or didn't in short answers and the main information in the complete answer.",
      "Did + subject + base verb? · Yes, subject + did. · No, subject + didn't.",
      undefined,
      "Você fez aulas de inglês na Argentina? — Sim. Fiz aulas por um ano. / Não. Minha tia me ensinou em casa.",
    ],
  ],
} satisfies LanguageFocusData;
