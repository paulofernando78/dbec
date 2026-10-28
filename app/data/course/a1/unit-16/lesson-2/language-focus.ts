import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use want to and would like to to make, accept, and decline invitations.",
  items: [
    [
      [bold("Do you want to go"), " to a concert on Saturday? — Sure. I'd like to go."],
      "Use Do you want to plus a base verb for an informal invitation.",
      "Stress concert, Saturday, sure, and like.",
      "Do you want to + base verb? · I'd like to + base verb.",
      undefined,
      "Você quer ir a um show no sábado? — Claro. Eu gostaria de ir.",
      "Invitations with want to",
    ],
    [
      ["I'd like to go, but I ", bold("have to work"), "."],
      "Use I'd like to plus but and a reason to decline politely. I'd means I would.",
      "Stress like, but, work.",
      "I'd like to, but + reason.",
      undefined,
      "Eu gostaria de ir, mas tenho que trabalhar.",
      "Declining an invitation",
    ],
    [
      [bold("Would you like to have"), " lunch on Sunday? — Yes, I'd love to."],
      "Use Would you like to for a polite invitation. Use I'd love to for an enthusiastic acceptance.",
      "Stress lunch, Sunday, yes, and love.",
      "Would you like to + base verb? · I'd love to.",
      undefined,
      "Você gostaria de almoçar no domingo? — Sim, eu adoraria.",
      "Invitations with would like to",
    ],
    [
      ["I'd like to, but I ", bold("need to study"), "."],
      "Use need to plus a base verb to give a reason for declining.",
      "Stress like, need, and study.",
      "need to + base verb",
      undefined,
      "Eu gostaria, mas preciso estudar.",
      "Giving a reason",
    ],
    [
      ["Do you ", bold("want to"), " come with me? — I ", bold("have to"), " finish my homework."],
      "In fast speech, want to and have to are often reduced. Keep the standard forms in writing.",
      "Want to may sound like /wɑnə/. Have to may sound like /hæftə/.",
      "want to /wɑnə/ · have to /hæftə/",
      undefined,
      "Você quer vir comigo? — Tenho que terminar minha lição de casa.",
      "Pronunciation: reduction of want to and have to",
    ],
  ],
} satisfies LanguageFocusData;
