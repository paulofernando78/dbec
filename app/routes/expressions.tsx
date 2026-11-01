import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const expressionThemes = [
  {
    id: "everyday-conversation",
    title: "Everyday conversation",
    expressions: [
      "Better late than never",
      "So far, so good",
      "Speak of the devil",
    ],
  },
  {
    id: "opinions-and-agreement",
    title: "Opinions and agreement",
    expressions: [
      "If the shoe fits, wear it",
      "You can say that again",
      "To each their own",
    ],
  },
  {
    id: "problems-and-decisions",
    title: "Problems and decisions",
    expressions: [
      "Bite the bullet",
      "Back to square one",
      "It's not the end of the world",
    ],
  },
  {
    id: "work-and-progress",
    title: "Work and progress",
    expressions: [
      "Get the ball rolling",
      "Learn the ropes",
      "Go the extra mile",
    ],
  },
  {
    id: "feelings-and-relationships",
    title: "Feelings and relationships",
    expressions: [
      "Break the ice",
      "On the same wavelength",
      "Give someone the benefit of the doubt",
    ],
  },
] as const;

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
              <ul className="list-disc space-y-2 pl-5">
                {[...theme.expressions]
                  .sort((a, b) =>
                    a.localeCompare(b, "en", { sensitivity: "base" }),
                  )
                  .map((expression) => (
                    <li key={expression}>{expression}</li>
                  ))}
              </ul>
            </Card>
          </Section>
        ))}
      </PageSections>
    </div>
  );
}
