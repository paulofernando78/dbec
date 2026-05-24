import type {
  FC,
  ReactNode,
} from "react";

import styles from "./MediaLayout.module.css";

type ChildrenProps = {
  children: ReactNode;
  className?: string;
};

type MediaLayoutComponent = FC<ChildrenProps> & {
  Media: FC<ChildrenProps>;
  Content: FC<ChildrenProps>;
};

export const MediaLayout: MediaLayoutComponent = ({
  children,
  className = "",
}) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      {children}
    </div>
  );
};

MediaLayout.Media = function Media({
  children,
  className = "",
}) {
  return (
    <div className={`${styles.media} ${className}`}>
      {children}
    </div>
  );
};

MediaLayout.Content = function Content({
  children,
  className = "",
}) {
  return (
    <div className={`${styles.content} ${className}`}>
      {children}
    </div>
  );
};
