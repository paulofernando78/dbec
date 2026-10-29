import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Use be going to for decided plans and will for possible plans before a decision.",
  relatedGrammar: ["future-forms"],
  items: [
    [
      ["What ", bold("are"), " you ", bold("going to do"), " during spring break? — I", bold("'m going to visit"), " my cousin in Florianópolis."],
      "Use be going to plus the base verb for a future plan you have already decided on.",
      "Going to is often reduced in connected speech; stress the main action and destination.",
      "be + going to + base verb",
      undefined,
      "O que você vai fazer durante as férias de primavera? — Vou visitar meu primo em Florianópolis.",
      "Decided plans with be going to",
    ],
    [
      ["We", bold("'re going to hike"), " on Saturday. — We", bold("'re not going to rent"), " a car."],
      "Use the affirmative for planned activities and be not going to for things you have decided against.",
      "Stress hike, Saturday, rent, and car.",
      "subject + be + going to + base verb · subject + be + not + going to + base verb",
      undefined,
      "Vamos fazer uma trilha no sábado. — Não vamos alugar um carro.",
      "Decided plans with be going to",
    ],
    [
      ["What ", bold("will"), " you do? — I'm not sure. I guess I", bold("'ll catch up"), " on sleep. / Maybe I", bold("'ll join"), " a cooking workshop."],
      "Use will with expressions such as I guess and maybe when considering possibilities before deciding.",
      "Stress not sure, catch up, and cooking workshop.",
      "I guess/maybe + subject + will + base verb",
      undefined,
      "O que você fará? — Não tenho certeza. Acho que vou colocar o sono em dia. / Talvez eu participe de uma oficina de culinária.",
      "Possible plans with will",
    ],
    [
      ["I don't know. I think I", bold("'ll take"), " a short road trip. — I probably ", bold("won't stay"), " home all week."],
      "Use I think with will for a possible choice and probably won't for an unlikely future action.",
      "Stress road trip, probably, and stay home.",
      "I think + subject + will + base verb · subject + probably won't + base verb",
      undefined,
      "Não sei. Acho que farei uma viagem curta de carro. — Provavelmente não ficarei em casa a semana inteira.",
      "Possible plans with will",
    ],
  ],
} satisfies LanguageFocusData;
