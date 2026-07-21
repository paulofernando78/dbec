import { useEffect, useState } from "react";

import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Link } from "react-router";

import {
  BookOpenText,
  CalendarDays,
  Clock2,
  Flag,
  Goal,
  MessageCircle,
  MessagesSquare,
} from "lucide-react";

export type LessonCardContent = {
  canDo: string;
  usefulLanguage?: string;
  vocabulary?: string;
  skills?: string;
  finalTask?: string;
};

type LessonCardProps = LessonCardContent & {
  href?: string;
  index?: number;
  label?: string;
  date?: string;
  duration?: string;
  updateProgress?: () => void;
};

export const LessonCard = ({
  href,
  index = 0,
  label,
  canDo,
  usefulLanguage,
  vocabulary,
  skills,
  finalTask,
  date,
  duration,
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

  useEffect(() => {
    if (!storageKey) return;

    localStorage.setItem(storageKey, JSON.stringify(checked));
    updateProgress?.();
  }, [storageKey, checked]);

  return (
    <>
      <Card className="bg-gray-200 mb-4">
        {href && (
          <div className="flex gap-2 mb-2">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <Link to={href}>
              <>
                <b>
                  Lesson {index + 1} • {label}
                </b>
              </>
            </Link>
          </div>
        )}
        <p
          className="
          flex
          items-start
          gap-2
          translate-x-[-0.1rem]"
        >
          <Goal
            size={23}
            className="
            text-gray-400
            shrink-0"
          />
          <span>
            <b>Can do:</b> {canDo}
          </span>
        </p>
        <div className="mb-[.1rem]">
          {usefulLanguage && (
            <div
              className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <MessageCircle
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span className="block">
                <b>Useful language:</b> {usefulLanguage}
              </span>
            </div>
          )}
          {vocabulary && (
            <div
              className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <BookOpenText
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span>
                <b>Vocabulary:</b> {vocabulary}
              </span>
            </div>
          )}
          {skills && (
            <div
              className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <MessagesSquare
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span>
                <b>Skills:</b> {skills}
              </span>
            </div>
          )}
          {finalTask && (
            <div
              className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <Flag
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span>
                <b>Final task:</b> {finalTask}
              </span>
            </div>
          )}
          {date && (
            <div
              className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <CalendarDays
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span>{date}</span>
            </div>
          )}
          {duration && (
            <div
              className="
              flex
              items-start
              gap-1
              mt-2
              translate-x-[-0.1rem]"
            >
              <Clock2
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
