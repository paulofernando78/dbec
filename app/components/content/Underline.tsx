import type { ReactNode } from "react";

type UnderlineProps = {
  children: ReactNode
}

export const Underline = ({ children }: UnderlineProps) => {
  return <span style={{ textDecoration: "underline"}}>{children}</span>;
};
