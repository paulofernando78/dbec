import type { ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  ariaLabel?: string;
  icon?: ReactNode | string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "check" | "answer" | "reset";
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  type = "button",
  ariaLabel,
  icon,
  children,
  disabled,
  onClick,
  className = "",
}: ButtonProps) => {
  const hasText = children != null;
  const baseClasses =
    "grid size-[60px] cursor-pointer place-items-center rounded-xl border border-gray-200 bg-[linear-gradient(145deg,#f8fafc_0%,#e2e8f0_100%)] pt-[3px] text-[#242424] [text-shadow:0_0.0625em_0_#fff] transition-all duration-150 ease-in-out active:translate-y-[0.225em] disabled:cursor-not-allowed disabled:opacity-55 disabled:brightness-[1.15] [&_svg]:size-[21px] [&_svg]:stroke-slate-400";
  const textClasses = hasText
    ? "!inline-flex !h-[60px] !w-fit items-center justify-center gap-[6px] whitespace-nowrap px-6"
    : "";

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={`${styles.depth} ${baseClasses} ${textClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
