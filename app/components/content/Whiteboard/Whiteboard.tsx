import styles from "./Whiteboard.module.css";

type WhiteboardProps = {
  title?: string;
  subtitle?: string;
  book?: string;
  lesson?: string;
  descriptions?: string[];
  description?: string;
  date?: string;
};

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  date,
}: WhiteboardProps) => {
  return (
    <div className={styles.whiteboard}>
      <span className={styles.frameTop} />
      <span className={styles.frameRight} />
      <span className={styles.frameBottom} />
      <span className={styles.frameLeft} />
      {/*  */}
      {/* <span className={styles.divisionTopLeft} />
      <span className={styles.divisionTopRight} />
      <span className={styles.divisionBottomLeft} />
      <span className={styles.divisionBottomRight} /> */}
      {/*  */}
      <span className={styles.screwTopLeft} />
      <span className={styles.screwTopRight} />
      <span className={styles.screwBottomLeft} />
      <span className={styles.screwBottomRight} />
      {/* - */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <h2 className="text-3xl">{subtitle}</h2>}
      {descriptions?.length > 0 &&
        descriptions.map((description, index) => (
          <p key={index} className="text-1xl">
            {description}
          </p>
        ))}
      {date && (
        <span className="text-sm">
          <em>Date: {date}</em>
        </span>
      )}
    </div>
  );
};
