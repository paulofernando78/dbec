import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Audio } from "@/components/ui/Audio";
import { Section } from "@/components/ui/Section";

type Expression = {
  expression: string;
  meaning: string;
  examples: readonly { english: string; portuguese: string }[];
};

type ExpressionTheme = {
  id: string;
  title: string;
  expressions: readonly Expression[];
};

const expressionThemes: readonly ExpressionTheme[] = [
  {
    id: "everyday-conversation",
    title: "Everyday conversation",
    expressions: [
      {
        expression: "Better late than never",
        meaning: "É melhor fazer algo com atraso do que nunca fazer.",
        examples: [
          { english: "I finally started exercising. Better late than never!", portuguese: "Finalmente comecei a me exercitar. Antes tarde do que nunca!" },
          { english: "He apologized after a month, but better late than never.", portuguese: "Ele pediu desculpas depois de um mês, mas antes tarde do que nunca." },
        ],
      },
      {
        expression: "So far, so good",
        meaning: "Até agora, tudo está indo bem.",
        examples: [
          { english: "How is your new job? So far, so good.", portuguese: "Como está seu novo emprego? Até agora, tudo bem." },
          { english: "We've finished half the project. So far, so good.", portuguese: "Terminamos metade do projeto. Até agora, tudo está indo bem." },
        ],
      },
      {
        expression: "Speak of the devil",
        meaning: "Usada quando a pessoa de quem você estava falando aparece.",
        examples: [
          { english: "We were just talking about you. Speak of the devil!", portuguese: "Estávamos falando de você agora mesmo. Falando no diabo!" },
          { english: "Speak of the devil—here comes Lucas now.", portuguese: "Falando nele—o Lucas está chegando agora." },
        ],
      },
    ],
  },
  {
    id: "opinions-and-agreement",
    title: "Opinions and agreement",
    expressions: [
      {
        expression: "If the shoe fits, wear it",
        meaning: "Se uma crítica ou descrição se aplica a você, aceite-a.",
        examples: [
          { english: '“Are you saying I’m impatient?” “If the shoe fits, wear it.”', portuguese: '“Você está dizendo que sou impaciente?” “Se a carapuça serve, vista-a.”' },
          { english: "I didn't mention anyone, but if the shoe fits...", portuguese: "Eu não mencionei ninguém, mas se a carapuça serviu..." },
        ],
      },
      {
        expression: "You can say that again",
        meaning: "Concordo totalmente com o que você acabou de dizer.",
        examples: [
          { english: '“It’s really hot today.” “You can say that again!”', portuguese: '“Está muito quente hoje.” “Nem me fale!”' },
          { english: '“That test was difficult.” “You can say that again.”', portuguese: '“Aquela prova foi difícil.” “Com certeza.”' },
        ],
      },
      {
        expression: "To each their own",
        meaning: "Cada pessoa tem seus próprios gostos e preferências.",
        examples: [
          { english: "I don't enjoy camping, but to each their own.", portuguese: "Não gosto de acampar, mas cada um com seu gosto." },
          { english: "She loves working at night. To each their own.", portuguese: "Ela adora trabalhar à noite. Cada um sabe de si." },
        ],
      },
    ],
  },
  {
    id: "problems-and-decisions",
    title: "Problems and decisions",
    expressions: [
      {
        expression: "Bite the bullet",
        meaning: "Enfrentar uma situação difícil ou desagradável com coragem.",
        examples: [
          { english: "I hate going to the dentist, but I'll bite the bullet.", portuguese: "Odeio ir ao dentista, mas vou encarar." },
          { english: "We need to bite the bullet and discuss the problem.", portuguese: "Precisamos encarar a situação e discutir o problema." },
        ],
      },
      {
        expression: "Back to square one",
        meaning: "Voltar ao início porque uma tentativa não funcionou.",
        examples: [
          { english: "The plan failed, so we're back to square one.", portuguese: "O plano fracassou, então voltamos à estaca zero." },
          { english: "If this doesn't work, it will be back to square one.", portuguese: "Se isso não funcionar, será preciso começar tudo de novo." },
        ],
      },
      {
        expression: "It's not the end of the world",
        meaning: "O problema não é tão grave quanto parece.",
        examples: [
          { english: "You made a mistake, but it's not the end of the world.", portuguese: "Você cometeu um erro, mas não é o fim do mundo." },
          { english: "If we miss this bus, it's not the end of the world.", portuguese: "Se perdermos este ônibus, não será o fim do mundo." },
        ],
      },
    ],
  },
  {
    id: "work-and-progress",
    title: "Work and progress",
    expressions: [
      {
        expression: "Get the ball rolling",
        meaning: "Começar uma atividade, projeto ou processo.",
        examples: [
          { english: "Let's get the ball rolling with a quick introduction.", portuguese: "Vamos dar início com uma breve apresentação." },
          { english: "I'll send the first email to get the ball rolling.", portuguese: "Vou enviar o primeiro e-mail para colocar o processo em andamento." },
        ],
      },
      {
        expression: "Learn the ropes",
        meaning: "Aprender como um trabalho ou atividade funciona.",
        examples: [
          { english: "It took me a few weeks to learn the ropes.", portuguese: "Levei algumas semanas para aprender como tudo funcionava." },
          { english: "Maria will help you learn the ropes.", portuguese: "A Maria ajudará você a pegar o jeito do trabalho." },
        ],
      },
      {
        expression: "Go the extra mile",
        meaning: "Fazer mais do que o esperado para alcançar um bom resultado.",
        examples: [
          { english: "She always goes the extra mile for her clients.", portuguese: "Ela sempre faz mais do que o esperado por seus clientes." },
          { english: "We went the extra mile to finish on time.", portuguese: "Fizemos um esforço extra para terminar no prazo." },
        ],
      },
    ],
  },
  {
    id: "feelings-and-relationships",
    title: "Feelings and relationships",
    expressions: [
      {
        expression: "Break the ice",
        meaning: "Iniciar uma conversa para deixar as pessoas mais à vontade.",
        examples: [
          { english: "He told a joke to break the ice.", portuguese: "Ele contou uma piada para quebrar o gelo." },
          { english: "A simple question can help break the ice.", portuguese: "Uma pergunta simples pode ajudar a quebrar o gelo." },
        ],
      },
      {
        expression: "On the same wavelength",
        meaning: "Ter pensamentos, sentimentos ou opiniões semelhantes.",
        examples: [
          { english: "My business partner and I are on the same wavelength.", portuguese: "Meu sócio e eu estamos em sintonia." },
          { english: "We work well together because we're on the same wavelength.", portuguese: "Trabalhamos bem juntos porque pensamos da mesma forma." },
        ],
      },
      {
        expression: "Give someone the benefit of the doubt",
        meaning: "Acreditar na pessoa quando não há provas suficientes contra ela.",
        examples: [
          { english: "I'll give him the benefit of the doubt this time.", portuguese: "Vou dar a ele o benefício da dúvida desta vez." },
          { english: "She was late, but let's give her the benefit of the doubt.", portuguese: "Ela se atrasou, mas vamos presumir que teve um bom motivo." },
        ],
      },
    ],
  },
];

