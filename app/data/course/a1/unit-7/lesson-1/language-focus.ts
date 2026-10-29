import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus",
  instruction: "Listen, repeat, and notice short answers about a home.",
  items: [
    [[bold("Do you live"), " in a house? — Yes, I do. / No, I don’t."], "Ask another person about their home.", "Use rising intonation. Stress HOUSE, YES, or NO.", "Do + you + verb? · Yes, I do. / No, I don’t.", undefined, "Você mora em uma casa? — Sim. / Não."],
    [[bold("Do they share"), " a bedroom? — Yes, they do. / No, they don’t."], "Ask about two or more people.", "Stress SHARE and BEDroom.", "Do + they + verb? · Yes, they do. / No, they don’t.", undefined, "Eles dividem um quarto? — Sim. / Não."],
    [[bold("Does it have"), " an elevator? — Yes, it does. / No, it doesn’t."], "Ask about a house, apartment, or building.", "Stress ELevator, YES, or NO.", "Does + it + have? · Yes, it does. / No, it doesn’t.", undefined, "Tem elevador? — Sim. / Não."],
  ],
} satisfies LanguageFocusData;
