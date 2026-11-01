import type { ReactNode } from "react";

import styles from "./MediaWrapper.module.css";

type MediaWrapperProps = {
  children: ReactNode;
  mediaPosition?: "left" | "right" | "top" | "bottom";
};

export const MediaWrapper = ({
  children,
  mediaPosition = "left",
}: MediaWrapperProps) => {
  return (
    <div className={`${styles.wrapper} ${styles[mediaPosition]}`}>
      {children}
    </div>
  );
};

MediaWrapper.Item = function MediaWrapperItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

MediaWrapper.Content = function MediaWrapperContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
};
