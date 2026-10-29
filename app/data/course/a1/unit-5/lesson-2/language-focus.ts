import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus", slug: "language-focus", label: "Language focus",
  instruction: "Listen, repeat, and notice how we ask about activities happening now.",
  items: [
    [[bold("What are you doing"), "? — I’m studying English."], "Ask another person’s activity now.", "Stress WHAT, DOing, and STUDYing.", "What + are + you + doing? · I’m + verb-ing", undefined, "O que você está fazendo? — Estou estudando inglês."],
    [[bold("What’s Eva doing"), "? — She’s sleeping."], "Ask about one woman or girl now.", "Stress EVA, DOing, and SLEEPing.", "What’s + name + doing? · She’s + verb-ing", undefined, "O que Eva está fazendo? — Ela está dormindo."],
    [[bold("What are they doing"), "? — They’re working."], "Ask about two or more people now.", "Stress THEY, DOing, and WORKing.", "What + are + they + doing? · They’re + verb-ing", undefined, "O que eles estão fazendo? — Eles estão trabalhando."],
    [[bold("read → reading"), " · ", bold("sit → sitting"), " · ", bold("make → making")], "Usually add -ing. Double the last consonant in sit. Remove final e in make.", "Say the -ing ending clearly.", "verb + ing · sit → sitting · make → making", undefined, "read → reading · sit → sitting · make → making"],
  ],
} satisfies LanguageFocusData;
