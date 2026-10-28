import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use the simple past passive with by to shift the focus from the creator to the work.",
  items: [
    [
      ["Leonardo da Vinci ", bold("painted"), " the Mona Lisa. — The Mona Lisa ", bold("was painted by"), " Leonardo da Vinci."],
      "In the passive sentence, the work becomes the subject and the creator follows by.",
      "Stress Mona Lisa, painted, and Leonardo da Vinci.",
      "active: subject + past verb + object · passive: object + was/were + past participle + by + agent",
      undefined,
      "Leonardo da Vinci pintou a Mona Lisa. — A Mona Lisa foi pintada por Leonardo da Vinci.",
    ],
    [
      ["Gustave Eiffel's company ", bold("built"), " the Eiffel Tower. — The Eiffel Tower ", bold("was built by"), " Gustave Eiffel's company."],
      "Use was plus the past participle for a singular subject in the simple past passive.",
      "Stress Eiffel Tower, built, and company.",
      "singular subject + was + past participle + by + agent",
      undefined,
      "A empresa de Gustave Eiffel construiu a Torre Eiffel. — A Torre Eiffel foi construída pela empresa de Gustave Eiffel.",
    ],
    [
      ["I. M. Pei ", bold("designed"), " the Louvre Pyramid. — The Louvre Pyramid ", bold("was designed by"), " I. M. Pei."],
      "Use designed as the past verb in the active sentence and was designed in the passive sentence.",
      "Stress Louvre Pyramid, designed, and I. M. Pei.",
      "active past verb · was + past participle + by + agent",
      undefined,
      "I. M. Pei projetou a Pirâmide do Louvre. — A Pirâmide do Louvre foi projetada por I. M. Pei.",
    ],
  ],
} satisfies LanguageFocusData;
