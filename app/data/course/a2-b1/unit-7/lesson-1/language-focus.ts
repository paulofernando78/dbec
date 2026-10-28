import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use infinitives and gerunds to describe uses and purposes.",
  items: [
    [
      ["I use my smartwatch ", bold("to track"), " workouts. — A smartwatch is useful ", bold("for tracking"), " workouts."],
      "Use an infinitive after use something and a gerund after for to describe purpose.",
      "Stress smartwatch, track or tracking, and workouts.",
      "use + object + to + base verb · be useful for + gerund",
      undefined,
      "Uso meu relógio inteligente para acompanhar treinos. — Um relógio inteligente é útil para acompanhar treinos.",
    ],
    [
      ["I use my tablet ", bold("to read"), " digital magazines. — A tablet is great ", bold("for reading"), " digital magazines."],
      "Use to plus the base verb or for plus a gerund to explain what an object is used for.",
      "Stress tablet, read or reading, and digital magazines.",
      "use + object + to + base verb · be great for + gerund",
      undefined,
      "Uso meu tablet para ler revistas digitais. — Um tablet é ótimo para ler revistas digitais.",
    ],
    [
      ["I use this wireless speaker ", bold("to listen"), " to podcasts. — It's perfect ", bold("for listening"), " to podcasts."],
      "Use an infinitive to state a purpose and for plus a gerund to describe a suitable use.",
      "Stress wireless speaker, listen or listening, and podcasts.",
      "use + object + to + base verb · be perfect for + gerund",
      undefined,
      "Uso esta caixa de som sem fio para ouvir podcasts. — Ela é perfeita para ouvir podcasts.",
    ],
  ],
} satisfies LanguageFocusData;
