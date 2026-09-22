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
      className="fixed bottom-0 left-[calc(50%+130px)] z-40 flex w-[calc(100%_-_292px)] max-w-[700px] -translate-x-1/2 flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-sm max-[700px]:left-1/2 max-[700px]:w-[calc(100%_-_20px)] dark:border-slate-600 dark:bg-slate-900/95"
      aria-label="Lesson navigation"
    >
      <div className="flex items-center gap-2">
        <Button
          onClick={onPrevious}
          ariaLabel={previousLabel}
          icon={<ArrowLeft aria-hidden="true" />}
          variant={isA1 ? "answer" : "danger"}
          className="!size-11 !rounded-xl"
        />
        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
          {previousLabel}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
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
