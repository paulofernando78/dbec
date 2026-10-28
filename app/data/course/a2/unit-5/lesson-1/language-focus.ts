import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Describe family members and ask what people are doing now or these days using the present continuous.",
  items: [
    [
      [bold("Are"), " you ", bold("living"), " at home now? — Yes, I ", bold("am"), ". / No, I'm not."],
      "Use am, is, or are + verb-ing to ask and answer about an activity happening now or around the present time.",
      "Use rising intonation in the Yes/No question. Stress am or not in the short answer.",
      "Am/Is/Are + subject + verb-ing? · Yes, subject + am/is/are. · No, subject + am/is/are not.",
      undefined,
      "Você está morando em casa agora? — Sim. / Não.",
    ],
    [
      [bold("Is"), " your sister ", bold("working"), " in another city? — Yes, she is. / No, she isn't."],
      "Use is with he, she, it, or one person and are with you, we, they, or plural nouns.",
      "The form of be is usually unstressed; stress the activity and important new information.",
      "he/she/name + is + verb-ing · you/we/they/plural noun + are + verb-ing",
      undefined,
      "Sua irmã está trabalhando em outra cidade? — Sim. / Não.",
    ],
    [
      [bold("Where are"), " you working now? — I'm not working. ", bold("What is"), " your brother doing? — He's traveling."],
      "Use a Wh-word before be to ask for specific information about a current activity.",
      "Wh-questions usually have falling intonation. Stress the Wh-word and the activity.",
      "Wh-word + am/is/are + subject + verb-ing?",
      undefined,
      "Onde você está trabalhando agora? — Não estou trabalhando. O que seu irmão está fazendo? — Ele está viajando.",
    ],
    [
      ["My parents ", bold("are studying"), " English this year. My niece ", bold("is learning"), " the guitar."],
      "Use the present continuous for temporary activities and changing situations happening these days.",
      "Stress the -ing verb and the time expression.",
      "subject + am/is/are + verb-ing · now · these days · this year",
      undefined,
      "Meus pais estão estudando inglês este ano. Minha sobrinha está aprendendo violão.",
    ],
    [
      ["My ", bold("cousin"), " is traveling. His ", bold("wife"), " and their ", bold("daughter"), " are living with my uncle."],
      "Use family words to explain relationships while describing what family members are doing.",
      "Stress each family word when identifying the person.",
      "cousin · daughter · father · grandmother · niece · sister-in-law · uncle · wife",
      undefined,
      "Meu primo está viajando. A esposa e a filha dele estão morando com meu tio.",
    ],
  ],
} satisfies LanguageFocusData;
