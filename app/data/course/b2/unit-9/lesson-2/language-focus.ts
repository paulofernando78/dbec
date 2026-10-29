import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe past habits and situations that are no longer true using used to and would, and discuss adaptation with keep and stay expressions.",
  items: [
    [
      ["We ", bold("used to spend"), " every evening together."],
      "Use used to for repeated past actions or past situations that are no longer true.",
      "Pronounce used to as /ˈjuːstə/ in fluent speech and stress the main verb.",
      "subject + used to + base verb",
      undefined,
      "Costumávamos passar todas as noites juntos.",
      "Past habits and situations",
    ],
    [
      ["I ", bold("didn't use to like"), " change. ", bold("Did you use to live"), " nearby?"],
      "Use did or didn't plus use to in questions and negative statements.",
      "Keep did and use to linked; stress the main verb or contrasting information.",
      "didn't use to + base verb · Did + subject + use to + base verb?",
      undefined,
      "Eu não costumava gostar de mudanças. Você morava por perto?",
      "Negative and question forms",
    ],
    [
      ["We ", bold("would sit"), " outside for hours and talk."],
      "Use would for repeated past actions, usually after the past time frame has been established.",
      "Reduce would to 'd where natural and stress the repeated action.",
      "subject + would + base verb",
      undefined,
      "Nós costumávamos sentar do lado de fora por horas e conversar.",
      "Repeated past actions",
    ],
    [
      ["I ", bold("used to be"), " shy. Not: I would be shy."],
      "Do not normally use habitual would with stative verbs such as be, have, live, know, love, or like. Use used to instead.",
      "Stress the stative verb and the past characteristic.",
      "used to + stative verb · not habitual would + stative verb",
      undefined,
      "Eu costumava ser tímido.",
      "Past states",
    ],
    [
      ["We ", bold("keep in touch"), " and ", bold("keep up with current events"), "."],
      "Use fixed expressions with keep to describe maintaining contact, remaining informed, controlling costs, or avoiding problems.",
      "Stress the particle or final content word in each expression.",
      "keep in touch · keep up with · keep expenses down · keep out of trouble · keep things in perspective",
      undefined,
      "Mantemos contato e acompanhamos os acontecimentos atuais.",
      "Expressions with keep",
    ],
    [
      ["A clear routine helps me ", bold("stay awake, stay connected"), ", and ", bold("stay out of trouble"), "."],
      "Use stay plus an adjective, past participle, or prepositional phrase to describe a continuing state.",
      "Stress the complement after stay.",
      "stay awake · stay connected · stay in touch · stay out of trouble",
      undefined,
      "Uma rotina clara me ajuda a permanecer acordado, conectado e longe de problemas.",
      "Expressions with stay",
    ],
  ],
} satisfies LanguageFocusData;
