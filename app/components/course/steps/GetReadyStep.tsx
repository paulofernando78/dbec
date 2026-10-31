import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Presentation,
  Users,
} from "lucide-react";
import { Fragment, useRef, useState, type PointerEvent } from "react";

import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import type {
  GetReadyActivity,
  GetReadyData,
} from "@/data/course/lesson-step-types";

const GET_READY_INSTRUCTION = "Look at the picture.";

function ActivityBlock({
  title,
  activity,
}: {
  title: "Answer" | "Discuss";
  activity: GetReadyActivity;
}) {
  const [visibleAnswers, setVisibleAnswers] = useState<Set<string>>(new Set());
  const interactionDetails = {
    pairs: {
      label: "Pairs or small groups",
      Icon: Users,
    },
    "teacher-class": {
      label: "Teacher and class",
      Icon: Presentation,
    },
  } as const;

  return (
    <section className="rounded-xl bg-[var(--background)] p-4">
      <div className="mb-4 flex items-center gap-4">
        <h4 className="font-black uppercase tracking-wide">{title}</h4>
        {activity.interaction?.length ? (
          <div className="flex items-center gap-1.5" aria-label="Interaction">
            {activity.interaction.map((interaction, index) => {
              const { label, Icon } = interactionDetails[interaction];
              const tooltipId = `get-ready-${title.toLowerCase()}-${interaction}`;
              return (
                <div key={interaction} className="flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight
                      aria-hidden="true"
                      className="size-3.5 text-slate-400"
                    />
                  ) : null}
                  <span className="group relative">
                    <span
                      tabIndex={0}
                      aria-label={label}
                      aria-describedby={tooltipId}
                      className="grid size-7 place-items-center rounded-full bg-slate-200 text-slate-600 outline-none transition-colors hover:bg-slate-300 focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <span
                      id={tooltipId}
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 rounded-md bg-slate-800 px-2 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-100 group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      {label}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <ul className="grid gap-3">
        {activity.questions.map((question, index) => {
          const answerIsVisible = visibleAnswers.has(question.prompt);
          return (
            <Fragment key={question.prompt}>
              <li className="rounded-xl bg-white text-slate-800">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Audio
                    asButton
                    src=""
                    fallbackText={question.prompt}
                    speechLang="en-US"
                    ariaLabel={`Play ${question.prompt}`}
                  />
                  <p className="font-semibold">{question.prompt}</p>
                  {question.support?.length ? (
                    <Button
                      ariaLabel={
                        answerIsVisible ? "Hide answer" : "Show answer"
                      }
                      pressed={answerIsVisible}
                      onClick={() => {
                        setVisibleAnswers((current) => {
                          const next = new Set(current);
                          if (answerIsVisible) next.delete(question.prompt);
                          else next.add(question.prompt);
                          return next;
                        });
                      }}
                      icon={
                        answerIsVisible ? (
                          <EyeOff aria-hidden="true" />
                        ) : (
                          <Eye aria-hidden="true" />
                        )
                      }
                    />
                  ) : null}
                  {answerIsVisible && question.support?.length ? (
                    <p className="font-normal">
                      {question.support.join(" / ")}
                    </p>
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </div>
              </li>
              {title === "Answer" && index < activity.questions.length - 1 ? (
                <hr className="border-0 bg-slate-200 h-px" />
              ) : null}
            </Fragment>
          );
        })}
      </ul>
    </section>
  );
}

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
            <Button
              ariaLabel="Show previous image"
              icon={<ChevronLeft aria-hidden="true" />}
              onClick={() => changeImage(-1)}
              className="absolute! top-1/2 left-3 z-10 size-10! -translate-y-1/2 rounded-full! p-[3px]! opacity-75 transition-opacity hover:opacity-100 [&>span]:rounded-full!"
            />
            <Button
              ariaLabel="Show next image"
              icon={<ChevronRight aria-hidden="true" />}
              onClick={() => changeImage(1)}
              className="absolute! top-1/2 right-3 z-10 size-10! -translate-y-1/2 rounded-full! p-[3px]! opacity-75 transition-opacity hover:opacity-100 [&>span]:rounded-full!"
            />
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
        {data.slides[currentImage].audio !== false ? (
          <Audio
            key={`${currentImage}-${data.slides[currentImage].audio ?? "synth"}`}
            asButton
            src={data.slides[currentImage].audio ?? ""}
            fallbackText={data.slides[currentImage].quote}
            speechLang="en-US"
            ariaLabel={`Play ${data.slides[currentImage].quote}`}
            wrapperClassName="shrink-0"
          />
        ) : null}
        <p>“{data.slides[currentImage].quote}”</p>
      </div>
      {data.slides[currentImage].answer || data.slides[currentImage].discuss ? (
        <div className="mt-4 grid gap-4">
          {data.slides[currentImage].answer ? (
            <ActivityBlock
              title="Answer"
              activity={data.slides[currentImage].answer}
            />
          ) : null}
          {data.slides[currentImage].discuss ? (
            <ActivityBlock
              title="Discuss"
              activity={data.slides[currentImage].discuss}
            />
          ) : null}
        </div>
      ) : null}
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
