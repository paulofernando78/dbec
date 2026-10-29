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
      ["The old town is ", bold("beautiful"), " and ", bold("quiet"), ", but the business district is ", bold("crowded"), "."],
      "Use contrasting adjectives to give a balanced description of a place.",
      "Stress the descriptive adjective and any contrasting adjective.",
      "beautiful · cheap/expensive · interesting · quiet/noisy · spacious/crowded",
      undefined,
      "A cidade antiga é linda e tranquila, mas o distrito comercial é lotado.",
    ],
    [
      ["Punta Cana is ", bold("really nice"), ". It's ", bold("fairly expensive"), " and ", bold("not very big"), "."],
      "Place an adverb before an adjective to strengthen or soften its meaning.",
      "Stress the adjective; stress too when the amount is excessive.",
      "really · very · fairly · not very + adjective",
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
      ["Downtown is crowded. The parks are quiet, ", bold("though"), "."],
      "Use though at the end of an informal statement to add a contrast with the previous idea.",
      "Use a slight pause before though and falling intonation at the end.",
      "statement. + contrasting statement + though",
      undefined,
      "O centro é lotado. Porém, os parques são tranquilos.",
    ],
  ],
} satisfies LanguageFocusData;
