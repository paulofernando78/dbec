import { useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";

import { getGameSlug } from "@/data/games/games-slug";

export default function GameBuilder() {
  const { developer, slug } = useParams();
  const game = getGameSlug({ developer, slug });

  if (!game) {
    return <h1>Game not found.</h1>;
  }

  return (
    <>
      <Whiteboard {...game.whiteboard} />

      <PageSections>
        {game.sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            label={section.title}
            heading={3}
          >
            <List type="checkbox" items={section.items} />
          </Section>
        ))}
      </PageSections>
    </>
  );
}