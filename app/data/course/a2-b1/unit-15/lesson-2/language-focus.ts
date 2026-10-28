import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use past modals to give opinions and suggestions about actions in the past.",
  items: [
    [
      ["What ", bold("should I have done"), "? — You ", bold("should have backed up"), " your files."],
      "Use should have plus the past participle to recommend a past action that did not happen.",
      "Stress should, backed up, and files.",
      "should have + past participle",
      undefined,
      "O que eu deveria ter feito? — Você deveria ter feito backup dos seus arquivos.",
      "Advice about the past",
    ],
    [
      ["You ", bold("shouldn't have ignored"), " the warning message."],
      "Use shouldn't have plus the past participle to criticize or advise against a past action.",
      "Stress shouldn't, ignored, and warning message.",
      "shouldn't have + past participle",
      undefined,
      "Você não deveria ter ignorado a mensagem de aviso.",
      "Advice about the past",
    ],
    [
      ["What ", bold("would you have done"), "? — I ", bold("would have contacted"), " technical support."],
      "Use would have plus the past participle for an imagined response to a past situation.",
      "Stress would, contacted, and technical support.",
      "would have + past participle",
      undefined,
      "O que você teria feito? — Eu teria entrado em contato com o suporte técnico.",
      "Imagined past response",
    ],
    [
      ["I ", bold("wouldn't have restarted"), " the computer repeatedly."],
      "Use wouldn't have plus the past participle for an imagined action you would have avoided.",
      "Stress wouldn't, restarted, and repeatedly.",
      "wouldn't have + past participle",
      undefined,
      "Eu não teria reiniciado o computador repetidamente.",
      "Imagined past response",
    ],
  ],
} satisfies LanguageFocusData;
