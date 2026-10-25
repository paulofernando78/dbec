import { Link, useParams } from "react-router";
import { Disc3 } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Card } from "@/components/ui/Card";
import { findBand } from "@/data/songs";

export default function SongsBand() {
  const { band: bandSlug } = useParams();
  const band = findBand(bandSlug);

  if (!band) {
    return (
      <Card inset title="Band not found">
        <Link className="font-bold underline" to="/songs">
          Back to bands
        </Link>
      </Card>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="Songs"
        title={band.name}
        description={band.description}
      />

      <Card title="Songs" className="grid gap-4">
        {band.songs.length > 0 ? (
          band.songs.map((song) => (
            <Link
              key={song.slug}
              to={`/songs/${band.slug}/${song.slug}`}
              className="flex items-center gap-3 rounded-xl bg-(--background) p-4 transition-transform hover:-translate-y-0.5"
            >
              <Disc3 className="shrink-0 text-[var(--button-icon)]" />
              <span className="min-w-0">
                <span className="block text-lg font-bold">{song.title}</span>
                <span className="block text-sm text-slate-500">
                  <i>{song.album}</i> ({song.year})
                </span>
              </span>
            </Link>
          ))
        ) : (
          <div className="rounded-xl bg-(--background) p-4 text-slate-500">
            No songs added yet.
          </div>
        )}
      </Card>
    </div>
  );
}
