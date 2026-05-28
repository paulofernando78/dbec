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
  disabled,
  onClick,
  className = ""
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};