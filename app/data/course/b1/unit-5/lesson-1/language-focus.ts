import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss living abroad using feelings vocabulary and noun phrases containing relative clauses.",
  items: [
    [
      [bold("Something (that) I'd be worried about"), " is the local food."],
      "Use something + relative clause to identify one concern or experience. That is optional when it is the object.",
      "Stress the feeling adjective and the specific concern.",
      "Something + (that) + subject + verb + is + complement",
      undefined,
      "Algo com que eu ficaria preocupado é a comida local.",
    ],
    [
      [bold("One thing (that) I'd really miss"), " is hanging out with my friends."],
      "Use one thing + relative clause to focus on a single aspect of living abroad.",
      "Stress one thing, miss, and the key activity.",
      "One thing + (that) + subject + verb + is + noun/gerund phrase",
      undefined,
      "Uma coisa de que eu sentiria muita falta é sair com meus amigos.",
    ],
    [
      [bold("The people (who/that) I'd miss the most"), " are my parents."],
      "Use people + who or that + relative clause to identify a group. Use a plural verb after the full noun phrase.",
      "Stress most and the people named in the answer.",
      "The people + (who/that) + subject + verb + are + plural complement",
      undefined,
      "As pessoas de quem eu mais sentiria falta são meus pais.",
    ],
    [
      ["Trying new foods is something I'd be ", bold("enthusiastic"), " about, but speaking a foreign language might make me feel ", bold("insecure"), "."],
      "Use feeling adjectives to describe positive and negative reactions to living in another country.",
      "Stress the feeling adjective and use contrastive stress when comparing reactions.",
      "anxious · comfortable · confident · curious · depressed · embarrassed · enthusiastic · excited · fascinated · homesick · insecure · nervous · uncertain · uncomfortable · worried",
      undefined,
      "Experimentar comidas novas é algo que me deixaria entusiasmado, mas falar outro idioma poderia me deixar inseguro.",
    ],
    [
      ["Making new friends is ", bold("one thing I might be excited about"), ", while getting lost is ", bold("something I'd feel anxious about"), "."],
      "Combine experience phrases with relative-clause noun phrases to explain contrasting reactions.",
      "Group each noun phrase as one thought unit and stress the contrasting feelings.",
      "experience/gerund phrase + be + noun phrase containing a relative clause",
      undefined,
      "Fazer novos amigos é algo que poderia me deixar animado, enquanto me perder é algo que me deixaria ansioso.",
    ],
  ],
} satisfies LanguageFocusData;
