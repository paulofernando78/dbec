import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Describe purpose and discuss what a successful business needs.",
  items: [
    [
      [bold("To attract"), " talented professionals, a company should offer competitive salaries."],
      "Use an infinitive clause at the beginning of a sentence to explain purpose.",
      "To is reduced in natural speech; stress attract and competitive salaries.",
      "to + base verb, main clause",
      undefined,
      "Para atrair profissionais talentosos, uma empresa deve oferecer salários competitivos.",
    ],
    [
      [bold("In order to finance"), " a new business, it is a good idea to get a bank loan."],
      "Use in order to when you want to make the purpose especially clear.",
      "In order to is normally unstressed before the key action.",
      "in order to + base verb, main clause",
      undefined,
      "Para financiar um novo negócio, é uma boa ideia conseguir um empréstimo bancário.",
    ],
    [
      ["For a small company ", bold("to be profitable"), ", it should have a good marketing plan."],
      "Use for plus a noun and an infinitive when the subject of the purpose clause is stated.",
      "For and to are reduced; stress company, profitable, and marketing plan.",
      "for + noun + to + base verb, main clause",
      undefined,
      "Para uma pequena empresa ser lucrativa, ela deve ter um bom plano de marketing.",
    ],
    [
      ["For an app ", bold("to succeed"), ", it has to be easy to use, affordable, and original."],
      "Combine a purpose clause with adjectives that describe the qualities needed for success.",
      "Give parallel stress to the qualities in a list.",
      "easy to use · affordable · original · attractive · informative · well written",
      undefined,
      "Para um aplicativo ter sucesso, ele precisa ser fácil de usar, acessível e original.",
    ],
    [
      ["Successful professionals may be athletic, passionate, industrious, experienced, knowledgeable, persuasive, or tough."],
      "Choose adjectives that fit a profession and explain why each quality matters.",
      "Stress the adjective that expresses your main opinion.",
      "athletic · passionate · industrious · experienced · clever · charming · knowledgeable · persuasive · tough",
      undefined,
      "Profissionais bem-sucedidos podem ser atléticos, apaixonados, trabalhadores, experientes, instruídos, persuasivos ou firmes.",
    ],
    [
      ["A start-up needs a clear business plan, excellent professionals, and control of its costs."],
      "Use business vocabulary to discuss practical requirements for success.",
      "Reduce function words such as for, to, and and in connected speech.",
      "business plan · marketing plan · competitive salary · flexible schedule · control costs · crowd-funding",
      undefined,
      "Uma startup precisa de um plano de negócios claro, excelentes profissionais e controle de custos.",
    ],
  ],
} satisfies LanguageFocusData;
