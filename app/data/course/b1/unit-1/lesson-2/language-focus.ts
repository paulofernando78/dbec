import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss things you appreciate or dislike using it clauses and adverbial clauses with when.",
  items: [
    [
      ["I ", bold("like it when"), " my roommate cleans the apartment."],
      "Use an it clause followed by when to name a situation you like or appreciate.",
      "Link the final consonant in like to it and stress the situation after when.",
      "subject + like/love/appreciate + it + when + clause",
      undefined,
      "Gosto quando meu colega de apartamento limpa o apartamento.",
    ],
    [
      ["I ", bold("don't mind it when"), " a friend answers the phone at the dinner table."],
      "Use don't mind it when for a situation that does not bother you.",
      "Keep don't mind it connected in natural speech and stress the situation.",
      "subject + don't mind + it + when + clause",
      undefined,
      "Não me importo quando um amigo atende o telefone à mesa.",
    ],
    [
      ["I ", bold("can't stand it when"), " I'm upset and people tell me to calm down."],
      "Use can't stand it when or hate it when to express a strong negative reaction.",
      "Link stand to it; stress can't stand and the most annoying part of the situation.",
      "subject + can't stand/hate + it + when + clause",
      undefined,
      "Não suporto quando estou chateado e as pessoas mandam eu me acalmar.",
    ],
    [
      ["It ", bold("makes me happy when"), " people do nice things for no reason."],
      "Begin with it when the situation causes an emotion or reaction.",
      "Stress the emotion and the key action in the when clause.",
      "It + makes + object + adjective + when + clause · It bothers/upsets/annoys + object + when + clause",
      undefined,
      "Fico feliz quando as pessoas fazem coisas gentis sem motivo.",
    ],
    [
      ["It ", bold("bothers me when"), " my doctor arrives late. It ", bold("really annoys me when"), " someone takes the last cookie without asking."],
      "Choose a reaction expression that matches the strength of your feeling.",
      "Link final consonants to following vowels: bothers_me, annoys_me, love_it.",
      "I love/like/hate it · I don't mind it · It makes me happy · It bothers/upsets/annoys me · I can't stand it",
      undefined,
      "Incomoda-me quando meu médico chega atrasado. Irrita-me muito quando alguém pega o último biscoito sem perguntar.",
    ],
  ],
} satisfies LanguageFocusData;
