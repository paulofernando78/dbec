import type { ReactNode } from "react";

type SubsectionProps = {
  label?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
  className?: string;
  heading?: 3 | 4 | 5;
};

export const Subsection = ({
  label,
  children,
  heading = 3,
}: SubsectionProps) => {
  const Tag = `h${heading}` as "h3" | "h4" | "h5";

  const bgColor = {
    3: "bg-gray-700 border-gray-600",
    4: "bg-gray-500 border-gray-500",
    5: "bg-gray-300 border-gray-400",
  }[heading];

  return (
    <Tag
      className={`
        text-lg
        font-bold
        my-4
        px-3
        py-2 
        text-white
        ${bgColor}
        rounded-lg
        shadow
        shadow-slate-400
      `}
    >
      {children ?? label}
    </Tag>
  );
};
