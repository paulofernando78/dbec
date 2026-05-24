import type { ReactNode } from "react";

import styles from "./Stressed.module.css"

type StressedProps = {
  children: ReactNode
}

export const Stressed = ({ children }: StressedProps) => {
  return <mark className={styles.stressed}>{children}</mark>;
};