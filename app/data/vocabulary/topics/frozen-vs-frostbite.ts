import type { VocabularyTopic } from "../types";

export const frozenVsFrostbite = {
  id: "frozen-vs-frostbite",
  title: "Frozen vs. Frostbite",
  description:
    "Understand the difference between being frozen and suffering an injury caused by extreme cold.",
  introduction:
    "These words are related to extreme cold, but they have different grammatical roles and meanings. Frozen describes a state; frostbite names an injury.",
  usages: [
    {
      word: "Frozen",
      meaning:
        "An adjective meaning turned into ice, preserved by freezing, or extremely cold. It is also the past participle of freeze.",
      pattern: "be frozen · frozen + noun · freeze → froze → frozen",
      examples: [
        { english: "The lake is frozen.", portuguese: "O lago está congelado." },
        { english: "We bought frozen vegetables.", portuguese: "Compramos vegetais congelados." },
        {
          english: "My hands are freezing, but they aren't frozen.",
          portuguese: "Minhas mãos estão gelando, mas não estão congeladas.",
        },
      ],
    },
    {
      word: "Frostbite",
      meaning:
        "A noun for an injury to the skin and deeper tissue caused by exposure to extreme cold. The related adjective is frostbitten.",
      pattern: "have / get / suffer from frostbite · frostbitten + body part",
      examples: [
        {
          english: "The climber suffered from frostbite.",
          portuguese: "O alpinista sofreu uma lesão causada pelo frio extremo.",
        },
        {
          english: "Frostbite often affects the fingers and toes.",
          portuguese: "A lesão por congelamento frequentemente afeta os dedos das mãos e dos pés.",
        },
        {
          english: "His frostbitten fingers needed medical treatment.",
          portuguese: "Seus dedos lesionados pelo frio precisaram de tratamento médico.",
        },
      ],
    },
  ],
  quickRule:
    "Something can be frozen, but a person has frostbite. To describe an injured body part, use frostbitten: frostbitten toes.",
} satisfies VocabularyTopic;

