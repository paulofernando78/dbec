import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode
  className?: string
  maxContent?: boolean
}

export const Card = ({ children, maxContent = false }: CardProps) => {
  return <div
    className={`
    p-4
    pb-3
    text-gray-800
    border 
    border-gray-400 
    bg-gray-300
    rounded-xl 
    ${maxContent ? "w-fit max-w-full" : ""}`}
    >
      {children}
    </div>;
};
