import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Express present wishes, past regrets, and personal values using wish, if, and if only structures.",
  items: [
    [
      ["I ", bold("wish I had"), " enough courage to apply."],
      "Use wish plus the simple past for a present situation you want to be different.",
      "Stress wish and the desired change.",
      "wish + simple past",
      undefined,
      "Eu gostaria de ter coragem suficiente para me candidatar.",
      "Present wishes",
    ],
    [
      ["I ", bold("wish I could find"), " more time to volunteer."],
      "Use wish plus could or would plus a base verb for a desired ability, opportunity, or future change.",
      "Stress could or would and the desired action.",
      "wish + could/would + base verb",
      undefined,
      "Eu gostaria de conseguir encontrar mais tempo para fazer trabalho voluntário.",
      "Future wishes",
    ],
    [
      ["I ", bold("wish I'd accepted"), " the position abroad."],
      "Use wish plus the past perfect to express regret about a past action or decision.",
      "Stress the past participle and use falling intonation for regret.",
      "wish + had + past participle",
      undefined,
      "Eu gostaria de ter aceitado a vaga no exterior.",
      "Past regrets",
    ],
    [
      ["If I ", bold("had gone"), ", I ", bold("could have become"), " more independent."],
      "Use if plus the past perfect and could or would have plus a past participle to imagine a different past result.",
      "Stress the unreal past action and imagined consequence.",
      "if + had + past participle, could/would have + past participle",
      undefined,
      "Se eu tivesse ido, poderia ter me tornado mais independente.",
      "Imagined past alternatives",
    ],
    [
      [bold("If only I were"), " more confident. / ", bold("If only I'd taken"), " that opportunity."],
      "Use if only for a strong present wish or a strong past regret. The main clause is often omitted.",
      "Use emphatic stress on only and the desired or regretted information.",
      "if only + simple past/could/would · if only + past perfect",
      undefined,
      "Se ao menos eu fosse mais confiante. / Se ao menos eu tivesse aproveitado aquela oportunidade.",
      "Strong wishes and regrets",
    ],
    [
      ["I value ", bold("compassion, discretion, generosity, honesty, kindness, resilience, respect, sensitivity"), ", and ", bold("tolerance"), "."],
      "Use the correct noun or adjective form to name a value or describe a person who demonstrates it.",
      "Notice stress and suffix changes between related nouns and adjectives.",
      "compassion/compassionate · discretion/discreet · generosity/generous · honesty/honest · indifference/indifferent · kindness/kind · resilience/resilient · respect/respectful · selfishness/selfish · sensitivity/sensitive · tenderness/tender · tolerance/tolerant",
      undefined,
      "Valorizo compaixão, discrição, generosidade, honestidade, bondade, resiliência, respeito, sensibilidade e tolerância.",
      "Personal values",
    ],
  ],
} satisfies LanguageFocusData;
