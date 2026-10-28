import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Leave messages and relay statements, commands, questions, and requests indirectly.",
  items: [
    [
      ["Mary, you left your phone in my car. — Could you tell Mary ", bold("that she left her phone in my car"), "?"],
      "Use that to introduce an indirect statement. Change pronouns when the speaker or listener changes.",
      "Stress the person receiving the message and the key information.",
      "tell + person + (that) + statement",
      undefined,
      "Mary, você deixou seu telefone no meu carro. — Você poderia dizer à Mary que ela deixou o telefone no meu carro?",
    ],
    [
      ["Mary, don't forget the reports. — Can you tell Mary ", bold("not to forget"), " the reports?"],
      "Use tell + person + to-infinitive for an indirect command. Put not before to for a negative command.",
      "Stress the requested action and object.",
      "tell + person + to/not to + base verb",
      undefined,
      "Mary, não se esqueça dos relatórios. — Pode dizer à Mary para não se esquecer dos relatórios?",
    ],
    [
      ["Has Ms. Martin graded our tests? — Can you ask her ", bold("if/whether she's graded our tests yet"), "?"],
      "Use if or whether to introduce an indirect Yes/No question. Use statement word order after if or whether.",
      "Avoid question intonation inside the indirect clause; stress the main information.",
      "ask + person + if/whether + subject + verb",
      undefined,
      "A professora Martin corrigiu nossas provas? — Pode perguntar a ela se já corrigiu nossas provas?",
    ],
    [
      ["Mary, what time can I talk to you? — Would you ask her ", bold("what time I can talk to her"), "?"],
      "Keep the question word in an indirect Wh-question, but change to statement word order.",
      "Stress the question word and important detail, without auxiliary inversion.",
      "ask + person + question word + subject + verb",
      undefined,
      "Mary, a que horas posso falar com você? — Poderia perguntar a ela a que horas posso falar com ela?",
    ],
    [
      ["Please ", bold("return my phone call"), ", ", bold("accept my apology"), ", and ", bold("give her my compliment"), "."],
      "Use natural verb–noun collocations when relaying social messages and requests.",
      "Stress the noun in each collocation.",
      "do/ask for/return a favor · offer/make an apology · accept/turn down an invitation · give/receive a gift · make/return a phone call · make a request · give a compliment",
      undefined,
      "Por favor, retorne minha ligação, aceite minhas desculpas e faça um elogio a ela por mim.",
    ],
  ],
} satisfies LanguageFocusData;
