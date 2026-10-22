import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function DateTime() {
  const location = useLocation();
  const [now, setNow] = useState(() => new Date());
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then((response) => {
        if (isCurrent) setHasSession(response.ok);
      })
      .catch(() => {
        if (isCurrent) setHasSession(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 1_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const time = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const shortMonth = now.toLocaleDateString("en-US", { month: "short" });
  const shortWeekday = now.toLocaleDateString("en-US", {
    weekday: "short",
  });
  const day = now.toLocaleDateString("en-US", { day: "2-digit" });
  const date = `${month}, ${weekday} ${day}`;
  const shortDate = `${shortMonth}, ${shortWeekday} ${day}`;

  if (!hasSession || location.pathname === "/") return null;

  return (
    <div className="flex w-full shrink-0 justify-end gap-4 rounded-xl bg-(--surface) px-4 py-2 text-center font-bold leading-tight tabular-nums">
      <p className="max-[700px]:hidden">{date}</p>
      <div>
        <p className="hidden max-[700px]:block">{shortDate}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
