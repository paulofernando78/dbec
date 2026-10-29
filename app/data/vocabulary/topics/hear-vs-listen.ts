import type { VocabularyTopic } from "../types";

export const hearVsListen = {
  id: "hear-vs-listen",
  title: "Hear vs. Listen",
  description: "Learn when to use hear and listen in everyday English.",
  introduction:
    "Both verbs are related to sound, but they describe different kinds of attention.",
  usages: [
    {
      word: "Hear",
      meaning:
        "A sound reaches your ears naturally. You do not need to make an effort.",
      pattern: "hear + sound / person",
      examples: [
        { english: "I can hear music.", portuguese: "Eu consigo ouvir música." },
        {
          english: "Did you hear that noise?",
          portuguese: "Você ouviu aquele barulho?",
        },
      ],
    },
    {
      word: "Listen",
      meaning: "You pay attention to a sound intentionally.",
      pattern: "listen to + sound / person",
      examples: [
        { english: "Listen to me.", portuguese: "Escute-me." },
        {
          english: "She listens to podcasts.",
          portuguese: "Ela escuta podcasts.",
        },
      ],
    },
  ],
  quickRule:
    "Use hear for receiving a sound and listen to for paying attention to it.",
} satisfies VocabularyTopic;

