import type { ReactNode } from "react";

type ButtonProps = {
  ariaLabel?: string;
  icon?: ReactNode | string;
  children?: ReactNode;
  disabled?: boolean;
  pressed?: boolean;
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
  pressed,
  onClick,
  className = "",
}: ButtonProps) => {
  const hasText = children != null;
  const baseClasses =
    "group relative grid size-[60px] cursor-pointer place-items-center rounded-[12px] border border-[var(--button-border)] bg-gradient-to-b from-[var(--button-outer-start)] to-[var(--button-outer-end)] p-[3px] text-[var(--button-text)] shadow-[0_1px_1px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] duration-80 active:scale-[0.995] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] disabled:cursor-not-allowed disabled:opacity-55 disabled:brightness-[1.15]";
  const textClasses = hasText
    ? "!inline-flex !h-[60px] !w-fit items-center justify-center whitespace-nowrap font-bold"
    : "";

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      aria-pressed={pressed}
      className={`${baseClasses} ${textClasses} ${className} shrink-0`}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`${
          hasText ? "h-full w-full px-2 py-2" : "absolute inset-1"
        } grid place-items-center rounded-lg bg-linear-to-b from-[var(--button-inner-start)] to-[var(--button-inner-end)]`}
      >
        <span className="flex items-center gap-2 [&_svg]:size-5.25 [&_svg]:stroke-[var(--button-icon)]">
          {icon}
          {children}
        </span>
      </span>
    </button>
  );
};
