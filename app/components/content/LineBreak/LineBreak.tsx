import type { ReactNode } from "react";

import styles from "./LineBreak.module.css"

type LineBreakProps = {
  children?: ReactNode
}

export const LineBreak = ({ children }: LineBreakProps) => {
  return <div className={styles.lineBreak}>{children}</div>;
};
