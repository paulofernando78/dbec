import React from 'react'

type LineBreakProps = {
  size?: "sm" | "md" | "lg";
};

export const LineBreak = ({
  size = "md",
}: LineBreakProps) => {
  const sizes = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  };

  return <div className={sizes[size]} aria-hidden="true" />;
};
