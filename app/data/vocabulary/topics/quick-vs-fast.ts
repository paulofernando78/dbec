import type { VocabularyTopic } from "../types";

export const quickVsFast = {
  id: "quick-vs-fast",
  title: "Quick vs. Fast",
  description:
    "Learn the difference between something that takes little time and something that moves at high speed.",
  introduction:
    "Both words can mean “rápido,” but quick usually emphasizes a short amount of time, while fast emphasizes speed.",
  usages: [
    {
      word: "Quick",
      meaning:
        "Something happens, is done, or is completed in a short time. It can also describe a person who understands or reacts rapidly.",
      pattern: "quick + action / event / response · quickly + verb",
      examples: [
        { english: "Let's have a quick meeting.", portuguese: "Vamos fazer uma reunião rápida." },
        { english: "She gave me a quick answer.", portuguese: "Ela me deu uma resposta rápida." },
        { english: "He quickly finished the task.", portuguese: "Ele terminou a tarefa rapidamente." },
      ],
    },
    {
      word: "Fast",
      meaning:
        "Someone or something moves, operates, or happens at high speed. Fast can be an adjective or an adverb.",
      pattern: "fast + person / vehicle / machine · verb + fast",
      examples: [
        { english: "This is a fast car.", portuguese: "Este é um carro veloz." },
        { english: "She runs very fast.", portuguese: "Ela corre muito rápido." },
        {
          english: "We need a faster internet connection.",
          portuguese: "Precisamos de uma conexão de internet mais rápida.",
        },
      ],
    },
  ],
  quickRule:
    "Use quick for something that takes little time and fast for high speed. The adverb of quick is quickly, but fast is already an adverb—do not use fastly.",
} satisfies VocabularyTopic;

