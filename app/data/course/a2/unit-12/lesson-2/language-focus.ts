import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask for health-care products and make suggestions with can, could, may, and should.",
  items: [
    [
      [bold("Can/May"), " I help you? — ", bold("Can"), " I have a bag of cough drops?"],
      "Use Can I ...? for a common request and May I ...? for a more formal or polite request.",
      "Use rising intonation in the request. Stress the requested product.",
      "Can/May + I + base verb?",
      undefined,
      "Posso ajudar? — Posso levar um pacote de pastilhas para tosse?",
    ],
    [
      [bold("Can/Could"), " I have something for a cough? — ", bold("May"), " I have a bottle of pain medicine?"],
      "Use Can I ...? for a common request and Could I ...? or May I ...? for a more polite request.",
      "Can, could, and may are usually unstressed; stress the product or problem.",
      "Can/Could/May + I + have + product/something for + problem?",
      undefined,
      "Eu poderia levar algo para tosse? — Posso levar um frasco de analgésico?",
    ],
    [
      ["What do you suggest for a backache? — You ", bold("could try"), " this new cream. You ", bold("should get"), " a heating pad."],
      "Use could for one possible suggestion and should for stronger advice.",
      "Stress the action and recommended product.",
      "could/should + base verb",
      undefined,
      "O que você sugere para dor nas costas? — Você poderia experimentar este creme. Deveria comprar uma bolsa térmica.",
    ],
    [
      [bold("Why don't you try"), " these pills?"],
      "Use Why don't you ...? to offer a friendly suggestion.",
      "Use falling intonation and stress the suggested action or product.",
      "Why don't you + base verb?",
      undefined,
      "Por que você não experimenta estes comprimidos?",
    ],
    [
      ["a ", bold("bottle"), " of pain medicine · a ", bold("box"), " of bandages · a ", bold("tube"), " of toothpaste"],
      "Use container words with of to request the correct form or package of a product.",
      "Stress the container and product.",
      "bag · bottle · box · tube + of + product",
      undefined,
      "um frasco de analgésico · uma caixa de curativos · um tubo de pasta de dente",
    ],
  ],
} satisfies LanguageFocusData;
