import { useEffect, useId, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Link } from "react-router";

import {
  AudioLines,
  BookOpenText,
  CalendarDays,
  Clock2,
  Flag,
  Goal,
  MessageCircle,
  Plus,
  Minus
} from "lucide-react";

export type LessonCardContent = {
  objective: string;
  usefulLanguage?: string;
  vocabulary?: string;
  skills?: string;
  recycles?: string;
  pronunciation?: string;
  finalTask?: string;
  successCriteria?: string[];
};

type LessonCardProps = LessonCardContent & {
  href?: string;
  index?: number;
  label?: string;
  date?: string;
  duration?: string;
  collapsible?: boolean;
  updateProgress?: () => void;
};

export const LessonCard = ({
  href,
  index = 0,
  label,
  objective,
  usefulLanguage,
  vocabulary,
  pronunciation,
  finalTask,
  date,
  duration,
  collapsible = false,
  updateProgress,
}: LessonCardProps) => {
  const storageKey = href ? `lesson-completed:${href}` : undefined;

  const [checked, setChecked] = useState(() => {
    if (typeof window === "undefined" || !storageKey) {
      return false;
    }

    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : false;
  });
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const detailsId = useId();

  useEffect(() => {
    if (!storageKey) return;

    localStorage.setItem(storageKey, JSON.stringify(checked));
    updateProgress?.();
  }, [storageKey, checked]);

  const cardHeader = (
    <div className="flex gap-2">
      {href && (
        <span onClick={(event) => event.stopPropagation()}>
          <Checkbox checked={checked} onCheckedChange={setChecked} />
        </span>
      )}

      {href ? (
        <Link to={href} onClick={(event) => event.stopPropagation()}>
          <b>
            Lesson {index + 1} • {label}
          </b>
        </Link>
      ) : (
        <b>{label}</b>
      )}
    </div>
  );

  const cardDetails = (
    <>
      {href && <hr className="mt-3 mb-4 text-gray-300" />}

      <p className="flex items-start gap-2">
        <Goal size={23} className="text-gray-400 shrink-0" />

        <span>
          <b>Objective:</b> {objective}
        </span>
      </p>

      <div className="mb-[.1rem]">
        {usefulLanguage && (
          <div className="mt-2 flex items-start gap-2 translate-x-[-0.1rem]">
            <MessageCircle size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Useful language:</b> {usefulLanguage}
            </span>
          </div>
        )}

        {vocabulary && (
          <div className="mt-2 flex items-start gap-2 translate-x-[-0.1rem]">
            <BookOpenText size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Vocabulary:</b> {vocabulary}
            </span>
          </div>
        )}

        {pronunciation && (
          <div className="mt-2 flex items-start gap-2 translate-x-[-0.1rem]">
            <AudioLines size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Pronunciation:</b> {pronunciation}
            </span>
          </div>
        )}

        {finalTask && (
          <div className="mt-2 flex items-start gap-2 translate-x-[-0.1rem]">
            <Flag size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Final task:</b> {finalTask}
            </span>
          </div>
        )}

        {date && (
          <div className="mt-2 flex items-start gap-2 translate-x-[-0.1rem]">
            <CalendarDays size={23} className="shrink-0 text-gray-400" />
            <span>{date}</span>
          </div>
        )}

        {duration && (
          <div className="mt-2 flex items-start gap-1 translate-x-[-0.1rem]">
            <Clock2 size={23} className="shrink-0 text-gray-400" />
            <span>{duration}</span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <Card className="mb-4 bg-gray-100">
      {collapsible ? (
        <div>
          <div
            className="
            list-none
            select-none
            flex
            items-center
            justify-between
          "
          >
            {cardHeader}

            <button
              type="button"
              className="cursor-pointer rounded p-1 font-bold hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-expanded={isDetailsOpen}
              aria-controls={detailsId}
              aria-label={isDetailsOpen ? "Hide lesson details" : "Show lesson details"}
              onClick={() => setIsDetailsOpen((current) => !current)}
            >
              {isDetailsOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
          </div>

          <div
            id={detailsId}
            className="smooth-collapse"
            data-open={isDetailsOpen}
            aria-hidden={!isDetailsOpen}
          >
            <div className="smooth-collapse__inner">{cardDetails}</div>
          </div>
        </div>
      ) : (
        <>
          {href && cardHeader}
          {cardDetails}
        </>
      )}
    </Card>
  );
};
