import type { ReactNode } from "react";
import styles from "./PartOfSpeech.module.css"

type PartOfSpeechProps = {
  children: ReactNode
}

export const PartOfSpeech = ({ children }: PartOfSpeechProps) => {
  return <span className={styles.partOfSpeech}>{children}</span>;
};
