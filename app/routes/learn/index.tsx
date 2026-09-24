import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { learningLevels } from "@/data/learning";

export default function LearnIndex() {
  return (
    <div className="">
      <div className="grid gap-4">
        {Object.values(learningLevels).map((level) => {
          const colors =
            level.id === "a1"
              ? "from-yellow-400 to-amber-600 text-slate-900"
              : level.id === "a2-b1"
                ? "from-sky-500 to-blue-700 text-white"
                : level.id === "b1"
                  ? "from-emerald-500 to-green-700 text-white"
                  : level.id === "b2"
                    ? "from-purple-500 to-purple-700 text-white"
                    : level.id === "c1"
                      ? "from-indigo-600 to-violet-900 text-white"
                      : "from-red-500 to-red-700 text-white";
          const linkColors =
            level.id === "a1"
              ? "text-amber-700 shadow-[0_4px_0_#fef3c7]"
              : level.id === "a2-b1"
                ? "text-blue-700 shadow-[0_4px_0_#bae6fd]"
                : level.id === "b1"
                  ? "text-green-700 shadow-[0_4px_0_#bbf7d0]"
                  : level.id === "b2"
                    ? "text-purple-700 shadow-[0_4px_0_#e9d5ff]"
                    : level.id === "c1"
                      ? "text-indigo-700 shadow-[0_4px_0_#c7d2fe]"
                      : "text-red-700 shadow-[0_4px_0_#fecaca]";
          return (
            <section
              className={`grid items-center gap-5 rounded-3xl bg-linear-to-br p-7 max-[620px]:grid-cols-[auto_1fr] max-[620px]:px-4.5 max-[620px]:py-5.5 ${colors}`}
              key={level.id}
            >
              <div>
                <span className="text-3xl font-extrabold tracking-[.12em] opacity-85">
                  {" "}
                  {level.label}
                </span>
                <h2 className="my-1 text-2xl font-extrabold">{level.title}</h2>
                <p className="mb-1 opacity-95">{level.description}</p>
                <small className="opacity-80">
                  {level.units.length} units available
                </small>
              </div>
              <Link
                className={`flex w-max items-center gap-2 rounded-[14px] bg-white p-4 font-extrabold no-underline active:translate-y-[3px] max-[620px]:col-span-full max-[620px]:justify-center ${linkColors}`}
                to={`/learn/${level.id}`}
              >
                View level <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
}
