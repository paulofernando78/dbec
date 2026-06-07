import { useRef } from "react";

import { Ribbon } from "@/components/ui/Ribbon";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";
import { useDragScroll } from "@/hooks/useDragScroll";

import styles from "./Column.module.css";

type ColumnItem = {
  bgColor: string;
  textColor?: string;
  column: string;
  items?: {
    parts: InlineRichContentValue[];
    lineBreak?: boolean;
  }[];
};

type ColumnDragProps = {
  cols?: ColumnItem[];
  maxCols?: number;
  width?: number;
};

export const ColumnDrag = ({
  cols = [],
  maxCols,
  width = 250,
}: ColumnDragProps) => {
  const visibleCols = maxCols ? cols.slice(0, maxCols) : cols;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useDragScroll(scrollRef);

  return (
    <>
      <div>
        <div
          ref={scrollRef}
          className={styles.wrapper}
          style={{
            gridTemplateColumns: `repeat(${visibleCols.length}, ${width}px)`,
          }}
        >
          {visibleCols.map((c, cIndex) => (
            <div key={cIndex}>
              <Ribbon
                bgColor={c.bgColor}
                textColor={c.textColor}
                label={c.column}
                className={styles.column}
              />

              {(c.items ?? []).map((item, index) => (
                <div
                  key={index}
                  className={item.lineBreak ? "mb-4" : ""}
                >
                  <InlineRichContent value={item.parts} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
