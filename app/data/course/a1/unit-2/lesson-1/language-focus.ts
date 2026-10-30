import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Listen, repeat, and notice how we identify one object or more than one.",
  items: [
    [
      [bold("This is"), " a laptop computer. — ", bold("It's"), " your work laptop."],
      "Use this for one thing. Use it to talk about the same thing again.",
      "Stress this, laptop, and it's.",
      "this + is + a + singular noun · It's = It is",
      undefined,
      "Isto é um laptop. — É o seu laptop de trabalho.",
      "One object",
    ],
    [
      [bold("What's this"), "? — ", bold("It's an"), " adapter."],
      "Ask What's this? about one thing. Use an before adapter.",
      "Stress WHAT and ADAPter. Use falling intonation.",
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
      [bold("What's this"), "? — ", bold("It's a"), " headset."],
      "Ask What's this? about one thing.",
      "Stress WHAT and HEADset. Use falling intonation.",
      "What + is + this? · It is + a + singular noun",
      undefined,
      "O que é isto? — É um headset.",
      "One object",
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
