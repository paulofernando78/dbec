import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>(
      "[data-scroll-container]",
    );
    if (!scrollContainer) return;

    const updateVisibility = () => {
      setIsVisible(scrollContainer.scrollTop >= 300);
    };

    updateVisibility();
    scrollContainer.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () =>
      scrollContainer.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <nav
      className={`sticky bottom-0 z-30 mt-8 flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-slate-200 bg-white/95 px-4 pt-3 pb-4.75 backdrop-blur-sm transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none dark:border-slate-600 dark:bg-slate-900/95 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Lesson navigation"
      aria-hidden={!isVisible}
      inert={!isVisible}
    >
      <div className="flex items-center gap-4">
        <Button
          onClick={onPrevious}
          ariaLabel={previousLabel}
          icon={<ArrowLeft aria-hidden="true" />}
          variant={isA1 ? "answer" : "danger"}
          className="!size-11 !rounded-xl"
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
          variant={isA1 ? "answer" : "danger"}
          className={`!size-11 !rounded-xl ${
            isA1 ? "disabled:!bg-yellow-300" : "disabled:!bg-red-400"
          }`}
        />
      </div>
    </nav>
  );
}
