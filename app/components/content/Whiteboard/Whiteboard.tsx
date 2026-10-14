import { Card } from "@/components/ui/Card";
import { CalendarDays, Clock } from "lucide-react";

type WhiteboardProps = {
  title?: string;
  subtitle?: string;
  book?: string;
  lesson?: string;
  descriptions?: string[];
  description?: string;
  date?: string;
  time?: string;
};

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  date,
  time,
}: WhiteboardProps) => {
  return (
    <Card className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <h2 className="text-3xl">{subtitle}</h2>}
      {descriptions?.length > 0 &&
        descriptions.map((description, index) => (
          <p key={index} className="text-1xl">
            {description}
          </p>
        ))}
      {date && (
        <div className="flex gap-2 mb-1">
          <CalendarDays size={19} className="text-gray-500" />
          <span className="text-sm relative top-px">
            <em>{date}</em>
          </span>
        </div>
      )}
      {time && (
        <div className="flex items-center gap-2">
          <Clock size={19} className="text-gray-500" />
          <span className="text-sm relative top-px">
            <em>{time}</em>
          </span>
        </div>
      )}
    </Card>
  );
};
