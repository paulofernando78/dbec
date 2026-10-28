import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const vocabularyTopics = [
  {
    id: "hear-vs-listen",
    title: "Hear vs. Listen",
    description: "Learn when to use hear and listen in everyday English.",
  },
  {
    id: "speak-vs-say-vs-tell",
    title: "Speak vs. Say vs. Tell",
    description: "Understand the differences between speak, say, and tell.",
  },
  {
    id: "quick-vs-fast",
    title: "Quick vs. Fast",
    description: "Learn the difference between something that takes little time and something that moves at high speed.",
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

function WordUsage({
  word,
  meaning,
  pattern,
  children,
}: {
  word: string;
  meaning: string;
  pattern: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl bg-[var(--background)] p-4">
      <h3 className="text-xl font-black text-[var(--text-color)]">{word}</h3>
      <p className="mb-2 text-slate-500">{meaning}</p>
      <p className="mb-3 rounded-lg bg-[var(--surface)] px-3 py-2 font-mono text-sm">
        {pattern}
      </p>
      <ul className="grid gap-2">{children}</ul>
    </section>
  );
}

function TopicContent({ id }: { id: string }) {
  if (id === "hear-vs-listen") {
    return (
      <div className="grid gap-4">
        <p>
          Both verbs are related to sound, but they describe different kinds of
          attention.
        </p>
        <div className="flex flex-col gap-4">
          <WordUsage
            word="Hear"
            meaning="A sound reaches your ears naturally. You do not need to make an effort."
            pattern="hear + sound / person"
          >
            <Example english="I can hear music." portuguese="Eu consigo ouvir música." />
            <Example english="Did you hear that noise?" portuguese="Você ouviu aquele barulho?" />
          </WordUsage>
          <WordUsage
            word="Listen"
            meaning="You pay attention to a sound intentionally."
            pattern="listen to + sound / person"
          >
            <Example english="Listen to me." portuguese="Escute-me." />
            <Example english="She listens to podcasts." portuguese="Ela escuta podcasts." />
          </WordUsage>
        </div>
        <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
          <strong>Quick rule:</strong> use <em>hear</em> for receiving a sound and
          {" "}<em>listen to</em> for paying attention to it.
        </p>
      </div>
    );
  }

  if (id === "speak-vs-say-vs-tell") {
    return (
      <div className="grid gap-4">
      <p>
        These verbs all involve communication, but they focus on different parts
        of the message.
      </p>
      <div className="flex flex-col gap-4">
        <WordUsage
          word="Speak"
          meaning="Focuses on speaking, languages, or a formal conversation."
          pattern="speak + language / speak to + person"
        >
          <Example english="She speaks English." portuguese="Ela fala inglês." />
          <Example english="Can I speak to Ana?" portuguese="Posso falar com a Ana?" />
        </WordUsage>
        <WordUsage
          word="Say"
          meaning="Focuses on the words or message someone expresses."
          pattern="say + something / say something to + person"
        >
          <Example english='He said, “Hello.”' portuguese='Ele disse: “Olá”.' />
          <Example english="What did she say to you?" portuguese="O que ela disse a você?" />
        </WordUsage>
        <WordUsage
          word="Tell"
          meaning="Focuses on giving information directly to a person."
          pattern="tell + person + something"
        >
          <Example english="Tell me the truth." portuguese="Conte-me a verdade." />
          <Example english="She told us a story." portuguese="Ela nos contou uma história." />
        </WordUsage>
      </div>
      <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
        <strong>Quick rule:</strong> <em>say something</em>, but <em>tell someone
        something</em>. Use <em>speak</em> for languages and the act of speaking.
      </p>
      </div>
    );
  }

  if (id === "quick-vs-fast") {
    return (
      <div className="grid gap-4">
        <p>
          Both words can mean “rápido,” but <em>quick</em> usually emphasizes a
          short amount of time, while <em>fast</em> emphasizes speed.
        </p>
        <div className="flex flex-col gap-4">
          <WordUsage
            word="Quick"
            meaning="Something happens, is done, or is completed in a short time. It can also describe a person who understands or reacts rapidly."
            pattern="quick + action / event / response · quickly + verb"
          >
            <Example english="Let's have a quick meeting." portuguese="Vamos fazer uma reunião rápida." />
            <Example english="She gave me a quick answer." portuguese="Ela me deu uma resposta rápida." />
            <Example english="He quickly finished the task." portuguese="Ele terminou a tarefa rapidamente." />
          </WordUsage>
          <WordUsage
            word="Fast"
            meaning="Someone or something moves, operates, or happens at high speed. Fast can be an adjective or an adverb."
            pattern="fast + person / vehicle / machine · verb + fast"
          >
            <Example english="This is a fast car." portuguese="Este é um carro veloz." />
            <Example english="She runs very fast." portuguese="Ela corre muito rápido." />
            <Example english="We need a faster internet connection." portuguese="Precisamos de uma conexão de internet mais rápida." />
          </WordUsage>
        </div>
        <p className="rounded-xl bg-blue-50 p-3 text-blue-950 dark:bg-blue-950 dark:text-blue-100">
          <strong>Quick rule:</strong> use <em>quick</em> for something that takes
          little time and <em>fast</em> for high speed. The adverb of <em>quick</em>
          is <em>quickly</em>, but <em>fast</em> is already an adverb—do not use
          <em> fastly</em>.
        </p>
      </div>
    );
  }

  return null;
}

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
              <TopicContent id={topic.id} />
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
