import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use this, these, it, and they to identify one or more objects at work.",
  items: [
    [
      [bold("This is"), " a tablet. — ", bold("It's"), " your work tablet."],
      "Use this for one thing. Use it to talk about the same thing again.",
      "Stress this, tablet, and it's.",
      "this + is + a + singular noun · It's = It is",
      undefined,
      "Isto é um tablet. — É o seu tablet de trabalho.",
      "One object",
    ],
    [
      [bold("What's this"), "? — ", bold("It's an"), " adapter."],
      "Ask What's this? about one thing. Use an before adapter.",
      "Use rising intonation in the question and stress adapter.",
      "What's = What is · an + vowel sound",
      undefined,
      "O que é isto? — É um adaptador.",
      "One object",
    ],
    [
      [bold("These are"), " notebooks. — ", bold("They're"), " new notebooks."],
      "Use these for two or more things. Use they to talk about the same things again.",
      "Stress these, notebooks, and they're.",
      "these + are + plural noun · They're = They are",
      undefined,
      "Estes são cadernos. — Eles são cadernos novos.",
      "More than one object",
    ],
    [
      [bold("What are these"), "? — ", bold("They're"), " headphones."],
      "Ask What are these? about two or more things.",
      "Use rising intonation in the question and stress headphones.",
      "What + are + these? · They are + plural noun",
      undefined,
      "O que são estes? — São fones de ouvido.",
      "More than one object",
    ],
    [
      ["This is one ", bold("key"), ". — These are two ", bold("keys"), "."],
      "Most regular plural nouns add -s.",
      "The plural ending in keys is pronounced /z/.",
      "singular noun + -s = regular plural noun",
      undefined,
      "Isto é uma chave. — Estas são duas chaves.",
      "Singular and plural",
    ],
  ],
} satisfies LanguageFocusData;
