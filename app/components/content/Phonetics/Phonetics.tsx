import type { ReactNode } from "react";

import styles from "./Phonetics.module.css"

type PhoneticsProps = {
  children: ReactNode;
};

export const Phonetics = ({
  children,
}: PhoneticsProps) => {
  return (
    <span className={styles.phonetics}>
      {children}
    </span>
  );
};