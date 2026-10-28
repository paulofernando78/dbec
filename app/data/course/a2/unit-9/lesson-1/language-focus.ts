import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask about and describe people's general appearance, height, hair, and age.",
  items: [
    [
      [bold("What does"), " she ", bold("look like"), "? — She's tall, with brown hair. She's pretty."],
      "Use What does ... look like? to ask for a general physical description.",
      "Stress look like and the important description words.",
      "What + do/does + subject + look like? · subject + be/have + description",
      undefined,
      "Como ela é fisicamente? — Ela é alta, tem cabelo castanho e é bonita.",
    ],
    [
      ["Does he wear glasses? — No, he wears contacts. He has a ", bold("mustache and a beard"), "."],
      "Use have for hair and facial features, and wear for glasses or contact lenses.",
      "Stress the feature that identifies the person.",
      "have + hair/mustache/beard · wear + glasses/contacts",
      undefined,
      "Ele usa óculos? — Não, usa lentes de contato. Ele tem bigode e barba.",
    ],
    [
      [bold("How tall"), " is she? — She's one meter seventy-eight. / She's five foot ten."],
      "Use How tall to ask about height. Give a metric or U.S. measurement.",
      "Stress the numbers in the answer.",
      "one meter seventy-eight · 178 centimeters · five foot ten · 5'10\"",
      undefined,
      "Qual é a altura dela? — Ela tem um metro e setenta e oito. / Cinco pés e dez polegadas.",
    ],
    [
      [bold("How long"), " is her hair? — It's pretty short. What color is it? — It's dark brown."],
      "Ask How long ...? about hair length and What color ...? about hair color.",
      "Stress the length and color descriptions.",
      "long/short + blond/brown/black/red hair · straight/curly hair · bald",
      undefined,
      "Qual é o comprimento do cabelo dela? — É bem curto. Qual é a cor? — Castanho-escuro.",
    ],
    [
      [bold("How old"), " is he? — He's in his twenties. She's middle-aged, and her father is elderly."],
      "Use How old ...? to ask age and age-group expressions for an approximate description.",
      "Stress the age or age-group expression.",
      "young · in his/her twenties/thirties · middle-aged · elderly",
      undefined,
      "Quantos anos ele tem? — Ele está na casa dos vinte. Ela é de meia-idade, e o pai dela é idoso.",
    ],
  ],
} satisfies LanguageFocusData;
