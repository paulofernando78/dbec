import { useRef, useState, type PointerEvent } from "react";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { GetReadyData } from "@/data/levels/lesson-step-types";

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
    <div className="mt-12 rounded-2xl bg-gray-200 p-4 pb-5.5">
      <div
        ref={carouselRef}
        className="flex cursor-grab snap-x snap-mandatory overflow-x-auto rounded-xl select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={(event) => {
          const carousel = event.currentTarget;
          setCurrentImage(Math.round(carousel.scrollLeft / carousel.clientWidth));
        }}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        {data.images.map((image, index) => (
          <div
            key={image}
            className="aspect-video w-full shrink-0 snap-center overflow-hidden bg-linear-to-r from-slate-300 via-slate-200 to-slate-300"
          >
            <img
              src={image}
              alt={`Meeting People scene ${index + 1}`}
              draggable={false}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {data.images.map((image, index) => (
          <button
            key={image}
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
          ariaLabel="Play introduction"
          icon={<Play />}
        />
        <p>“{data.quote}”</p>
      </div>
    </div>
  );
}
