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
  children,
}: RibbonProps) => {
  return (
    <div
      className="
      text-lg
      font-bold
      my-4
      px-3
      py-2 
      text-white
      bg-gray-800
      border
      border-gray-700
      rounded-lg"
    >
      {children ?? label}
    </div>
  );
};
