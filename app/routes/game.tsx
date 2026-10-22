import { useEffect, useState } from "react";

import { GameStudioCard } from "@/components/games/GameStudioCard";
import { PageHeader } from "@/components/content/PageHeader";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";
import { gamesSierraCardData } from "@/data/games/sierra/games-sierra-card-data";

const gameStudios = [
  {
    studio: "Sierra",
    games: Object.values(gamesSierraCardData),
  },
  {
    studio: "LucasArts",
    games: Object.values(gamesLucasArtsCardData),
  },
];

export default function Game() {
  const [gameCompletion, setGameCompletion] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    fetch("/api/lesson-progress")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load game progress.");
        return response.json();
      })
      .then((result) => setGameCompletion(result.lessons ?? {}))
      .catch(() => setGameCompletion({}));
  }, []);

  const saveGameCompletion = (gameId: string, completed: boolean) => {
    const previous = gameCompletion[gameId] ?? false;
    setGameCompletion((current) => ({ ...current, [gameId]: completed }));

    void fetch("/api/lesson-progress", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId: gameId, completed }),
    }).then((response) => {
      if (!response.ok) {
        setGameCompletion((current) => ({ ...current, [gameId]: previous }));
      }
    });
  };

  return (
    <div>
      <PageHeader title="Games" />
      <PageSections
        showTableOfContents={false}
        subtitle="GAMES"
      >
        <Section id="game-studios" label="Studios">
          {gameStudios.map((group) => (
            <GameStudioCard
              key={group.studio}
              studio={group.studio}
              games={group.games}
              gameCompletion={gameCompletion}
              onGameCompletionChange={saveGameCompletion}
            />
          ))}
        </Section>
      </PageSections>
    </div>
  );
}
