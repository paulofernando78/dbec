import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use past modals to explain past events with different degrees of certainty.",
  items: [
    [
      ["He ", bold("must have fallen"), " asleep."],
      "Use must have plus the past participle for an explanation you believe is almost certain.",
      "Have is reduced after the modal: must've fallen.",
      "must have + past participle",
      undefined,
      "Ele deve ter adormecido.",
    ],
    [
      ["He ", bold("must not have heard"), " the doorbell."],
      "Use must not have when you are almost certain something did not happen.",
      "Not remains clear and is not contracted or reduced.",
      "must not have + past participle",
      undefined,
      "Ele não deve ter ouvido a campainha.",
    ],
    [
      ["She ", bold("may have gone"), " out. / She ", bold("might have gone"), " out."],
      "Use may have or might have for a possible explanation of a past event.",
      "Have is normally reduced after may or might.",
      "may / might have + past participle",
      undefined,
      "Ela pode ter saído.",
    ],
    [
      ["He ", bold("could have had"), " an emergency."],
      "Use could have to introduce another possible past explanation.",
      "Reduce have and stress the important content word.",
      "could have + past participle",
      undefined,
      "Ele pode ter tido uma emergência.",
    ],
    [
      ["He ", bold("couldn't have forgotten"), " about it."],
      "Use couldn't have when you believe a past explanation is impossible.",
      "Have is reduced; couldn't carries the negative meaning.",
      "couldn't have + past participle",
      undefined,
      "É impossível que ele tenha esquecido disso.",
    ],
    [
      ["It drives me crazy when someone interrupts me, cuts in line, or borrows my things without asking."],
      "Use pet-peeve expressions to describe behavior that annoys you, then infer why it happened.",
      "Stress the annoying action and your emotional reaction.",
      "interrupt · cut in line · criticize · chew with your mouth open · borrow without asking",
      undefined,
      "Fico louco quando alguém me interrompe, fura a fila ou pega minhas coisas sem pedir.",
    ],
  ],
} satisfies LanguageFocusData;
