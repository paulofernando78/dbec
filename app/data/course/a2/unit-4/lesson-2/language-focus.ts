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
      ["I'd like to, but I ", bold("have to work"), ". I ", bold("need to save"), " money. I ", bold("want to visit"), " my parents."],
      "Use have to, need to, and want to before a base verb to explain obligations, needs, and wishes.",
      "In conversation, have to may sound like /hæftə/ and want to may sound like /wɑnə/.",
      "have to + verb · need to + verb · want to + verb",
      undefined,
      "Tenho que trabalhar. Preciso economizar dinheiro. Quero visitar meus pais.",
    ],
    [
      [bold("r u free 2nite?"), " — idk yet. brb. — np, ttyl!"],
      "Common text-message abbreviations are useful in informal messages, but avoid them in formal writing.",
      "Read abbreviations as their full expressions when speaking.",
      "u = you · r = are · 2 = to/too · pls = please · thx = thanks · idk = I don't know · brb = be right back · ttyl = talk to you later",
      undefined,
      "Você está livre hoje à noite? — Ainda não sei. Já volto. — Sem problema, falo com você depois!",
    ],
  ],
} satisfies LanguageFocusData;