function ExpressionCard({ expression, meaning, examples }: Expression) {
  return (
    <section className="rounded-xl bg-[var(--background)] p-4">
      <div className="mb-4 flex items-center gap-3">
        <Audio
          asButton
          src={expression}
          fallbackText={expression}
          speechLang="en-US"
          ariaLabel={`Play ${expression}`}
        />
        <h3 className="text-xl font-black text-[var(--text-color)]">
          {expression}
        </h3>
      </div>
      <p className="mb-4 text-slate-500">{meaning}</p>
      <ul className="grid gap-3">
        {examples.map((example) => (
          <li key={example.english} className="flex items-start gap-3">
            <Audio
              asButton
              src={example.english}
              fallbackText={example.english}
              speechLang="en-US"
              ariaLabel={`Play ${example.english}`}
            />
            <div className="min-w-0 pt-1">
              <p className="font-semibold text-[var(--text-color)]">
                {example.english}
              </p>
              <p className="text-slate-500">{example.portuguese}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Expressions() {
  return (
    <div>
      <PageHeader title="Expressions" />

      <PageSections subtitle="Expressions by theme">
        {expressionThemes.map((theme) => (
          <Section
            key={theme.id}
            id={theme.id}
            label={theme.title}
            heading={2}
            showHeader={false}
            className="mb-4"
          >
            <Card title={theme.title}>
              <div className="grid gap-4">
                {[...theme.expressions]
                  .sort((a, b) =>
                    a.expression.localeCompare(b.expression, "en", {
                      sensitivity: "base",
                    }),
                  )
                  .map((expression) => (
                  <ExpressionCard key={expression.expression} {...expression} />
                  ))}
              </div>
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
