import { Audio } from "@/components/ui/Audio";

type AudioPlayerProps = {
  src: string;
  fallbackText?: string;
  ariaLabel?: string;
};

export const AudioPlayer = ({
  src,
  fallbackText,
  ariaLabel = "Play audio",
}: AudioPlayerProps) => {
  return (
    <div className="mb-4 rounded-xl bg-[var(--surface)] p-2.5 sm:p-3">
      <Audio
        key={`${src || "synth"}-${fallbackText ?? ""}`}
        asButton
        src={src}
        fallbackText={fallbackText}
        speechLang="en-US"
        ariaLabel={ariaLabel}
        showPlayerControls
        wrapperClassName="flex w-full items-center gap-3"
      />
    </div>
  );
};
