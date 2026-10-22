import { useNavigate } from "react-router";

import { ProgressCollectionCard } from "@/components/content/ProgressCollectionCard";

export type StudioGame = {
  href: string;
  label: string;
  description: string;
  date: string;
};

type GameStudioCardProps = {
  studio: string;
  games: StudioGame[];
  gameCompletion: Record<string, boolean>;
  onGameCompletionChange: (gameId: string, completed: boolean) => void;
};

export function GameStudioCard({
  studio,
  games,
  gameCompletion,
  onGameCompletionChange,
}: GameStudioCardProps) {
  const navigate = useNavigate();
  const completedGames = games.filter(
    (game) => gameCompletion[game.href],
  ).length;

  const resetStudio = () => {
    games.forEach((game) => {
      if (gameCompletion[game.href]) {
        onGameCompletionChange(game.href, false);
      }
    });
  };

  return (
    <ProgressCollectionCard
      className="mb-4"
      title={studio}
      completedCount={completedGames}
      totalCount={games.length}
      resetAriaLabel={`Reset progress for ${studio}`}
      onReset={resetStudio}
      disableResetWhenEmpty
      items={games.map((game) => ({
        id: game.href,
        eyebrow: game.date,
        title: game.label,
        description: game.description,
        isCompleted: gameCompletion[game.href] ?? false,
        ariaLabel: `Open ${game.label}`,
        onClick: () => navigate(game.href),
      }))}
    />
  );
}
