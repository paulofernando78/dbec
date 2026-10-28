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
      [bold("Could you tell him"), " that I'm going to miss class? — ", bold("Would you tell him"), " that I'm going to miss class?"],
      "Add Could you or Would you to make the request more polite or formal.",
      "Could you and would you are commonly reduced in conversation.",
      "Could/Would you + tell + person + (that) + statement?",
      undefined,
      "Você poderia dizer a ele que vou faltar à aula?",
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
      [bold("Could you ask her to"), " take a picture? — ", bold("Would you ask her to"), " take a picture?"],
      "Use Could you ask ...? or Would you ask ...? for a polite request to pass on another request.",
      "In natural speech, could you may sound like /kʊdʒə/ and would you like /wʊdʒə/.",
      "Could/Would you + ask + person + to + base verb?",
      undefined,
      "Você poderia pedir a ela para tirar uma foto?",
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
