import type { ReactNode } from "react";

import styles from "./BoldMark.module.css"

type BoldMarkedProps = {
  children: ReactNode
}

export const BoldMark = ({ children }: BoldMarkedProps) => {
  return <mark className={styles.marked}>{children}</mark>;
};