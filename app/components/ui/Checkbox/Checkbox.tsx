import { Check } from "lucide-react";
import styles from "./CheckBox.module.css";

export const Checkbox = () => {
  return (
    <label>
      <input type="checkbox" className={styles.input} />
      <span className={styles.box}>
        <Check size={14} className=""/>
      </span>
    </label>
  );
};
