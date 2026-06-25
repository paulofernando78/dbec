import type { ReactNode } from "react";

type RibbonProps = {
  label?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
  className?: string;
};

export const Ribbon = ({
  label,
  children,
  borderColor,
  bgColor,
  textColor,
  className,
}: RibbonProps) => {
  return (
    <div
      className={`
        text-lg
        font-bold
        mb-[1.1rem]
        px-3
        py-2 
        text-white
        bg-gray-800
        border
        border-gray-400
        rounded-lg
        shadow
        shadow-slate-400
        ${borderColor ?? ""}
        ${bgColor ?? ""}
        ${textColor ?? ""}
        ${className ?? ""}
      `}
    >
      {children ?? label}
    </div>
  );
};
