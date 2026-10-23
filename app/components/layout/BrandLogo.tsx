type BrandLogoProps = {
  compact?: boolean;
  heading?: boolean;
  className?: string;
};

export function BrandLogo({
  compact = false,
  heading = false,
  className = "",
}: BrandLogoProps) {
  const LogoText = heading ? "h1" : "div";
  const logoStyle = {
    fontFamily: "var(--font-luckiest-guy)",
    color: "#222222",
    WebkitTextStroke: `${compact ? 4 : 12}px var(--gray-2)`,
    paintOrder: "stroke fill" as const,
    filter: `drop-shadow(${compact ? 1 : 2}px ${compact ? 1 : 2}px 1px var(--gray-4))`,
    textShadow: "1px 1px 1px var(--gray-4)",
  };

  return (
    <div className={`w-max ${className}`}>
      <div style={logoStyle} className={compact ? "leading-4" : "leading-14"}>
        <LogoText className={compact ? "text-base" : "text-[3rem]"}>
          DAILY BASIS
          <span
            className={`block ${compact ? "text-[0.76rem]" : "text-[2.26rem]"}`}
          >
            ENGLISH COURSE
          </span>
        </LogoText>
      </div>
      {!compact && (
        <span className="block text-right font-edu text-2xl">private</span>
      )}
    </div>
  );
}
