import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

type Props = {
  variant: "answer" | "check" | "danger" | "reset" | "purple" | "indigo";
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  nextDisabled: boolean;
};

export function LessonNavigation({
  variant,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  nextDisabled,
}: Props) {
  return (
    <nav
      className="mt-8 flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white px-4 pt-3 pb-4.75 dark:border-slate-600 dark:bg-slate-900"
      aria-label="Lesson navigation"
    >
      <div className="flex items-center gap-4">
        <Button
          onClick={onPrevious}
          ariaLabel={previousLabel}
          icon={<ArrowLeft aria-hidden="true" />}
          variant={variant}
        />
        <span className="translate-y-1 text-sm font-bold text-slate-600 dark:text-slate-300">
          {previousLabel}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="translate-y-1 text-sm font-bold text-slate-600 dark:text-slate-300">
          {nextLabel}
        </span>
        <Button
          onClick={onNext}
          disabled={nextDisabled}
          ariaLabel={nextLabel}
          icon={<ArrowRight aria-hidden="true" />}
          variant={variant}
          className={
            variant === "answer"
              ? "disabled:bg-yellow-300!"
              : variant === "reset"
                ? "disabled:bg-blue-300!"
                : variant === "check"
                  ? "disabled:bg-green-300!"
                  : "disabled:bg-red-400!"
          }
        />
      </div>
    </nav>
  );
}
