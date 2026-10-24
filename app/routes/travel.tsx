import { useEffect, useState } from "react";

import { PageHeader } from "@/components/content/PageHeader";
import { UnitCard } from "@/components/course/UnitCard";
import { travel } from "@/data/travel";

export default function Travel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then((response) => {
        if (active) setIsAuthenticated(response.ok);
      })
      .catch(() => {
        if (active) setIsAuthenticated(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title={`${travel.code} ${travel.name}`}
        subtitle={travel.subtitle}
        description={travel.description}
        footer={`${travel.units.length} units available`}
      />
      <div className="grid gap-4">
        {travel.units.map((unit) => (
          <UnitCard
            key={unit.number}
            unit={unit}
            levelSlug={travel.slug}
            isAuthenticated={isAuthenticated}
            basePath="/travel"
          />
        ))}
      </div>
    </div>
  );
}
