import type { LanguageFocusData } from "../../../lesson-step-types";
import { LessonExtras } from "./extras";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus", component: LessonExtras,
  instruction: "Listen, repeat, and notice how we ask about another person.",
  items: [
    [[bold("Who’s that"), "? — She’s my cousin."], "Ask a person’s identity.", "Stress WHO and COUsin. Use falling intonation.", "Who’s = Who is · She’s = She is", undefined, "Quem é aquela pessoa? — Ela é minha prima."],
    [[bold("How old is she"), "? — She’s twenty-four."], "Ask a person’s age.", "Stress OLD and TWENty-FOUR.", "How old + is + she? · She’s + age", undefined, "Quantos anos ela tem? — Ela tem vinte e quatro."],
    [[bold("What’s she like"), "? — She’s friendly and quiet."], "Ask for a description of personality.", "Stress LIKE, FRIENDly, and QUIet.", "What’s + she + like? · She’s + adjective", undefined, "Como ela é? — Ela é simpática e quieta."],
    [[bold("Where are they from"), "? — They’re from Chile."], "Ask the origin of two or more people.", "Stress WHERE and CHIle.", "Where + are + they + from? · They’re from + place", undefined, "De onde eles são? — Eles são do Chile."],
  ],
} satisfies LanguageFocusData;
