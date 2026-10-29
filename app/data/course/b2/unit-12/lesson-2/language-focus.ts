import type { LanguageFocusData } from "../../../lesson-step-types";
import { bold } from "@/helpers/content";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Discuss how hypothetical past events affect the present and describe travelers and journeys with compound adjectives.",
  items: [
    [
      ["If I ", bold("hadn't been"), " so careless, I ", bold("would still have"), " my wallet."],
      "Use a past perfect condition with would plus a base verb to describe a hypothetical past event and its present result.",
      "Stress the past cause and the present consequence; reduce would where natural.",
      "if + had (not) + past participle, would (not) + base verb",
      undefined,
      "Se eu não tivesse sido tão descuidado, ainda estaria com minha carteira.",
      "Mixed conditional: past to present",
    ],
    [
      ["If someone ", bold("hadn't helped"), " us, we ", bold("would still be trying"), " to reach the hotel."],
      "Use would be plus a gerund when the present consequence is an activity that would still be in progress.",
      "Stress still and the ongoing activity.",
      "if + past perfect, would still be + verb-ing",
      undefined,
      "Se alguém não tivesse nos ajudado, ainda estaríamos tentando chegar ao hotel.",
      "Ongoing present consequences",
    ],
    [
      ["If I'd researched the route, I ", bold("wouldn't be dealing"), " with this problem now."],
      "The time references make the mixed relationship clear: an unreal past condition produces a present consequence.",
      "Contrast the past action with now and emphasize the current problem.",
      "if + had + past participle, would (not) be + verb-ing + now",
      undefined,
      "Se eu tivesse pesquisado a rota, não estaria lidando com este problema agora.",
      "Past causes and current results",
    ],
    [
      ["The experience made me more ", bold("self-reliant, self-assured"), ", and ", bold("culturally aware"), "."],
      "Combine words to form compound adjectives that describe attitudes, abilities, and cultural awareness.",
      "Give the compound one main stress and pronounce both elements clearly.",
      "self-reliant · self-assured · self-motivated · culturally aware · culturally sensitive",
      undefined,
      "A experiência me tornou mais autossuficiente, confiante e culturalmente consciente.",
      "Compound personal qualities",
    ],
    [
      ["A good traveler is ", bold("open-minded, nonjudgmental"), ", and sometimes ", bold("nonconforming"), "."],
      "Use hyphenated or closed compound adjectives to describe how people respond to unfamiliar customs and expectations.",
      "Stress the second meaningful element in open-minded and the base adjective in prefixed forms.",
      "open-minded · nonjudgmental · nonconforming · light-hearted",
      undefined,
      "Um bom viajante tem mente aberta, não julga os outros e às vezes não segue convenções.",
      "Travel attitudes",
    ],
    [
      ["We chose a ", bold("well-planned, open-ended, low-cost"), " journey."],
      "Compound adjectives before a noun are commonly hyphenated when two or more words function together as one modifier.",
      "Use one stress group for each compound and place the main noun stress last.",
      "compound adjective + noun · often hyphenated before the noun",
      undefined,
      "Escolhemos uma viagem bem planejada, flexível e de baixo custo.",
      "Describing journeys",
    ],
  ],
} satisfies LanguageFocusData;
