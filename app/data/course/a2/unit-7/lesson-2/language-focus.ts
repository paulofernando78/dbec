import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Ask and answer questions about vacations using the past of be.",
  items: [
    [
      [bold("Were"), " you in California? — Yes, I ", bold("was"), ". / No, I ", bold("wasn't"), "."],
      "Use was with I, he, she, and it; use were with you, we, and they.",
      "Use rising intonation in a Yes/No question. Stress was or wasn't in the answer.",
      "Was/Were + subject + complement? · Yes, subject + was/were. · No, subject + wasn't/weren't.",
      undefined,
      "Você estava na Califórnia? — Sim. / Não.",
    ],
    [
      [bold("Was"), " the weather OK? — No, it ", bold("wasn't"), ". ", bold("Were"), " your parents there? — No, they ", bold("weren't"), "."],
      "Use wasn't and weren't for negative short answers and negative past descriptions.",
      "Stress the negative contraction when correcting information.",
      "wasn't = was not · weren't = were not",
      undefined,
      "O tempo estava bom? — Não. Seus pais estavam lá? — Não.",
    ],
    [
      [bold("How long were"), " you away? — I was away for a week. ", bold("How was"), " your vacation? — It was excellent!"],
      "Use Wh-questions with was or were to ask for specific information about a past situation.",
      "Wh-questions usually have falling intonation. Stress long or the descriptive adjective.",
      "Wh-word + was/were + subject + complement?",
      undefined,
      "Quanto tempo você ficou fora? — Fiquei fora por uma semana. Como foram suas férias? — Foram excelentes!",
    ],
    [
      ["We ", bold("were"), " on vacation, and the beaches ", bold("were"), " beautiful, but the hotel ", bold("wasn't"), " very comfortable."],
      "Use was and were to describe past places, people, weather, and experiences.",
      "Stress the descriptive words that express the speaker's opinion.",
      "subject + was/were + noun, adjective, or place",
      undefined,
      "Estávamos de férias, e as praias eram lindas, mas o hotel não era muito confortável.",
    ],
  ],
} satisfies LanguageFocusData;
