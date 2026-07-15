import { useState } from "react";

const statusOptions = [
  {
    value: "...",
    label: "...",
    color: "bg-gray-200 border border-gray-300 text-white",
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

const StatusSelect = ({ defaultStatus }: { defaultStatus: string }) => {
  const [status, setStatus] = useState(defaultStatus);

  return (
    <select
      value={status}
      onChange={(event) => setStatus(event.target.value)}
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
  return (
    <div className="mb-4 overflow-x-auto border border-gray-300 rounded-lg">
      <div className="grid min-w-300 grid-cols-7">
        {calendarMonths.map(({ month, dates }) => (
          <section
            key={month}
            className="border-r border-gray-300 last:border-r-0"
          >
            <h3 className="bg-black px-2 py-2 text-center font-bold text-white">
              {month}
            </h3>

            <div className="px-2 py-2">
              <p className="mb-2 font-bold">
                Total: <span className="font-normal">{dates.length}</span>
              </p>

              <ol className="space-y-1">
                {dates.map(({ day, weekday, status }, index) => (
                  <li
                    key={`${month}-${day}`}
                    className="grid grid-cols-[1.25rem_3.5rem_1fr] items-center gap-1"
                  >
                    <span>{index + 1}.</span>
                     <StatusSelect defaultStatus={status} />
                    <span>
                      &bull; {weekday} {day}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
