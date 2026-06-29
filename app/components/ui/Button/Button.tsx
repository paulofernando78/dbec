import type { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  icon?: ReactNode | string;
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
  const hasText = children != null;
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${hasText ? styles.withText : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
