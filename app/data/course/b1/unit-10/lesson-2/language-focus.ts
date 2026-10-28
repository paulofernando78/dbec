import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Make predictions using will, the future continuous, and the future perfect.",
  items: [
    [
      ["We ", bold("will spend"), " vacations in space. We ", bold("won't have"), " colonies on Mars."],
      "Use will or won't + base verb to predict future events or situations.",
      "Stress will or won't when contrasting predictions and stress the main future event.",
      "will/won't + base verb",
      undefined,
      "Passaremos férias no espaço. Não teremos colônias em Marte.",
    ],
    [
      ["Human beings ", bold("will be living"), " on another planet. We ", bold("won't be living"), " here."],
      "Use the future continuous to predict an action or situation in progress at a future time.",
      "Keep will be light and stress the -ing verb and future location.",
      "will/won't + be + verb-ing",
      undefined,
      "Os seres humanos estarão vivendo em outro planeta. Não estaremos vivendo aqui.",
    ],
    [
      ["Within 50 years, we ", bold("will have set up"), " a research center on Mars."],
      "Use the future perfect for an action predicted to be completed by a future deadline.",
      "Stress the completion verb and deadline.",
      "will + have + past participle + by/within + future time",
      undefined,
      "Dentro de 50 anos, teremos instalado um centro de pesquisa em Marte.",
    ],
    [
      ["By 2050, a company ", bold("will have built"), " a resort on the moon."],
      "Use by + future date to set the latest expected completion point.",
      "Stress the date, participle, and predicted result.",
      "By + future date, subject + will have + past participle",
      undefined,
      "Até 2050, uma empresa terá construído um resort na Lua.",
    ],
    [
      ["Technology ", bold("will change"), " rapidly, people ", bold("will be using"), " new devices, and many current tools ", bold("will have disappeared"), "."],
      "Combine future forms to distinguish general predictions, ongoing future situations, and completed changes.",
      "Stress the main verb in each prediction and keep the auxiliaries lighter.",
      "will + verb · will be + verb-ing · will have + past participle",
      undefined,
      "A tecnologia mudará rapidamente, as pessoas estarão usando novos dispositivos e muitas ferramentas atuais terão desaparecido.",
    ],
  ],
} satisfies LanguageFocusData;
