import type { ReactNode } from "react";

type PhoneticsProps = {
  children: ReactNode;
};

export const Phonetics = ({
  children,
}: PhoneticsProps) => {
  return <span className="phonetics">{children}</span>;
};
