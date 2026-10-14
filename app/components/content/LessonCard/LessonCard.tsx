import { useId, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { Link } from "react-router";
import {
  LessonObjective,
  LessonUsefulLanguage,
  LessonPronunciation,
  LessonVocabulary,
  LessonFinalTask,
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

type LessonCardProps = LessonCardContent & {
  href?: string;
  index?: number;
  label?: string;
  numbered?: boolean;
  collapsible?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
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
  collapsible = false,
  checked,
  onCheckedChange,
}: LessonCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const detailsId = useId();
  const lessonTitle =
    href && numbered ? `${index + 1} • ${label}` : (label ?? "");

  const cardHeader = (
    <div className="flex items-center gap-2 p-1">
      {onCheckedChange && (
        <span
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          <Checkbox
            checked={checked ?? false}
            onCheckedChange={onCheckedChange}
          />
        </span>
      )}
      <b>{lessonTitle}</b>
    </div>
  );

  const cardDetails = (
    <>
      {href && <hr className="my-2 text-gray-300" />}

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
        <p className="mt-3 flex pl-[-0.1rem] items-start gap-3">
          <LessonObjective className="text-gray-400 shrink-0" />

          <span>
            <b>Objective:</b> {formatObjective(objective)}
          </span>
        </p>
      )}

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
