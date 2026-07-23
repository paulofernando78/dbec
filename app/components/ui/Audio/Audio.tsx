// import styles from "";

import { useRef, useState } from "react";

import { LoaderCircle, Play, Square } from "lucide-react";

type AudioProps = {
  src: string;
  className?: string;
};

let currentGlobalAudio: HTMLAudioElement | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;

const selectBestVoice = (voices: SpeechSynthesisVoice[]) => {
  const findVoice = (term: string) =>
    voices.find(
      (voice) =>
        voice.lang === "en-US" &&
        voice.name.toLowerCase().includes(term),
    );

  return (
    findVoice("natural") ??
    findVoice("premium") ??
    findVoice("google") ??
    voices.find((voice) => voice.lang === "en-US") ??
    voices.find((voice) => voice.lang.startsWith("en")) ??
    voices[0]
  );
};

const waitForVoices = () =>
  new Promise<SpeechSynthesisVoice[]>((resolve) => {
    const voices = window.speechSynthesis.getVoices();

    if (voices.length) {
      resolve(voices);
      return;
    }

    const handleVoicesChanged = () => {
      window.clearTimeout(timeout);
      resolve(window.speechSynthesis.getVoices());
    };

    const timeout = window.setTimeout(() => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged,
      );
      resolve(window.speechSynthesis.getVoices());
    }, 500);

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged,
      { once: true },
    );
  });

export const Audio = ({ src, className }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const isAudioFile = /\.(mp3|wav|ogg)$/i.test(src);

  const handlePlay = async (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();

    if (!isAudioFile) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(src);
      utterance.lang = "en-US";
      utterance.rate = 0.92;
      utterance.pitch = 1;
      utterance.volume = 1;

      const voices = await waitForVoices();
      const voice = selectBestVoice(voices);

      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => {
        currentUtterance = null;
        setPlaying(false);
      };

      currentUtterance = utterance;
      setPlaying(true);
      window.speechSynthesis.speak(utterance);
      return;
    }

    // grab audio
    const el = audioRef.current;
    if (!el) return;

    // Is there another audio being played?
    if (currentGlobalAudio && currentGlobalAudio !== el) {
      // if so, stop it
      currentGlobalAudio.pause();
      currentGlobalAudio.currentTime = 0;
    }

    setLoading(true);

    try {
      await el.play();

      currentGlobalAudio = el;
      setLoading(false);
      setPlaying(true);
    } catch (error) {
      console.error("Não foi possível tocar o áudio:", error);
      setLoading(false);
      setPlaying(false);
    }
  };

  const handleStop = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setLoading(false);
    if (currentUtterance) {
      window.speechSynthesis.cancel();
      currentUtterance = null;
      setPlaying(false);
      return;
    }

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

    setLoading(false);
    setPlaying(false);
  };

  const handlePause = () => {
    const el = audioRef.current;
    if (!el) return;

    // If this audio was the global one, clear it
    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setLoading(false);
    setPlaying(false);
  };

  return (
    <>
      {loading ? (
        <LoaderCircle
          onClick={handleStop}
          size={16}
          className={`${className ?? ""} animate-spin`}
          color="var(--icon-color)"
        />
      ) : playing ? (
        <Square
          onClick={handleStop}
          size={16}
          className={className}
          color="var(--icon-color)"
          fill="var(--icon-color)"
        />
      ) : (
        <Play
          onClick={handlePlay}
          size={16}
          className={className}
          color="var(--icon-color)"
          fill="var(--icon-color)"
        />
      )}

      {isAudioFile && (
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onWaiting={() => setLoading(true)}
          onPlaying={() => {
            setLoading(false);
            setPlaying(true);
          }}
          onCanPlay={() => setLoading(false)}
          onEnded={handleEnded}
          onPause={handlePause}
          onError={() => {
            console.error("Audio failed to load:", src);
            setLoading(false);
            setPlaying(false);
          }}
        />
      )}
    </>
  );
};
