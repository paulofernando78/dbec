import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use gerunds to discuss work preferences and short responses to agree or disagree.",
  items: [
    [
      ["I ", bold("enjoy organizing"), " events. — ", bold("So do I"), ". / ", bold("I don't"), "."],
      "Use a gerund after enjoy. Use so plus an auxiliary to agree with an affirmative statement.",
      "Stress enjoy, organizing, so, and don't.",
      "enjoy + gerund · so + auxiliary + subject",
      undefined,
      "Eu gosto de organizar eventos. — Eu também. / Eu não.",
      "Affirmative statements with gerunds",
    ],
    [
      ["I'm ", bold("good at explaining"), " new procedures. — ", bold("So am I"), ". / ", bold("I'm not"), "."],
      "Use a gerund after good at. Match the short response to the verb be.",
      "Stress good at, explaining, so, and not.",
      "be good at + gerund · so + be + subject",
      undefined,
      "Sou bom em explicar novos procedimentos. — Eu também. / Eu não sou.",
      "Affirmative statements with gerunds",
    ],
    [
      ["I ", bold("don't mind answering"), " late emails. — ", bold("Neither do I"), ". / ", bold("I do"), "."],
      "Use a gerund after don't mind. Use neither to agree with a negative statement.",
      "Stress don't mind, answering, neither, and do.",
      "don't mind + gerund · neither + auxiliary + subject",
      undefined,
      "Não me importo de responder e-mails tarde. — Eu também não. / Eu me importo.",
      "Negative statements with gerunds",
    ],
    [
      ["I'm ", bold("not interested in managing"), " the budget. — ", bold("Neither am I"), ". / ", bold("Well, I am"), "."],
      "Use a gerund after interested in. Use neither with be to agree with a negative statement.",
      "Stress not interested, managing, neither, and am.",
      "be interested in + gerund · neither + be + subject",
      undefined,
      "Não tenho interesse em administrar o orçamento. — Eu também não. / Bem, eu tenho.",
      "Negative statements with gerunds",
    ],
    [
      ["I ", bold("can't stand sitting"), " in long meetings. — ", bold("Neither can I"), ". / ", bold("I don't mind it"), "."],
      "Use a gerund after can't stand. Repeat the modal can in an agreeing short response.",
      "Stress can't stand, sitting, neither, and don't mind.",
      "can't stand + gerund · neither + modal + subject",
      undefined,
      "Não suporto ficar sentado em reuniões longas. — Eu também não. / Eu não me importo.",
      "Negative statements with gerunds",
    ],
  ],
} satisfies LanguageFocusData;
