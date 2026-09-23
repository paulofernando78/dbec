import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Audio } from "@/components/ui/Audio/Audio";
import { Button } from "@/components/ui/Button/Button";
import type { GetReadySlide } from "./types";

type Props = {
  slides?: GetReadySlide[];
  isA1: boolean;
};

export function GetReadySlider({ slides, isA1 }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides?.[currentSlide];

  useEffect(() => setCurrentSlide(0), [slides]);

  if (!slide || !slides) {
    return (
      <div
        className="my-6 grid animate-pulse gap-4"
        aria-label="Media coming soon"
      >
        <div className="aspect-video rounded-2xl bg-slate-200 dark:bg-slate-700" />
        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-700">
          <span
            className={`size-10 shrink-0 rounded-full ${isA1 ? "bg-yellow-200" : "bg-red-200"}`}
          />
          <div className="grid flex-1 gap-2">
            <span className="h-4 w-4/5 rounded-full bg-slate-200 dark:bg-slate-600" />
            <span className="h-4 w-2/5 rounded-full bg-slate-200 dark:bg-slate-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 p-2 grid">
      <div className="aspect-video overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-700">
        {slide.type === "video" ? (
          <video
            src={slide.src}
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={slide.src}
            alt={slide.text}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="mb-4 grid grid-cols-2 items-center translate-y-[-0.2rem]">
        <Button
          onClick={() => setCurrentSlide((current) => Math.max(current - 1, 0))}
          disabled={currentSlide === 0}
          joined="start"
          ariaLabel="Previous picture"
          icon={<ChevronLeft aria-hidden="true" />}
          variant={currentSlide === 0 ? "default" : isA1 ? "answer" : "danger"}
          className="w-full! rounded-none! rounded-bl-2xl!"
        />
        <Button
          onClick={() =>
            setCurrentSlide((current) =>
              Math.min(current + 1, slides.length - 1),
            )
          }
          disabled={currentSlide === slides.length - 1}
          joined="end"
          ariaLabel="Next picture"
          icon={<ChevronRight aria-hidden="true" />}
          variant={
            currentSlide === slides.length - 1
              ? "default"
              : isA1
                ? "answer"
                : "danger"
          }
          className="w-full! rounded-none! rounded-br-2xl!"
        />
      </div>
      <div className="mx-auto flex w-max justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 p-2">
        {slides.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`size-2.5 rounded-full shadow ${
              index === currentSlide ? "bg-yellow-400" : "bg-slate/80"
            }`}
            aria-label={`Go to picture ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex items-center items-start gap-3 text-lg font-bold text-slate-700 dark:text-slate-100">
        <Audio
          src={slide.text}
          asButton
          buttonVariant={isA1 ? "answer" : "danger"}
          className="shrink-0"
        />
        <p className="m-0 translate-y-[0.4rem]">{slide.text}</p>
      </div>
    </div>
  );
}
