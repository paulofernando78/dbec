import { Audio } from "@/components/ui/Audio";

type AudioPlayerProps = {
  src: string;
  fallbackText?: string;
  ariaLabel?: string;
  withBottomMargin?: boolean;
  withBottomPadding?: boolean;
  background?: "surface" | "background";
};

export const AudioPlayer = ({
  src,
  fallbackText,
  ariaLabel = "Play audio",
  withBottomMargin = true,
  withBottomPadding = true,
  background = "surface",
}: AudioPlayerProps) => {
  return (
    <div
      className={`${withBottomMargin ? "mb-4" : ""} ${withBottomPadding ? "p-2.5 sm:p-3" : "px-2.5 pt-2.5 sm:px-3 sm:pt-3"} ${background === "background" ? "bg-[var(--background)]" : "bg-[var(--surface)]"} rounded-xl`}
    >
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
