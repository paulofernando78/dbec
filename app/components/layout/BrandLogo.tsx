type BrandLogoProps = {
  compact?: boolean;
  heading?: boolean;
  layout?: "column" | "row" | "responsive";
  className?: string;
};

export function BrandLogo({
  compact = false,
  heading = false,
  layout = "column",
  className = "",
}: BrandLogoProps) {
  const LogoText = heading ? "h1" : "div";
  const isRow = layout === "row";
  const isResponsive = layout === "responsive";
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
        <LogoText
          className={`${compact ? "text-base" : "text-[3rem]"} ${
            isRow
              ? "flex items-baseline gap-2 whitespace-nowrap"
              : isResponsive
                ? "min-[700px]:flex min-[700px]:items-baseline min-[700px]:gap-2 min-[700px]:whitespace-nowrap"
                : ""
          }`}
        >
          <span>DAILY BASIS</span>
          <span
            className={
              isRow
                ? "inline text-[1em]"
                : isResponsive
                  ? `${compact ? "text-[0.76rem]" : "text-[2.26rem]"} block min-[700px]:inline min-[700px]:text-[1em]`
                : `block ${compact ? "text-[0.76rem]" : "text-[2.26rem]"}`
            }
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
