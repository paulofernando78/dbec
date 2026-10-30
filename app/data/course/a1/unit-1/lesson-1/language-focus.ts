import type { LanguageFocusData } from "../../../lesson-step-types";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  supportLanguage: "pt-BR",
  instruction:
    "Listen, repeat, and notice four useful expressions for meeting someone.",
  items: [
    [
      "Hello. I’m Laura. — Hi. I’m Eric.",
      "Use Hello ou Hi para cumprimentar alguém. Use I’m seguido do seu nome para se apresentar.",
      "I’m **Lau**ra. I’m **Er**ic.",
      [
        {
          columns: [
            { header: "saudação", example: "Hello." },
            { header: "sujeito", example: "I" },
            { header: "verbo be", example: "’m" },
            { header: "nome", example: "Laura." },
          ],
        },
        {
          columns: [
            { header: "saudação", example: "Hi." },
            { header: "sujeito", example: "I" },
            { header: "verbo be", example: "’m" },
            { header: "nome", example: "Eric." },
          ],
        },
      ],
      undefined,
      "Olá. Eu sou Laura. — Oi. Eu sou Eric.",
    ],
    [
      "What’s your name?",
      "Use esta pergunta para saber o nome de outra pessoa.",
      "**What’s** your **name?**",
      [
        {
          columns: [
            { header: "palavra interrogativa", example: "What" },
            { header: "verbo be", example: "’s" },
            { header: "adjetivo possessivo", example: "your" },
            { header: "substantivo", example: "name?" },
          ],
        },
      ],
      undefined,
      "Qual é o seu nome?",
    ],
    [
      "My name is Laura.",
      "Use My name is seguido do seu nome para responder.",
      "My name is **Lau**ra.",
      [
        {
          columns: [
            { header: "adjetivo possessivo", example: "My" },
            { header: "substantivo", example: "name" },
            { header: "verbo be", example: "is" },
            { header: "nome", example: "Laura." },
          ],
        },
      ],
      undefined,
      "Meu nome é Laura.",
    ],
    [
      "Nice to meet you. — Nice to meet you, too.",
      "Use esta expressão quando conhecer alguém. Na resposta, too mostra que o sentimento é recíproco.",
      "**Nice** to **meet** you. **Nice** to **meet** you, too.",
      [
        {
          columns: [
            {
              header: "expressão fixa",
              example: "Nice to meet",
            },
            { header: "pronome objeto", example: "you." },
          ],
        },
        {
          columns: [
            {
              header: "expressão fixa",
              example: "Nice to meet",
            },
            { header: "pronome objeto", example: "you," },
            { header: "também", example: "too." },
          ],
        },
      ],
      undefined,
      "Prazer em conhecer você. — Prazer em conhecer você também.",
    ],
  ],
} satisfies LanguageFocusData;
