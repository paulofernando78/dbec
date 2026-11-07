import type { VocabularyTopic } from "../types";

export const poisonousVsVenomous = {
  id: "poisonous-vs-venomous",
  title: "Poisonous vs. Venomous",
  description:
    "Learn whether a toxin harms you through contact or ingestion, or is injected by a bite or sting.",
  introduction:
    "Both words describe something toxic, but the toxin reaches the victim in different ways. Poison is absorbed, touched, inhaled, or swallowed; venom is actively injected.",
  usages: [
    {
      word: "Poisonous",
      meaning:
        "Able to cause illness or death when eaten, touched, inhaled, or absorbed. Poisonous can describe plants, fungi, chemicals, and animals.",
      pattern: "poisonous + noun · be poisonous to + person / animal",
      examples: [
        {
          english: "Those berries are poisonous, so don't eat them.",
          portuguese: "Essas frutas são venenosas, então não as coma.",
        },
        {
          english: "Some frogs have poisonous skin.",
          portuguese: "Alguns sapos têm a pele venenosa.",
        },
        {
          english: "The mushroom may be poisonous to humans.",
          portuguese: "O cogumelo pode ser venenoso para os seres humanos.",
        },
      ],
    },
    {
      word: "Venomous",
      meaning:
        "Able to inject venom into another animal through a bite, sting, fang, spine, or similar structure.",
      pattern: "venomous + animal · venomous bite / sting",
      examples: [
        {
          english: "The cobra is a venomous snake.",
          portuguese: "A cobra é uma serpente peçonhenta.",
        },
        {
          english: "A venomous spider bit his hand.",
          portuguese: "Uma aranha peçonhenta mordeu a mão dele.",
        },
        {
          english: "The scorpion delivers venom through its sting.",
          portuguese: "O escorpião injeta peçonha por meio do ferrão.",
        },
      ],
    },
  ],
  quickRule:
    "If you bite it and become ill, it is poisonous. If it bites or stings you and injects a toxin, it is venomous. In Portuguese, poisonous is usually venenoso, while venomous animals are more precisely called peçonhentos.",
} satisfies VocabularyTopic;
