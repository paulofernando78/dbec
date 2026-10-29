export type VocabularyExample = {
  english: string;
  portuguese: string;
};

export type WordUsage = {
  word: string;
  meaning: string;
  pattern: string;
  examples: readonly VocabularyExample[];
};

export type VocabularyTopic = {
  id: string;
  title: string;
  description: string;
  introduction: string;
  usages: readonly WordUsage[];
  quickRule: string;
};

