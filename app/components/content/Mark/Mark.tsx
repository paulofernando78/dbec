import type { ReactNode } from "react";

import styles from "./Mark.module.css"

type MarkedProps = {
  children: ReactNode
}

export const Mark = ({ children }: MarkedProps) => {
  return <mark className={styles.smarked}>{children}</mark>;
};