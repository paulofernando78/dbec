import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus",
  instruction: "Listen, repeat, and notice how two people ask and answer about origin.",
  items: [
    [[bold("Where are you from"), "? — I’m from Quito."], "Ask about another person’s city or country.", "Stress WHERE and QUIto. Use falling intonation.", "Where + are + you + from? · I’m from + place", undefined, "De onde você é? — Sou de Quito."],
    [[bold("Are you from"), " Bogotá? — No, I’m not."], "Check a city or country. Use a short answer.", "Use rising intonation. Stress BOGotá and NOT.", "Are + you + from + place? · Yes, I am. / No, I’m not.", undefined, "Você é de Bogotá? — Não."],
    [[bold("I’m Brazilian"), ". — I’m not Colombian."], "Use be plus a nationality. Use not for a negative statement.", "Stress the nationality and NOT.", "I’m + nationality · I’m not + nationality", undefined, "Sou brasileiro(a). — Não sou colombiano(a)."],
  ],
} satisfies LanguageFocusData;
