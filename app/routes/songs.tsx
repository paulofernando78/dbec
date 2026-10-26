import { Link, useNavigate } from "react-router";
import { Music2 } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { bands } from "@/data/songs";

export function meta() {
  return [{ title: "Songs | Daily Basis English Course" }];
}

export default function Songs() {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Songs"
        description="Learn English through bands and songs."
      />

      <Card title="Artists & Bands" className="grid gap-4">
        {bands.length > 0 ? (
          bands.map((band) => {
            const bandPath = `/songs/${band.slug}`;

            return (
              <div
                key={band.slug}
                className="flex items-start gap-3 rounded-xl bg-(--background) p-4 transition-transform hover:-translate-y-0.5"
              >
                <Button
                  ariaLabel={`Open ${band.name}`}
                  icon={<Music2 />}
                  onClick={() => navigate(bandPath)}
                />
                <Link to={bandPath} className="min-w-0">
                  <span className="block text-lg font-bold">{band.name}</span>
                  {band.description && (
                    <span className="block text-slate-500">
                      {band.description}
                    </span>
                  )}
                  <span className="block text-sm text-slate-500">
                    {band.songs.length}{" "}
                    {band.songs.length === 1 ? "song" : "songs"}
                  </span>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="rounded-xl bg-(--background) p-4 text-slate-500">
            No bands added yet.
          </div>
        )}
      </Card>
    </div>
  );
}
