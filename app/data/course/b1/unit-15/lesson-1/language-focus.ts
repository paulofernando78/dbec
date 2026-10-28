import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction: "Give recommendations and opinions about rules and regulations.",
  items: [
    [
      ["Clubs ", bold("should be required"), " to install soundproof walls."],
      "Use should be plus the past participle when you think a rule is a good idea.",
      "Stress should and the action being recommended.",
      "should be + past participle",
      undefined,
      "Os clubes deveriam ser obrigados a instalar paredes com isolamento acústico.",
    ],
    [
      ["Pet owners ", bold("shouldn't be allowed"), " to walk dogs without a leash."],
      "Use shouldn't be plus the past participle to recommend prohibiting an action.",
      "Keep shouldn't clear and reduce be in connected speech.",
      "shouldn't be + past participle",
      undefined,
      "Donos de animais não deveriam poder passear com cães sem coleira.",
    ],
    [
      ["People ", bold("ought to be required"), " to wear a helmet when riding a bike."],
      "Use ought to be as an alternative to should be for recommendations.",
      "To and be are reduced; stress required and helmet.",
      "ought to be + past participle",
      undefined,
      "As pessoas deveriam ser obrigadas a usar capacete ao andar de bicicleta.",
    ],
    [
      ["A law ", bold("must be passed"), " to control pollution from vehicles."],
      "Use must be plus the past participle when you believe an action is absolutely necessary.",
      "Stress must to emphasize necessity.",
      "must be + past participle",
      undefined,
      "Uma lei precisa ser aprovada para controlar a poluição dos veículos.",
    ],
    [
      ["Riding a bike on the sidewalk ", bold("mustn't be permitted"), "."],
      "Use mustn't be to state that an action is unacceptable or prohibited.",
      "Do not confuse mustn't with the weaker shouldn't.",
      "mustn't be + past participle",
      undefined,
      "Andar de bicicleta na calçada não deve ser permitido.",
    ],
    [
      ["Something ", bold("has to be done"), " to stop littering."],
      "Use has to be plus the past participle to describe an action as necessary.",
      "Has to is reduced in natural speech; stress done and stop littering.",
      "has / have to be + past participle",
      undefined,
      "Algo precisa ser feito para acabar com o descarte de lixo nas ruas.",
    ],
    [
      ["That sounds interesting, but I think there may be a better solution."],
      "Acknowledge another idea before offering a different opinion politely.",
      "Use contrastive stress after but, on the other hand, or however.",
      "That sounds ..., but ... · On the other hand, ... · However, ...",
      undefined,
      "Isso parece interessante, mas acho que pode haver uma solução melhor.",
    ],
  ],
} satisfies LanguageFocusData;
