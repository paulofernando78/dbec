import { coreGrammarTopics } from "./core-topics";

export const allGrammarTopics = coreGrammarTopics;

export type GrammarTopicId = (typeof allGrammarTopics)[number]["id"];

export const grammarTopicsById = Object.fromEntries(
  allGrammarTopics.map((topic) => [topic.id, topic]),
) as Record<GrammarTopicId, (typeof allGrammarTopics)[number]>;

