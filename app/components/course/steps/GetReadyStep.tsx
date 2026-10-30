import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";

import { Audio } from "@/components/ui/Audio";
import type { GetReadyData } from "@/data/course/lesson-step-types";

const GET_READY_INSTRUCTION = "Look at the picture.";

export function GetReadyStep({ data }: { data: GetReadyData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const showImage = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({
      left: index * carousel.clientWidth,
      behavior: "smooth",
    });
  };

  const changeImage = (direction: -1 | 1) => {
    const nextImage =
      (currentImage + direction + data.slides.length) % data.slides.length;
    showImage(nextImage);
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
      <h3 className="mb-4 text-lg font-bold">{GET_READY_INSTRUCTION}</h3>
      <div className="relative">
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
        {data.slides.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Show previous image"
              onClick={() => changeImage(-1)}
              className="absolute top-1/2 left-3 z-10 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/70 bg-white/85 text-slate-700 shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            >
              <ChevronLeft aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              aria-label="Show next image"
              onClick={() => changeImage(1)}
              className="absolute top-1/2 right-3 z-10 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/70 bg-white/85 text-slate-700 shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            >
              <ChevronRight aria-hidden="true" className="size-6" />
            </button>
          </>
        ) : null}
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
        <Audio
          key={`${currentImage}-${data.slides[currentImage].audio ?? "synth"}`}
          asButton
          src={data.slides[currentImage].audio ?? ""}
          fallbackText={data.slides[currentImage].quote}
          speechLang="en-US"
          ariaLabel={`Play ${data.slides[currentImage].quote}`}
          wrapperClassName="shrink-0"
        />
        <p>“{data.slides[currentImage].quote}”</p>
      </div>
      {data.slides[currentImage].questions?.length ? (
        <div className="mt-4 rounded-xl bg-[var(--background)] p-4">
          <h4 className="mb-2 font-black">Discuss</h4>
          <ul className="grid gap-3">
            {data.slides[currentImage].questions.map((question) => (
              <li key={question.prompt}>
                <p className="font-semibold">{question.prompt}</p>
                {question.support?.length ? (
                  <p className="mt-1 text-sm text-slate-500">
                    {question.support.join(" / ")}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
