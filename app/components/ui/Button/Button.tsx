import type { ReactNode } from "react";
import { Link } from "react-router";

import styles from "./Button.module.css";

type ButtonProps = {
  icon?: ReactNode | string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  to?: string;
  ariaLabel?: string;
  title?: string;
  className?: string;
  size?: "default" | "lesson";
  variant?: "default" | "check" | "answer" | "reset" | "danger";
};

export const Button = ({
  icon,
  children,
  disabled,
  onClick,
  to,
  ariaLabel,
  title,
  className = "",
  size = "default",
  variant = "default",
}: ButtonProps) => {
  const hasText = children != null;
  const classes = `${styles.button} ${styles[variant]} ${size === "lesson" ? styles.lesson : ""} ${hasText ? styles.withText : ""} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to} aria-label={ariaLabel} title={title}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      title={title}
    >
      {icon}
      {children}
    </button>
  );
};
