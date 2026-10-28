import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use adverbial clauses of time to describe customs and traditions.",
  items: [
    [
      [bold("When guests enter the house"), ", they take off their shoes."],
      "Use when to introduce an action that happens at the same general time as another action.",
      "Stress guests, enter, and take off.",
      "when + subject + simple present, subject + simple present",
      undefined,
      "Quando os convidados entram na casa, eles tiram os sapatos.",
    ],
    [
      [bold("After everyone sits down"), ", the host serves tea."],
      "Use after to show that the main action happens later than the action in the time clause.",
      "Stress everyone, sits down, host, and tea.",
      "after + subject + simple present, subject + simple present",
      undefined,
      "Depois que todos se sentam, o anfitrião serve chá.",
    ],
    [
      [bold("Before the meal begins"), ", the family expresses gratitude."],
      "Use before to show that the action in the main clause happens first.",
      "Stress meal, begins, family, and gratitude.",
      "before + subject + simple present, subject + simple present",
      undefined,
      "Antes de a refeição começar, a família expressa gratidão.",
    ],
  ],
} satisfies LanguageFocusData;
