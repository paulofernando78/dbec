import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Order food and drinks in a restaurant using would and will.",
  items: [
    [
      ["What ", bold("would"), " you like? — ", bold("I'd like"), " the veggie burger."],
      "Use What would you like? to ask for an order and I'd like ... to make a polite request.",
      "Would is normally unstressed. Stress the ordered item.",
      "What would + subject + like? · I'd like + item · I'd = I would",
      undefined,
      "O que você gostaria? — Eu gostaria do hambúrguer vegetariano.",
    ],
    [
      ["What kind of soup would you like? — ", bold("I'd like"), " onion soup, please."],
      "Use What kind of ...? when the customer needs to choose a type.",
      "Stress the specific kind in the answer.",
      "What kind of + noun + would you like? · I'd like + specific kind, please.",
      undefined,
      "Que tipo de sopa você gostaria? — Eu gostaria de sopa de cebola, por favor.",
    ],
    [
      ["What would you like to drink? — ", bold("I'll have"), " a large orange juice."],
      "Use I'll have ... as a natural way to choose and order an item.",
      "Stress the size and item. I'll is the contraction of I will.",
      "I'll have + item · I'll = I will",
      undefined,
      "O que você gostaria de beber? — Vou querer um suco de laranja grande.",
    ],
    [
      [bold("Would"), " you like anything else? — Yes, please. I'd like some coffee. / That's all, thanks."],
      "Use Would you like anything else? to offer an additional item. Answer politely with another request or close the order.",
      "Use rising intonation in the offer and falling intonation when closing the order.",
      "Would you like + noun? · Yes, please. · That's all, thanks.",
      undefined,
      "Gostaria de mais alguma coisa? — Sim. Gostaria de café. / É só, obrigado.",
    ],
  ],
} satisfies LanguageFocusData;
