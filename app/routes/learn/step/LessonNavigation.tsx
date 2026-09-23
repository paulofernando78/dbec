import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

type Props = {
  isA1: boolean;
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  nextDisabled: boolean;
};

export function LessonNavigation({
  isA1,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  nextDisabled,
}: Props) {
  return (
    <nav
      className="sticky bottom-0 z-30 mt-8 flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white/95 px-4 pb-4.75 pt-3 backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/95"
      aria-label="Lesson navigation"
    >
      <div className="flex items-center gap-4">
        <Button
          onClick={onPrevious}
          ariaLabel={previousLabel}
          icon={<ArrowLeft aria-hidden="true" />}
          variant={isA1 ? "answer" : "danger"}
          className="!size-11 !rounded-xl"
        />
        <span className="text-sm font-bold text-slate-600 dark:text-slate-300 translate-y-1">
          {previousLabel}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold text-slate-600 dark:text-slate-300 translate-y-1">
          {nextLabel}
        </span>
        <Button
          onClick={onNext}
          disabled={nextDisabled}
          ariaLabel={nextLabel}
          icon={<ArrowRight aria-hidden="true" />}
          variant={isA1 ? "answer" : "danger"}
          className={`!size-11 !rounded-xl ${
            isA1 ? "disabled:!bg-yellow-300" : "disabled:!bg-red-400"
          }`}
        />
      </div>
    </nav>
  );
}
