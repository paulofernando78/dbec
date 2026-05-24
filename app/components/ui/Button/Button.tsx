import type { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string
};

export const Button = ({
  icon,
  children,
  onClick,
  className = ""
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};