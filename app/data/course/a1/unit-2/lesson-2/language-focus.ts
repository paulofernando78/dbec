import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Listen, repeat, and notice how we ask and answer about object locations.",
  items: [
    [
      [bold("Where's"), " your ID card? — ", bold("It's in"), " the drawer."],
      "Use Where's...? to ask about one thing. Use in for something inside another thing.",
      "Stress WHERE, ID CARD, and DRAWer. Use falling intonation.",
      "Where's = Where is · in + place",
      undefined,
      "Onde está o seu crachá? — Está na gaveta.",
      "Where questions",
    ],
    [
      [bold("Where are"), " my keys? — ", bold("They're on"), " the desk."],
      "Use Where are...? to ask about two or more things. Use on for something on top of a surface.",
      "Stress WHERE, KEYS, and DESK. Use falling intonation.",
      "Where + are + plural noun? · on + place",
      undefined,
      "Onde estão as minhas chaves? — Estão na mesa.",
      "Where questions",
    ],
    [
      ["Where's the charger? — ", bold("It's under"), " the monitor."],
      "Use under for something below another thing.",
      "Stress charger, under, and monitor.",
      "under + noun",
      undefined,
      "Onde está o carregador? — Está embaixo do monitor.",
      "Prepositions of place",
    ],
    [
      ["Where are the folders? — ", bold("They're next to"), " the printer."],
      "Use next to for something beside another thing.",
      "Stress folders, next to, and printer.",
      "next to + noun",
      undefined,
      "Onde estão as pastas? — Estão ao lado da impressora.",
      "Prepositions of place",
    ],
  ],
} satisfies LanguageFocusData;
