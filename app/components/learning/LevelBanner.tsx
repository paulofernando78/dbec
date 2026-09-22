import { learningLevels } from "@/data/learning";

export type LearningLevelId = keyof typeof learningLevels;

type Props = {
  levelId: LearningLevelId;
  className?: string;
};

export function LevelBanner({ levelId, className = "" }: Props) {
  const level = learningLevels[levelId];
  const isA1 = levelId === "a1";

  return (
    <header
      className={`rounded-[22px] bg-linear-to-br p-6 max-[620px]:p-5 ${
        isA1
          ? "from-yellow-400 to-amber-600 text-slate-900"
          : "from-red-500 to-red-700 text-white"
      } ${className}`}
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
