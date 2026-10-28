import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use indirect questions to ask for information politely.",
  items: [
    [
      ["Where is the nearest ATM? — Could you tell me ", bold("where the nearest ATM is"), "?"],
      "Begin with Could you tell me and use statement word order in the indirect question.",
      "Use a polite rising tone on the complete question.",
      "Could you tell me + Wh-word + subject + be?",
      undefined,
      "Onde fica o caixa eletrônico mais próximo? — Você poderia me dizer onde fica o caixa eletrônico mais próximo?",
    ],
    [
      ["Where are the restrooms? — Do you know ", bold("where the restrooms are"), "?"],
      "In an indirect question with be, place the subject before the verb.",
      "Link know and where smoothly in connected speech.",
      "Do you know + Wh-word + subject + be?",
      undefined,
      "Onde ficam os banheiros? — Você sabe onde ficam os banheiros?",
    ],
    [
      ["How often do the buses run? — Can you tell me ", bold("how often the buses run"), "?"],
      "Remove do or does and use subject plus base verb after the Wh-expression.",
      "Stress how often and buses.",
      "Can you tell me + Wh-expression + subject + base verb?",
      undefined,
      "Com que frequência os ônibus passam? — Você pode me dizer com que frequência os ônibus passam?",
    ],
    [
      ["What time does the bookstore open? — Do you know ", bold("what time the bookstore opens"), "?"],
      "Remove does and put the main verb in the third-person singular form.",
      "Stress what time and bookstore.",
      "Do you know + Wh-expression + subject + third-person verb?",
      undefined,
      "A que horas a livraria abre? — Você sabe a que horas a livraria abre?",
    ],
    [
      ["Where can I catch the bus? — Do you know ", bold("where I can catch the bus"), "?"],
      "In an indirect question with can, place the subject before can.",
      "Stress catch and bus; keep the introductory phrase lighter.",
      "Do you know + Wh-word + subject + can + base verb?",
      undefined,
      "Onde posso pegar o ônibus? — Você sabe onde posso pegar o ônibus?",
    ],
  ],
} satisfies LanguageFocusData;
