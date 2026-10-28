import { useState } from "react";
import { LockKeyhole, LockKeyholeOpen, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  levelButtonClasses,
  levelGradientClasses,
  type LevelTheme,
} from "@/utils/level-theme";

export type ProgressCollectionItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  isCompleted: boolean;
  ariaLabel: string;
  onClick?: () => void;
};

type ProgressCollectionCardProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  completedCount: number;
  totalCount: number;
  resetAriaLabel: string;
  resetConfirmationMessage?: string;
  onReset: () => void;
  items: ProgressCollectionItem[];
  className?: string;
  disableResetWhenEmpty?: boolean;
  levelTheme?: LevelTheme;
};

export function ProgressCollectionCard({
  title,
  eyebrow,
  description,
  completedCount,
  totalCount,
  resetAriaLabel,
  resetConfirmationMessage,
  onReset,
  items,
  className = "",
  disableResetWhenEmpty = false,
  levelTheme,
}: ProgressCollectionCardProps) {
  const [isResetConfirmationOpen, setIsResetConfirmationOpen] = useState(false);

  const confirmReset = () => {
    onReset();
    setIsResetConfirmationOpen(false);
  };

  return (
    <>
      <article
        className={`overflow-hidden rounded-xl bg-gray-50 dark:bg-[var(--surface)] ${className}`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-gray-200 bg-gray-200 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div>
            {eyebrow && (
              <p className="text-xs font-bold uppercase text-orange-700!">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-black text-black dark:text-[var(--text-color)]">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-slate-500">{description}</p>
            )}
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3">
            <span className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs text-black dark:bg-[var(--background)] dark:text-[var(--text-color)]">
              {completedCount} / {totalCount}
            </span>
            <Button
              ariaLabel={resetAriaLabel}
              icon={<RotateCcw />}
              onClick={() => setIsResetConfirmationOpen(true)}
              disabled={disableResetWhenEmpty && completedCount === 0}
            />
          </div>
        </header>

        {items.length > 0 && (
          <ol className="px-4 py-4">
            {items.map((item, index) => (
              <li
                key={item.id}
                className="relative grid min-h-36 grid-cols-[60px_minmax(0,1fr)] gap-4 pb-5 last:min-h-15 last:pb-0"
              >
                {index < items.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-5 left-6.5 top-13 z-0 w-2
                      ${
                        item.isCompleted
                          ? levelTheme
                            ? levelGradientClasses[levelTheme]
                            : "bg-yellow-500 dark:bg-yellow-500"
                          : "bg-slate-300 dark:bg-slate-600"
                      }`}
                  />
                )}

                <Button
                  ariaLabel={item.ariaLabel}
                  icon={
                    item.isCompleted ? <LockKeyholeOpen /> : <LockKeyhole />
                  }
                  onClick={item.onClick}
                  className={`z-10 size-15! ${
                    item.isCompleted && levelTheme
                      ? levelButtonClasses[levelTheme]
                      : ""
                  }`}
                />

                <div className="min-w-0 pt-1">
                  <p className="text-xs font-bold uppercase text-orange-700!">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-xl font-black text-black dark:text-[var(--text-color)]">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </article>

      {isResetConfirmationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsResetConfirmationOpen(false);
            }
          }}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-[var(--background)] p-4 text-[var(--text-color)] shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-progress-title"
          >
            <h2 id="reset-progress-title" className="text-xl font-black">
              Reset progress?
            </h2>
            <p className="mt-2 text-slate-500">
              {resetConfirmationMessage ??
                `Are you sure you want to reset the progress for ${title}?`}
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <Button onClick={() => setIsResetConfirmationOpen(false)}>
                Cancel
              </Button>
              <Button onClick={confirmReset}>Reset</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
