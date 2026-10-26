import { Link, useNavigate, useParams } from "react-router";
import { Disc3 } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { findBand } from "@/data/songs/index";

export default function SongsBand() {
  const navigate = useNavigate();
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

  const albums = band.songs.reduce<
    { title: string; year: number; songs: typeof band.songs }[]
  >((groups, song) => {
    const album = groups.find(
      (group) => group.title === song.album && group.year === song.year,
    );

    if (album) {
      album.songs.push(song);
    } else {
      groups.push({ title: song.album, year: song.year, songs: [song] });
    }

    return groups;
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Songs"
        title={band.name}
        description={band.description}
      />

      {albums.length > 0 ? (
        <div className="grid gap-4">
          {albums.map((album) => (
            <Card
              key={`${album.title}-${album.year}`}
              title={`${album.title} (${album.year})`}
              inset
              contentClassName="grid"
            >
              {album.songs.map((song) => {
                const songPath = `/songs/${band.slug}/${song.slug}`;

                return (
                  <div
                    key={song.slug}
                    className="flex items-center gap-3 border-b border-slate-300 py-3 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <Button
                      ariaLabel={`Open ${song.title}`}
                      icon={<Disc3 />}
                      onClick={() => navigate(songPath)}
                    />
                    <Link
                      to={songPath}
                      className="text-lg font-bold transition-transform hover:translate-x-1"
                    >
                      {song.title}
                    </Link>
                  </div>
                );
              })}
            </Card>
          ))}
        </div>
      ) : (
        <Card inset title="Songs">
          <p className="text-slate-500">No songs added yet.</p>
        </Card>
      )}
    </div>
  );
}
