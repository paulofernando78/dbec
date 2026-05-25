// import styles from "";

import { useRef, useState } from "react";

import { Play, Square } from "lucide-react";

type AudioProps = {
  src: string
  className?: string
}

let currentGlobalAudio: HTMLAudioElement | null = null;

export const Audio = ({ src, className }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    // audioRef.current?.play();
    // setPlaying(true);

    // grab audio
    const el = audioRef.current;
    if (!el) return;

    // Is there another audio being played?
    if (currentGlobalAudio && currentGlobalAudio !== el) {
      // if so, stop it
      currentGlobalAudio.pause();
      currentGlobalAudio.currentTime = 0;
    }

    el.play();
    currentGlobalAudio = el;
    setPlaying(true);
  };

  const handleStop = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    // audioRef.current?.pause();
    // audioRef.current.currentTime = 0;
    // setPlaying(false);

    const el = audioRef.current;
    if (!el) return;

    el.pause();
    el.currentTime = 0;

    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
  };

  const handleEnded = () => {
    const el = audioRef.current;
    if (!el) return;

    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
  };

  const handlePause = () => {
    const el = audioRef.current;
    if (!el) return;

    // If this audio was the global one, clear it
    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
  };

  return (
    <>
      {playing ? (
        <Square onClick={handleStop}
        size={16}
        className={className}
        />
      ) : (
        <Play onClick={handlePlay}
        size={18}
        className={className}
        />
      )}

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onEnded={handleEnded}
        onPause={handlePause}
        onError={() => console.log("Audio failed to load:", src)}
      />
    </>
  );
};
