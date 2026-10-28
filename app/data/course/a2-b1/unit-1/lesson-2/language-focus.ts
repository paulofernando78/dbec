import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use used to to describe past habits and situations.",
  items: [
    [
      ["I ", bold("used to walk"), " to school every day. — My friends and I ", bold("used to spend"), " every afternoon at the park."],
      "Use used to plus the base form for habits and situations that were true in the past but are not true now.",
      "Used to is commonly pronounced /ˈjuːstə/ in connected speech.",
      "subject + used to + base verb",
      undefined,
      "Eu costumava ir a pé para a escola todos os dias. — Meus amigos e eu costumávamos passar todas as tardes no parque.",
      "Affirmative",
    ],
    [
      [bold("Did"), " you ", bold("use to play"), " outside after school? — Yes, I ", bold("did"), "."],
      "Use did plus use to in questions. Do not use used after did.",
      "Use to is pronounced /ˈjuːstə/ in the question.",
      "Did + subject + use to + base verb? · Yes, subject + did.",
      undefined,
      "Você costumava brincar fora depois da escola? — Sim.",
      "Questions and short answers",
    ],
    [
      ["I ", bold("didn't use to own"), " a phone. — I ", bold("didn't use to stay"), " indoors very much."],
      "Use didn't use to plus the base form for past habits or situations that were not true.",
      "Keep didn't clear and reduce use to in connected speech.",
      "subject + didn't use to + base verb",
      undefined,
      "Eu não costumava ter telefone. — Eu não costumava ficar muito tempo dentro de casa.",
      "Negative",
    ],
  ],
} satisfies LanguageFocusData;
