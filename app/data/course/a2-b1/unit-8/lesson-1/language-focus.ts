import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use relative clauses with when to describe celebrations and special times.",
  items: [
    [
      ["Graduation day is a day ", bold("when students celebrate their achievements"), "."],
      "Use when after a day to explain what happens on that occasion.",
      "Stress graduation day, students, and achievements.",
      "a day + when + subject + verb",
      undefined,
      "O dia da formatura é um dia em que os estudantes comemoram suas conquistas.",
    ],
    [
      ["June 21 is the day ", bold("when our town holds its summer festival"), "."],
      "Use when after the day to identify an event by what happens then.",
      "Stress June twenty-first, town, and summer festival.",
      "the day + when + subject + verb",
      undefined,
      "Vinte e um de junho é o dia em que nossa cidade realiza seu festival de verão.",
    ],
    [
      ["The last Friday in October is an evening ", bold("when neighbors share food and music"), "."],
      "Use when after a time expression to add information about an annual event.",
      "Stress last Friday, neighbors, food, and music.",
      "a time expression + when + subject + verb",
      undefined,
      "A última sexta-feira de outubro é uma noite em que os vizinhos compartilham comida e música.",
    ],
  ],
} satisfies LanguageFocusData;
