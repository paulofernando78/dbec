import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use reported speech to report statements that other people made.",
  items: [
    [
      ["“I'm working from home today.” — She said that she ", bold("was working"), " from home that day."],
      "Change the present continuous to the past continuous and today to that day.",
      "Stress said, was working, and that day.",
      "am/is/are + verb-ing → was/were + verb-ing",
      undefined,
      "‘Estou trabalhando de casa hoje.’ — Ela disse que estava trabalhando de casa naquele dia.",
    ],
    [
      ["“I've finished the budget.” — He said he ", bold("had finished"), " the budget."],
      "Change the present perfect to the past perfect in reported speech.",
      "Stress said, had finished, and budget.",
      "have/has + past participle → had + past participle",
      undefined,
      "‘Terminei o orçamento.’ — Ele disse que tinha terminado o orçamento.",
    ],
    [
      ["“I booked the restaurant yesterday.” — She said she ", bold("had booked"), " the restaurant the day before."],
      "Change the simple past to the past perfect and yesterday to the day before.",
      "Stress booked, had booked, and day before.",
      "simple past → had + past participle",
      undefined,
      "‘Reservei o restaurante ontem.’ — Ela disse que tinha reservado o restaurante no dia anterior.",
    ],
    [
      ["“I'll send the invitations tomorrow.” — He said he ", bold("would send"), " the invitations the following day."],
      "Change will to would and tomorrow to the following day.",
      "Stress would send, invitations, and following day.",
      "will → would",
      undefined,
      "‘Enviarei os convites amanhã.’ — Ele disse que enviaria os convites no dia seguinte.",
    ],
    [
      ["“We can't attend on Friday.” — They told me that they ", bold("couldn't attend"), " on Friday."],
      "Change can't to couldn't when reporting a past statement.",
      "Stress told, couldn't attend, and Friday.",
      "can/can't → could/couldn't",
      undefined,
      "‘Não podemos comparecer na sexta-feira.’ — Eles me disseram que não poderiam comparecer na sexta-feira.",
    ],
    [
      ["“We may join online.” — They said they ", bold("might join"), " online."],
      "Change may to might in reported speech.",
      "Stress said, might join, and online.",
      "may → might",
      undefined,
      "‘Talvez participemos on-line.’ — Eles disseram que talvez participassem on-line.",
    ],
  ],
} satisfies LanguageFocusData;
