import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const grammarTopics = [
  {
    id: "will-vs-going-to",
    title: "Will vs. Be going to",
    description: "Learn how to choose the right future form.",
  },
  {
    id: "maybe-vs-may-be",
    title: "Maybe vs. May be",
    description: "Learn when to write maybe as one word or may be as two words.",
  },
];

function Example({ english, portuguese }: { english: string; portuguese: string }) {
  return (
    <li>
      <span className="font-semibold text-[var(--text-color)]">{english}</span>{" "}
      <span className="text-slate-500">{portuguese}</span>
    </li>
  );
}

function GrammarUsage({
  title,
  meaning,
  pattern,
  children,
}: {
  title: string;
  meaning: string;
  pattern: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl bg-[var(--background)] p-4">
      <h3 className="text-xl font-black text-[var(--text-color)]">{title}</h3>
      <p className="mb-2 text-slate-500">{meaning}</p>
      <p className="mb-3 rounded-lg bg-[var(--surface)] px-3 py-2 font-mono text-sm">
        {pattern}
      </p>
      <ul className="grid gap-2">{children}</ul>
    </section>
  );
}

function GrammarContent({ id }: { id: string }) {
  if (id === "will-vs-going-to") {
    return (
      <div className="grid gap-4">
        <p>Both forms refer to the future, but they express different intentions.</p>
        <div className="flex flex-col gap-4">
          <GrammarUsage
            title="Will"
            meaning="Use it for spontaneous decisions, promises, offers, and predictions based on opinion."
            pattern="subject + will + base verb"
          >
            <Example english="I’ll answer the phone." portuguese="Eu vou atender o telefone." />
            <Example english="I think it will rain." portuguese="Acho que vai chover." />
          </GrammarUsage>
          <GrammarUsage
            title="Be going to"
            meaning="Use it for plans decided before speaking and predictions based on present evidence."
            pattern="subject + be + going to + base verb"
          >
            <Example english="I’m going to study tonight." portuguese="Vou estudar hoje à noite." />
            <Example english="Look at those clouds. It’s going to rain." portuguese="Olhe aquelas nuvens. Vai chover." />
          </GrammarUsage>
        </div>
        <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
          <strong>Quick rule:</strong> use <em>will</em> for a decision made now and
          {" "}<em>be going to</em> for an earlier plan or visible evidence.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <p>Both forms express possibility, but they have different grammatical functions.</p>
      <div className="flex flex-col gap-4">
        <GrammarUsage
          title="Maybe"
          meaning="An adverb meaning perhaps. It commonly appears at the beginning of a sentence."
          pattern="maybe + complete sentence"
        >
          <Example english="Maybe she is busy." portuguese="Talvez ela esteja ocupada." />
          <Example english="Maybe we can go tomorrow." portuguese="Talvez possamos ir amanhã." />
        </GrammarUsage>
        <GrammarUsage
          title="May be"
          meaning="The modal verb may followed by be. It normally follows the subject."
          pattern="subject + may be + complement"
        >
          <Example english="She may be busy." portuguese="Ela talvez esteja ocupada." />
          <Example english="It may be true." portuguese="Isso pode ser verdade." />
        </GrammarUsage>
      </div>
      <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
        <strong>Quick test:</strong> replace <em>maybe</em> with <em>perhaps</em>, or
        replace <em>may be</em> with <em>might be</em>.
      </p>
    </div>
  );
}

export default function Grammar() {
  return (
    <div>
      <PageHeader title="Grammar" />

      <PageSections subtitle="Which one?">
        {grammarTopics.map((topic) => (
          <Section
            key={topic.id}
            id={topic.id}
            label={topic.title}
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={topic.title} className="bg-[var(--surface)]">
              <p className="mb-4 text-slate-500">{topic.description}</p>
              <GrammarContent id={topic.id} />
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
