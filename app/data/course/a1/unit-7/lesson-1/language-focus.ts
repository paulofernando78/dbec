import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use short answers to answer simple present yes/no questions about homes.",
  items: [
    [
      [bold("Do you have"), " a balcony? — Yes, ", bold("I do"), ". / No, ", bold("I don't"), "."],
      "Use do in a positive short answer and don't in a negative short answer.",
      "Stress yes or no and the final do or don't.",
      "Do you + verb? · Yes, I do. · No, I don't.",
      undefined,
      "Você tem varanda? — Sim. / Não.",
      "Simple present short answers",
    ],
    [
      [bold("Do they share"), " a bedroom? — Yes, ", bold("they do"), ". / No, ", bold("they don't"), "."],
      "Use they do or they don't to answer a question about two or more people.",
      "Stress share, bedroom, yes, and no.",
      "Do they + verb? · Yes, they do. · No, they don't.",
      undefined,
      "Eles dividem um quarto? — Sim. / Não.",
      "Simple present short answers",
    ],
    [
      [bold("Does Mia live"), " near here? — Yes, ", bold("she does"), ". / No, ", bold("she doesn't"), "."],
      "Use does with she. Use the base verb after does.",
      "Stress Mia, live, yes, and no.",
      "Does she + verb? · Yes, she does. · No, she doesn't.",
      undefined,
      "Mia mora perto daqui? — Sim. / Não.",
      "Simple present short answers",
    ],
    [
      [bold("Does Leo have"), " a garage? — Yes, ", bold("he does"), ". / No, ", bold("he doesn't"), "."],
      "Use does with he. Say have, not has, after does.",
      "Stress Leo, garage, yes, and no.",
      "Does he + have? · Yes, he does. · No, he doesn't.",
      undefined,
      "Leo tem garagem? — Sim. / Não.",
      "Simple present short answers",
    ],
    [
      [bold("Does the building have"), " an elevator? — Yes, ", bold("it does"), ". / No, ", bold("it doesn't"), "."],
      "Use it does or it doesn't to answer a question about a thing or place.",
      "Stress building, elevator, yes, and no.",
      "Does it + verb? · Yes, it does. · No, it doesn't.",
      undefined,
      "O prédio tem elevador? — Sim. / Não.",
      "Simple present short answers",
    ],
  ],
} satisfies LanguageFocusData;
