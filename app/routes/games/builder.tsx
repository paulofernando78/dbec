import { useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";

import { getGameSlug } from "@/data/games/games-slug";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";

export default function GameBuilder() {
  const { developer, slug } = useParams();
  const game = getGameSlug({ developer, slug });

  if (!game) {
    return <h1>Game not found.</h1>;
  }

  const gameHref = `/games/${developer}/${slug}`;
  const gameCards = Object.values(gamesLucasArtsCardData);
  const gameCardIndex = gameCards.findIndex((card) => card.href === gameHref);
  const gameCard = gameCards[gameCardIndex];
  const displayedWhiteboard = gameCard
    ? {
        ...game.whiteboard,
        title: "GAMES",
        subtitle: gameCard.label,
        descriptions: [gameCard.description],
      }
    : game.whiteboard;

  return (
    <>
      <Whiteboard {...displayedWhiteboard} />

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
