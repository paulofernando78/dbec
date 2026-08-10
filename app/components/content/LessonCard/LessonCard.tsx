import { useEffect, useId, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Link } from "react-router";
import {
  GoogleClassroomAnnouncement,
  GoogleClassroomAssignment,
  GoogleClassroomMaterial,
  GoogleClassroomQuestion,
  LessonFinalTask,
  LessonObjective,
  LessonPronunciation,
  LessonUsefulLanguage,
  LessonVocabulary,
} from "@/components/GoogleIcons";

import {
  CalendarDays,
  Clock2,
  Plus,
  Minus
} from "lucide-react";

export type LessonCardContent = {
  objective: string;
  usefulLanguage?: string;
  vocabulary?: string;
  pronunciation?: string;
  finalTask?: string;
};

const objectivePrefix = "By the end of the lesson students will be able to";

const formatObjective = (objective: string) => {
  const trimmedObjective = objective.trim();

  if (trimmedObjective.toLowerCase().startsWith("by the end of the lesson")) {
    return trimmedObjective;
  }

  const normalizedObjective = trimmedObjective
    .replace(/^can\s+/i, "")
    .replace(/\.$/, "");

  return `${objectivePrefix} ${normalizedObjective}.`;
};

const classroomPostTypes = [
  {
    itemtype: "announcement",
    label: "Announcement",
    Icon: GoogleClassroomAnnouncement,
  },
  {
    itemtype: "material",
    label: "Material",
    Icon: GoogleClassroomMaterial,
  },
  {
    itemtype: "assignment",
    label: "Assignment",
    Icon: GoogleClassroomAssignment,
  },
  {
    itemtype: "question",
    label: "Question",
    Icon: GoogleClassroomQuestion,
  },
] as const;

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
  const [classroomLessonUrl, setClassroomLessonUrl] = useState<string>();
  const detailsId = useId();

  useEffect(() => {
    if (!href) return;

    setClassroomLessonUrl(new URL(href, window.location.origin).toString());
  }, [href]);

  const getClassroomShareUrl = (
    itemtype: (typeof classroomPostTypes)[number]["itemtype"],
  ) => {
    if (!classroomLessonUrl) return "";

    const shareUrl = new URL("https://classroom.google.com/share");
    shareUrl.searchParams.set("url", classroomLessonUrl);
    shareUrl.searchParams.set("title", `Lesson ${index + 1} • ${label}`);
    shareUrl.searchParams.set("itemtype", itemtype);

    return shareUrl.toString();
  };

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

    </div>
  );

  const cardDetails = (
    <>
      {href && <hr className="mt-3 mb-4 text-gray-300" />}

      <p className="flex pl-[-0.1rem] items-start gap-2">
        <LessonObjective className="text-gray-400 shrink-0" />

        <span>
          <b>Objective:</b> {formatObjective(objective)}
        </span>
      </p>

      <div className="mb-[.1rem]">
        {usefulLanguage && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <LessonUsefulLanguage className="shrink-0 text-gray-400" />

            <span>
              <b>Useful language:</b> {usefulLanguage}
            </span>
          </div>
        )}

        {vocabulary && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <LessonVocabulary className="shrink-0 text-gray-400" />

            <span>
              <b>Vocabulary:</b> {vocabulary}
            </span>
          </div>
        )}

        {pronunciation && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2 ">
            <LessonPronunciation className="shrink-0 text-gray-400" />

            <span>
              <b>Pronunciation:</b> {pronunciation}
            </span>
          </div>
        )}

        {finalTask && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-2">
            <LessonFinalTask className="shrink-0 text-gray-400" />

            <span>
              <b>Final task:</b> {finalTask}
            </span>
          </div>
        )}

        {classroomLessonUrl && (
          <>
            <hr className="mt-4 mb-3 text-gray-300" />
            <div
              className="flex flex-wrap items-center gap-2 text-sm"
              onClick={(event) => event.stopPropagation()}
            >
              <span className="inline-flex h-10 items-center gap-2 pr-1 font-semibold text-gray-500">
                <img
                  src="/assets/img/icons/google-classroom.svg"
                  alt=""
                  className="h-8 w-8 shrink-0"
                />
              </span>
              {classroomPostTypes.map(({ itemtype, label: postLabel, Icon }) => (
                <a
                  key={itemtype}
                  href={getClassroomShareUrl(itemtype)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-fit items-center gap-2 rounded border border-gray-300 bg-white px-3 font-semibold leading-none text-gray-500 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800"
                  aria-label={`Post ${label ?? "lesson"} to Google Classroom as ${postLabel}`}
                >
                  <Icon className="shrink-0" />
                  <span>{postLabel}</span>
                </a>
              ))}
            </div>
          </>
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
