import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use sequence adverbs to explain the steps in a recipe.",
  items: [
    [
      [bold("First"), ", wash and chop the vegetables."],
      "Use first to introduce the initial step.",
      "Stress first and the main actions wash and chop.",
      "First, + imperative",
      undefined,
      "Primeiro, lave e corte os legumes.",
    ],
    [
      [bold("Then"), ", place them on a baking tray."],
      "Use then to introduce the step that follows.",
      "Stress then, place, and baking tray.",
      "Then, + imperative",
      undefined,
      "Depois, coloque-os em uma assadeira.",
    ],
    [
      [bold("Next"), ", drizzle them with olive oil and add some seasoning."],
      "Use next to continue the sequence with another action.",
      "Stress next, olive oil, and seasoning.",
      "Next, + imperative",
      undefined,
      "Em seguida, regue-os com azeite e acrescente temperos.",
    ],
    [
      [bold("After that"), ", roast the vegetables for twenty-five minutes."],
      "Use after that to connect a later step to the actions already completed.",
      "Stress after that, roast, and twenty-five minutes.",
      "After that, + imperative",
      undefined,
      "Depois disso, asse os legumes por vinte e cinco minutos.",
    ],
    [
      [bold("Finally"), ", serve them with rice."],
      "Use finally to introduce the last step.",
      "Stress finally, serve, and rice.",
      "Finally, + imperative",
      undefined,
      "Por fim, sirva-os com arroz.",
    ],
  ],
} satisfies LanguageFocusData;
