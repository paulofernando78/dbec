import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Compare careers using adjectives, verbs, nouns, and past participles.",
  items: [
    [
      ["Being a nurse sounds ", bold("more challenging than"), " being an accountant, but it isn't ", bold("as predictable as"), " office work."],
      "Use more/less + adjective + than or (not) as + adjective + as to compare job qualities.",
      "Stress the comparative adjective and the contrasted careers.",
      "more/less + adjective + than · as + adjective + as · not as + adjective + as",
      undefined,
      "Ser enfermeiro parece mais desafiador que ser contador, mas não é tão previsível quanto o trabalho de escritório.",
    ],
    [
      ["A surgeon ", bold("earns more than"), " a tour guide and doesn't work ", bold("as regularly as"), " a teacher."],
      "Use more/less than after a verb to compare amount, and as + adverb + as to compare how actions are performed.",
      "Stress more or less and the adverb in an equality comparison.",
      "verb + more/less than · verb + as + adverb + as",
      undefined,
      "Um cirurgião ganha mais que um guia turístico e não trabalha com tanta regularidade quanto um professor.",
    ],
    [
      ["This position has ", bold("better hours than"), " that one, but it has ", bold("less vacation"), "."],
      "Use comparative adjectives before nouns and more/less/fewer with nouns.",
      "Stress the quantity or comparative quality.",
      "better/worse + noun + than · more/less + noncount noun · more/fewer + plural noun",
      undefined,
      "Esta vaga tem horários melhores que aquela, mas tem menos férias.",
    ],
    [
      ["Project managers are ", bold("better paid than"), " interns, but they may be ", bold("more involved in"), " difficult decisions."],
      "Use comparative structures with past participles to compare conditions or levels of involvement.",
      "Stress better paid and more involved.",
      "more/less/better + past participle + than/as",
      undefined,
      "Gerentes de projeto são mais bem pagos que estagiários, mas podem estar mais envolvidos em decisões difíceis.",
    ],
    [
      [bold("First of all"), ", the hours are flexible. ", bold("However"), ", the salary is lower. ", bold("In conclusion"), ", the first job suits me better."],
      "Use linking expressions to organize a comparison and present a conclusion.",
      "Pause after an introductory linking expression.",
      "First of all · In addition · Furthermore · For example · However · On the other hand · In conclusion",
      undefined,
      "Em primeiro lugar, o horário é flexível. Porém, o salário é menor. Em conclusão, o primeiro emprego combina mais comigo.",
    ],
    [
      ["software develop", bold("er"), " · marketing direct", bold("or"), " · psychiatr", bold("ist"), " · computer technic", bold("ian")],
      "Job names often use suffixes such as -er, -or, -ist, and -ian. Many are compound nouns with primary stress on the first word.",
      "In compound job nouns, strongly stress the first word: FIREfighter, GAME tester, PROJECT manager.",
      "-er · -or · -ist · -ian · compound job noun",
      undefined,
      "desenvolvedor de software · diretor de marketing · psiquiatra · técnico de informática",
    ],
  ],
} satisfies LanguageFocusData;
