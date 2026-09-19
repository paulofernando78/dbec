import { Check, Lock, Play, Star } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { learningLevels } from "@/data/learning";

export default function LearningLevel() {
  const { level: levelId } = useParams();
  const level =
    levelId && levelId in learningLevels
      ? learningLevels[levelId as keyof typeof learningLevels]
      : undefined;

  if (!level) return <Navigate to="/learn" replace />;

  return (
    <div className="mx-auto w-[calc(100%_-_32px)] max-w-[760px] py-12 pb-20 max-[620px]:w-[calc(100%_-_20px)] max-[620px]:pt-6">
      <header className="mb-7 flex items-center gap-5.5 rounded-[22px] bg-linear-to-br from-lime-500 to-green-600 p-6 text-white max-[620px]:items-start max-[620px]:p-5">
        <div className="grid size-17 shrink-0 place-items-center rounded-[20px] border-3 border-current text-[1.4rem] font-black max-[620px]:size-13.5 max-[620px]:rounded-2xl">{level.id.toUpperCase()}</div>
        <div>
          <span className="text-xs font-extrabold tracking-[.12em] text-white/85">ENGLISH PATH</span>
          <h1 className="my-1 text-[clamp(1.6rem,5vw,2.3rem)] font-black">{level.title}</h1>
          <p className="m-0 opacity-90">{level.description}</p>
        </div>
      </header>

      {level.units.map((unit) => (
        <section className="mb-6 overflow-hidden rounded-[22px] border-2 border-slate-200 dark:border-slate-600" key={unit.id}>
          <header className="flex justify-between gap-5 border-b-2 border-slate-200 bg-slate-50 p-6 dark:border-slate-600 dark:bg-slate-800 max-[620px]:flex-col">
            <div>
              <span className="text-xs font-extrabold tracking-[.12em] text-green-700 dark:text-lime-400">UNIT {unit.order}</span>
              <h2 className="my-1 text-[1.65rem] font-black text-slate-800 dark:text-slate-100">{unit.title}</h2>
              <p className="m-0 text-slate-500 dark:text-slate-300">{unit.description}</p>
            </div>
            <div className="self-center rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300 max-[620px]:self-start">0 / {unit.lessons.length}</div>
          </header>

          <div className="px-[clamp(22px,7vw,60px)] py-7.5 max-[620px]:px-5">
            {unit.lessons.map((lesson, index) => {
              const locked = "locked" in lesson && lesson.locked;
              const checkpoint = "checkpoint" in lesson && lesson.checkpoint;
              const href = `/learn/${level.id}/${unit.id}/${lesson.slug}`;

              return (
                <div
                  className="relative grid min-h-32 grid-cols-[74px_1fr] items-center gap-6 max-[620px]:grid-cols-[64px_1fr] max-[620px]:gap-4"
                  key={lesson.id}
                >
                  {index > 0 && <div className="absolute bottom-16 left-8.5 z-0 h-32 w-1.5 bg-slate-200 dark:bg-slate-600 max-[620px]:left-7.25" />}
                  {locked ? (
                    <button className="z-1 grid h-16.5 w-18.5 place-items-center rounded-[21px] border-0 bg-slate-200 text-slate-400 shadow-[0_7px_0_#c9d0d3] dark:bg-slate-700 dark:text-slate-400 dark:shadow-[0_7px_0_#334155] max-[620px]:h-14.5 max-[620px]:w-16" disabled aria-label={`${lesson.title}, locked`}>
                      {checkpoint ? <Star aria-hidden="true" /> : <Lock aria-hidden="true" />}
                    </button>
                  ) : (
                    <Link className="z-1 grid h-16.5 w-18.5 place-items-center rounded-[21px] bg-lime-500 text-white shadow-[0_7px_0_#46a302] transition-transform hover:-translate-y-0.5 max-[620px]:h-14.5 max-[620px]:w-16" to={href} aria-label={`Start ${lesson.title}`}>
                      <Play fill="currentColor" aria-hidden="true" />
                    </Link>
                  )}
                  <div>
                    <span className={`text-xs font-extrabold tracking-[.12em] ${locked ? "text-slate-400" : "text-green-700 dark:text-lime-400"}`}>LESSON {lesson.order}</span>
                    <h3 className="my-0.5 text-lg font-extrabold text-slate-800 dark:text-slate-100">{lesson.title}</h3>
                    <p className="m-0 text-sm text-slate-500 dark:text-slate-300">{lesson.description}</p>
                    {!locked && <small className="mt-1 flex items-center gap-1 font-bold text-green-700 dark:text-lime-400"><Check size={14} /> Ready to start</small>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
