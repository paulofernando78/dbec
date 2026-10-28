import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use relative pronouns to combine information about people and things.",
  items: [
    [
      ["She's a filmmaker. She writes her own scripts. — She's a filmmaker ", bold("who writes her own scripts"), "."],
      "Use who or that to introduce essential information about a person.",
      "Stress filmmaker, who, and writes her own scripts.",
      "person + who/that + verb",
      undefined,
      "Ela é uma cineasta. Ela escreve os próprios roteiros. — Ela é uma cineasta que escreve os próprios roteiros.",
      "People: who or that",
    ],
    [
      ["He's an actor. He performs his own stunts. — He's an actor ", bold("that performs his own stunts"), "."],
      "That can also introduce a defining relative clause about a person.",
      "Stress actor, that, and performs his own stunts.",
      "person + who/that + verb",
      undefined,
      "Ele é um ator. Ele realiza as próprias cenas de ação. — Ele é um ator que realiza as próprias cenas de ação.",
      "People: who or that",
    ],
    [
      ["It's a documentary. It follows young musicians. — It's a documentary ", bold("which follows young musicians"), "."],
      "Use which or that to introduce essential information about a thing.",
      "Stress documentary, which, and young musicians.",
      "thing + which/that + verb",
      undefined,
      "É um documentário. Ele acompanha jovens músicos. — É um documentário que acompanha jovens músicos.",
      "Things: which or that",
    ],
    [
      ["It's a thriller. It won the audience award. — It's a thriller ", bold("that won the audience award"), "."],
      "That can introduce a defining relative clause about a thing.",
      "Stress thriller, that, and audience award.",
      "thing + which/that + verb",
      undefined,
      "É um suspense. Ele ganhou o prêmio do público. — É um suspense que ganhou o prêmio do público.",
      "Things: which or that",
    ],
  ],
} satisfies LanguageFocusData;
