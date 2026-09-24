import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Audio } from "@/components/ui/Audio/Audio";
import { Button } from "@/components/ui/Button/Button";
import type { GetReadySlide } from "./types";

type Props = {
  slides?: GetReadySlide[];
  variant: "answer" | "check" | "danger" | "reset" | "purple" | "indigo";
};

export function GetReadySlider({ slides, variant }: Props) {
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
            className={`size-10 shrink-0 rounded-full ${variant === "answer" ? "bg-yellow-200" : variant === "reset" ? "bg-blue-200" : variant === "check" ? "bg-green-200" : variant === "purple" ? "bg-purple-200" : variant === "indigo" ? "bg-indigo-200" : "bg-red-200"}`}
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
    <div className="my-6 grid p-2">
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
      <div className="mb-4 grid translate-y-[-0.2rem] grid-cols-2 items-center">
        <Button
          onClick={() => setCurrentSlide((current) => Math.max(current - 1, 0))}
          disabled={currentSlide === 0}
          joined="start"
          ariaLabel="Previous picture"
          icon={<ChevronLeft aria-hidden="true" />}
          variant={currentSlide === 0 ? "default" : variant}
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
          variant={currentSlide === slides.length - 1 ? "default" : variant}
          className="w-full! rounded-none! rounded-br-2xl!"
        />
      </div>
      <div className="mx-auto my-4 flex w-max justify-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`size-2.5 rounded-full shadow shadow-black dark:shadow-white ${
              index === currentSlide ? "bg-yellow-400" : "bg-slate/80"
            }`}
            aria-label={`Go to picture ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex items-start gap-3 text-lg font-bold text-slate-700 dark:text-slate-100">
        <Audio
          src={slide.text}
          asButton
          buttonVariant={variant}
          className="shrink-0"
        />
        <p className="m-0 translate-y-[0.4rem]">{slide.text}</p>
      </div>
    </div>
  );
}
