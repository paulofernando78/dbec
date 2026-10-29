import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe recently completed and incomplete activities using the present perfect, already, and yet.",
  items: [
    [
      [bold("Have"), " you ", bold("finished"), " the report? — Yes, I ", bold("have"), ". I've sent it."],
      "Form the present perfect with have + past participle for I, you, we, and they.",
      "Have is usually unstressed in the question. Stress the participle and new information.",
      "I/you/we/they + have + past participle · I've = I have · you've = you have · we've = we have · they've = they have",
      undefined,
      "Você terminou o relatório? — Sim. Eu o enviei.",
    ],
    [
      [bold("Has"), " Carlos ", bold("visited"), " the theme parks? — Yes, he has. / No, he ", bold("hasn't"), "."],
      "Use has with he, she, it, or one person. Use hasn't or haven't for negative forms.",
      "Stress has or hasn't in short answers and the main participle in full answers.",
      "he/she/it/name + has + past participle · he's = he has · hasn't = has not · haven't = have not",
      undefined,
      "Carlos já visitou os parques temáticos? — Sim. / Não.",
    ],
    [
      ["Have they eaten dinner ", bold("yet"), "? — Yes, they've ", bold("already"), " eaten. / No, they haven't eaten ", bold("yet"), "."],
      "Use already in affirmative statements for something completed sooner than expected. Use yet at the end of questions and negatives.",
      "Stress already or yet when the timing is important.",
      "have/has + already + past participle · have/has + subject + past participle + yet? · haven't/hasn't + past participle + yet",
      undefined,
      "Eles já jantaram? — Sim, já jantaram. / Não, ainda não jantaram.",
    ],
    [
      ["We have ", bold("visited"), " a space center, ", bold("eaten"), " Cuban food, and ", bold("seen"), " an alligator."],
      "Regular past participles usually end in -ed. Irregular participles have special forms.",
      "Stress the participle and activity or place.",
      "visit → visited · try → tried · be → been · eat → eaten · go → gone · see → seen",
      undefined,
      "Visitamos um centro espacial, comemos comida cubana e vimos um jacaré.",
    ],
  ],
} satisfies LanguageFocusData;
