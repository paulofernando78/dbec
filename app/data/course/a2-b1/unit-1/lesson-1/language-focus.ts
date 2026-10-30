import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Ask and answer questions about the past.",
  items: [
    [
      ["Where ", bold("were"), " you born? — I ", bold("was"), " born in Argentina."],
      "Use was or were to ask and answer about a past situation.",
      "Stress born and the place: Where were you BORN? — I was born in ArGENtina.",
      [
        {
          columns: [
            { header: "Wh-", example: "Where" },
            { header: "be (past)", example: "were" },
            { header: "subject", example: "you" },
            { header: "complement", example: "born?" },
          ],
        },
        {
          columns: [
            { header: "subject", example: "I" },
            { header: "be (past)", example: "was" },
            { header: "complement", example: "born in Argentina." },
          ],
        },
      ],
      undefined,
      "Onde você nasceu? — Eu nasci na Argentina.",
    ],
    [
      [
        bold("Were"),
        " you born in Buenos Aires? — No, I ",
        bold("wasn't"),
        ". I ",
        bold("was"),
        " born in Córdoba.",
      ],
      "Use was or were in short answers to questions with the verb be.",
      "Were is usually unstressed in the question. Stress was or wasn't in the answer.",
      [
        {
          columns: [
            { header: "be (past)", example: "Were" },
            { header: "subject", example: "you" },
            { header: "complement", example: "born in Buenos Aires?" },
          ],
        },
        {
          columns: [
            { header: "yes", example: "Yes," },
            { header: "subject", example: "I" },
            { header: "be (past)", example: "was." },
          ],
        },
        {
          columns: [
            { header: "no", example: "No," },
            { header: "subject", example: "I" },
            { header: "be not (past)", example: "wasn't." },
          ],
        },
      ],
      undefined,
      "Você nasceu em Buenos Aires? — Não. Eu nasci em Córdoba.",
    ],
    [
      [
        "When ",
        bold("did"),
        " you ",
        bold("move"),
        " to Los Angeles? — I ",
        bold("moved"),
        " here ten years ago. I ",
        bold("didn't speak"),
        " English then.",
      ],
      "Use did to ask about a completed past action. Use the simple past in affirmative answers.",
      "Did is usually unstressed. Stress move, moved, and didn't.",
      [
        {
          columns: [
            { header: "Wh-", example: "When" },
            { header: "did", example: "did" },
            { header: "subject", example: "you" },
            { header: "base verb", example: "move" },
            { header: "complement", example: "to Los Angeles?" },
          ],
        },
        {
          columns: [
            { header: "subject", example: "I" },
            { header: "past verb", example: "moved" },
            { header: "complement", example: "here ten years ago." },
          ],
        },
        {
          columns: [
            { header: "subject", example: "I" },
            { header: "didn't", example: "didn't" },
            { header: "base verb", example: "speak" },
            { header: "complement", example: "English then." },
          ],
        },
      ],
      undefined,
      "Quando você se mudou para Los Angeles? — Eu me mudei para cá há dez anos. Eu não falava inglês naquela época.",
    ],
    [
      [
        bold("Did"),
        " you ",
        bold("take"),
        " English classes in Argentina? — Yes, I ",
        bold("did"),
        ". I ",
        bold("took"),
        " classes for a year. My aunt also ",
        bold("taught"),
        " me at home.",
      ],
      "Use did and didn't in short answers. After did or didn't, use the base form of the verb.",
      "Stress did or didn't in short answers and the main information in the complete answer.",
      [
        {
          columns: [
            { header: "did", example: "Did" },
            { header: "subject", example: "you" },
            { header: "base verb", example: "take" },
            {
              header: "complement",
              example: "English classes in Argentina?",
            },
          ],
        },
        {
          columns: [
            { header: "yes", example: "Yes," },
            { header: "subject", example: "I" },
            { header: "did", example: "did." },
          ],
        },
        {
          columns: [
            { header: "no", example: "No," },
            { header: "subject", example: "I" },
            { header: "didn't", example: "didn't." },
          ],
        },
      ],
      undefined,
      "Você fez aulas de inglês na Argentina? — Sim. Fiz aulas por um ano. Minha tia também me ensinou em casa.",
    ],
  ],
} satisfies LanguageFocusData;
