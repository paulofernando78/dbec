import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Leave and relay formal or informal messages using tell and ask.",
  items: [
    [
      ["I'm going to miss class tonight. — Please ", bold("tell him that"), " I'm going to miss class."],
      "Use tell + person + (that) + statement to relay information. That is optional in conversation.",
      "Stress the person and key information in the message.",
      "tell + object pronoun/person + (that) + statement",
      undefined,
      "Vou faltar à aula hoje à noite. — Por favor, diga a ele que vou faltar.",
    ],
    [
      ["Ana needs the documents. — Please ", bold("tell her to bring"), " them."],
      "Use tell + person + to + base verb to relay an instruction.",
      "Stress the person and the requested action.",
      "tell + object pronoun/person + to + base verb",
      undefined,
      "Ana precisa dos documentos. — Por favor, diga a ela para trazê-los.",
    ],
    [
      ["Could she take a picture of the board? — Please ", bold("ask her to take"), " a picture of the board."],
      "Use ask + person + to + verb to relay a request.",
      "Stress the person and requested action.",
      "ask + object pronoun/person + to + base verb",
      undefined,
      "Ela poderia tirar uma foto do quadro? — Por favor, peça a ela para tirar uma foto.",
    ],
    [
      [bold("Could you tell him that"), " class starts at seven? — ", bold("Would you ask him to"), " arrive early?"],
      "Use Could/Would you + tell to pass on information and Could/Would you + ask to pass on a request.",
      "Use polite falling-rising intonation. Stress the key information or action.",
      "Could/Would you + tell + person + (that) + statement? · Could/Would you + ask + person + to + base verb?",
      undefined,
      "Você poderia dizer a ele que a aula começa às sete? — Você poderia pedir a ele para chegar cedo?",
    ],
    [
      [bold("May I speak to"), " Ana? — Sorry, but she isn't here. ", bold("Can I leave a message"), "? — I'll give her the message."],
      "Use standard caller and receiver expressions to leave and take a phone message.",
      "Use polite, clear intonation and stress the person's name and message.",
      "May I speak to ...? · Can I leave a message? · Can I take a message? · I'll give him/her the message.",
      undefined,
      "Posso falar com Ana? — Desculpe, ela não está. Posso deixar um recado? — Vou dar o recado a ela.",
    ],
  ],
} satisfies LanguageFocusData;
