import { learningLevels } from "@/data/learning";

export type LearningLevelId = keyof typeof learningLevels;

type Props = {
  levelId: LearningLevelId;
  className?: string;
};

export function LevelBanner({ levelId, className = "" }: Props) {
  const level = learningLevels[levelId];
  const colors = {
    a1: "from-yellow-400 to-amber-600 text-slate-900",
    a2: "from-red-500 to-red-700 text-white",
    "a2-b1": "from-sky-500 to-blue-700 text-white",
    b1: "from-emerald-500 to-green-700 text-white",
    b2: "from-purple-500 to-purple-700 text-white",
    c1: "from-indigo-600 to-violet-900 text-white",
  }[levelId];

  return (
    <header
      className={`rounded-2xl bg-linear-to-br p-6 max-[620px]:p-5 ${colors} ${className}`}
    >
      <div className="text-[clamp(2rem,8vw,3rem)] leading-none font-black">
        {level.label}
      </div>
      <h1 className="m-0 text-[clamp(1.6rem,5vw,2.3rem)] font-black">
        {level.title}
      </h1>
      <p className="m-0 max-w-[42ch] opacity-90">{level.description}</p>
    </header>
  );
}
