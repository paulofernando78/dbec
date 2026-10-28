import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe cities and destinations using adjectives, adverbs, and conjunctions.",
  items: [
    [
      ["The old town is ", bold("beautiful"), " and ", bold("relaxing"), ", but the business district is ", bold("crowded"), "."],
      "Use contrasting adjectives to give a balanced description of a place.",
      "Stress the descriptive adjective and any contrasting adjective.",
      "beautiful/ugly · cheap/expensive · clean/polluted · interesting/boring · quiet/noisy · relaxing/stressful · safe/dangerous · spacious/crowded",
      undefined,
      "A cidade antiga é linda e relaxante, mas o distrito comercial é lotado.",
    ],
    [
      ["Punta Cana is ", bold("really nice"), ". It's ", bold("fairly expensive"), " and ", bold("not very big"), "."],
      "Place an adverb before an adjective to strengthen or soften its meaning.",
      "Stress the adjective; stress too when the amount is excessive.",
      "too · extremely · very/really · pretty · fairly/somewhat + adjective",
      undefined,
      "Punta Cana é muito agradável. É relativamente cara e não é muito grande.",
    ],
    [
      ["Los Angeles is a big city, ", bold("and"), " the weather is nice. Boston is a big city, ", bold("but"), " it's not too busy."],
      "Use and to add similar information and but to introduce a contrast.",
      "Pause lightly before the conjunction and stress the contrasting information after but.",
      "clause + and + clause · clause + but + contrasting clause",
      undefined,
      "Los Angeles é uma cidade grande, e o clima é agradável. Boston é grande, mas não é agitada demais.",
    ],
    [
      ["It's a big city. It's not too crowded, ", bold("though"), ". It's a big city. It's not too crowded, ", bold("however"), "."],
      "Use though at the end of an informal contrasting statement. Use however to connect contrasting sentences more formally.",
      "Use a slight pause before though and after however.",
      "statement + contrast + though · statement. However, + contrast",
      undefined,
      "É uma cidade grande. Porém, não é muito lotada.",
    ],
  ],
} satisfies LanguageFocusData;
