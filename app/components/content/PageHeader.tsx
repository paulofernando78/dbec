import { CalendarDays, Clock } from "lucide-react";

import { Card } from "@/components/ui/Card";

export type PageHeaderProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  descriptions?: string[];
  footer?: string;
  date?: string;
  time?: string;
  variant?: "default" | "level";
  levelTheme?: "amber" | "red" | "blue" | "green" | "purple" | "indigo";
};

export const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  description,
  descriptions = [],
  footer,
  date,
  time,
  variant = "default",
  levelTheme = "amber",
}: PageHeaderProps) => {
  const isLevel = variant === "level";
  const contentDescriptions = description
    ? [description, ...descriptions]
    : descriptions;

  return (
    <Card className={`${isLevel ? "mb-4" : "mb-8"} p-2!`}>
      <header
        className={`relative overflow-hidden rounded-lg p-4 ${
          isLevel
            ? levelTheme === "red"
              ? "bg-linear-to-br from-red-500 to-red-700 text-white"
              : levelTheme === "blue"
                ? "bg-linear-to-br from-sky-500 to-blue-700 text-white"
                : levelTheme === "green"
                  ? "bg-linear-to-br from-emerald-500 to-green-700 text-white"
                  : levelTheme === "purple"
                    ? "bg-linear-to-br from-fuchsia-500 to-purple-700 text-white"
                    : levelTheme === "indigo"
                      ? "bg-linear-to-br from-indigo-500 to-violet-800 text-white"
              : "bg-linear-to-br from-amber-400 to-orange-500 text-black"
            : "bg-linear-to-br from-gray-200 to-gray-300"
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute rounded-full ${
            isLevel
              ? "-right-10 -top-10 size-32 bg-white/20"
              : "-right-6 -top-8 size-24 bg-slate-500/15"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute rounded-full ${
            isLevel
              ? "-bottom-20 right-8 size-40 bg-white/20"
              : "-bottom-20 right-8 size-28 bg-white/35"
          }`}
        />

        <div className="relative z-10">
          {eyebrow && (
            <p className="mb-1 text-sm font-bold text-slate-500">{eyebrow}</p>
          )}
          {title && (
            <h1
              className={
                isLevel
                  ? "text-3xl font-black md:text-4xl"
                  : "text-4xl font-black"
              }
            >
              {title}
            </h1>
          )}
          {subtitle && <p className="mb-1 text-2xl">{subtitle}</p>}
          {contentDescriptions.map((item, index) => (
            <p key={`${item}-${index}`} className="text-base md:text-lg">
              {item}
            </p>
          ))}
          {footer && <p className="mt-5 text-sm font-semibold">{footer}</p>}
          {date && (
            <div className="mb-1 flex items-center gap-2">
              <CalendarDays size={19} className="text-gray-500" />
              <span className="text-sm">
                <em>{date}</em>
              </span>
            </div>
          )}
          {time && (
            <div className="flex items-center gap-2">
              <Clock size={19} className="text-gray-500" />
              <span className="text-sm">
                <em>{time}</em>
              </span>
            </div>
          )}
        </div>
      </header>
    </Card>
  );
};
