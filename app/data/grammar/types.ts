export type GrammarExample = {
  english: string;
  portuguese: string;
};

export type GrammarUsage = {
  title: string;
  meaning: string;
  pattern: string;
  examples: readonly GrammarExample[];
};

export type GrammarWarning = {
  title: string;
  explanation: string;
  examples: readonly GrammarExample[];
};

export type GrammarTopic = {
  id: string;
  title: string;
  description: string;
  introduction: string;
  usages: readonly GrammarUsage[];
  warnings?: readonly GrammarWarning[];
  quickRule: string;
};

