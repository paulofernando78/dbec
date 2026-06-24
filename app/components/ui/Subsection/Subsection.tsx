import type { ReactNode } from "react";

type SubsectionProps = {
  label?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
  className?: string;
  heading?: 3 | 4;
};

export const Subsection = ({
  label,
  children,
  heading = 3,
}: SubsectionProps) => {
  const Tag = `h${heading}` as "h3" | "h4";
  return (
    <Tag
      className={`
        text-lg
        font-bold
        my-4
        px-3
        py-2 
        text-white
        bg-gray-500
        border
        border-gray-400
        rounded-lg
        shadow
        shadow-slate-400
      `}
    >
      {children ?? label}
    </Tag>
  );
};
