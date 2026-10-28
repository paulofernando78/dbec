import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const expressionTopics = [
  {
    id: "if-the-shoe-fits",
    title: "If the shoe fits",
    description: "Learn how to say “se a carapuça serve” naturally in English.",
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

function ExpressionUsage({
  expression,
  meaning,
  usage,
  children,
}: {
  expression: string;
  meaning: string;
  usage: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl bg-[var(--background)] p-4">
      <h3 className="text-xl font-black text-[var(--text-color)]">{expression}</h3>
      <p className="mb-2 text-slate-500">{meaning}</p>
      <p className="mb-3 rounded-lg bg-[var(--surface)] px-3 py-2 font-mono text-sm">
        {usage}
      </p>
      <ul className="grid gap-2">{children}</ul>
    </section>
  );
}

function ExpressionContent({ id }: { id: string }) {
  if (id === "if-the-shoe-fits") {
    return (
      <div className="grid gap-4">
        <p>
          Use this expression when a criticism or description seems to apply to
          someone. It suggests that the person should recognize or accept it.
        </p>
        <div className="flex flex-col gap-4">
          <ExpressionUsage
            expression="If the shoe fits, wear it"
            meaning="The usual American English equivalent of “se a carapuça serve, vista-a.”"
            usage="American English · usually teasing, ironic, or critical"
          >
            <Example
              english='“Are you saying I’m impatient?” “If the shoe fits, wear it.”'
              portuguese='“Você está dizendo que sou impaciente?” “Se a carapuça serve, vista-a.”'
            />
            <Example
              english="I didn't mention anyone, but if the shoe fits..."
              portuguese="Eu não mencionei ninguém, mas se a carapuça serviu..."
            />
          </ExpressionUsage>
          <ExpressionUsage
            expression="If the cap fits, wear it"
            meaning="The common British English version. It has the same figurative meaning."
            usage="British English · if + description applies, accept it"
          >
            <Example
              english='“Do you think I complain too much?” “Well, if the cap fits...”'
              portuguese='“Você acha que reclamo demais?” “Bem, se a carapuça serve...”'
            />
          </ExpressionUsage>
        </div>
        <p className="rounded-xl bg-amber-50 p-3 text-amber-950 dark:bg-amber-950 dark:text-amber-100">
          <strong>Usage note:</strong> this expression can sound sarcastic or
          confrontational. Use it carefully, especially in formal or sensitive
          conversations.
        </p>
      </div>
    );
  }

  return null;
}

export default function Expressions() {
  return (
    <div>
      <PageHeader title="Expressions" />

      <PageSections subtitle="What does it mean?">
        {expressionTopics.map((topic) => (
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
              <ExpressionContent id={topic.id} />
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
