import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use unreal conditional sentences to discuss imaginary present or future situations and their possible consequences.",
  items: [
    [
      [bold("If I received a free plane ticket"), ", I ", bold("would visit New Zealand"), "."],
      "Use the simple past in the if clause for an imaginary situation and would for its imagined consequence.",
      "Stress received, free plane ticket, would visit, and New Zealand.",
      "if + simple past, would + base verb",
      undefined,
      "Se eu recebesse uma passagem aérea grátis, visitaria a Nova Zelândia.",
      "Imaginary situation and possible consequence",
    ],
    [
      [bold("If I received a free plane ticket"), ", I ", bold("could explore both islands"), "."],
      "Use could for an opportunity or ability in the imaginary situation.",
      "Stress free plane ticket, could explore, and both islands.",
      "if + simple past, could + base verb",
      undefined,
      "Se eu recebesse uma passagem aérea grátis, poderia explorar as duas ilhas.",
      "Imaginary situation and possible consequence",
    ],
    [
      [bold("If I received a free plane ticket"), ", I ", bold("might stay for three weeks"), "."],
      "Use might for a less certain imagined consequence.",
      "Stress free plane ticket, might stay, and three weeks.",
      "if + simple past, might + base verb",
      undefined,
      "Se eu recebesse uma passagem aérea grátis, talvez ficasse por três semanas.",
      "Imaginary situation and possible consequence",
    ],
    [
      [bold("If I received a free plane ticket"), ", I ", bold("wouldn't travel alone"), "."],
      "Use wouldn't for a negative imagined consequence.",
      "Stress free plane ticket, wouldn't, and alone.",
      "if + simple past, wouldn't + base verb",
      undefined,
      "Se eu recebesse uma passagem aérea grátis, não viajaria sozinho.",
      "Imaginary situation and possible consequence",
    ],
  ],
} satisfies LanguageFocusData;
