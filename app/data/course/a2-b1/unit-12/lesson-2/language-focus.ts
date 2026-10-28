import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use the present perfect continuous for actions that started in the past and continue into the present.",
  items: [
    [
      ["What ", bold("have you been doing"), " lately? — I", bold("'ve been training"), " for a charity race for the last two months."],
      "Use have been plus the -ing form to ask about and describe a continuing recent activity.",
      "Stress doing, lately, training, and two months.",
      "have/has + been + verb-ing",
      undefined,
      "O que você tem feito ultimamente? — Tenho treinado para uma corrida beneficente nos últimos dois meses.",
    ],
    [
      ["How long ", bold("have you been learning"), " photography? — I", bold("'ve been taking"), " evening classes since March."],
      "Use how long to ask about duration. Use since for the starting point.",
      "Stress how long, learning, evening classes, and since March.",
      "how long + have/has + subject + been + verb-ing · since + starting point",
      undefined,
      "Há quanto tempo você estuda fotografia? — Tenho feito aulas noturnas desde março.",
    ],
    [
      [bold("Have you been sleeping"), " enough? — No, I ", bold("haven't been sleeping"), " enough. I", bold("'ve been staying"), " up late editing photos."],
      "Use haven't been plus the -ing form for a negative continuing action or situation.",
      "Stress sleeping, enough, staying up, and editing photos.",
      "have/has + subject + been + verb-ing? · haven't/hasn't + been + verb-ing",
      undefined,
      "Você tem dormido o suficiente? — Não, não tenho dormido o suficiente. Tenho ficado acordado até tarde editando fotos.",
    ],
  ],
} satisfies LanguageFocusData;
