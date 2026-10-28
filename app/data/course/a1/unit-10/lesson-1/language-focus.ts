import type { LanguageFocusData } from "../../../lesson-step-types";
import { Sports } from "@/features/Sports";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: Sports,
  instruction: "Use simple present Wh-questions to ask about sports.",
  items: [
    [
      [bold("What sports do you play"), "? — I play tennis and volleyball."],
      "Use what sports to ask which sports a person plays.",
      "Stress what sports, tennis, and volleyball.",
      "What sports + do + you + play?",
      undefined,
      "Quais esportes você pratica? — Eu jogo tênis e vôlei.",
      "Simple present Wh-questions",
    ],
    [
      [bold("Who do you play tennis with"), "? — I play with my sister."],
      "Use who and with to ask about the person who joins an activity.",
      "Stress who, tennis, and sister.",
      "Who + do + you + verb + with?",
      undefined,
      "Com quem você joga tênis? — Eu jogo com minha irmã.",
      "Questions with who",
    ],
    [
      [bold("Where do you play"), "? — At the sports center."],
      "Use where to ask about a place.",
      "Stress where, play, and sports center.",
      "Where + do + you + verb? · At + place.",
      undefined,
      "Onde você joga? — No centro esportivo.",
      "Questions with where",
    ],
    [
      [bold("How often do you practice"), "? — Three times a week."],
      "Use how often to ask about frequency.",
      "Stress how often, practice, and three times.",
      "How often + do + you + verb?",
      undefined,
      "Com que frequência você pratica? — Três vezes por semana.",
      "Questions with how often",
    ],
    [
      [bold("When do you practice"), "? — On Mondays and Fridays."],
      "Use when to ask about days or a general time.",
      "Stress when, practice, Mondays, and Fridays.",
      "When + do + you + verb? · On + days.",
      undefined,
      "Quando você pratica? — Às segundas e sextas-feiras.",
      "Questions with when",
    ],
    [
      [bold("What time do you start"), "? — At seven thirty in the evening."],
      "Use what time to ask for an exact time.",
      "Stress what time, start, and seven thirty.",
      "What time + do + you + verb? · At + time.",
      undefined,
      "A que horas você começa? — Às sete e meia da noite.",
      "Questions with what time",
    ],
  ],
} satisfies LanguageFocusData;
