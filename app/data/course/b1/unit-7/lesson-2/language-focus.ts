import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Propose responses to global challenges using infinitive clauses and phrases.",
  items: [
    [
      [bold("One way to change things is to talk"), " to the company's management."],
      "Use one way to + verb followed by be + infinitive to present a possible solution.",
      "Stress one way and the main solution verb.",
      "One way to + base verb + is to + base verb",
      undefined,
      "Uma forma de mudar as coisas é conversar com a direção da empresa.",
    ],
    [
      [bold("Another way to stop them is to get"), " a news station to run a story."],
      "Use another way to introduce an additional solution and get + person/organization + infinitive for influence.",
      "Stress another way and the action that creates pressure.",
      "Another way to + verb + is to get + object + to + base verb",
      undefined,
      "Outra forma de detê-los é fazer uma emissora divulgar a história.",
    ],
    [
      [bold("The best way to fight unemployment is to create"), " more jobs and invest in education."],
      "Use the best way to identify the strongest proposed response.",
      "Stress best and the key actions.",
      "The best way to + base verb + is to + base verb",
      undefined,
      "A melhor forma de combater o desemprego é criar mais empregos e investir em educação.",
    ],
    [
      ["One way to reduce poverty is ", bold("to provide affordable housing"), "; another is ", bold("to expand vocational training"), "."],
      "Coordinate infinitive phrases to compare or combine multiple solutions.",
      "Use parallel stress on each proposed action.",
      "one way is to ... · another is to ...",
      undefined,
      "Uma forma de reduzir a pobreza é oferecer moradia acessível; outra é ampliar a formação profissional.",
    ],
    [
      ["We need action on ", bold("unemployment"), ", ", bold("famine"), ", ", bold("global warming"), ", corruption, disease, poverty, recession, and violence."],
      "Use global-challenge vocabulary to state concerns before proposing targeted solutions.",
      "Stress the challenge being prioritized.",
      "unemployment · famine · global warming · government corruption · infectious diseases · political unrest · poverty · recession · violence",
      undefined,
      "Precisamos agir contra desemprego, fome, aquecimento global, corrupção, doenças, pobreza, recessão e violência.",
    ],
  ],
} satisfies LanguageFocusData;
