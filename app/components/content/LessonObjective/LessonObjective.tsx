import styles from "./LessonObjective.module.css";
import { Card } from "@/components/ui/Card";

export const LessonObjective = ({ children }) => {
  return (
    <Card className={styles.bgColor}>
      <p>{children}</p>
    </Card>
  );
};
