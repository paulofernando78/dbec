import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss environmental problems using present continuous and present perfect passive forms and prepositions of cause.",
  items: [
    [
      ["Our water supply ", bold("is being contaminated"), " by toxic chemicals."],
      "Use the present continuous passive for a process or damaging action happening now.",
      "The auxiliary is is reduced in conversation; stress being and the main participle.",
      "am/is/are + being + past participle",
      undefined,
      "Nosso abastecimento de água está sendo contaminado por produtos químicos tóxicos.",
    ],
    [
      ["City streets ", bold("are being damaged"), " as a result of heavy traffic."],
      "Use as a result of before a noun phrase to identify a cause and emphasize its consequence.",
      "Are is usually reduced; stress damaged and heavy traffic.",
      "passive result + as a result of + noun phrase",
      undefined,
      "As ruas estão sendo danificadas como resultado do trânsito intenso.",
    ],
    [
      ["The roads ", bold("aren't being repaired"), " due to a lack of funding."],
      "Use due to or because of before a noun phrase to explain why a process is or is not happening.",
      "Stress the negative auxiliary and the cause.",
      "passive clause + due to/because of + noun phrase",
      undefined,
      "As estradas não estão sendo reparadas devido à falta de recursos.",
    ],
    [
      ["Our community center ", bold("has been closed"), " because of high costs."],
      "Use the present perfect passive for a past action with a current result.",
      "Has is reduced in natural speech; stress closed and the cause.",
      "has/have + been + past participle",
      undefined,
      "Nosso centro comunitário foi fechado por causa dos custos altos.",
    ],
    [
      ["Many public parks ", bold("have been lost"), " through overbuilding."],
      "Use through to identify the process or means that caused a negative result.",
      "Have is reduced; stress lost and overbuilding.",
      "present perfect passive + through + noun/gerund",
      undefined,
      "Muitos parques públicos foram perdidos devido ao excesso de construções.",
    ],
    [
      ["Food is being ", bold("wasted"), ", plastic is being ", bold("discarded"), ", and electronic waste is ending up in landfills."],
      "Use waste vocabulary and passive forms to describe unsustainable consumption patterns.",
      "Stress quantities and the damaging action.",
      "food waste · plastic bottles · electronic waste · landfills · decomposition · overconsumption",
      undefined,
      "Comida está sendo desperdiçada, plástico está sendo descartado e lixo eletrônico está indo para aterros.",
    ],
  ],
} satisfies LanguageFocusData;
