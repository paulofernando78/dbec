import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Describe creative professionals with defining and non-defining relative clauses.",
  items: [
    [
      ["I want to become a photographer ", bold("who covers conflicts"), "."],
      "Use a defining relative clause to identify which person you mean. Do not use commas.",
      "Read the noun and its defining clause as one continuous information unit.",
      "person + who / that + defining information",
      undefined,
      "Quero me tornar um fotógrafo que cobre conflitos.",
    ],
    [
      ["A game animator is someone ", bold("who creates movement for digital characters"), "."],
      "Use who or that in a defining clause about a person or profession.",
      "In a compound job title, the first word usually receives greater stress.",
      "job title + who / that + verb",
      undefined,
      "Um animador de jogos é alguém que cria movimentos para personagens digitais.",
    ],
    [
      ["Videographers, ", bold("who shoot weddings and social events"), ", work evenings and weekends."],
      "Use a non-defining relative clause between commas to add information, not to identify the person.",
      "Pause briefly at both commas and use who, not that.",
      "person, who + extra information, main clause",
      undefined,
      "Videomakers, que filmam casamentos e eventos sociais, trabalham à noite e nos fins de semana.",
    ],
    [
      ["A storyboard artist creates the drawings ", bold("that guide a film crew"), "."],
      "Use that or which in a defining clause about a thing.",
      "Keep the defining clause connected to the noun it describes.",
      "thing + that / which + defining information",
      undefined,
      "Um artista de storyboard cria os desenhos que orientam uma equipe de filmagem.",
    ],
    [
      ["The studio, ", bold("which opened last year"), ", develops educational games."],
      "Use which in a non-defining clause to add extra information about a thing.",
      "Use pauses around the extra information.",
      "thing, which + extra information, main clause",
      undefined,
      "O estúdio, que abriu no ano passado, desenvolve jogos educativos.",
    ],
    [
      ["Band manager, talk show host, game animator, news photographer, and stunt person are compound job titles."],
      "Use compound nouns to name specialized roles in film, publishing, gaming, and music.",
      "The first word in a compound noun usually receives greater stress.",
      "band manager · club DJ · editorial director · gameplay programmer · songwriter · web content manager",
      undefined,
      "Empresário de banda, apresentador, animador de jogos, fotojornalista e dublê são cargos compostos.",
    ],
  ],
} satisfies LanguageFocusData;
