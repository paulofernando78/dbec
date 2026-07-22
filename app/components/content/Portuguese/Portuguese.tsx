import type { ReactNode } from "react";

type PhoneticsProps = {
  children: ReactNode;
};

export const Portuguese = ({ children }: PhoneticsProps) => {
  return <span className="text-gray-400">{children}</span>;
};
