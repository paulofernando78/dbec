import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Use three-word phrasal verbs and varied structures to propose practical solutions.",
  items: [
    [
      ["We need to ", bold("come up with"), " a solution and ", bold("look into"), " affordable options."],
      "Use three-word phrasal verbs as complete units to discuss problems and responses.",
      "Stress the particle or key noun according to the expression.",
      "come up with · keep up with · get along with · cut down on · put up with · take care of · look forward to · break up with",
      undefined,
      "Precisamos encontrar uma solução e investigar opções acessíveis.",
    ],
    [
      [bold("Maybe you could take part"), " in a singing group."],
      "Use maybe + could + base verb to offer a tentative suggestion.",
      "Use a gentle tone and stress the proposed activity.",
      "Maybe + subject + could + base verb",
      undefined,
      "Talvez você pudesse participar de um grupo de canto.",
    ],
    [
      [bold("What about joining"), " a running club? — ", bold("Have you thought about asking"), " your friends to introduce you around?"],
      "Use What about or Have you thought about + gerund to suggest an idea for consideration.",
      "Stress the gerund activity and use friendly rising intonation.",
      "What about + gerund? · Have you thought about + gerund?",
      undefined,
      "Que tal entrar em um clube de corrida? — Já pensou em pedir aos seus amigos que apresentem você?",
    ],
    [
      [bold("Why don't you do"), " some volunteer work?"],
      "Use Why don't you + base verb for a direct but friendly suggestion.",
      "Use falling intonation and stress the proposed action.",
      "Why don't you + base verb?",
      undefined,
      "Por que você não faz algum trabalho voluntário?",
    ],
    [
      [bold("One option is to join"), " a club. It might be a good idea ", bold("to check out"), " cultural events."],
      "Use infinitive phrases after option or idea to frame a suggestion as one possibility.",
      "Stress option/idea and the main action.",
      "One option is to + verb · It might be a good idea to + verb",
      undefined,
      "Uma opção é entrar em um clube. Talvez seja uma boa ideia conferir eventos culturais.",
    ],
  ],
} satisfies LanguageFocusData;
