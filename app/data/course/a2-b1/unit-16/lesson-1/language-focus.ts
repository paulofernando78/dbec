import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use reported speech to report affirmative and negative requests.",
  items: [
    [
      ["“Please submit the report before noon.” — She ", bold("asked me to submit"), " the report before noon."],
      "Use asked plus an object pronoun and an infinitive to report a polite request.",
      "Stress asked, submit, report, and before noon.",
      "ask + object + to + base verb",
      undefined,
      "‘Por favor, envie o relatório antes do meio-dia.’ — Ela me pediu para enviar o relatório antes do meio-dia.",
      "Affirmative requests",
    ],
    [
      ["“Submit the report before noon.” — She ", bold("told me to submit"), " the report before noon."],
      "Use told plus an object pronoun and an infinitive to report a direct instruction.",
      "Stress told, submit, report, and before noon.",
      "tell + object + to + base verb",
      undefined,
      "‘Envie o relatório antes do meio-dia.’ — Ela me disse para enviar o relatório antes do meio-dia.",
      "Affirmative requests",
    ],
    [
      ["“Don't share the access code.” — He ", bold("asked me not to share"), " the access code."],
      "Place not before the infinitive to report a negative request.",
      "Stress asked, not to share, and access code.",
      "ask + object + not to + base verb",
      undefined,
      "‘Não compartilhe o código de acesso.’ — Ele me pediu para não compartilhar o código de acesso.",
      "Negative requests",
    ],
    [
      ["“Don't share the access code.” — He ", bold("told me not to share"), " the access code."],
      "Use told plus an object and not to for a reported negative instruction.",
      "Stress told, not to share, and access code.",
      "tell + object + not to + base verb",
      undefined,
      "‘Não compartilhe o código de acesso.’ — Ele me disse para não compartilhar o código de acesso.",
      "Negative requests",
    ],
    [
      ["“Could you reserve the conference room?” — The manager ", bold("asked me to reserve"), " the conference room."],
      "Report a polite question as ask plus object plus infinitive, without question word order.",
      "Stress manager, asked, reserve, and conference room.",
      "ask + object + to + base verb",
      undefined,
      "‘Você poderia reservar a sala de reuniões?’ — A gerente me pediu para reservar a sala de reuniões.",
      "Polite requests",
    ],
  ],
} satisfies LanguageFocusData;
