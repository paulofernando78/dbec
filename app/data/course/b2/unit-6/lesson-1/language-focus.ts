import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Report and discuss news by distinguishing recent events from events at specific past times and using precise news vocabulary.",
  items: [
    [
      ["A severe storm ", bold("has caused"), " flooding across the region."],
      "Use the present perfect for a recent event when no finished past time is given and the result matters now.",
      "Contract has where natural and stress the newsworthy action and result.",
      "has/have + past participle · no finished past-time reference",
      undefined,
      "Uma tempestade forte causou enchentes em toda a região.",
      "Recent news",
    ],
    [
      ["The storm ", bold("reached"), " the coast late last night."],
      "Use the simple past when the event is connected to a specific finished time.",
      "Stress the event and the time reference.",
      "simple past + finished time: yesterday, last night, an hour ago, in 2025",
      undefined,
      "A tempestade chegou à costa ontem à noite.",
      "Specific past time",
    ],
    [
      [bold("Have they reported"), " any casualties? — No, they ", bold("haven't"), "."],
      "Use the present perfect to ask for the latest update when the relevant time period continues up to now.",
      "Use rising intonation in the question and stress reported and casualties.",
      "Have/Has + subject + past participle?",
      undefined,
      "Eles relataram alguma vítima? — Não, ainda não.",
      "News updates",
    ],
    [
      ["Officials ", bold("said this morning"), " that the evacuation was complete."],
      "A specific time expression requires the simple past, even when the information remains relevant.",
      "Emphasize the time reference when contrasting it with a newer update.",
      "simple past + specific time reference",
      undefined,
      "As autoridades disseram esta manhã que a evacuação estava concluída.",
      "News timeline",
    ],
    [
      ["The report covered an ", bold("epidemic, natural disaster, political crisis"), ", and ", bold("recession"), "."],
      "Use specific nouns to classify news events accurately.",
      "Use list intonation and pronounce each multisyllabic word with clear primary stress.",
      "epidemic · famine · hijacking · kidnapping · natural disaster · political crisis · rebellion · recession · robbery · scandal",
      undefined,
      "A reportagem abordou uma epidemia, um desastre natural, uma crise política e uma recessão.",
      "News events",
    ],
    [
      ["A ", bold("natural disaster"), " is an event such as a flood, earthquake, or volcanic eruption."],
      "Define a category with be plus a general noun and examples introduced by such as.",
      "Stress the category and each example; use a falling tone on the last item.",
      "A/An + category + is + definition + such as + examples",
      undefined,
      "Um desastre natural é um acontecimento como uma enchente, terremoto ou erupção vulcânica.",
      "Defining news vocabulary",
    ],
  ],
} satisfies LanguageFocusData;
