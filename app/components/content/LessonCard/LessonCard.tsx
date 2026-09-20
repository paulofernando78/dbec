import { useEffect, useId, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Link } from "react-router";
import {
  AudioLines as LessonPronunciation,
  BookOpen as LessonVocabulary,
  Bookmark as GoogleClassroomMaterial,
  CalendarDays,
  ClipboardList as GoogleClassroomAssignment,
  Clock2,
  Flag as LessonFinalTask,
  Goal as LessonObjective,
  MessageSquareText as LessonUsefulLanguage,
  Minus,
  Pencil as GoogleClassroomAnnouncement,
  Plus,
} from "lucide-react";

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
  description?: string;
  date?: string;
  duration?: string;
  objective?: string;
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
  numbered?: boolean;
  collapsible?: boolean;
};

export const LessonCard = ({
  href,
  index = 0,
  label,
  numbered = true,
  description,
  date,
  duration,
  objective,
  usefulLanguage,
  vocabulary,
  pronunciation,
  finalTask,
  assignmentHref,
  classroom,
  collapsible = false,
}: LessonCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [classroomLessonUrl, setClassroomLessonUrl] = useState<string>();
  const detailsId = useId();
  const lessonTitle =
    href && numbered ? `${index + 1} • ${label}` : (label ?? "");

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
      shareUrl.searchParams.set("title", lessonTitle);
    }
    shareUrl.searchParams.set("itemtype", itemtype);

    if (content?.body) {
      shareUrl.searchParams.set("body", content.body);
    }

    return shareUrl.toString();
  };

  const cardHeader = (
    <div className="flex flex-col gap-1">
      <b>{lessonTitle}</b>
    </div>
  );

  const cardDetails = (
    <>
      {href && <hr className="mt-3 mb-4 text-gray-300" />}

      {description && <p>{description}</p>}

      {(date || duration) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
          {date && (
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={19} className="shrink-0" />
              <span>{date}</span>
            </span>
          )}
          {duration && (
            <span className="inline-flex items-center gap-2">
              <Clock2 size={19} className="shrink-0" />
              <span>{duration}</span>
            </span>
          )}
        </div>
      )}

      {objective && (
        <p className="mt-3 flex items-start gap-3 pl-[-0.1rem]">
          <LessonObjective className="shrink-0 text-gray-400" />

          <span>
            <b>Objective:</b> {formatObjective(objective)}
          </span>
        </p>
      )}

      <div className="mb-[.1rem]">
        {usefulLanguage && (
          <div className="mt-2 flex items-start gap-3 pl-[-0.1rem]">
            <LessonUsefulLanguage className="shrink-0 text-gray-400" />

            <span>
              <b>Useful language:</b> {usefulLanguage}
            </span>
          </div>
        )}

        {vocabulary && (
          <div className="mt-2 flex items-start gap-3 pl-[-0.1rem]">
            <LessonVocabulary className="shrink-0 text-gray-400" />

            <span>
              <b>Vocabulary:</b> {vocabulary}
            </span>
          </div>
        )}

        {pronunciation && (
          <div className="mt-2 flex items-start gap-3 pl-[-0.1rem]">
            <LessonPronunciation className="shrink-0 text-gray-400" />

            <span>
              <b>Pronunciation:</b> {pronunciation}
            </span>
          </div>
        )}

        {finalTask && (
          <div className="mt-2 flex items-start gap-3 pl-[-0.1rem]">
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
              className="inline-flex items-center gap-2 font-semibold hover:text-gray-700"
            >
              <GoogleClassroomMaterial className="shrink-0" />
              <span>Open material</span>
            </Link>
          )}
          {assignmentHref && (
            <Link
              to={assignmentHref}
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 font-semibold hover:text-gray-700"
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
              <div className="flex items-center gap-2 text-gray-500">
                <span className="inline-flex h-10 items-center gap-2 pr-1 font-semibold text-gray-500">
                  <img
                    src="/assets/img/icons/google-classroom.svg"
                    alt=""
                    className="h-8 w-8 shrink-0"
                  />
                </span>
                <span className="font-bold">Share to Classroom</span>
              </div>
              <div className="mb-1 flex flex-col gap-2">
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
                              ? lessonTitle
                              : classroom?.[itemtype]?.title,
                        body: classroom?.[itemtype]?.description,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-fit items-center gap-2 rounded border border-gray-300 bg-white p-2 leading-none font-semibold hover:border-gray-500 hover:bg-gray-50 ${classroomCardPadding}`}
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
            className="flex w-full cursor-pointer list-none items-center justify-between rounded text-left select-none focus-visible:outline-2 focus-visible:outline-offset-2"
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
