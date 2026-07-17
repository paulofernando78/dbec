import { useState } from "react";
import { useDraggableScroll } from "@/utils/useDraggableScroll";

const statusOptions = [
  {
    value: "...",
    label: "...",
    color: "bg-gray-300 border border-gray-400 text-gray-500",
  },
  {
    value: "P",
    label: "P",
    description: "Pending",
    color: "bg-gray-400 border border-gray-500 text-white",
  },
  {
    value: "OK",
    label: "OK",
    description: "Okay",
    color: "bg-green-400 border border-green-600 text-white",
  },
  {
    value: "ROK",
    label: "ROK",
    description: "Replacement OK",
    color: "bg-green-400 border border-green-600 text-white",
  },
  {
    value: "SC",
    label: "SC",
    description: "Student canceled",
    color: "bg-red-400 border border-red-600 text-white",
  },
  {
    value: "TC",
    label: "TC",
    description: "Teacher canceled",
    color: "bg-red-400 border border-red-600 text-white",
  },
  {
    value: "R",
    label: "R",
    description: "Replacement",
    color: "bg-yellow-400 border border-yellow-600 text-white",
  },
  {
    value: "H",
    label: "H",
    description: "Holiday",
    color: "bg-purple-400 border border-purple-600 text-white",
  },
];

const getStatusColor = (status: string) =>
  statusOptions.find((option) => option.value === status)?.color ??
  "bg-gray-100 text-gray-700";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
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
  "2026-01-01", // Janeiro: Confraternização Universal
  "2026-02-16", // Fevereiro: Carnaval (Segunda)
  "2026-02-17", // Fevereiro: Carnaval (Terça)
  "2026-04-03", // Abril: Paixão de Cristo (Sexta-feira Santa)
  "2026-04-21", // Abril: Tiradentes
  "2026-05-01", // Maio: Dia do Trabalhador
  "2026-06-04", // Junho: Corpus Christi
  "2026-09-07", // Setembro: Independência do Brasil
  "2026-10-12", // Outubro: Nossa Senhora Aparecida / Dia das Crianças
  "2026-10-15", // Outubro: Dia do Professor (Feriado Escolar)
  "2026-11-02", // Novembro: Finados
  "2026-11-15", // Novembro: Proclamação da República
  "2026-11-20", // Novembro: Dia da Consciência Negra
  "2026-12-24", // Dezembro: Pre-Natal
  "2026-12-25", // Dezembro: Natal
  "2026-12-26", // Dezembro: Férias
  "2026-12-27", // Dezembro: Férias
  "2026-12-28", // Dezembro: Férias
  "2026-12-29", // Dezembro: Férias
  "2026-12-30", // Dezembro: Férias
  "2026-12-31", // Dezembro: Férias
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
  dates: getWeekdaysInMonth(2026, index),
}));

type CalendarStatusMap = Record<string, string>;

const getStorageKey = (month: string, day: number) =>
  `calendar-2026-${month}-${day}`;

//! SELECT
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
      className={`
        w-full
        h-6
        rounded-lg
        p-[.1rem]
        text-sm
        ${getStatusColor(status)}
      `}
    >
      {statusOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const Calendar = () => {
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

  const { ref: scrollRef, isDragging, events } = useDraggableScroll();

  const handleStatusChange = (storageKey: string, nextStatus: string) => {
    setCalendarStatus((currentStatus) => ({
      ...currentStatus,
      [storageKey]: nextStatus,
    }));

    localStorage.setItem(storageKey, nextStatus);
  };

  return (
    <>
      <span
        className="
        block
        px-[.3rem] py-[.2rem]
        font-bold
        text-sm
        border-t
        border-r
        border-l 
        border-gray-300
        bg-gray-300
        rounded-t
        rounded-b-none
        "
      >
        Legend
      </span>
      <ul
        className="
        mb-4
        p-2
        grid
        grid-cols-3
        gap-2
        border
        border-gray-300
        rounded-t-none
        rounded-b
        "
      >
        {statusOptions
          .filter((options) => options.value !== "...")
          .map((option) => (
            <li
              key={option.value}
              className="
              flex
              items-center
              gap-2
              text-[.7rem]
              "
            >
              <span
                className={`
                inline-flex
                items-center
                justify-center
                w-9
                h-6
                rounded-lg
                ${option.color}
            `}
              >
                {option.label}
              </span>
              <span>{option.description}</span>
            </li>
          ))}
      </ul>
      <div
        ref={scrollRef}
        {...events} // Isso injeta automaticamente o onMouseDown, onMouseUp, etc.
        className={`
          mb-4
          overflow-x-auto
          border
          border-gray-300
          rounded-lg
          ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}
        `}
      >
        <h2
          className="
           sticky
          left-0
          z-10
          inline-block
          min-w-full
          text-lg
          font-bold
          px-2
          py-1
          bg-gray-300"
        >
          Calendar
        </h2>
        <div
          className="
          grid
          min-w-540
          grid-cols-12"
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

                <div
                  className="
                  px-2
                  py-2"
                >
                  <p
                    className="
                    mb-2
                    font-bold"
                  >
                    Total: <span className="font-normal">{totalClasses}</span>
                  </p>

                  <ol className="space-y-1">
                    {dates.map(({ day, weekday, status }, index) => {
                      const storageKey = getStorageKey(month, day);
                      const currentStatus =
                        calendarStatus[storageKey] ?? status;

                      return (
                        <li
                          key={`${month}-${day}`}
                          className="
                            grid
                            grid-cols-[1.35rem_3.5rem_1fr]
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
    </>
  );
};
