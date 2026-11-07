import { frozenVsFrostbite } from "./topics/frozen-vs-frostbite";
import { hearVsListen } from "./topics/hear-vs-listen";
import { poisonousVsVenomous } from "./topics/poisonous-vs-venomous";
import { quickVsFast } from "./topics/quick-vs-fast";
import { speakVsSayVsTell } from "./topics/speak-vs-say-vs-tell";

export const vocabularyTopics = [
  hearVsListen,
  speakVsSayVsTell,
  quickVsFast,
  frozenVsFrostbite,
  poisonousVsVenomous,
] as const;

export type VocabularyTopicId = (typeof vocabularyTopics)[number]["id"];

export const vocabularyTopicsById = Object.fromEntries(
  vocabularyTopics.map((topic) => [topic.id, topic]),
) as Record<VocabularyTopicId, (typeof vocabularyTopics)[number]>;

