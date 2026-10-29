import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe city features and destinations using defining and non-defining relative clauses and expressions for agreement and disagreement.",
  items: [
    [
      ["Seoul has neighborhoods ", bold("that offer lively nightlife"), "."],
      "A defining relative clause gives essential information that identifies the noun. Do not use commas.",
      "Keep the clause connected to the noun and stress the identifying detail.",
      "noun + who/that/which + defining information",
      undefined,
      "Seul tem bairros que oferecem uma vida noturna animada.",
      "Defining relative clauses",
    ],
    [
      ["October is the month ", bold("when the autumn colors are at their best"), "."],
      "Use when to define a time and where to define a place.",
      "Keep when or where light and stress the key time or place information.",
      "time + when + clause · place + where + clause",
      undefined,
      "Outubro é o mês em que as cores do outono estão mais bonitas.",
      "Defining time and place",
    ],
    [
      ["Kyoto, ", bold("which is famous for its temples"), ", is especially beautiful in the fall."],
      "A non-defining relative clause adds optional information about an already identified noun. Use commas and do not begin the clause with that.",
      "Use a brief pause at both commas and lower the prominence of the extra information.",
      "identified noun, who/which/where + optional information, main clause",
      undefined,
      "Kyoto, que é famosa por seus templos, fica especialmente bonita no outono.",
      "Non-defining relative clauses",
    ],
    [
      ["The old district, ", bold("where many artisans still work"), ", attracts visitors year-round."],
      "Use where in a non-defining clause to add information about a specific place.",
      "Pause before and after the clause; stress artisans and year-round.",
      "specific place, where + subject + verb, main clause",
      undefined,
      "O bairro antigo, onde muitos artesãos ainda trabalham, atrai visitantes o ano inteiro.",
      "Non-defining place clauses",
    ],
    [
      ["A city's appeal depends on its ", bold("climate, cost of living, green spaces, neighborhoods, nightlife"), ", and ", bold("transportation system"), "."],
      "Use precise city-feature vocabulary to evaluate a destination from a tourist's or resident's perspective.",
      "Use list intonation, with a rise on each item and a fall on the last one.",
      "climate · cost of living · crime rate · cuisine · green spaces · hotels · job market · landmarks · neighborhoods · nightlife · shopping · transportation system",
      undefined,
      "O apelo de uma cidade depende do clima, custo de vida, áreas verdes, bairros, vida noturna e sistema de transporte.",
      "City features",
    ],
    [
      [bold("I think you're right"), ". / ", bold("I know what you mean, but I don't quite agree"), "."],
      "Use agreement and disagreement expressions to respond politely while developing a discussion.",
      "Use falling intonation for agreement and emphasize but when introducing a contrast.",
      "agree: I think you're right; I'm with you; That's true; I think so, too · disagree: I'm not sure I agree; Maybe, but don't you think…?; Really? I don't; I know what you mean, but…",
      undefined,
      "Acho que você tem razão. / Entendo o que você quer dizer, mas não concordo totalmente.",
      "Agreeing and disagreeing",
    ],
  ],
} satisfies LanguageFocusData;
