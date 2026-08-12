import { useEffect, useId, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Link } from "react-router";
import {
  LessonObjective,
  LessonUsefulLanguage,
  LessonPronunciation,
  LessonVocabulary,
  LessonFinalTask,
  GoogleClassroomAnnouncement,
  GoogleClassroomMaterial,
  GoogleClassroomAssignment,
} from "@/components/GoogleIcons";

import { CalendarDays, Clock2, Plus, Minus } from "lucide-react";

type ClassroomPostContent = {
  title: string;
  description?: string;
};

type ClassroomAnnouncementContent = {
  description: string;
};

type ClassroomMaterialContent = {
  description?: string;
};

export type LessonCardContent = {
  index?: number;
  objective: string;
  usefulLanguage?: string;
  vocabulary?: string;
  pronunciation?: string;
  finalTask?: string;
  assignmentHref?: string;
  classroom?: {
    announcement?: ClassroomAnnouncementContent;
    material?: ClassroomMaterialContent;
    assignment?: ClassroomPostContent;
  };
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
    label: "New Announcement",
    Icon: GoogleClassroomAnnouncement,
    classroomCardPadding: "pr-[0.6rem]",
    classroomCardLabel: "-translate-x-[0.1rem]",
  },
  {
    itemtype: "material",
    label: "Material",
    Icon: GoogleClassroomMaterial,
    classroomCardPadding: "pl-[0.4rem] pr-[0.6rem]",
    classroomCardLabel: "-translate-x-[0.1rem]",
  },
  {
    itemtype: "assignment",
    label: "Assignment",
    Icon: GoogleClassroomAssignment,
    classroomCardPadding: "pl-[0.4rem] pr-[0.6rem]",
    classroomCardLabel: "-translate-x-[0.1rem]",
  },
] as const;

type ClassroomPostType = (typeof classroomPostTypes)[number]["itemtype"];

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
  assignmentHref,
  classroom,
  date,
  duration,
  collapsible = false,
}: LessonCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [classroomLessonUrl, setClassroomLessonUrl] = useState<string>();
  const detailsId = useId();

  // Google Classroom
  useEffect(() => {
    if (!href) return;

    setClassroomLessonUrl(new URL(href, window.location.origin).toString());
  }, [href]);

  const getClassroomShareUrl = (
    itemtype: ClassroomPostType,
    content?: { title?: string; body?: string },
  ) => {
    if (!classroomLessonUrl) return "";

    const shareUrl = new URL("https://classroom.google.com/share");
    shareUrl.searchParams.set("url", classroomLessonUrl);
    if (content?.title) {
      shareUrl.searchParams.set("title", content.title);
    } else if (itemtype !== "announcement") {
      shareUrl.searchParams.set("title", `${index + 1} • ${label}`);
    }
    shareUrl.searchParams.set("itemtype", itemtype);

    if (content?.body) {
      shareUrl.searchParams.set("body", content.body);
    }

    return shareUrl.toString();
  };

  const cardHeader = (
    <div className="flex flex-col gap-1">
      <b>{href ? `${index + 1} • ${label}` : label}</b>
    </div>
  );

  const cardDetails = (
    <>
      {href && <hr className="mt-3 mb-4 text-gray-300" />}

      <p className="flex pl-[-0.1rem] items-start gap-3">
        <LessonObjective className="text-gray-400 shrink-0" />

        <span>
          <b>Objective:</b> {formatObjective(objective)}
        </span>
      </p>

      <div className="mb-[.1rem]">
        {usefulLanguage && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-3">
            <LessonUsefulLanguage className="shrink-0 text-gray-400" />

            <span>
              <b>Useful language:</b> {usefulLanguage}
            </span>
          </div>
        )}

        {vocabulary && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-3">
            <LessonVocabulary className="shrink-0 text-gray-400" />

            <span>
              <b>Vocabulary:</b> {vocabulary}
            </span>
          </div>
        )}

        {pronunciation && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-3">
            <LessonPronunciation className="shrink-0 text-gray-400" />

            <span>
              <b>Pronunciation:</b> {pronunciation}
            </span>
          </div>
        )}

        {finalTask && (
          <div className="mt-2 pl-[-0.1rem] flex items-start gap-3">
            <LessonFinalTask className="shrink-0 text-gray-400" />

            <span>
              <b>Final task:</b> {finalTask}
            </span>
          </div>
        )}

        <hr className="mt-4 mb-3 text-gray-300" />

        <div className="flex flex-col gap-2">
          {href && (
            <Link
              to={href}
              onClick={(event) => event.stopPropagation()}
              className="
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  hover:text-gray-700"
            >
              <GoogleClassroomMaterial className="shrink-0" />
              <span>Open material</span>
            </Link>
          )}
          {assignmentHref && (
            <Link
              to={assignmentHref}
              onClick={(event) => event.stopPropagation()}
              className="
                inline-flex
                items-center
                gap-2 
                font-semibold
                hover:text-gray-700"
            >
              <GoogleClassroomAssignment className="shrink-0" />
              <span>Open assignment</span>
            </Link>
          )}
        </div>

        <hr className="mt-4 mb-3 text-gray-300" />

        {classroomLessonUrl && (
          <>
            <div
              className="flex flex-col gap-2 text-sm"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="
                flex
                items-center
                text-gray-500
                gap-2"
              >
                <span
                  className="
                  inline-flex
                  h-10
                  items-center
                  gap-2
                  pr-1
                  font-semibold
                  text-gray-500"
                >
                  <img
                    src="/assets/img/icons/google-classroom.svg"
                    alt=""
                    className="h-8 w-8 shrink-0"
                  />
                </span>
                <span className="font-bold">Share to Classroom</span>
              </div>
              <div className="flex flex-col gap-2 mb-1">
                {classroomPostTypes.map(
                  ({
                    itemtype,
                    label: postLabel,
                    Icon,
                    classroomCardLabel,
                    classroomCardPadding,
                  }) => (
                    <a
                      key={itemtype}
                      href={getClassroomShareUrl(itemtype, {
                        title:
                          itemtype === "announcement"
                            ? undefined
                            : itemtype === "material"
                              ? `${index + 1} • ${label}`
                              : classroom?.[itemtype]?.title,
                        body: classroom?.[itemtype]?.description,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex
                    gap-2
                    items-center
                    w-fit
                    p-2
                    font-semibold
                    border
                    border-gray-300
                    bg-white
                    rounded
                    leading-none
                    hover:border-gray-500
                    hover:bg-gray-50
                    ${classroomCardPadding}`}
                      aria-label={`Post ${label ?? "lesson"} to Google Classroom as ${postLabel}`}
                    >
                      <Icon className="shrink-0 text-gray-400" />
                      <span className={classroomCardLabel}>{postLabel}</span>
                    </a>
                  ),
                )}
              </div>
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

            <span className="rounded p-1 font-bold" aria-hidden="true">
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
