import { useState } from "react";

const statusOptions = [
  {
    value: "...",
    label: "...",
    color: "bg-gray-300 border border-gray-400 text-white",
  },
  {
    value: "P",
    label: "P",
    color: "bg-gray-400 border border-gray-500 text-white",
  },
  {
    value: "OK",
    label: "OK",
    color: "bg-green-400 border border-green-600 text-white",
  },
  {
    value: "SC",
    label: "SC",
    color: "bg-red-400 border border-red-600 text-white",
  },
  {
    value: "TC",
    label: "TC",
    color: "bg-red-400 border border-red-600 text-white",
  },
  {
    value: "R",
    label: "R",
    color: "bg-yellow-400 border border-yellow-600 text-white",
  },
  {
    value: "ROK",
    label: "ROK",
    color: "bg-green-400 border border-green-600 text-white",
  },
  {
    value: "H",
    label: "H",
    color: "bg-purple-400 border border-purple-600 text-white",
  },
];

const getStatusColor = (status: string) =>
  statusOptions.find((option) => option.value === status)?.color ??
  "bg-gray-100 text-gray-700";

const months = [
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const holidayDates = new Set([
  "2026-06-04",
  "2026-09-07",
  "2026-10-12",
  "2026-10-15",
  "2026-12-25",
]);

const getDateKey = (year: number, monthIndex: number, day: number) =>
  `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(
    2,
    "0",
  )}`;

const getWeekdaysInMonth = (year: number, monthIndex: number) => {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  return Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1;
    const date = new Date(year, monthIndex, day);
    const weekday = date.getDay();

    if (weekday === 0 || weekday === 6) {
      return null;
    }

    return {
      day,
      weekday: weekdays[weekday],
      status: holidayDates.has(getDateKey(year, monthIndex, day)) ? "H" : "...",
    };
  }).filter(
    (date): date is { day: number; weekday: string; status: string } =>
      date !== null,
  );
};

const calendarMonths = months.map((month, index) => ({
  month,
  dates: getWeekdaysInMonth(2026, index + 5),
}));

type CalendarStatusMap = Record<string, string>;

const getStorageKey = (month: string, day: number) =>
  `calendar-2026-${month}-${day}`;

const StatusSelect = ({
  status,
  onStatusChange,
}: {
  status: string;
  onStatusChange: (nextStatus: string) => void;
}) => {
  return (
    <select
      value={status}
      onChange={(event) => onStatusChange(event.target.value)}
      className={`w-full h-6 rounded-lg p-[.1rem] text-sm ${getStatusColor(
        status,
      )}`}
    >
      {statusOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const LessonDateCard = () => {
  const [calendarStatus, setCalendarStatus] = useState<CalendarStatusMap>(
    () => {
      if (typeof window === "undefined") {
        return {};
      }

      const initialStatus: CalendarStatusMap = {};

      calendarMonths.forEach(({ month, dates }) => {
        dates.forEach(({ day, status }) => {
          const storageKey = getStorageKey(month, day);
          initialStatus[storageKey] =
            localStorage.getItem(storageKey) ?? status;
        });
      });

      return initialStatus;
    },
  );

  const handleStatusChange = (storageKey: string, nextStatus: string) => {
    setCalendarStatus((currentStatus) => ({
      ...currentStatus,
      [storageKey]: nextStatus,
    }));

    localStorage.setItem(storageKey, nextStatus);
  };

  return (
    <div
      className="
      mb-4
      overflow-x-auto
      border-2
    border-gray-400
      rounded-lg"
    >
      <h2
        className="
        text-lg
        px-2
        py-1
        bg-gray-300"
      >
        Calendar
      </h2>
      <div
        className="
        grid
        min-w-300
        grid-cols-7"
      >
        {calendarMonths.map(({ month, dates }) => {
          const totalClasses = dates.filter(({ day }) => {
            const storageKey = getStorageKey(month, day);
            const currentStatus = calendarStatus[storageKey];

            return currentStatus === "OK" || currentStatus === "ROK";
          }).length;

          return (
            <section
              key={month}
              className="
                border-r
                border-gray-300
                last:border-r-0"
            >
              <h3
                className="
                bg-black
                px-2
                py-2
                text-center
                font-bold
                text-white"
              >
                {month}
              </h3>

              <div className="px-2 py-2">
                <p className="mb-2 font-bold">
                  Total: <span className="font-normal">{totalClasses}</span>
                </p>

                <ol className="space-y-1">
                  {dates.map(({ day, weekday, status }, index) => {
                    const storageKey = getStorageKey(month, day);
                    const currentStatus = calendarStatus[storageKey] ?? status;

                    return (
                      <li
                        key={`${month}-${day}`}
                        className="
                          grid
                          grid-cols-[1.25rem_3.5rem_1fr]
                          items-center
                          gap-1"
                      >
                        <span>{index + 1}.</span>
                        <StatusSelect
                          status={currentStatus}
                          onStatusChange={(nextStatus) =>
                            handleStatusChange(storageKey, nextStatus)
                          }
                        />
                        <span>
                          &bull; {weekday} {day}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
