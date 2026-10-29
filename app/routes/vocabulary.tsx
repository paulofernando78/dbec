import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { vocabularyTopics } from "@/data/vocabulary";
import { VocabularyTopic } from "@/features/Vocabulary";

export default function Vocabulary() {
  return (
    <div>
      <PageHeader title="Vocabulary" />

      <PageSections subtitle="Which one?">
        {vocabularyTopics.map((topic) => (
          <Section
            key={topic.id}
            id={topic.id}
            label={topic.title}
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={topic.title}>
              <p className="mb-4 text-slate-500">{topic.description}</p>
              <VocabularyTopic topic={topic} />
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
