import type { ReactNode } from "react";

type PortugueseBoldProps = {
  children: ReactNode;
  className?: string;
}

export const PortugueseBold = ({ children, className = "" }: PortugueseBoldProps) => {
  return <span className={`portuguese ${className}`.trim()}><b>{children}</b></span>;
};
