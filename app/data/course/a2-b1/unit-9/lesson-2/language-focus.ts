import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use conditional sentences with if to connect a possible present situation to a future consequence.",
  items: [
    [
      [bold("If I complete the design course"), ", ", bold("I'll qualify for an internship"), "."],
      "Use the simple present in the if clause and will in the result clause for a likely future consequence.",
      "Stress complete, design course, qualify, and internship.",
      "if + simple present, will + base verb",
      undefined,
      "Se eu concluir o curso de design, vou me qualificar para um estágio.",
    ],
    [
      [bold("If I get the internship"), ", ", bold("I may work with an international team"), "."],
      "Use may in the result clause for a possible consequence.",
      "Stress get, internship, may work, and international team.",
      "if + simple present, may + base verb",
      undefined,
      "Se eu conseguir o estágio, talvez eu trabalhe com uma equipe internacional.",
    ],
    [
      [bold("If I work with that team"), ", ", bold("I'll practice English every day"), "."],
      "Use will for a consequence the speaker expects to happen.",
      "Stress work, team, practice English, and every day.",
      "if + simple present, will + base verb",
      undefined,
      "Se eu trabalhar com essa equipe, vou praticar inglês todos os dias.",
    ],
    [
      [bold("If my English improves"), ", ", bold("I might apply for a position abroad"), "."],
      "Use might in the result clause for a less certain future possibility.",
      "Stress English, improves, apply, and abroad.",
      "if + simple present, might + base verb",
      undefined,
      "Se meu inglês melhorar, talvez eu me candidate a uma vaga no exterior.",
    ],
    [
      [bold("If I move abroad"), ", ", bold("I won't see my family as often"), "."],
      "Use won't for a negative future consequence.",
      "Stress move abroad, won't see, family, and often.",
      "if + simple present, won't + base verb",
      undefined,
      "Se eu me mudar para o exterior, não verei minha família com tanta frequência.",
    ],
  ],
} satisfies LanguageFocusData;
