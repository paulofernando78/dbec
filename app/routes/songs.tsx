import { Link } from "react-router";
import { Music2 } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { bands } from "@/data/songs";

export function meta() {
  return [{ title: "Songs | Daily Basis English Course" }];
}

export default function Songs() {
  return (
    <div>
      <PageHeader
        title="Songs"
        description="Learn English through bands and songs."
      />

      <Card title="Bands" className="grid gap-4">
        {bands.length > 0 ? (
          bands.map((band) => (
            <Link
              key={band.slug}
              to={`/songs/${band.slug}`}
              className="flex items-center gap-3 rounded-xl bg-(--background) p-4 transition-transform hover:-translate-y-0.5"
            >
              <Music2 className="shrink-0 text-[var(--button-icon)]" />
              <span className="min-w-0">
                <span className="block text-lg font-bold">{band.name}</span>
                {band.description && (
                  <span className="block text-slate-500">
                    {band.description}
                  </span>
                )}
                <span className="block text-sm text-slate-500">
                  {band.songs.length} {band.songs.length === 1 ? "song" : "songs"}
                </span>
              </span>
            </Link>
          ))
        ) : (
          <div className="rounded-xl bg-(--background) p-4 text-slate-500">
            No bands added yet.
          </div>
        )}
      </Card>
    </div>
  );
}
