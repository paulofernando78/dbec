import { Card } from "@/components/ui/Card";
import {
  vocabularyTopicsById,
  type VocabularyTopic as VocabularyTopicData,
  type VocabularyTopicId,
} from "@/data/vocabulary";

export function VocabularyTopic({ topic }: { topic: VocabularyTopicData }) {
  return (
    <div className="grid gap-4">
      <p>{topic.introduction}</p>
      <div className="flex flex-col gap-4">
        {topic.usages.map((usage) => (
          <section
            key={usage.word}
            className="rounded-xl bg-[var(--background)] p-4"
          >
            <h3 className="text-xl font-black text-[var(--text-color)]">
              {usage.word}
            </h3>
            <p className="mb-2 text-slate-500">{usage.meaning}</p>
            <p className="mb-3 rounded-lg bg-[var(--surface)] px-3 py-2 font-mono text-sm">
              {usage.pattern}
            </p>
            <ul className="grid gap-2">
              {usage.examples.map((example) => (
                <li key={example.english}>
                  <span className="font-semibold text-[var(--text-color)]">
                    {example.english}
                  </span>{" "}
                  <span className="text-slate-500">{example.portuguese}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
        <strong>Quick rule:</strong> {topic.quickRule}
      </p>
    </div>
  );
}

export function VocabularyTopicCards({
  topicIds,
}: {
  topicIds: readonly VocabularyTopicId[];
}) {
  return (
    <div className="grid gap-4">
      {topicIds.map((topicId) => {
        const topic = vocabularyTopicsById[topicId];

        return (
          <Card key={topic.id} title={topic.title}>
            <p className="mb-4 text-slate-500">{topic.description}</p>
            <VocabularyTopic topic={topic} />
          </Card>
        );
      })}
    </div>
  );
}

