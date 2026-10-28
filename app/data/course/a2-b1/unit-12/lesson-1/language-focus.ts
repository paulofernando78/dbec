import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use the past continuous for an action in progress and the simple past for an action that interrupts it.",
  items: [
    [
      ["I ", bold("was waiting"), " for the bus when a cyclist ", bold("dropped"), " a bag."],
      "Use the past continuous for the longer action and the simple past after when for the interrupting event.",
      "Stress waiting, bus, cyclist, and dropped.",
      "past continuous + when + simple past",
      undefined,
      "Eu estava esperando o ônibus quando um ciclista deixou cair uma bolsa.",
    ],
    [
      ["We ", bold("were crossing"), " the bridge when the storm ", bold("started"), "."],
      "Use were plus the -ing form with a plural subject to describe an action in progress.",
      "Stress crossing, bridge, storm, and started.",
      "were + verb-ing + when + simple past",
      undefined,
      "Estávamos atravessando a ponte quando a tempestade começou.",
    ],
    [
      [bold("While I was taking"), " photos, my phone ", bold("slipped"), " out of my hand."],
      "Use while with the action in progress and the simple past for the shorter event.",
      "Stress taking photos, phone, and slipped.",
      "while + past continuous, simple past",
      undefined,
      "Enquanto eu estava tirando fotos, meu celular escorregou da minha mão.",
    ],
  ],
} satisfies LanguageFocusData;
