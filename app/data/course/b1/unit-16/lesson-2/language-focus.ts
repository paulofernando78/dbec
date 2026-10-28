import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Describe goals and possible future accomplishments.",
  items: [
    [
      ["What do you hope you ", bold("will have achieved"), "?"],
      "Use the future perfect to ask about an accomplishment completed before a future point.",
      "Will is often contracted; stress the past participle.",
      "will have + past participle",
      undefined,
      "O que você espera ter alcançado?",
    ],
    [
      ["I hope I ", bold("will have seen"), " more of the world."],
      "Use hope plus the future perfect for an expected completed result.",
      "Have is reduced after will; stress seen and world.",
      "hope + subject + will have + past participle",
      undefined,
      "Espero ter conhecido mais lugares do mundo.",
    ],
    [
      ["By this time next year, I ", bold("will have completed"), " my certification."],
      "Use by plus a future time to set the deadline for a completed action.",
      "Stress the deadline and completed action.",
      "by + future time, will have + past participle",
      undefined,
      "Até esta época no ano que vem, terei concluído minha certificação.",
    ],
    [
      ["What ", bold("would you like to have achieved"), "?"],
      "Use would like to have plus the past participle to describe an ideal future accomplishment.",
      "Would is contracted to 'd and have is reduced.",
      "would like to have + past participle",
      undefined,
      "O que você gostaria de ter alcançado?",
    ],
    [
      ["I ", bold("would like to have developed"), " many successful apps."],
      "Use this form for a desired result when the exact timing is less important.",
      "Stress developed and successful apps.",
      "subject + would like to have + past participle",
      undefined,
      "Eu gostaria de ter desenvolvido muitos aplicativos de sucesso.",
    ],
    [
      ["My goals are to run a marathon, learn to live with less, help others, and maintain a healthy lifestyle."],
      "Use parallel verb phrases to list personal goals and dreams clearly.",
      "Give each goal similar rhythmic stress.",
      "win a competition · get a promotion · travel · find true love · be respected · plant a tree",
      undefined,
      "Meus objetivos são correr uma maratona, aprender a viver com menos, ajudar outras pessoas e manter um estilo de vida saudável.",
    ],
  ],
} satisfies LanguageFocusData;
