import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss technological change using passive forms of the present continuous, present perfect, and future.",
  items: [
    [
      ["More employees ", bold("are being allowed"), " to work remotely."],
      "Use the passive present continuous for an ongoing action when the receiver of the action is more important than the agent.",
      "Keep are being light and stress allowed and remotely.",
      "am/is/are + being + past participle",
      undefined,
      "Mais funcionários estão recebendo permissão para trabalhar remotamente.",
      "Ongoing passive actions",
    ],
    [
      ["Cloud access ", bold("has been expanded"), "."],
      "Use the passive present perfect for a recently completed action or a change with a current result.",
      "Reduce has been and emphasize the past participle.",
      "has/have + been + past participle",
      undefined,
      "O acesso à nuvem foi ampliado.",
      "Recently completed passive actions",
    ],
    [
      ["Stronger security controls ", bold("will be introduced"), " next month."],
      "Use will be plus a past participle for a future passive action or prediction.",
      "Stress the action and future time reference.",
      "will + be + past participle",
      undefined,
      "Controles de segurança mais fortes serão introduzidos no próximo mês.",
      "Future passive",
    ],
    [
      ["Routine tasks ", bold("are going to be automated"), "."],
      "Use be going to be plus a past participle for a planned or expected future passive action.",
      "Reduce going to in conversation and stress automated.",
      "am/is/are + going to be + past participle",
      undefined,
      "Tarefas rotineiras serão automatizadas.",
      "Planned future passive",
    ],
    [
      ["Personal data ", bold("is being collected"), " and new safeguards ", bold("are being developed"), "."],
      "Coordinate passive clauses when several ongoing processes affect different objects.",
      "Use parallel rhythm and contrastive stress on the two affected nouns.",
      "subject + passive verb + and + subject + passive verb",
      undefined,
      "Dados pessoais estão sendo coletados e novas proteções estão sendo desenvolvidas.",
      "Connected processes",
    ],
    [
      ["The ", bold("cloud, automation, artificial intelligence, data privacy"), ", and ", bold("remote access"), " are reshaping work."],
      "Use precise technology terms to discuss systems, trends, and their social effects.",
      "Stress the content word in each compound term.",
      "cloud computing · automation · artificial intelligence · data privacy · remote access · digital platform · smart device",
      undefined,
      "A nuvem, a automação, a inteligência artificial, a privacidade de dados e o acesso remoto estão transformando o trabalho.",
      "Technology vocabulary",
    ],
  ],
} satisfies LanguageFocusData;
