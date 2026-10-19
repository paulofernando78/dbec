import { LockKeyhole, LockKeyholeOpen, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/Button";

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
  const completedGames = games.filter((game) => gameCompletion[game.href]).length;

  const resetStudio = () => {
    games.forEach((game) => {
      if (gameCompletion[game.href]) {
        onGameCompletionChange(game.href, false);
      }
    });
  };

  return (
    <article className="mb-4 overflow-hidden rounded-xl border border-gray-300 bg-gray-50">
      <header className="flex items-start justify-between gap-4 border-b border-gray-300 bg-gray-200 p-4">
        <h3 className="text-2xl font-black text-black">{studio}</h3>

        <div className="flex shrink-0 flex-col items-center gap-3">
          <span className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-black">
            {completedGames} / {games.length}
          </span>
          <Button
            ariaLabel={`Reset progress for ${studio}`}
            icon={<RotateCcw />}
            onClick={resetStudio}
            disabled={completedGames === 0}
          />
        </div>
      </header>

      {games.length > 0 && (
        <ol className="px-4 py-4">
          {games.map((game, index) => {
            const isLast = index === games.length - 1;
            const isCompleted = gameCompletion[game.href] ?? false;

            return (
              <li
                key={game.href}
                className="relative grid min-h-36 grid-cols-[60px_minmax(0,1fr)] gap-4 pb-5 last:min-h-15 last:pb-0"
              >
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-5 left-6.5 top-13 z-0 w-2 bg-slate-300"
                  />
                )}

                <Button
                  ariaLabel={`Open ${game.label}`}
                  icon={isCompleted ? <LockKeyholeOpen /> : <LockKeyhole />}
                  onClick={() => navigate(game.href)}
                  className={`z-10 ${
                    isCompleted ? "[&_svg]:stroke-slate-600!" : ""
                  }`}
                />

                <div className="min-w-0 pt-1">
                  <p className="text-xs font-bold uppercase text-orange-700!">
                    {game.date}
                  </p>
                  <h4 className="text-xl font-black text-black">{game.label}</h4>
                  <p className="text-lg text-slate-500">{game.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </article>
  );
}
