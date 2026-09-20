import { ArrowRight, BookOpen, Flame, Trophy } from "lucide-react";
import { Link } from "react-router";
import { learningLevels } from "@/data/learning";

export default function LearnIndex() {
  return (
    <div className="mx-auto w-[calc(100%_-_32px)] max-w-[760px] py-12 pb-20 max-[620px]:w-[calc(100%_-_20px)] max-[620px]:pt-6">
      <header className="px-4 pt-6 pb-8.5 text-center">
        <span className="text-xs font-extrabold tracking-[.12em] text-green-700 dark:text-lime-400">YOUR ENGLISH JOURNEY</span>
        <h1 className="my-2 text-[clamp(2rem,7vw,3.6rem)] leading-[1.04] font-black text-slate-800 dark:text-slate-100">Learn a little every day.</h1>
        <p className="text-[1.05rem] text-slate-500 dark:text-slate-300">Short, practical lessons that turn English into a daily habit.</p>
      </header>

      <section className="mb-7 grid grid-cols-3 gap-3 max-[620px]:grid-cols-1 [&>div]:grid [&>div]:grid-cols-[auto_1fr] [&>div]:items-center [&>div]:gap-x-2.5 [&>div]:rounded-[18px] [&>div]:border-2 [&>div]:border-slate-200 [&>div]:p-4 dark:[&>div]:border-slate-600 [&_svg]:row-span-2 [&_svg]:text-orange-400 [&_strong]:text-slate-800 dark:[&_strong]:text-slate-100 [&_span]:text-xs [&_span]:text-slate-500 dark:[&_span]:text-slate-400" aria-label="Learning statistics">
        <div><Flame aria-hidden="true" /><strong>0</strong><span>day streak</span></div>
        <div><Trophy aria-hidden="true" /><strong>0</strong><span>total XP</span></div>
        <div><BookOpen aria-hidden="true" /><strong>A1</strong><span>current level</span></div>
      </section>

      <div className="grid gap-5.5">
        {Object.values(learningLevels).map((level) => (
          <section className={`grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-3xl p-7 max-[620px]:grid-cols-[auto_1fr] max-[620px]:px-4.5 max-[620px]:py-5.5 ${level.id === "a1" ? "bg-linear-to-br from-yellow-400 to-amber-600 text-slate-900" : "bg-linear-to-br from-red-500 to-red-700 text-white"}`} key={level.id}>
            <div className="grid size-17 place-items-center rounded-[20px] border-3 border-current text-[1.4rem] font-black">{level.id.toUpperCase()}</div>
            <div>
              <span className="text-xs font-extrabold tracking-[.12em] opacity-85">{level.label.split(" ").slice(1).join(" ").toUpperCase()}</span>
              <h2 className="my-1 text-2xl font-extrabold">{level.title}</h2>
              <p className="mb-1 opacity-95">{level.description}</p>
              <small className="opacity-80">{level.units.length} units available</small>
            </div>
            <Link className={`flex items-center gap-2 rounded-[14px] bg-white px-4.5 py-3.5 font-extrabold no-underline active:translate-y-[3px] max-[620px]:col-span-full max-[620px]:justify-center ${level.id === "a1" ? "text-amber-700 shadow-[0_4px_0_#fef3c7]" : "text-red-700 shadow-[0_4px_0_#fecaca]"}`} to={`/learn/${level.id}`}>
              View level <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
