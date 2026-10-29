import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Explore and evaluate solutions using problem-solving collocations and non-defining relative clauses that comment on an entire sentence.",
  items: [
    [
      ["We need to ", bold("analyze the situation"), " and ", bold("identify the problem"), "."],
      "Use established verb–noun collocations to describe the first stages of problem solving.",
      "Stress both the action verb and the key noun.",
      "analyze a situation/information · identify a problem · explore possibilities/alternatives",
      undefined,
      "Precisamos analisar a situação e identificar o problema.",
      "Understanding a problem",
    ],
    [
      ["The team will ", bold("explore alternatives"), " before it ", bold("makes a decision"), "."],
      "Use explore with alternatives or possibilities and make with decision or mistake.",
      "Use parallel stress on the two collocations.",
      "explore alternatives/possibilities · make a decision/mistake",
      undefined,
      "A equipe explorará alternativas antes de tomar uma decisão.",
      "Evaluating possibilities",
    ],
    [
      ["We hope to ", bold("find a solution"), " and ", bold("solve the problem"), "."],
      "Use find with solution and solve with problem; avoid combining solve with solution.",
      "Stress find, solution, solve, and problem.",
      "find a solution/information · solve a problem · organize information",
      undefined,
      "Esperamos encontrar uma solução e resolver o problema.",
      "Reaching a solution",
    ],
    [
      ["The cafeteria discards hundreds of meals, ", bold("which creates unnecessary waste"), "."],
      "A non-defining relative clause with which can comment on the meaning of the entire preceding clause.",
      "Pause before which and use a separate intonation group for the comment.",
      "complete clause, which + comment",
      undefined,
      "O refeitório descarta centenas de refeições, o que gera desperdício desnecessário.",
      "Sentence modifiers",
    ],
    [
      ["The app could collect demand information, ", bold("which would help the kitchen plan accurately"), "."],
      "Use which plus would, could, or another modal to explain a possible consequence of the whole previous idea.",
      "Stress the modal and the consequence.",
      "complete proposal, which + modal + consequence",
      undefined,
      "O aplicativo poderia coletar informações sobre a demanda, o que ajudaria a cozinha a planejar com precisão.",
      "Commenting on consequences",
    ],
    [
      ["The pilot reduced food waste by thirty percent, ", bold("which was better than expected"), "."],
      "Use a sentence-modifying which clause to evaluate a result or add the speaker's reaction.",
      "Use a pause before which and falling intonation on the evaluation.",
      "complete result, which + be + evaluation",
      undefined,
      "O projeto-piloto reduziu o desperdício de alimentos em trinta por cento, o que foi melhor do que o esperado.",
      "Evaluating results",
    ],
  ],
} satisfies LanguageFocusData;
