import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode
  className?: string
  maxContent?: boolean
}

export const Card = ({ children, maxContent = false }: CardProps) => {
  return <div
    className={`border border-gray-400 bg-gray-300 rounded-xl p-4 pb-3${maxContent ? "w-fit max-w-full" : ""}`}>
      {children}
    </div>;
};
