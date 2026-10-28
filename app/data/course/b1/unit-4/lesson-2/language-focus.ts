import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Sequence past events and explain what had happened earlier using the past perfect.",
  items: [
    [
      ["When I ", bold("came back"), ", someone ", bold("had stolen"), " my bike."],
      "Use the simple past for the later past event and the past perfect for the event that occurred first.",
      "Stress the result in the later event and the key participle in the earlier event.",
      "later event: simple past · earlier event: had + past participle",
      undefined,
      "Quando voltei, alguém tinha roubado minha bicicleta.",
    ],
    [
      ["The thieves were able to steal it because I ", bold("had forgotten"), " to lock it up."],
      "Use the past perfect to explain an earlier cause of a past result.",
      "Stress forgotten and the result it caused.",
      "past result + because + subject + had + past participle",
      undefined,
      "Os ladrões conseguiram roubá-la porque eu havia esquecido de trancá-la.",
    ],
    [
      ["By the time the police ", bold("arrived"), ", the thief ", bold("had disappeared"), "."],
      "Use by the time to emphasize that one past event was already complete before another.",
      "Pause between the clauses and stress the completed earlier action.",
      "By the time + simple past, subject + had + past participle",
      undefined,
      "Quando a polícia chegou, o ladrão já havia desaparecido.",
    ],
    [
      ["I ", bold("had never experienced"), " such a strange coincidence before that day."],
      "Use had never + past participle for an experience that had not occurred before a particular past moment.",
      "Stress never and the exceptional event.",
      "subject + had never + past participle + before + past reference",
      undefined,
      "Eu nunca tinha vivido uma coincidência tão estranha antes daquele dia.",
    ],
    [
      ["The ", bold("mishap"), " became an emergency, but a ", bold("lucky break"), " turned the story into a triumph."],
      "Use exceptional-event vocabulary to classify surprising, difficult, or successful events in a story.",
      "Stress the event word that summarizes each stage.",
      "coincidence · dilemma · disaster · emergency · lucky break · mishap · mystery · triumph",
      undefined,
      "O contratempo virou uma emergência, mas um golpe de sorte transformou a história em triunfo.",
    ],
  ],
} satisfies LanguageFocusData;
