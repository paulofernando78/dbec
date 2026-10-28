import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask about products and prices using demonstratives, one, and ones.",
  items: [
    [
      ["How much is ", bold("this"), " T-shirt? — ", bold("This one"), " is $28.99."],
      "Use this for one thing near you. Use one to avoid repeating a singular noun.",
      "Stress this and the price. In natural speech, How much is often links together.",
      "this + singular noun · this one · How much is this ...?",
      undefined,
      "Quanto custa esta camiseta? — Esta custa 28 dólares e 99 centavos.",
    ],
    [
      ["How much is ", bold("that"), " jacket? — ", bold("That one"), " is $45."],
      "Use that for one thing farther from you. Use that one when the noun is already clear.",
      "Stress that when contrasting it with another item.",
      "that + singular noun · that one · How much is that ...?",
      undefined,
      "Quanto custa aquela jaqueta? — Aquela custa 45 dólares.",
    ],
    [
      ["How much are ", bold("these"), " sneakers? — ", bold("These"), " are $60."],
      "Use these for plural things near you and those for plural things farther away.",
      "Stress these or those and the price.",
      "these/those + plural noun · How much are these/those ...?",
      undefined,
      "Quanto custam estes tênis? — Estes custam 60 dólares.",
    ],
    [
      ["Which ", bold("one"), " do you want? — The blue one. Which ", bold("ones"), " are on sale? — The gray ones."],
      "Use one for a singular item and ones for plural items when you do not repeat the noun.",
      "Stress the color or description before one or ones.",
      "Which one? · the blue one · Which ones? · the gray ones",
      undefined,
      "Qual você quer? — A azul. Quais estão em promoção? — As cinza.",
    ],
    [
      ["It's ninety-nine cents. — That's ", bold("cheap"), ". It's $28.99. — That's ", bold("reasonable"), "."],
      "Say prices clearly, then use an evaluation such as cheap, reasonable, OK, or expensive.",
      "For $28.99, say twenty-eight ninety-nine. Stress the evaluation adjective.",
      "99¢ = ninety-nine cents · $28 = twenty-eight dollars · $28.99 = twenty-eight ninety-nine",
      undefined,
      "Custa noventa e nove centavos. — Está barato. Custa 28,99. — É um preço razoável.",
    ],
  ],
} satisfies LanguageFocusData;
