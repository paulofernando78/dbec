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
  size?: "default" | "lesson" | "choice";
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
  const baseClasses =
    "grid h-[30px] w-[35px] cursor-pointer place-items-center rounded-[0.5em] border-0 bg-[#f0f0f0] pt-[3px] text-[#242424] no-underline transition duration-150 ease-in-out active:translate-y-[0.225em] disabled:cursor-not-allowed disabled:opacity-100 disabled:filter-none [&_svg]:size-[21px] [&_svg]:stroke-gray-400";
  const disabledClasses =
    size === "choice" ? "disabled:cursor-default" : "disabled:!bg-[#f0f0f0]";
  const lessonClasses =
    size === "lesson"
      ? "h-[66px] w-[72px] rounded-xl pt-0 max-[620px]:h-[58px] max-[620px]:w-[64px] [&_svg]:size-[25px]"
      : "";
  const choiceClasses =
    size === "choice"
      ? "!flex h-auto w-full items-center justify-start gap-4 rounded-[15px] px-5 py-4 text-left text-base font-bold hover:drop-shadow-md"
      : "";
  const withTextClasses =
    hasText && size !== "choice"
      ? "!inline-flex !h-[30px] !w-fit items-center justify-center gap-1.5 whitespace-nowrap px-2.5"
      : "";
  const variantClass = variant === "default" ? "" : styles[variant];
  const classes = `${baseClasses} ${disabledClasses} ${styles.button} ${variantClass} ${lessonClasses} ${choiceClasses} ${withTextClasses} ${className}`;

  if (to) {
    return (
      <Link
        className={classes}
        to={to}
        onClick={onClick}
        aria-label={ariaLabel}
        title={title}
      >
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
