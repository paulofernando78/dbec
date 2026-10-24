import type { LanguageFocusData } from "../../../lesson-step-types";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Grammar focus",
  instruction:
    "Introduce yourself, greet someone, ask about first and last names, and use my, your, his, and her.",
  items: [
    [
      "Hello. My name is Laura Palmer. — Hi. My name is Eric Silva.",
      "Use My name is followed by your full name to introduce yourself.",
      "/həˈləʊ maɪ ˈneɪm ɪz ˈlɔːrə ˈpɑːmə/ — /haɪ maɪ ˈneɪm ɪz ˈerɪk ˈsɪlvə/",
      "My name is + first name + last name",
      undefined,
      "Olá. Meu nome é Laura Palmer. — Oi. Meu nome é Eric Silva.",
    ],
    [
      "It's nice to meet you, Eric. — Nice to meet you, too.",
      "Use these expressions when you meet someone for the first time.",
      "/ɪts naɪs tə ˈmiːt juː/ — /naɪs tə ˈmiːt juː tuː/",
      "It's = It is · Nice to meet you · too",
      undefined,
      "É um prazer conhecer você, Eric. — Prazer em conhecer você também.",
    ],
    [
      "I'm sorry. What's your last name again? — It's Palmer.",
      "Use this question when you need someone to repeat their last name.",
      "/aɪm ˈsɒri wɒts jə lɑːst ˈneɪm əˈɡen/ — /ɪts ˈpɑːmə/",
      "I'm = I am · What's = What is · It's = It is",
      undefined,
      "Desculpe. Qual é mesmo o seu sobrenome? — É Palmer.",
    ],
    [
      "What's your name? — My name's Carlos.",
      "Use your to ask the person you are speaking to. Use my to answer about yourself.",
      "/wɒts jə ˈneɪm/ — /maɪ ˈneɪmz ˈkɑːrlɒs/",
      "What's = What is · your name / my name",
      undefined,
      "Qual é o seu nome? — Meu nome é Carlos.",
    ],
    [
      "What's his name? — His name's Joshua.",
      "Use his to ask or answer about a man or boy.",
      "/wɒts hɪz ˈneɪm/ — /hɪz ˈneɪmz ˈdʒɒʃuə/",
      "What's = What is · his name",
      undefined,
      "Qual é o nome dele? — O nome dele é Joshua.",
    ],
    [
      "What's her name? — Her name's Isabella.",
      "Use her to ask or answer about a woman or girl.",
      "/wɒts hə ˈneɪm/ — /hə ˈneɪmz ˌɪzəˈbelə/",
      "What's = What is · her name",
      undefined,
      "Qual é o nome dela? — O nome dela é Isabella.",
    ],
  ],
} satisfies LanguageFocusData;
