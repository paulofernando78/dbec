import type { Level } from "@/data/course/types";

export type LevelTheme = Level["theme"];

export const levelGradientClasses: Record<LevelTheme, string> = {
  amber: "bg-linear-to-br from-amber-400 to-orange-500 text-black",
  red: "bg-linear-to-br from-red-500 to-red-700 text-white",
  blue: "bg-linear-to-br from-sky-500 to-blue-700 text-white",
  green: "bg-linear-to-br from-emerald-500 to-green-700 text-white",
  purple: "bg-linear-to-br from-fuchsia-500 to-purple-700 text-white",
  indigo: "bg-linear-to-br from-indigo-500 to-violet-800 text-white",
};

export const levelButtonClasses: Record<LevelTheme, string> = {
  amber:
    "border-amber-500! from-amber-50! to-amber-300! text-amber-700! [&>span]:from-amber-200! [&>span]:to-orange-50! [&_svg]:stroke-amber-700!",
  red: "border-red-500! from-red-50! to-red-300! text-red-700! [&>span]:from-red-200! [&>span]:to-red-50! [&_svg]:stroke-red-700!",
  blue: "border-sky-500! from-sky-50! to-sky-300! text-sky-700! [&>span]:from-sky-200! [&>span]:to-sky-50! [&_svg]:stroke-sky-700!",
  green:
    "border-emerald-500! from-emerald-50! to-emerald-300! text-emerald-700! [&>span]:from-emerald-200! [&>span]:to-emerald-50! [&_svg]:stroke-emerald-700!",
  purple:
    "border-fuchsia-500! from-fuchsia-50! to-fuchsia-300! text-fuchsia-700! [&>span]:from-fuchsia-200! [&>span]:to-fuchsia-50! [&_svg]:stroke-fuchsia-700!",
  indigo:
    "border-indigo-500! from-indigo-50! to-indigo-300! text-indigo-700! [&>span]:from-indigo-200! [&>span]:to-indigo-50! [&_svg]:stroke-indigo-700!",
};
