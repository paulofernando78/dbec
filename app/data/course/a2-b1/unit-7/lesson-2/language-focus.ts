import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use imperatives and infinitives to give suggestions.",
  items: [
    [
      [bold("Be sure to enable"), " two-factor authentication."],
      "Use be sure plus an infinitive for an important suggestion.",
      "Stress sure, enable, and authentication.",
      "be sure + to + base verb",
      undefined,
      "Certifique-se de ativar a autenticação de dois fatores.",
    ],
    [
      [bold("Make sure to save"), " backup copies of your files."],
      "Use make sure plus an infinitive to remind someone to take an important precaution.",
      "Stress make sure, save, and backup copies.",
      "make sure + to + base verb",
      undefined,
      "Não deixe de salvar cópias de segurança dos seus arquivos.",
    ],
    [
      [bold("Remember to lock"), " your screen when you leave."],
      "Use remember plus an infinitive for something the listener should not overlook.",
      "Stress remember, lock, and leave.",
      "remember + to + base verb",
      undefined,
      "Lembre-se de bloquear sua tela quando sair.",
    ],
    [
      [bold("Don't forget to check"), " your privacy settings."],
      "Use a negative imperative with an infinitive to give a reminder.",
      "Stress don't forget, check, and privacy settings.",
      "don't forget + to + base verb",
      undefined,
      "Não se esqueça de verificar suas configurações de privacidade.",
    ],
    [
      [bold("Try not to share"), " your location publicly."],
      "Use try not plus an infinitive to suggest avoiding an action.",
      "Stress try not, share, and publicly.",
      "try not + to + base verb",
      undefined,
      "Tente não compartilhar sua localização publicamente.",
    ],
  ],
} satisfies LanguageFocusData;
