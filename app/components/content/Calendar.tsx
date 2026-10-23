import { Card } from "@/components/ui/Card";
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
    color: "bg-green-400 border border-green-700 text-white",
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

//! SELECT
const StatusSelect = ({
  status,
  onStatusChange,
  disabled,
}: {
  status: string;
  onStatusChange: (nextStatus: string) => void;
  disabled: boolean;
}) => {
  return (
    <select
      value={status}
      onChange={(event) => onStatusChange(event.target.value)}
      disabled={disabled}
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

type CalendarProps = {
  statuses?: CalendarStatusMap;
  readOnly?: boolean;
  onStatusChange?: (lessonDate: string, status: string) => void;
};

export const Calendar = ({ statuses = {}, readOnly = false, onStatusChange }: CalendarProps) => {

  const { ref: scrollRef, isDragging, events } = useDraggableScroll();

  return (
    <>
      <Card title="Legend" className="w-full">
        <Card className="bg-(--background)">
          <ul
            className="
            grid
            grid-cols-2
            min-[810px]:grid-cols-3
            gap-2
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
        </Card>
      </Card>

      <Card
        title="Calendar"
        className="mt-4 mb-4 w-full min-w-0 overflow-hidden [contain:inline-size]"
      >
        <div
          ref={scrollRef}
          {...events} // Isso injeta automaticamente o onMouseDown, onMouseUp, etc.
          className={`
            w-full
            min-w-0
            max-w-full
            overflow-x-auto
            pb-2
            ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}
          `}
        >
          <div
            className="
            flex
            w-max
            min-w-full
            gap-4
            items-stretch"
          >
            {calendarMonths.map(({ month, dates }) => {
            const totalClasses = dates.filter(({ day }) => {
              const lessonDate = getDateKey(2026, months.indexOf(month), day);
              const currentStatus = statuses[lessonDate];

              return currentStatus === "OK" || currentStatus === "ROK";
            }).length;

            return (
              <Card
                key={month}
                title={month}
                className="w-56! shrink-0 bg-(--background)"
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
                    const lessonDate = getDateKey(2026, months.indexOf(month), day);
                    const currentStatus = statuses[lessonDate] ?? status;

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
                          disabled={readOnly}
                          onStatusChange={(nextStatus) => onStatusChange?.(lessonDate, nextStatus)}
                        />
                        <span className="whitespace-nowrap">
                          &bull; {weekday} {day}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </Card>
            );
            })}
          </div>
        </div>
      </Card>
    </>
  );
};
