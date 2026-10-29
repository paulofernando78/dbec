import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { coreGrammarTopics } from "@/data/grammar";
import { GrammarTopic } from "@/features/Grammar";

export default function Grammar() {
  return (
    <div>
      <PageHeader title="Grammar" />

      <PageSections
        subtitle={
          <>
            <ul className="mb-4 font-normal">
              {coreGrammarTopics.map((topic) => (
                <li key={topic.id} className="ml-4 flex items-center gap-2">
                  <span className="font-bold">•</span>
                  <a href={`#${topic.id}`}>{topic.title}</a>
                </li>
              ))}
            </ul>
          </>
        }
      >
        {coreGrammarTopics.map((topic) => (
          <Section
            key={topic.id}
            id={topic.id}
            label={topic.title}
            heading={2}
            showHeader={false}
            showInTableOfContents={false}
            className="mb-4"
          >
            <Card title={topic.title}>
              <p className="mb-4 text-slate-500">{topic.description}</p>
              <GrammarTopic topic={topic} />
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
