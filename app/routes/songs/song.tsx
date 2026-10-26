import { Link, useParams } from "react-router";
import { Video } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { findBand, findSong } from "@/data/songs/index";

export default function SongsSong() {
  const { band: bandSlug, song: songSlug } = useParams();
  const band = findBand(bandSlug);
  const song = band ? findSong(band, songSlug) : undefined;

  if (!band || !song) {
    return (
      <Card inset title="Song not found">
        <Link className="font-bold underline" to={band ? `/songs/${band.slug}` : "/songs"}>
          Back to {band ? band.name : "bands"}
        </Link>
      </Card>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow={band.name}
        title={song.title}
        description={`${song.album} (${song.year})`}
      />

      <Card className="grid gap-4">
        <section className="rounded-xl bg-(--background) p-4">
          <VideoPlayer
            src={song.youtubeUrl}
            instruction="Watch and listen."
          />
          <div className="flex items-center gap-2">
            <Button
              ariaLabel="Open on YouTube"
              icon={<Video />}
              onClick={() =>
                window.open(song.youtubeUrl, "_blank", "noopener,noreferrer")
              }
            />
            <span className="font-bold">Open on YouTube</span>
          </div>
        </section>

        <section className="rounded-xl bg-(--background) p-4">
          {song.lines.length > 0 ? (
            <div className="grid gap-4">
              {song.lines.map((line, index) => (
                <div
                  key={`${line.english}-${index}`}
                  className="last:pb-0"
                >
                  <p className="font-semibold">{line.english}</p>
                  <p className="mt-1 text-slate-500">{line.portuguese}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No English or Portuguese content added yet.</p>
          )}
        </section>
      </Card>
    </div>
  );
}
