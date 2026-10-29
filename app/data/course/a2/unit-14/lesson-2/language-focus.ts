import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask and answer questions about temperatures, distances, and measurements using how.",
  items: [
    [
      [bold("How cold"), " is Toronto in winter? — It gets down to minus 25 degrees Celsius."],
      "Use How cold or How hot to ask about temperature.",
      "Stress cold or hot and the number in the answer.",
      "How cold/hot + be + place/time? · degrees Celsius/Fahrenheit",
      undefined,
      "Quanto frio faz em Toronto no inverno? — A temperatura chega a 25 graus Celsius negativos.",
    ],
    [
      [bold("How far"), " is Toronto from Fairbanks? — It's about 4,800 kilometers."],
      "Use How far to ask about distance between places.",
      "Stress far, the number, and the unit.",
      "How far + be + place + from + place? · kilometers",
      undefined,
      "Qual é a distância entre Toronto e Fairbanks? — Cerca de 4.800 quilômetros.",
    ],
    [
      [bold("How big"), " is Seoul? — It's 605 square kilometers."],
      "Use How big to ask about area or general size.",
      "Stress big, the number, and square kilometers or miles.",
      "How big + be + place? · square kilometers",
      undefined,
      "Qual é o tamanho de Seul? — Tem 605 quilômetros quadrados.",
    ],
    [
      [bold("How high"), " is Mount Everest? — It's 8,848 meters high."],
      "Use How high to ask vertical height and repeat high after the measurement when appropriate.",
      "Stress high and the measurement.",
      "How high + be + feature? · number + meters + high",
      undefined,
      "Qual é a altura do Monte Everest? — Tem 8.848 metros de altura.",
    ],
    [
      [bold("How long"), " is the Mississippi River? — It's about 3,700 kilometers long. ", bold("How deep"), " is the Grand Canyon? — It's about 1,828 meters deep."],
      "Use How long for length and How deep for depth.",
      "Stress long or deep and the measurement in the answer.",
      "How long/deep + be + feature? · number + unit + long/deep",
      undefined,
      "Qual é o comprimento do rio Mississippi? — Cerca de 3.700 quilômetros. Qual é a profundidade do Grand Canyon? — Cerca de 1.828 metros.",
    ],
  ],
} satisfies LanguageFocusData;
