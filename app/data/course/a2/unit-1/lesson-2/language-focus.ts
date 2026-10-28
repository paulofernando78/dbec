import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask and answer Yes/No questions with be and talk about classes and school subjects.",
  items: [
    [
      [bold("Are"), " you free after class? — Yes, I ", bold("am"), ". / No, I'm ", bold("not"), "."],
      "Use Are you ...? to ask a Yes/No question directly to another person.",
      "Use rising intonation in the question. Stress am or not in a short answer.",
      "Are you + complement? · Yes, I am. · No, I'm not.",
      undefined,
      "Você está livre depois da aula? — Sim. / Não.",
    ],
    [
      [bold("Is"), " Sofia from Mexico? — Yes, she ", bold("is"), ". / No, she ", bold("isn't"), "."],
      "Use Is he/she/it ...? to ask a Yes/No question about one person or thing.",
      "Is is usually unstressed in the question. Stress is or isn't in the answer.",
      "Is + he/she/it + complement? · Yes, he/she/it is. · No, he/she/it isn't.",
      undefined,
      "A Sofia é do México? — Sim. / Não.",
    ],
    [
      [bold("Are"), " your classes interesting? — Yes, they ", bold("are"), ". / No, they ", bold("aren't"), "."],
      "Use Are we/you/they ...? to ask about more than one person or thing.",
      "Stress the adjective in the question and are or aren't in the short answer.",
      "Are + we/you/they + complement? · Yes, we/you/they are. · No, we/you/they aren't.",
      undefined,
      "Suas aulas são interessantes? — Sim. / Não.",
    ],
    [
      ["Is ", bold("chemistry"), " your favorite subject? — No, it isn't. My favorite subject is ", bold("biology"), "."],
      "Use school-subject vocabulary to ask about classes and preferences.",
      "Stress the subject names and favorite.",
      "math · history · physics · biology · literature · chemistry · geography · physical education",
      undefined,
      "Química é sua matéria favorita? — Não. Minha matéria favorita é biologia.",
    ],
  ],
} satisfies LanguageFocusData;
