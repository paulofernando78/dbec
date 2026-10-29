import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Recommend places and activities using can and should.",
  items: [
    [
      [bold("What can"), " I do in Mexico City? — You ", bold("can walk"), " around the historic center."],
      "Use can to describe an available activity or possibility.",
      "Can is usually unstressed in affirmative sentences. Stress the main verb and destination.",
      "can + base verb · can walk/visit/see/take",
      undefined,
      "O que posso fazer na Cidade do México? — Você pode caminhar pelo centro histórico.",
    ],
    [
      ["You ", bold("can't miss"), " the street food."],
      "Use can't miss to give a strong recommendation about an essential experience.",
      "The t in can't is pronounced clearly enough to distinguish it from can.",
      "can't + base verb",
      undefined,
      "Você não pode perder a comida de rua.",
    ],
    [
      [bold("What should"), " I see there? — You ", bold("should visit"), " the National Museum of Anthropology."],
      "Use should to recommend the best or most appropriate option.",
      "Should is normally unstressed. Stress the main verb and place.",
      "should + base verb",
      undefined,
      "O que devo ver lá? — Você deveria visitar o Museu Nacional de Antropologia.",
    ],
    [
      ["You ", bold("shouldn't go"), " too late. You ", bold("shouldn't visit"), " at the busiest time."],
      "Use shouldn't for advice about actions or times that are better to avoid.",
      "The t in shouldn't is not strongly pronounced in natural speech.",
      "shouldn't + base verb",
      undefined,
      "Você não deveria ir muito tarde. Não deveria visitar no horário mais movimentado.",
    ],
    [
      ["You can visit ", bold("the Louvre"), ", ", bold("the Grand Canyon"), ", or ", bold("the Colosseum"), "."],
      "Use landmark names to make specific travel recommendations.",
      "Stress the main word in each landmark name.",
      "the Grand Canyon · the Louvre · the pyramids · the Colosseum · Sugarloaf Mountain · the Taj Mahal",
      undefined,
      "Você pode visitar o Louvre, o Grand Canyon ou o Coliseu.",
    ],
  ],
} satisfies LanguageFocusData;
