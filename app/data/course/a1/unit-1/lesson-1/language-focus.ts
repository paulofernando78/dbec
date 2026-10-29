import type { LanguageFocusData } from "../../../lesson-step-types";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Listen, repeat, and notice four useful expressions for meeting someone.",
  items: [
    [
      "Hello. I’m Laura. — Hi. I’m Eric.",
      "Use Hello or Hi to greet someone. Use I’m plus your name to introduce yourself.",
      "Stress your name: I’m LAUra. I’m ERic.",
      "Hello / Hi + I’m + name",
      undefined,
      "Olá. Eu sou Laura. — Oi. Eu sou Eric.",
    ],
    [
      "What’s your name?",
      "Ask this when you want to know the other person’s name.",
      "Link What’s your: WHAT’S-your NAME? Use falling intonation.",
      "What’s + your + name?",
      undefined,
      "Qual é o seu nome?",
    ],
    [
      "My name is Laura.",
      "Use My name is plus your name to answer.",
      "Stress the name: My name is LAUra.",
      "My + name + is + name",
      undefined,
      "Meu nome é Laura.",
    ],
    [
      "Nice to meet you. — Nice to meet you, too.",
      "Use this when you meet someone for the first time. Too means the same feeling is returned.",
      "Stress NICE and MEET. Keep to short and weak.",
      "Nice to meet you (+ too)",
      undefined,
      "Prazer em conhecer você. — Prazer em conhecer você também.",
    ],
  ],
} satisfies LanguageFocusData;
