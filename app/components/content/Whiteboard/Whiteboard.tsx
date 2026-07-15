import { CalendarDays, Clock } from "lucide-react";

import styles from "./Whiteboard.module.css";

type WhiteboardProps = {
  title?: string;
  subtitle?: string;
  book?: string;
  lesson?: string;
  descriptions?: string[];
  description?: string;
  date?: string;
  time?: string;
};

export const Whiteboard = ({
  title,
  subtitle,
  descriptions = [],
  date,
  time,
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
        <div className="flex gap-2 mb-1">
          <CalendarDays size={19} className="text-gray-500" />
          <span className="text-sm relative top-px"><em>{date}</em></span>
        </div>
      )}
      {time && (
        <div className="flex items-center gap-2">
          <Clock size={19} className="text-gray-500" />
          <span className="text-sm relative top-px"><em>{time}</em></span>
        </div>
      )}
    </div>
  );
};
