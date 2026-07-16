import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { Link } from "react-router";
import { TextArea } from "@/components/ui/TextArea";

import { useEffect, useState } from "react";

import { Goal, FileText, CalendarDays, Clock2 } from "lucide-react";

type LessonCardProps = {
  href?: string;
  index?: number;
  link?: string;
  lessonObjective: string;
  grammar?: string;
  vocabulary?: string;
  date?: string;
  duration?: string;
};

export const LessonCard = ({
  href,
  index = 0,
  link,
  lessonObjective,
  grammar,
  vocabulary,
  date,
  duration,
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
  }, [storageKey, checked]);

  return (
    <>
      <Card className="bg-gray-200 mb-4">
        {href && (
          <div className="flex gap-2 mb-2">
            <Checkbox checked={checked} onCheckedChange={setChecked} />
            <Link to={href}>
              <>
                <b>Day {index + 1} • {link}</b>
              </>
            </Link>
          </div>
        )}
        <p className="
          flex
          items-start
          gap-2
          translate-x-[-0.1rem]"
        >
          <Goal size={23} className="
            text-gray-400
            shrink-0"
          />
          <span>{lessonObjective}</span>
        </p>
        <div className="italic mb-[.1rem]">
          {grammar && (
            <div className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <FileText size={23} className="
                text-gray-400
                shrink-0"
              />
              <span className="block">Grammar: {grammar}</span>
            </div>
          )}
          {vocabulary && (
            <div className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <FileText size={23} className="
                text-gray-400
                shrink-0"
              />
              <span>Vocabulary: {vocabulary}</span>
            </div>
          )}
          {date && (
            <div className="
              flex
              items-start
              gap-2
              mt-2
              translate-x-[-0.1rem]"
            >
              <CalendarDays size={23} className="
                text-gray-400
                shrink-0" />
              <span>{date}</span>
            </div>
          )}
          {duration && (
            <div className="
              flex
              items-start
              gap-1
              mt-2
              translate-x-[-0.1rem]"
            >
              <Clock2 size={23} className="
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
