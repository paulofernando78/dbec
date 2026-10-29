import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use common quantifiers to describe family size and numbers of people.",
  items: [
    [
      ["I have ", bold("a lot of"), " cousins."],
      "Use a lot of with plural count nouns to describe a large number.",
      "Stress lot and cousins.",
      "a lot of + plural count noun",
      undefined,
      "Tenho muitos primos.",
      "Large quantities",
    ],
    [
      [bold("How many"), " cousins do you have? — I have six."],
      "Use How many with a plural count noun to ask for a number.",
      "Stress many, cousins, and the number in the answer.",
      "How many + plural count noun + do/does + subject + have?",
      undefined,
      "Quantos primos você tem? — Tenho seis.",
      "Questions about quantity",
    ],
    [
      ["I have ", bold("a few"), " cousins."],
      "Use a few for a small number that is more than zero.",
      "Stress few and cousins.",
      "a few + plural count noun",
      undefined,
      "Tenho alguns primos.",
      "Small quantities",
    ],
    [
      ["I don't have ", bold("any"), " brothers or sisters."],
      "Use any with plural count nouns in a negative statement to mean zero.",
      "Stress don't, any, brothers, and sisters.",
      "don't have any + plural count noun",
      undefined,
      "Não tenho irmãos nem irmãs.",
      "Zero quantity",
    ],
  ],
} satisfies LanguageFocusData;
