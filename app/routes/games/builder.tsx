import { useNavigate, useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { SequenceNavigation } from "@/components/content/SequenceNavigation";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { List } from "@/components/content/List";

import { getGameSlug } from "@/data/games/games-slug";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "@/data/games/sierra/games-sierra-card-data";

export default function GameBuilder() {
  const navigate = useNavigate();
  const { developer, slug } = useParams();
  const game = getGameSlug({ developer, slug });

  if (!game) {
    return <h1>Game not found.</h1>;
  }

  const gameHref = `/games/${developer}/${slug}`;
  const gameCards = [
    ...Object.values(gamesLucasArtsCardData),
    ...Object.values(gamesSierraCardData),
  ];
  const gameCardIndex = gameCards.findIndex((card) => card.href === gameHref);
  const gameCard = gameCards[gameCardIndex];
  const previousGame = gameCards[gameCardIndex - 1];
  const nextGame = gameCards[gameCardIndex + 1];
  const displayedHeader = gameCard
    ? {
        ...game.whiteboard,
        title: "GAMES",
        subtitle: gameCard.label,
        descriptions: [gameCard.description],
      }
    : game.whiteboard;

  return (
    <>
      <PageHeader {...displayedHeader} />

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
      <SequenceNavigation
        previousLabel={previousGame?.label ?? "Games"}
        nextLabel={nextGame?.label ?? "Games"}
        onPrevious={() => navigate(previousGame?.href ?? "/games")}
        onNext={() => navigate(nextGame?.href ?? "/games")}
        ariaLabel="Games"
      />
    </>
  );
}
