import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe common health problems and give advice with adjective or noun + infinitive.",
  items: [
    [
      ["I have ", bold("a headache"), " and ", bold("a cough"), ". My brother has ", bold("the flu"), "."],
      "Use have + a/an with many symptoms and have the flu for influenza.",
      "Stress the health problem. Use natural sentence stress rather than stressing have.",
      "a headache · a cough · a cold · the flu · a stomachache · a backache · sore muscles · insomnia",
      undefined,
      "Estou com dor de cabeça e tosse. Meu irmão está com gripe.",
    ],
    [
      ["What should you do for a cold? — It's ", bold("important to get"), " some rest."],
      "Use adjective + infinitive to describe how important, useful, or helpful an action is.",
      "In conversation, to is often reduced to /tə/. Stress the adjective and main verb.",
      "It's + adjective + to + base verb · important/helpful/good to ...",
      undefined,
      "O que você deve fazer para um resfriado? — É importante descansar.",
    ],
    [
      ["It's sometimes ", bold("helpful to drink"), " garlic tea."],
      "Use an adverb before the adjective to make the advice less absolute.",
      "Reduce to and stress helpful and drink.",
      "It's + adverb + adjective + to + base verb",
      undefined,
      "Às vezes é útil tomar chá de alho.",
    ],
    [
      ["It's ", bold("a good idea to take"), " some vitamin C."],
      "Use noun + infinitive expressions such as a good idea to give advice.",
      "Stress good idea and the main action; reduce to to /tə/.",
      "It's + a good idea + to + base verb",
      undefined,
      "É uma boa ideia tomar vitamina C.",
    ],
    [
      ["For a bad headache, ", bold("take pain medicine"), ". For a toothache, ", bold("see a dentist"), "."],
      "Match a health problem with an appropriate action or professional.",
      "Stress the action and medicine or professional.",
      "drink liquids · get medicine · rest · use cold water · use a heating pad · use cream · see a doctor/dentist · take pain medicine/vitamin C",
      undefined,
      "Para uma dor de cabeça forte, tome um analgésico. Para dor de dente, consulte um dentista.",
    ],
  ],
} satisfies LanguageFocusData;
