import type { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "check" | "answer" | "reset";
};

export const Button = ({
  icon,
  children,
  disabled,
  onClick,
  className = "",
  variant = "default"
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
