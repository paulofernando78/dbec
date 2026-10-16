import { useParams } from "react-router";

import { PageHeader } from "@/components/content/PageHeader";
import { UnitCard } from "@/components/levels/UnitCard";
import { levels } from "@/data/levels";

export default function LevelBuilder() {
  const { level: levelSlug } = useParams();
  const level = levels[levelSlug as keyof typeof levels];

  if (!level) return <p>Level not found.</p>;

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title={`${level.code} ${level.name}`}
        subtitle={level.subtitle}
        description={level.description}
        footer={`${level.units.length} units available`}
        variant="level"
      />
      <div className="grid gap-4">
        {level.units.map((unit) => (
          <UnitCard key={unit.number} unit={unit} />
        ))}
      </div>
    </div>
  );
}
