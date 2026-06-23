import { Card } from "@/components/ui/Card";
import { List } from "@/components/content/List";
import { Checkbox } from "@/components/ui/Checkbox";
import { Link } from "react-router";

import type { ListProps } from "@/components/content/List";

import { Goal, FileText, CalendarDays, Clock2 } from "lucide-react";

type LessonCardProps = {
  href: string;
  link: string;
  lessonObjective: string;
  grammar?: string;
  vocabulary?: string;
  date?: string;
  duration?: string;
};

export const LessonCard = ({
  href,
  link,
  lessonObjective,
  grammar,
  vocabulary,
  date,
  duration,
}: LessonCardProps) => {
  return (
    <>
      <Card className="bg-gray-300 mb-4">
        {href && (
          <div className="flex gap-2 mb-2">
            <Checkbox />
            <Link to={href}><><b>{link}</b></></Link>
          </div>
        )}
        <p className="flex items-start gap-2 translate-x-[-0.1rem]">
          <Goal size={23} className="text-gray-400 shrink-0" />
          <span>{lessonObjective}</span>
        </p>
        <div className="italic">
          {grammar && (
            <div className="flex items-start gap-2 mt-2 translate-x-[-0.1rem]">
              <FileText size={23} className="text-gray-400 shrink-0" />
              <span className="block">Grammar: {grammar}</span>
            </div>
          )}
          {vocabulary && (
            <div className="flex items-start gap-2 mt-2 translate-x-[-0.1rem]">
              <FileText size={23} className="text-gray-400 shrink-0" />
              <span>Vocabulary: {vocabulary}</span>
            </div>
          )}
          {date && (
            <div className="flex items-start gap-2 mt-2 translate-x-[-0.1rem]">
              <CalendarDays size={23} className="text-gray-400 shrink-0" />
              <span>{date}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-start gap-1 mt-2 translate-x-[-0.1rem]">
              <Clock2 size={23} className="text-gray-400 shrink-0" />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
