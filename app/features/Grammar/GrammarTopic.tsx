import { Card } from "@/components/ui/Card";
import { TriangleAlert } from "lucide-react";
import {
  grammarTopicsById,
  type GrammarTopic as GrammarTopicData,
  type GrammarTopicId,
} from "@/data/grammar";

export function GrammarTopic({ topic }: { topic: GrammarTopicData }) {
  return (
    <div className="grid gap-4">
      <p>{topic.introduction}</p>
      <div className="flex flex-col gap-4">
        {topic.usages.map((usage) => (
          <section
            key={usage.title}
            className="rounded-xl bg-[var(--background)] p-4"
          >
            <h3 className="text-xl font-black text-[var(--text-color)]">
              {usage.title}
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
      {topic.warnings?.map((warning) => (
        <aside
          key={warning.title}
          className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100"
        >
          <div className="mb-2 flex items-center gap-2">
            <TriangleAlert aria-hidden="true" className="size-5 shrink-0" />
            <h3 className="font-black">{warning.title}</h3>
          </div>
          <p className="mb-3">{warning.explanation}</p>
          <ul className="grid gap-1">
            {warning.examples.map((example) => (
              <li key={example.english}>
                <strong>{example.english}</strong>{" "}
                <span className="opacity-75">{example.portuguese}</span>
              </li>
            ))}
          </ul>
        </aside>
      ))}
      <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
        <strong>Quick rule:</strong> {topic.quickRule}
      </p>
    </div>
  );
}

export function GrammarTopicCards({ topicIds }: { topicIds: readonly GrammarTopicId[] }) {
  return (
    <div className="grid gap-4">
      {topicIds.map((topicId) => {
        const topic = grammarTopicsById[topicId];

        return (
          <Card key={topic.id} title={topic.title}>
            <p className="mb-4 text-slate-500">{topic.description}</p>
            <GrammarTopic topic={topic} />
          </Card>
        );
      })}
    </div>
  );
}

