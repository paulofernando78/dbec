import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask about entertainment preferences using simple-present questions, short answers, and object pronouns.",
  items: [
    [
      [bold("Do"), " you like country music? — Yes, I ", bold("do"), ". I love it. / No, I ", bold("don't"), "."],
      "Use do in Yes/No questions and short answers with I, you, we, and they.",
      "Use rising intonation in a Yes/No question. Stress do or don't in the short answer.",
      "Do + I/you/we/they + base verb? · Yes, subject + do. · No, subject + don't.",
      undefined,
      "Você gosta de música country? — Sim, gosto. Adoro. / Não, não gosto.",
    ],
    [
      [bold("Does"), " she play the piano? — Yes, she ", bold("does"), ". / No, she ", bold("doesn't"), "."],
      "Use does in questions and short answers with he, she, it, or one person. Keep the main verb in its base form.",
      "Does is usually unstressed in the question. Stress does or doesn't in the answer.",
      "Does + he/she/it + base verb? · Yes, subject + does. · No, subject + doesn't.",
      undefined,
      "Ela toca piano? — Sim. / Não.",
    ],
    [
      [bold("What kind of music"), " do you like? — I really like rap. ", bold("Who"), " do they like? — They like Maroon 5."],
      "Use Wh-questions to ask for specific information about entertainment preferences.",
      "Wh-questions usually have falling intonation. Stress the Wh-word and key information.",
      "Wh-word + do/does + subject + base verb?",
      undefined,
      "De que tipo de música você gosta? — Gosto muito de rap. De quem eles gostam? — Eles gostam do Maroon 5.",
    ],
    [
      ["Do you like this song? — Yes, I love ", bold("it"), ". Do you like Imagine Dragons? — Yes, I like ", bold("them"), " a lot."],
      "Use an object pronoun instead of repeating the person or thing that receives the action.",
      "Object pronouns are normally unstressed. Stress the opinion word or adverb.",
      "me · you · him · her · it · us · them",
      undefined,
      "Você gosta desta música? — Sim, adoro. Você gosta do Imagine Dragons? — Sim, gosto muito deles.",
    ],
    [
      ["I like ", bold("science fiction"), " movies, ", bold("game shows"), ", and ", bold("reggae"), "."],
      "Use entertainment vocabulary to identify and discuss movies, TV shows, and music.",
      "Stress the main content word in each genre or category.",
      "Movies: action, horror, musical, science fiction · TV: game show, reality show, soap opera, talk show · Music: electronic, rap, reggae, salsa",
      undefined,
      "Gosto de filmes de ficção científica, programas de competição e reggae.",
    ],
  ],
} satisfies LanguageFocusData;
