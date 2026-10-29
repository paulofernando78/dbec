import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Compare customs and express exceptions using contrast structures and vocabulary for accepting convention or making change.",
  items: [
    [
      [bold("While"), " students in one culture wait to be invited, students in another speak freely."],
      "Use while to place two contrasting clauses in the same sentence.",
      "Use balanced stress on the two contrasting groups and a slight pause between clauses.",
      "while + clause, contrasting clause",
      undefined,
      "Enquanto estudantes de uma cultura esperam ser convidados, estudantes de outra falam livremente.",
      "Contrast with while",
    ],
    [
      [bold("Unlike"), " the previous school, this one encourages disagreement."],
      "Use unlike before a noun or noun phrase, not before a complete clause.",
      "Stress the two items being contrasted.",
      "unlike + noun phrase, clause",
      undefined,
      "Ao contrário da escola anterior, esta incentiva a discordância.",
      "Contrast with unlike",
    ],
    [
      [bold("In contrast to"), " traditional classrooms, these seminars are highly interactive."],
      "Use in contrast to before a noun phrase, especially in formal speech and writing.",
      "Pause after the introductory contrast phrase.",
      "in contrast to + noun phrase, clause",
      undefined,
      "Em contraste com salas de aula tradicionais, estes seminários são muito interativos.",
      "Formal contrast",
    ],
    [
      ["Most students follow the custom, ", bold("except for a few newcomers"), "."],
      "Use except for before a noun phrase to identify the person or thing excluded from a general statement.",
      "Stress the exception.",
      "general statement + except for + noun phrase",
      undefined,
      "A maioria dos estudantes segue o costume, com exceção de alguns recém-chegados.",
      "Exceptions",
    ],
    [
      ["The groups behave similarly, ", bold("except that one is more formal"), "."],
      "Use except that before a complete clause and except for the fact that to introduce a longer factual exception.",
      "Pause before the exception and stress the contrasting fact.",
      "statement + except that + clause · except for the fact that + clause",
      undefined,
      "Os grupos se comportam de maneira semelhante, exceto pelo fato de um ser mais formal.",
      "Clausal exceptions",
    ],
    [
      ["Some people ", bold("accept convention and follow the crowd"), "; others ", bold("stand up for their ideas and make waves"), "."],
      "Use precise vocabulary to contrast accepting things as they are with actively seeking change.",
      "Use parallel stress on each contrasting expression.",
      "accepting: amenable, conservative, accept, conform to, fit in, follow the crowd · change: rebellious, unconventional, confront, stand up to/for, be your own person, make waves",
      undefined,
      "Algumas pessoas aceitam as convenções e seguem a maioria; outras defendem suas ideias e provocam mudanças.",
      "Conformity and change",
    ],
  ],
} satisfies LanguageFocusData;
