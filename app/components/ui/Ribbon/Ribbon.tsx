import type { ReactNode } from "react";

import style from "./Ribbon.module.css";

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
      className={`${style.ribbon} ${className ?? ""}`}
      style={{ backgroundColor: bgColor ?? "#222", color: textColor }}
    >
      {children ?? label}
    </div>
  );
};
