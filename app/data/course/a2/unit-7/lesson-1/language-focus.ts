import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Ask and answer questions about past free-time activities using the simple past.",
  items: [
    [
      [bold("Did"), " you work on Saturday? — Yes, I ", bold("did"), ". I ", bold("worked"), " all day. / No, I ", bold("didn't"), "."],
      "Use did in simple-past Yes/No questions and short answers. Use the base verb after did or didn't.",
      "In conversation, did you is often reduced. Stress did or didn't in a short answer.",
      "Did + subject + base verb? · Yes, subject + did. · No, subject + didn't. · subject + past verb",
      undefined,
      "Você trabalhou no sábado? — Sim. Trabalhei o dia todo. / Não.",
    ],
    [
      [bold("What did"), " Neil ", bold("do"), " on Saturday? — He stayed home and studied for a test."],
      "Use a Wh-word + did to ask for specific information about a completed past action.",
      "What did you may sound like /wʌdʒə/ in fast speech. Wh-questions usually have falling intonation.",
      "Wh-word + did + subject + base verb? · subject + past verb",
      undefined,
      "O que Neil fez no sábado? — Ele ficou em casa e estudou para uma prova.",
    ],
    [
      ["We ", bold("worked"), ", ", bold("invited"), " friends, ", bold("studied"), ", and ", bold("stopped"), " for dinner."],
      "Regular verbs form the simple past with -ed, with spelling changes for some endings.",
      "The -ed ending can sound like /t/, /d/, or /ɪd/ depending on the final sound of the verb.",
      "work → worked · invite → invited · study → studied · stop → stopped",
      undefined,
      "Trabalhamos, convidamos amigos, estudamos e paramos para jantar.",
    ],
    [
      ["I ", bold("bought"), " a game, ", bold("went"), " shopping, ", bold("had"), " lunch, and ", bold("took"), " a bike ride."],
      "Irregular verbs have special past forms that must be learned.",
      "Stress the irregular past verb and the important object or activity.",
      "buy → bought · go → went · have → had · take → took",
      undefined,
      "Comprei um jogo, fui às compras, almocei e dei uma volta de bicicleta.",
    ],
    [
      ["I ", bold("did chores"), ", ", bold("went shopping"), ", ", bold("had a good time"), ", ", bold("made a video"), ", and ", bold("took a bike ride"), "."],
      "Learn common verb-noun combinations as complete expressions.",
      "Stress the noun in each collocation.",
      "do chores/the laundry · go dancing/shopping · have fun/a good time · make a phone call/a video · take a day off/a trip/a bike ride",
      undefined,
      "Fiz tarefas, fui às compras, me diverti, fiz um vídeo e dei uma volta de bicicleta.",
    ],
  ],
} satisfies LanguageFocusData;
