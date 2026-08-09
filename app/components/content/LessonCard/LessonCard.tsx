import { useEffect, useId, useState } from "react";

import { Card } from "@/components/ui/Card";
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
}: LessonCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [classroomShareUrl, setClassroomShareUrl] = useState<string>();
  const detailsId = useId();

  useEffect(() => {
    if (!href) return;

    const lessonUrl = new URL(href, window.location.origin).toString();
    const shareUrl = new URL("https://classroom.google.com/share");
    shareUrl.searchParams.set("url", lessonUrl);
    shareUrl.searchParams.set("title", `Lesson ${index + 1} • ${label}`);
    shareUrl.searchParams.set("itemtype", "material");

    setClassroomShareUrl(shareUrl.toString());
  }, [href, index, label]);

  const cardHeader = (
    <div className="flex flex-col gap-1">
      {href ? (
        <Link to={href} onClick={(event) => event.stopPropagation()}>
          <b>
            Lesson {index + 1} • {label}
          </b>
        </Link>
      ) : (
        <b>{label}</b>
      )}

      {classroomShareUrl && (
        <a
          href={classroomShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800"
          aria-label={`Share ${label ?? "lesson"} to Google Classroom`}
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src="/assets/img/icons/google-classroom.svg"
            alt=""
            className="h-5 w-5 shrink-0"
          />
          <span>Share to Classroom</span>
        </a>
      )}
    </div>
  );

  const cardDetails = (
    <>
      {href && <hr className="mt-3 mb-4 text-gray-300" />}

      <p className="flex pl-[-0.1rem] items-start gap-2">
        <Goal size={23} className="text-gray-400 shrink-0" />

        <span>
          <b>Objective:</b> {objective}
        </span>
      </p>

      <div className="mb-[.1rem]">
        {usefulLanguage && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <MessageCircle size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Useful language:</b> {usefulLanguage}
            </span>
          </div>
        )}

        {vocabulary && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <BookOpenText size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Vocabulary:</b> {vocabulary}
            </span>
          </div>
        )}

        {pronunciation && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2 ">
            <AudioLines size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Pronunciation:</b> {pronunciation}
            </span>
          </div>
        )}

        {finalTask && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <Flag size={23} className="shrink-0 text-gray-400" />

            <span>
              <b>Final task:</b> {finalTask}
            </span>
          </div>
        )}

        {date && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <CalendarDays size={23} className="shrink-0 text-gray-400" />
            <span>{date}</span>
          </div>
        )}

        {duration && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-1">
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
            role="button"
            tabIndex={0}
            className="
            w-full
            list-none
            select-none
            flex
            items-center
            justify-between
            text-left
            cursor-pointer
            rounded
            focus-visible:outline-2
            focus-visible:outline-offset-2
          "
            aria-expanded={isDetailsOpen}
            aria-controls={detailsId}
            onClick={() => setIsDetailsOpen((current) => !current)}
            onKeyDown={(event) => {
              if (event.key !== "Enter" && event.key !== " ") return;

              event.preventDefault();
              setIsDetailsOpen((current) => !current);
            }}
          >
            {cardHeader}

            <span
              className="rounded p-1 font-bold"
              aria-hidden="true"
            >
              {isDetailsOpen ? <Minus size={18} /> : <Plus size={18} />}
            </span>
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
