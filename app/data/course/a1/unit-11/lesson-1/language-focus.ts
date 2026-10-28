import type { LanguageFocusData } from "../../../lesson-step-types";
import { MonthsAndDates } from "@/features/MonthsAndDates";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: MonthsAndDates,
  instruction: "Use be going to to talk about future plans.",
  items: [
    [
      [bold("Are you going to do"), " anything on Saturday? — Yes, I am. I'm going to visit my family."],
      "Use are you going to plus a base verb to ask about a future plan.",
      "Stress Saturday, visit, and family.",
      "Are + you + going to + base verb? · I'm going to + base verb.",
      undefined,
      "Você vai fazer alguma coisa no sábado? — Sim. Vou visitar minha família.",
      "The future with be going to",
    ],
    [
      ["Are you going to go out? — No, ", bold("I'm not"), ". I'm going to stay home."],
      "Use I'm not for a negative short answer. Use not after be in a negative plan.",
      "Stress no, not, and stay home.",
      "I'm not going to + base verb.",
      undefined,
      "Você vai sair? — Não. Vou ficar em casa.",
      "Negative plans",
    ],
    [
      [bold("Is Leo going to make"), " lunch? — Yes, he is. He's going to make pasta."],
      "Use is with he or she. Use the base verb after going to.",
      "Stress Leo, lunch, and pasta.",
      "Is + he/she + going to + base verb?",
      undefined,
      "Leo vai fazer o almoço? — Sim. Ele vai fazer macarrão.",
      "Questions with he and she",
    ],
    [
      ["Is Maya going to drive? — No, she isn't. ", bold("She's going to take"), " the bus."],
      "Use she isn't for a negative short answer.",
      "Stress Maya, drive, and bus.",
      "No, she isn't. · She's going to + base verb.",
      undefined,
      "Maya vai dirigir? — Não. Ela vai pegar o ônibus.",
      "Questions with he and she",
    ],
    [
      [bold("Are your friends going to come"), "? — Yes, they are. They're going to arrive at eight."],
      "Use are with they to ask about plans for two or more people.",
      "Stress friends, come, and eight.",
      "Are + they + going to + base verb?",
      undefined,
      "Seus amigos vão vir? — Sim. Eles vão chegar às oito.",
      "Questions with they",
    ],
    [
      ["Are they going to stay all weekend? — No, they aren't. ", bold("They're going to leave"), " on Sunday."],
      "Use they aren't for a negative short answer.",
      "Stress stay, weekend, leave, and Sunday.",
      "No, they aren't. · They're going to + base verb.",
      undefined,
      "Eles vão ficar o fim de semana todo? — Não. Eles vão embora no domingo.",
      "Questions with they",
    ],
  ],
} satisfies LanguageFocusData;
