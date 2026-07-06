import type { ReactNode } from "react";

type MarkedProps = {
  children: ReactNode
}

export const Mark = ({ children }: MarkedProps) => {
  return <mark className="px-[.3rem] bg-yellow-400 rounded-lg">{children}</mark>;
};