import type { ReactNode } from "react";

import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode
  className?: string
  maxContent?: boolean
}

export const Card = ({ children, className = "", maxContent = false }: CardProps) => {
  return <div
    className={[
      styles.card,
      maxContent && styles.maxContent,
      className
    ]
    .filter(Boolean)
    .join(" ")
    }>
      {children}
    </div>;
};
