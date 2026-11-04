import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

type SequenceNavigationProps = {
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  ariaLabel?: string;
};

export function SequenceNavigation({
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  ariaLabel = "Content navigation",
}: SequenceNavigationProps) {
  return (
    <nav
      className="mx-1 mt-4 grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3"
      aria-label={ariaLabel}
    >
      <Button
        ariaLabel={`Previous: ${previousLabel}`}
        onClick={onPrevious}
        icon={<ChevronLeft />}
      />
      <b>{previousLabel}</b>
      <b className="text-right">{nextLabel}</b>
      <Button
        ariaLabel={`Next: ${nextLabel}`}
        onClick={onNext}
        icon={<ChevronRight />}
      />
    </nav>
  );
}
