import type { ReactNode } from "react";

type AttentionMarkedProps = {
  children: ReactNode
}

export const AttentionMark = ({ children }: AttentionMarkedProps) => {
  return <mark className="px-[.3rem] bg-red-300 rounded-lg">{children}</mark>;
};