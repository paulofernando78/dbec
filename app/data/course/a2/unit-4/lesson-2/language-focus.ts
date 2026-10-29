import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Make, accept, and decline invitations using would and verb + to + verb.",
  items: [
    [
      [bold("Would you like to"), " go out on Friday? — Yes, I would. / Yes, ", bold("I'd love to"), "."],
      "Use Would you like to ...? to make a polite invitation. Use I'd love to to accept warmly.",
      "Would you like to is often reduced in natural speech. Use friendly rising intonation in the invitation.",
      "Would you like to + base verb? · Yes, I would. · I'd love to. · I'd = I would",
      undefined,
      "Você gostaria de sair na sexta? — Sim. / Eu adoraria.",
    ],
    [
      ["Would you like to go to a concert? — ", bold("I'd like to, but"), " I have to work late."],
      "Use I'd like to, but ... to decline politely before giving a reason.",
      "Pause briefly after but and stress the reason.",
      "I'd like to, but + reason",
      undefined,
      "Você gostaria de ir a um show? — Eu gostaria, mas tenho que trabalhar até tarde.",
    ],
    [
      ["I'd like to, but I ", bold("have to work"), ". / I ", bold("need to study"), "."],
      "Use have to or need to before a base verb to give a clear reason for declining.",
      "In conversation, have to may sound like /hæftə/. Stress work or study.",
      "have to + base verb · need to + base verb",
      undefined,
      "Eu gostaria, mas tenho que trabalhar. / Preciso estudar.",
    ],
    [
      [bold("Do you want to"), " meet at seven? — Yes, that sounds good. / Sorry, I can't. How about eight?"],
      "Use Do you want to ...? for an informal invitation. After declining, offer an alternative with How about ...?",
      "Use rising intonation for the invitation and the alternative. Stress seven or eight.",
      "Do you want to + base verb? · How about + time/day/activity?",
      undefined,
      "Você quer se encontrar às sete? — Sim, parece bom. / Desculpe, não posso. Que tal às oito?",
    ],
  ],
} satisfies LanguageFocusData;
