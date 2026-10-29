import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe annoyances and make appropriate complaints using relative clauses, noun clauses, collocations, and tactful opening expressions.",
  items: [
    [
      [bold("Something that bugs me"), " is people who take up two seats."],
      "A relative clause can occur inside the subject, while the complement identifies the annoying behavior.",
      "Stress bugs me and the behavior after be.",
      "Something that + verb + object + be + behavior",
      undefined,
      "Algo que me incomoda são pessoas que ocupam dois assentos.",
      "Relative-clause subjects",
    ],
    [
      [bold("The thing I can't stand"), " is coworkers who leave their phones ringing."],
      "Use the thing plus an optional object relative pronoun to introduce a strong complaint.",
      "Stress can't stand and the key behavior.",
      "The thing (that) + subject + can't stand + be + noun phrase",
      undefined,
      "O que não suporto são colegas que deixam o celular tocando.",
      "Relative and noun clauses",
    ],
    [
      [bold("The thing that bothers me is when"), " my friends don't arrive on time."],
      "A relative-clause subject can be followed by a noun clause beginning with when to identify the situation.",
      "Pause lightly before is when and emphasize the irritating situation.",
      "The thing that + verb + object + be + when-clause",
      undefined,
      "O que me incomoda é quando meus amigos não chegam no horário.",
      "Noun clauses with when",
    ],
    [
      ["Loud calls ", bold("drive me crazy"), ", and repeated alerts ", bold("get on my nerves"), "."],
      "Use established collocations with drive, get, and make to describe the effect of irritating behavior.",
      "Stress the emotional result at the end of each expression.",
      "drive someone crazy/mad/up the wall · get on someone's nerves/under someone's skin/make someone's blood boil · make someone upset/sick",
      undefined,
      "Ligações em voz alta me deixam louco, e alertas repetidos me irritam.",
      "Annoyance expressions",
    ],
    [
      [bold("Excuse me, but"), " I think you dropped something."],
      "Use excuse me, but or I'm sorry, but to soften a complaint to a stranger.",
      "Use a polite tone, keep the opener light, and emphasize the problem rather than the person.",
      "Excuse me/I'm sorry, but + neutral description or request",
      undefined,
      "Com licença, mas acho que você deixou algo cair.",
      "Complaining to strangers",
    ],
    [
      [bold("I hate to mention this, but"), " the music has been very loud. / ", bold("I'm sorry to bring this up, but"), " it happens every night."],
      "Use a relationship-sensitive opener when complaining to friends or neighbors.",
      "Use a hesitant, friendly tone before stating the issue calmly.",
      "I hate to mention this, but… · I'm sorry to bring this up, but…",
      undefined,
      "Odeio ter que mencionar isso, mas a música está muito alta. / Desculpe tocar nesse assunto, mas acontece todas as noites.",
      "Complaining to people you know",
    ],
  ],
} satisfies LanguageFocusData;
