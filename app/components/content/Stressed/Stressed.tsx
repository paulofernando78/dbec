import type { ReactNode } from "react";

type StressedProps = {
  children: ReactNode;
};

export const Stressed = ({ children }: StressedProps) => {
  return <mark className="px-1.25 bg-blue-300 rounded">{children}</mark>;
};
