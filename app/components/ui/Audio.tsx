// import styles from "";

import { useRef, useState, type ReactNode } from "react";

import { LoaderCircle, Play, Rabbit, Square, Turtle } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";

type AudioSource = string | { src: string; fallbackText?: string };

type AudioProps = {
  src: string | readonly AudioSource[];
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
  speechLang?: string;
  children?: ReactNode;
  showIcon?: boolean;
  asButton?: boolean;
  pauseAfterFirstMs?: number;
  fallbackText?: string;
  showPlayerControls?: boolean;
};

let currentGlobalAudio: HTMLAudioElement | null = null;
let currentUtterance: SpeechSynthesisUtterance | null = null;
let currentUtteranceReset: (() => void) | null = null;
let speechRequestId = 0;

const stopCurrentSpeech = () => {
  speechRequestId += 1;

  if (currentUtterance) {
    window.speechSynthesis.cancel();
  }

  currentUtterance = null;

  const resetPreviousAudio = currentUtteranceReset;
  currentUtteranceReset = null;
  resetPreviousAudio?.();
};

const selectBestVoice = (voices: SpeechSynthesisVoice[], language: string) => {
  const languagePrefix = language.split("-")[0];
  const findVoice = (term: string) =>
    voices.find(
      (voice) =>
        voice.lang === language && voice.name.toLowerCase().includes(term),
    );

  return (
    findVoice("natural") ??
    findVoice("premium") ??
    findVoice("google") ??
    voices.find((voice) => voice.lang === language) ??
    voices.find((voice) => voice.lang.startsWith(languagePrefix)) ??
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

export const Audio = ({
  src,
  ariaLabel,
  className,
  wrapperClassName,
  speechLang = "en-US",
  children,
  showIcon = true,
  asButton = false,
  pauseAfterFirstMs = 0,
  fallbackText,
  showPlayerControls = false,
}: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const playlistIndexRef = useRef(0);
  const advancingPlaylistRef = useRef(false);
  const playbackRequestRef = useRef(0);
  const playbackActiveRef = useRef(false);
  const fallbackStartedRef = useRef(false);
  const speechFullTextRef = useRef("");
  const speechCompleteRef = useRef<(() => void) | undefined>(undefined);
  const playbackRateRef = useRef<1 | 0.75>(1);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<1 | 0.75>(1);

  const sources = (typeof src === "string" ? [src] : [...src]).map((source) =>
    typeof source === "string" ? { src: source } : source,
  );
  const primarySource = sources[0]?.src ?? "";
  const defaultFallbackText =
    fallbackText ?? ariaLabel?.replace(/^play\s+/i, "").trim();
  const isAudioFile =
    sources.length > 0 &&
    sources.every(({ src: source }) =>
      /\.(mp3|wav|ogg)(?:[?#]|$)/i.test(source),
    );

  const finishPlaylist = () => {
    const el = audioRef.current;

    playlistIndexRef.current = 0;
    advancingPlaylistRef.current = false;
    playbackActiveRef.current = false;
    fallbackStartedRef.current = false;

    if (el && el.getAttribute("src") !== primarySource) {
      el.src = primarySource;
      el.load();
    }

    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setLoading(false);
    setPlaying(false);
  };

  const playNextSource = async () => {
    const el = audioRef.current;
    if (!el) return;

    const currentIndex = playlistIndexRef.current;
    const nextIndex = currentIndex + 1;
    const requestId = playbackRequestRef.current;

    if (nextIndex >= sources.length) {
      finishPlaylist();
      return;
    }

    if (currentIndex === 0 && pauseAfterFirstMs > 0) {
      setLoading(false);
      await new Promise((resolve) =>
        window.setTimeout(resolve, pauseAfterFirstMs),
      );

      if (requestId !== playbackRequestRef.current) return;
    }

    playlistIndexRef.current = nextIndex;
    advancingPlaylistRef.current = true;
    fallbackStartedRef.current = false;
    setLoading(true);
    el.src = sources[nextIndex].src;
    el.load();

    try {
      await el.play();
      currentGlobalAudio = el;
    } catch {
      playCurrentSourceFallback();
    }
  };

  const playSpeech = async (
    text: string,
    onComplete?: () => void,
    fullText = text,
    startOffset = 0,
  ) => {
    stopCurrentSpeech();

    if (currentGlobalAudio) {
      currentGlobalAudio.pause();
      currentGlobalAudio.currentTime = 0;
      currentGlobalAudio = null;
    }

    const requestId = speechRequestId;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = speechLang;
    utterance.rate = playbackRateRef.current === 1 ? 0.92 : 0.72;
    utterance.pitch = 1;
    utterance.volume = 1;

    speechFullTextRef.current = fullText;
    speechCompleteRef.current = onComplete;
    setProgress(startOffset);
    setDuration(Math.max(fullText.length, 1));
    utterance.onboundary = (event) => {
      if (event.name === "word" || event.charIndex > 0) {
        setProgress(startOffset + event.charIndex);
      }
    };

    const voices = await waitForVoices();

    if (requestId !== speechRequestId) return;

    const voice = selectBestVoice(voices, speechLang);

    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      if (currentUtterance !== utterance) return;

      currentUtterance = null;
      currentUtteranceReset = null;
      utteranceRef.current = null;
      setLoading(false);
      setPlaying(false);
      setProgress(fullText.length);
      onComplete?.();
    };
    utterance.onerror = (event) => {
      if (event.error !== "canceled" && event.error !== "interrupted") {
        console.error("Speech synthesis failed:", event.error, text);
      }

      if (currentUtterance === utterance) {
        currentUtterance = null;
        currentUtteranceReset = null;
        utteranceRef.current = null;
        setLoading(false);
        setPlaying(false);
        onComplete?.();
      }
    };

    currentUtterance = utterance;
    utteranceRef.current = utterance;
    currentUtteranceReset = () => {
      utteranceRef.current = null;
      setLoading(false);
      setPlaying(false);
    };
    setLoading(false);
    setPlaying(true);
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  };

  const playCurrentSourceFallback = () => {
    if (!playbackActiveRef.current || fallbackStartedRef.current) return;

    fallbackStartedRef.current = true;
    const sourceFallbackText =
      sources[playlistIndexRef.current]?.fallbackText ??
      (playlistIndexRef.current === 0 ? defaultFallbackText : undefined);

    if (sourceFallbackText) {
      void playSpeech(sourceFallbackText, () => void playNextSource());
      return;
    }

    void playNextSource();
  };

  const handlePlay = async (e?: React.MouseEvent<Element>) => {
    e?.stopPropagation();

    if (!isAudioFile) {
      const speechText = primarySource.trim() || defaultFallbackText;

      if (speechText) {
        await playSpeech(speechText);
      }
      return;
    }

    // grab audio
    const el = audioRef.current;
    if (!el) return;

    stopCurrentSpeech();

    // Is there another audio being played?
    if (currentGlobalAudio && currentGlobalAudio !== el) {
      // if so, stop it
      currentGlobalAudio.pause();
      currentGlobalAudio.currentTime = 0;
    }

    setLoading(true);
    playbackRequestRef.current += 1;
    playbackActiveRef.current = true;
    fallbackStartedRef.current = false;
    playlistIndexRef.current = 0;
    advancingPlaylistRef.current = false;

    if (el.getAttribute("src") !== primarySource) {
      el.src = primarySource;
      el.load();
    }

    try {
      await el.play();

      currentGlobalAudio = el;
      setLoading(false);
      setPlaying(true);
    } catch (error) {
      console.error("Não foi possível tocar o áudio:", error);
      playCurrentSourceFallback();
    }
  };

  const handleStop = (e?: React.MouseEvent<Element>) => {
    e?.stopPropagation();
    setLoading(false);
    playbackRequestRef.current += 1;
    playbackActiveRef.current = false;
    fallbackStartedRef.current = false;

    if (utteranceRef.current) {
      stopCurrentSpeech();
      return;
    }

    const el = audioRef.current;
    if (!el) return;

    el.pause();
    el.currentTime = 0;
    playlistIndexRef.current = 0;
    advancingPlaylistRef.current = false;

    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
    setProgress(0);
  };

  const handleEnded = () => {
    void playNextSource();
  };

  const handlePause = () => {
    const el = audioRef.current;
    if (!el) return;

    if (advancingPlaylistRef.current) return;

    playbackRequestRef.current += 1;

    // If this audio was the global one, clear it
    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setLoading(false);
    setPlaying(false);
  };

  const handleSeek = (value: number) => {
    const el = audioRef.current;

    if (!isAudioFile) {
      const fullText =
        speechFullTextRef.current ||
        primarySource.trim() ||
        defaultFallbackText ||
        "";
      if (!fullText) return;

      const requestedIndex = Math.round(value);
      const nextSpace = fullText.indexOf(" ", requestedIndex);
      const startOffset = nextSpace === -1 ? requestedIndex : nextSpace + 1;
      const remainingText = fullText.slice(startOffset).trim();

      setProgress(startOffset);
      if (remainingText) {
        void playSpeech(
          remainingText,
          speechCompleteRef.current,
          fullText,
          startOffset,
        );
      }
      return;
    }

    if (!el || !Number.isFinite(el.duration)) return;

    el.currentTime = value;
    setProgress(value);
  };

  const togglePlaybackRate = () => {
    const nextRate = playbackRate === 1 ? 0.75 : 1;
    playbackRateRef.current = nextRate;
    setPlaybackRate(nextRate);

    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }

    if (utteranceRef.current) {
      const fullText = speechFullTextRef.current;
      const startOffset = Math.round(progress);
      const remainingText = fullText.slice(startOffset).trim();

      if (remainingText) {
        void playSpeech(
          remainingText,
          speechCompleteRef.current,
          fullText,
          startOffset,
        );
      }
    }
  };

  const icon = loading ? (
        <LoaderCircle
          size={16}
          className={`${className ?? ""} animate-spin`}
          color="var(--button-icon)"
        />
      ) : playing ? (
        <Square
          size={16}
          className={className}
          fill="var(--button-icon)"
          stroke="none"
          style={{ stroke: "none" }}
        />
      ) : (
        <Play
          size={16}
          className={className}
          fill="var(--button-icon)"
          stroke="none"
          style={{ stroke: "none" }}
        />
      );

  const audioElement = isAudioFile ? (
        <audio
          ref={audioRef}
          src={primarySource}
          preload="metadata"
          onWaiting={() => setLoading(true)}
          onPlaying={() => {
            advancingPlaylistRef.current = false;
            setLoading(false);
            setPlaying(true);
          }}
          onCanPlay={() => setLoading(false)}
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = playbackRateRef.current;
            setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0);
          }}
          onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)}
          onEnded={handleEnded}
          onPause={handlePause}
          onError={() => {
            playCurrentSourceFallback();
          }}
        />
      ) : null;

  const speechDurationText =
    speechFullTextRef.current || primarySource.trim() || defaultFallbackText || "";
  const estimatedSpeechDuration = Math.max(
    1,
    Math.ceil(
      (speechDurationText.trim().split(/\s+/).filter(Boolean).length / 138) *
        60,
    ),
  );
  const displayedDuration = isAudioFile ? duration : estimatedSpeechDuration;
  const displayedProgress = isAudioFile
    ? progress
    : duration > 0
      ? (progress / duration) * estimatedSpeechDuration
      : 0;
  const formatTime = (seconds: number) => {
    const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
    const minutes = Math.floor(safeSeconds / 60);
    const remainingSeconds = Math.floor(safeSeconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const playerControls = (
    <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <span className="shrink-0 whitespace-nowrap text-xs font-semibold tabular-nums text-slate-500 sm:text-sm">
            {formatTime(displayedProgress)} / {formatTime(displayedDuration)}
          </span>
          <input
            type="range"
            min={0}
            max={Math.max(duration, 1)}
            step={isAudioFile ? 0.1 : 1}
            value={Math.min(progress, Math.max(duration, 1))}
            onChange={(event) => handleSeek(Number(event.currentTarget.value))}
            aria-label="Audio progress"
            className="h-2 min-w-0 flex-1 cursor-pointer appearance-none rounded-full bg-slate-300 [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-slate-400 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-400"
          />
          <Button
            onClick={togglePlaybackRate}
            pressed={playbackRate === 0.75}
            ariaLabel={`Playback speed: ${playbackRate === 1 ? "normal" : "slow"}. Click to switch to ${playbackRate === 1 ? "slow" : "normal"}.`}
            icon={playbackRate === 1 ? <Rabbit /> : <Turtle />}
          />
        </div>
  );

  const content = (
    <>
      {showIcon && icon}
      {children}
      {audioElement}
    </>
  );

  if (showPlayerControls) {
    return (
      <div className={`flex items-center gap-3 ${wrapperClassName ?? ""}`}>
        <Button
          ariaLabel={ariaLabel}
          icon={icon}
          onClick={loading || playing ? handleStop : handlePlay}
        />
        {playerControls}
        {audioElement}
      </div>
    );
  }

  if (children) {
    return (
      <Button
        ariaLabel={ariaLabel}
        className={wrapperClassName}
        onClick={loading || playing ? handleStop : handlePlay}
      >
        {content}
      </Button>
    );
  }

  if (asButton) {
    return (
      <Button
        ariaLabel={ariaLabel}
        className={wrapperClassName}
        icon={content}
        onClick={loading || playing ? handleStop : handlePlay}
      />
    );
  }

  return (
    <span
      className={`inline-flex cursor-pointer ${wrapperClassName ?? ""}`}
      onClick={loading || playing ? handleStop : handlePlay}
    >
      {content}
    </span>
  );
};
