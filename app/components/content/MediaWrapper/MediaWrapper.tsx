import type { ReactNode } from "react";

import styles from "./MediaWrapper.module.css";

import { MediaLayout } from "@/components/content/MediaLayout";

type MediaWrapperProps = {
  children: ReactNode;
  instruction?: string;
};

export const MediaWrapper = ({
  children,
  instruction,
}: MediaWrapperProps) => {
  return (
    <div className="line-break">
      {instruction && (
        <p className={styles.instruction}>
          <b>{instruction}</b>
        </p>
      )}

      <MediaLayout>
        {children}
      </MediaLayout>
    </div>
  );
};
