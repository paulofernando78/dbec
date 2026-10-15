import { Card } from "@/components/ui/Card";
import type { Level } from "@/data/levels";

export function LevelHeader({ level }: { level: Level }) {
  return (
    <Card className="mb-4 p-2!">
      <header className="relative overflow-hidden rounded-lg bg-linear-to-br from-amber-400 to-orange-500 p-4 text-black">
        <span aria-hidden="true" className="absolute -right-10 -top-10 size-32 rounded-full bg-white/20" />
        <span aria-hidden="true" className="absolute -bottom-20 right-8 size-40 rounded-full bg-white/20" />
        <div className="relative z-10">
          <h1 className="text-3xl font-black md:text-4xl">{level.code} {level.name}</h1>
          <p className="text-xl md:text-2xl">{level.subtitle}</p>
          <p className="text-base md:text-lg">{level.description}</p>
          <p className="mt-5 text-sm font-semibold">{level.units.length} units available</p>
        </div>
      </header>
    </Card>
  );
}
