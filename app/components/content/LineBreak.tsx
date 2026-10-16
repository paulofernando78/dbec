import type { ReactNode } from "react";

type LineBreakProps = {
  children?: ReactNode
}

export const LineBreak = ({ children }: LineBreakProps) => {
  return <div className="my-[4]">{children}</div>;
};
