import type { ReactNode } from "react";

import styles from "./Portuguese.module.css"

type PhoneticsProps = {
  children: ReactNode;
};

export const Portuguese = ({
  children,
}: PhoneticsProps) => {
  return (
    <span className={styles.portuguese}>
      {children}
    </span>
  );
};