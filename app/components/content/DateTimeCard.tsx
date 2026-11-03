import { CalendarDays, Clock } from "lucide-react";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/Card";

type DateTimeCardProps = {
  className?: string;
  compact?: boolean;
};

export const DateTimeCard = ({
  className = "",
  compact = false,
}: DateTimeCardProps) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let intervalId: number | undefined;
    const currentTime = new Date();
    const millisecondsUntilNextMinute =
      (60 - currentTime.getSeconds()) * 1_000 -
      currentTime.getMilliseconds();
    const timeoutId = window.setTimeout(() => {
      setNow(new Date());
      intervalId = window.setInterval(() => setNow(new Date()), 60_000);
    }, millisecondsUntilNextMinute);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, []);

  const fullDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  const fullTime = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  }).format(now);

  return (
    <Card className={`${compact ? "p-3!" : ""} ${className}`}>
      <h2 className={compact ? "mb-2 text-lg font-bold" : "mb-4 text-lg font-bold"}>
        Date & Time
      </h2>
      <div
        className={`flex flex-wrap items-center gap-x-8 gap-y-3 ${
          compact ? "" : "rounded-xl bg-(--background) p-4"
        }`}
      >
        <div className="flex items-center gap-3">
          <CalendarDays size={22} className="shrink-0 text-gray-500" />
          <time dateTime={now.toISOString()} className="font-semibold">
            {fullDate}
          </time>
        </div>
        <div className="flex items-center gap-3 tabular-nums">
          <Clock size={22} className="shrink-0 text-gray-500" />
          <time dateTime={now.toISOString()} className="font-semibold">
            {fullTime}
          </time>
        </div>
      </div>
    </Card>
  );
};
