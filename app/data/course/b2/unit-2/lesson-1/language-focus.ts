import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe past obligations, expectations, unnecessary actions, and better alternatives using past modals and problem collocations.",
  items: [
    [
      ["I ", bold("should have checked"), " the final file."],
      "Use should have plus a past participle for a good idea that was not carried out, often to express regret or criticism.",
      "Reduce have to /əv/ in connected speech and stress checked.",
      "should have + past participle",
      undefined,
      "Eu deveria ter verificado o arquivo final.",
      "Past advice",
    ],
    [
      ["We ", bold("were supposed to test"), " the video first."],
      "Use was or were supposed to for an expected action that did not happen.",
      "Stress supposed and the main verb; pronounce supposed to smoothly as /səˈpoʊstə/.",
      "was/were supposed to + base verb",
      undefined,
      "Nós deveríamos testar o vídeo primeiro.",
      "Past expectations",
    ],
    [
      ["The technical team ", bold("had to check"), " the equipment."],
      "Use had to for a real obligation or requirement in the past.",
      "Stress had and check when emphasizing the obligation.",
      "had to + base verb",
      undefined,
      "A equipe técnica teve que verificar o equipamento.",
      "Past obligation",
    ],
    [
      ["I ", bold("didn't have to wait"), " for permission."],
      "Use didn't have to when there was no obligation. The action may or may not have happened.",
      "Stress didn't to contrast the absence of obligation.",
      "didn't have to + base verb",
      undefined,
      "Eu não precisava esperar por permissão.",
      "No obligation",
    ],
    [
      ["I ", bold("didn't need to make"), " another copy."],
      "Use didn't need to for an action that was unnecessary and normally was not performed.",
      "Link need to as /ˈniːdtə/ and stress the unnecessary action.",
      "didn't need to + base verb",
      undefined,
      "Eu não precisava fazer outra cópia.",
      "Unnecessary action",
    ],
    [
      ["We need to ", bold("identify the problem"), " before we can ", bold("solve it"), "."],
      "Use precise verb–noun collocations to describe the stages of problem solving.",
      "Stress the verb and problem in each collocation.",
      "aggravate/avoid/cause/deal with/identify/ignore/run into/solve + a problem",
      undefined,
      "Precisamos identificar o problema antes de podermos resolvê-lo.",
      "Problem collocations",
    ],
  ],
} satisfies LanguageFocusData;
