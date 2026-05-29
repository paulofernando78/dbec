import type { ReactNode } from "react";

type RibbonProps = {
  label?: string
  bgColor?: string
  textColor?: string
  children?: ReactNode
  className?: string
}

export const Ribbon = ({
  label,
  bgColor,
  textColor = "#ffffff",
  className,
  children,
}: RibbonProps) => {
  return (
    <div
      className={`text-lg font-bold px-3 py-2 rounded-lg mt-4 mb-4${className ?? ""}`}
      style={{ backgroundColor: bgColor ?? "#222", color: textColor }}
    >
      {children ?? label}
    </div>
  );
};
