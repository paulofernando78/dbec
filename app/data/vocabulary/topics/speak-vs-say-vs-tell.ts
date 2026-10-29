import type { VocabularyTopic } from "../types";

export const speakVsSayVsTell = {
  id: "speak-vs-say-vs-tell",
  title: "Speak vs. Say vs. Tell",
  description: "Understand the differences between speak, say, and tell.",
  introduction:
    "These verbs all involve communication, but they focus on different parts of the message.",
  usages: [
    {
      word: "Speak",
      meaning: "Focuses on speaking, languages, or a formal conversation.",
      pattern: "speak + language / speak to + person",
      examples: [
        { english: "She speaks English.", portuguese: "Ela fala inglês." },
        { english: "Can I speak to Ana?", portuguese: "Posso falar com a Ana?" },
      ],
    },
    {
      word: "Say",
      meaning: "Focuses on the words or message someone expresses.",
      pattern: "say + something / say something to + person",
      examples: [
        { english: "He said, “Hello.”", portuguese: "Ele disse: “Olá”." },
        {
          english: "What did she say to you?",
          portuguese: "O que ela disse a você?",
        },
      ],
    },
    {
      word: "Tell",
      meaning: "Focuses on giving information directly to a person.",
      pattern: "tell + person + something",
      examples: [
        { english: "Tell me the truth.", portuguese: "Conte-me a verdade." },
        { english: "She told us a story.", portuguese: "Ela nos contou uma história." },
      ],
    },
  ],
  quickRule:
    "Say something, but tell someone something. Use speak for languages and the act of speaking.",
} satisfies VocabularyTopic;

