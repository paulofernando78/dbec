import { useEffect, useRef, useState, type PointerEvent } from "react";
import { Play, Square } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { GetReadyData } from "@/data/course/lesson-step-types";

export function GetReadyStep({ data }: { data: GetReadyData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.load();
    setIsPlaying(false);
  }, [currentImage]);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Não foi possível tocar o áudio:", error);
      setIsPlaying(false);
    }
  };

  const showImage = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({
      left: index * carousel.clientWidth,
      behavior: "smooth",
    });
  };

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const carousel = carouselRef.current;
    if (!carousel) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
    };
    carousel.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !carouselRef.current) return;
    carouselRef.current.scrollLeft =
      drag.current.scrollLeft - (event.clientX - drag.current.startX);
  };

  const stopDrag = () => {
    drag.current.active = false;
  };

  return (
    <div className="rounded-2xl bg-[var(--surface)] p-4 pb-5.5">
      <div
        ref={carouselRef}
        className="flex cursor-grab snap-x snap-mandatory overflow-x-auto rounded-xl select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const carousel = event.currentTarget;
          setCurrentImage(
            Math.round(carousel.scrollLeft / carousel.clientWidth),
          );
        }}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        {data.slides.map((slide, index) => (
          <div
            key={`${index}-${slide.quote}`}
            className="aspect-video w-full shrink-0 snap-center overflow-hidden bg-linear-to-r from-slate-300 via-slate-200 to-slate-300"
          >
            {slide.image ? (
              <img
                src={slide.image}
                alt={`Lesson scene ${index + 1}`}
                draggable={false}
                className="size-full object-cover"
              />
            ) : (
              <div className="grid size-full place-items-center text-sm font-bold uppercase text-slate-500">
                Image placeholder {index + 1}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {data.slides.map((slide, index) => (
          <button
            key={`${index}-${slide.quote}`}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === currentImage}
            className={`size-2 cursor-pointer rounded-full ${index === currentImage ? "bg-black" : "bg-slate-300"}`}
            onClick={() => showImage(index)}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <Button
          ariaLabel={isPlaying ? "Stop introduction" : "Play introduction"}
          icon={
            isPlaying ? (
              <Square
                fill="currentColor"
                stroke="none"
                style={{ stroke: "none" }}
              />
            ) : (
              <Play
                fill="currentColor"
                stroke="none"
                style={{ stroke: "none" }}
              />
            )
          }
          onClick={toggleAudio}
          disabled={!data.slides[currentImage].audio}
        />
        <p>“{data.slides[currentImage].quote}”</p>
        {data.slides[currentImage].audio && (
          <audio
            ref={audioRef}
            src={data.slides[currentImage].audio}
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
          />
        )}
      </div>
    </div>
  );
}
