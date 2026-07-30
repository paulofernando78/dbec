import { useEffect, useState } from "react";

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
      <Card className="mb-4 bg-gray-100">
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
        <hr className="mt-3 mb-4 text-gray-300" />
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
            <b>Objective:</b> {objective}
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
          {pronunciation && (
            <div
              className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <AudioLines
                size={23}
                className="
                text-gray-400
                shrink-0"
              />
              <span>
                <b>Pronunciation:</b> {pronunciation}
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
