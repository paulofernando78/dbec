import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss future arrangements and plans using the present continuous, be going to, and time expressions.",
  items: [
    [
      [bold("What are"), " you ", bold("doing"), " tonight? — I'm meeting some friends."],
      "Use the present continuous for a future arrangement that is already planned.",
      "Stress the activity and time expression.",
      "am/is/are + verb-ing + future time expression",
      undefined,
      "O que você vai fazer hoje à noite? — Vou encontrar alguns amigos.",
    ],
    [
      [bold("Are"), " you ", bold("doing"), " anything tomorrow? — No, I'm not doing anything."],
      "Use present-continuous questions to ask about someone's scheduled plans.",
      "Use rising intonation in the Yes/No question and stress the future time.",
      "Am/Is/Are + subject + verb-ing + future time?",
      undefined,
      "Você vai fazer alguma coisa amanhã? — Não, não vou fazer nada.",
    ],
    [
      [bold("What is"), " she ", bold("going to do"), " tomorrow? — She's going to watch a film at home."],
      "Use be going to + base verb for an intention or plan.",
      "Going to is often reduced in casual speech. Stress the main verb and time expression.",
      "am/is/are + going to + base verb",
      undefined,
      "O que ela vai fazer amanhã? — Ela vai assistir a um filme em casa.",
    ],
    [
      [bold("Are"), " they ", bold("going to see"), " the photo exhibit? — Yes, they are."],
      "Use be going to in Yes/No questions and answer with the correct form of be.",
      "Stress the activity in the question and are or aren't in the short answer.",
      "Am/Is/Are + subject + going to + base verb? · Yes/No + subject + be",
      undefined,
      "Eles vão ver a exposição de fotos? — Sim.",
    ],
    [
      ["We're seeing a ", bold("musical on Friday"), " and going to a ", bold("barbecue this weekend"), "."],
      "Use event vocabulary and future time expressions to add plans to a calendar.",
      "Stress the event and the time expression.",
      "tonight · tomorrow · on Friday · this weekend · next week · concert/game/party/barbecue/wedding/festival/reunion/musical/race/performance/tournament",
      undefined,
      "Vamos assistir a um musical na sexta e a um churrasco neste fim de semana.",
    ],
  ],
} satisfies LanguageFocusData;
