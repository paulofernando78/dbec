import type { LanguageFocusData } from "../../../lesson-step-types";
import { PrepositionalPhrases } from "@/features/PrepositionalPhrases";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  component: PrepositionalPhrases,
  instruction: "Use subject pronouns before verbs and object pronouns after verbs or prepositions.",
  items: [
    [
      [bold("I"), " called Mia. Mia called ", bold("me"), "."],
      "Use I as the subject doing the action. Use me as the object receiving the action.",
      "Stress I, Mia, and me.",
      "I → me",
      undefined,
      "Eu liguei para Mia. Mia ligou para mim.",
      "Subject and object pronouns",
    ],
    [
      [bold("You"), " know Leo. Leo knows ", bold("you"), "."],
      "You has the same form as a subject and an object.",
      "Stress you and Leo.",
      "you → you",
      undefined,
      "Você conhece Leo. Leo conhece você.",
      "Subject and object pronouns",
    ],
    [
      [bold("He"), " called this morning. Please call ", bold("him"), " back."],
      "Use he as a subject and him as an object for a man or boy.",
      "Stress he, morning, him, and back.",
      "he → him",
      undefined,
      "Ele ligou hoje de manhã. Por favor, ligue de volta para ele.",
      "Subject and object pronouns",
    ],
    [
      [bold("She"), " left a message. I called ", bold("her"), " later."],
      "Use she as a subject and her as an object for a woman or girl.",
      "Stress she, message, her, and later.",
      "she → her",
      undefined,
      "Ela deixou um recado. Eu liguei para ela mais tarde.",
      "Subject and object pronouns",
    ],
    [
      [bold("We"), " are at home. Please visit ", bold("us"), "."],
      "Use we as a subject and us as an object for yourself and other people.",
      "Stress we, home, and us.",
      "we → us",
      undefined,
      "Nós estamos em casa. Por favor, visite-nos.",
      "Subject and object pronouns",
    ],
    [
      [bold("They"), " are in a meeting. Send ", bold("them"), " an email."],
      "Use they as a subject and them as an object for two or more people.",
      "Stress they, meeting, them, and email.",
      "they → them",
      undefined,
      "Eles estão em uma reunião. Envie um e-mail para eles.",
      "Subject and object pronouns",
    ],
  ],
} satisfies LanguageFocusData;
