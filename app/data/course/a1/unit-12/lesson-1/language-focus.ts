import type { LanguageFocusData } from "../../../lesson-step-types";
import { LessonExtras } from "./extras";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: LessonExtras,
  instruction: "Use have plus a noun for a health problem and feel plus an adjective for a condition.",
  items: [
    [
      [bold("What's the matter"), "? / ", bold("What's wrong"), "? — I have a toothache."],
      "Use What's the matter? or What's wrong? to ask about a health problem.",
      "Stress matter, wrong, and toothache.",
      "What's the matter/wrong? · I have + health problem.",
      undefined,
      "Qual é o problema? / O que houve? — Estou com dor de dente.",
      "Have + noun",
    ],
    [
      ["I ", bold("have a cold"), ". — I ", bold("have a fever"), "."],
      "Use have plus a noun to name a health problem.",
      "Stress cold and fever.",
      "have + a/an + health problem",
      undefined,
      "Estou resfriado. — Estou com febre.",
      "Have + noun",
    ],
    [
      [bold("How do you feel"), "? / ", bold("How are you"), "? — I feel terrible."],
      "Use How do you feel? or How are you? to ask about a person's condition.",
      "Stress feel and terrible.",
      "How do you feel? · I feel + adjective.",
      undefined,
      "Como você se sente? / Como você está? — Eu me sinto péssimo.",
      "Feel + adjective",
    ],
    [
      ["I feel ", bold("awful"), ". · I feel ", bold("horrible"), ". · I feel ", bold("miserable"), "."],
      "Use a negative adjective after feel to say you are not well.",
      "Stress awful, horrible, and miserable.",
      "feel + negative adjective",
      undefined,
      "Eu me sinto péssimo. · Eu me sinto horrível. · Eu me sinto muito mal.",
      "Negative adjectives",
    ],
    [
      ["I feel ", bold("fine"), ". · I feel ", bold("great"), ". · I feel ", bold("fantastic"), "."],
      "Use a positive adjective after feel to say you are well.",
      "Stress fine, great, and fantastic.",
      "feel + positive adjective",
      undefined,
      "Eu me sinto bem. · Eu me sinto ótimo. · Eu me sinto fantástico.",
      "Positive adjectives",
    ],
    [
      ["I ", bold("don't feel well"), ". — I ", bold("feel better"), " now."],
      "Use don't feel well when you are sick. Use feel better when your condition improves.",
      "Stress don't, well, and better.",
      "don't feel + adjective · feel + comparative adjective",
      undefined,
      "Não estou me sentindo bem. — Estou me sentindo melhor agora.",
      "Talking about how you feel",
    ],
  ],
} satisfies LanguageFocusData;
