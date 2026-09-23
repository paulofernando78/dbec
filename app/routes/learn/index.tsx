import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { learningLevels } from "@/data/learning";

export default function LearnIndex() {
  return (
    <div className="mx-auto w-[calc(100%_-_32px)] max-w-[760px] py-12 pb-20 max-[620px]:w-[calc(100%_-_20px)] max-[620px]:pt-6">
      <div className="grid gap-5.5">
        {Object.values(learningLevels).map((level) => {
          return (
            <section
              className={`grid items-center gap-5 rounded-3xl p-7 max-[620px]:grid-cols-[auto_1fr] max-[620px]:px-4.5 max-[620px]:py-5.5 ${level.id === "a1" ? "bg-linear-to-br from-yellow-400 to-amber-600 text-slate-900" : "bg-linear-to-br from-red-500 to-red-700 text-white"}`}
              key={level.id}
            >
              <div>
                <span className="text-3xl font-extrabold tracking-[.12em] opacity-85">
                  {" "}
                  {level.id.toUpperCase()}{" "}
                  {level.label.split(" ").slice(1).join(" ")}
                </span>
                <h2 className="my-1 text-2xl font-extrabold">{level.title}</h2>
                <p className="mb-1 opacity-95">{level.description}</p>
                <small className="opacity-80">
                  {level.units.length} units available
                </small>
              </div>
              <Link
                className={`flex w-max items-center gap-2 rounded-[14px] bg-white p-4 font-extrabold no-underline active:translate-y-[3px] max-[620px]:col-span-full max-[620px]:justify-center ${level.id === "a1" ? "text-amber-700 shadow-[0_4px_0_#fef3c7]" : "text-red-700 shadow-[0_4px_0_#fecaca]"}`}
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
