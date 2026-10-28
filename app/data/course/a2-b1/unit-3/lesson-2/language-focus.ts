import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use wish with past forms to talk about present wishes.",
  items: [
    [
      ["I live with two roommates. — I wish I ", bold("didn't live"), " with roommates. / I wish I ", bold("had"), " a place of my own."],
      "Use wish plus the simple past when you want a present situation to be different.",
      "Stress wish and the past verb that expresses the desired change.",
      "wish + subject + simple past",
      undefined,
      "Eu moro com dois colegas. — Eu queria não morar com colegas. / Eu queria ter meu próprio lugar.",
      "Wish + simple past",
    ],
    [
      ["I can't afford a studio. — I wish I ", bold("could afford"), " a small studio."],
      "Use wish plus could to express a present ability or possibility you want but do not have.",
      "Stress could and the main verb.",
      "wish + subject + could + base verb",
      undefined,
      "Eu não consigo pagar um estúdio. — Eu queria poder pagar um estúdio pequeno.",
      "Wish + could",
    ],
    [
      ["My job is exhausting. — I wish it ", bold("were"), " less stressful. / I wish my boss ", bold("weren't"), " so demanding."],
      "Use were or weren't after wish with every subject when talking about an unreal present situation.",
      "Stress were or weren't and the adjective describing the desired situation.",
      "wish + subject + were/weren't + complement",
      undefined,
      "Meu trabalho é exaustivo. — Eu queria que fosse menos estressante. / Eu queria que meu chefe não fosse tão exigente.",
      "Wish + were",
    ],
    [
      ["My roommates won't clean the kitchen. — I wish they ", bold("would clean"), " it more often."],
      "Use wish plus would when you want another person or a situation to change its behavior.",
      "Stress would and the action you want to change.",
      "wish + subject + would + base verb",
      undefined,
      "Meus colegas não querem limpar a cozinha. — Eu queria que eles a limpassem com mais frequência.",
      "Wish + would",
    ],
  ],
} satisfies LanguageFocusData;
