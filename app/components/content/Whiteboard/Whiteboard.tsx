import styles from "./Whiteboard.module.css";

type WhiteboardProps = {
  title?: string;
  subtitle?: string;
  book?: string;
  lesson?: string;
  descriptions?: string[];
  description?: string;
};

export const Whiteboard = ({
  title,
  subtitle,
  book,
  lesson,
  descriptions,
  description,
}: WhiteboardProps) => {
  return (
    <div className={styles.frame}>
      <h1 className="text-4xl">{title}</h1>
      {subtitle && <h2 className="text-3xl">{subtitle}</h2>}
      <span className="text-2xl">{description}</span>
    </div>
  );
};
