import styles from "./Column.module.css";

import { useRef } from "react";
import { Ribbon } from "@/components/ui/Ribbon";
import { Line } from "@/components/content/Line";
import { useDragScroll } from "@/hooks/useDragScroll";

type ColumnContentItem = {
  display?: string;
  as?: string;
  parts?: any[];
  lineBreak?: boolean;
};

type ColumnSpacerItem = {
  type: "spacer";
};

type ColumnItem = ColumnContentItem | ColumnSpacerItem;

const isSpacerItem = (item: ColumnItem): item is ColumnSpacerItem =>
  "type" in item && item.type === "spacer";

type ColumnData = {
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  column: string;
  items: ColumnItem[];
};

type ColumnDragProps = {
  cols?: ColumnData[];
  maxCols?: number;
  width?: number;
};

export const ColumnDrag = ({
  cols = [],
  maxCols,
  width = 250,
}: ColumnDragProps) => {
  const visibleCols = maxCols ? cols.slice(0, maxCols) : cols;
  const scrollRef = useRef(null);
  useDragScroll(scrollRef);

  return (
    <>
      <div className="mb-4">
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
                borderColor={c.borderColor}
                bgColor={c.bgColor}
                textColor={c.textColor}
                label={c.column}
                className={styles.column}
              />

              {(c.items || []).map((item, index) => {
                if (isSpacerItem(item)) {
                  return <div key={index} className="h-4" />;
                }

                const display =
                  item.display === "block" || item.display === "inline"
                    ? item.display
                    : undefined;
                const as =
                  item.as === "p" || item.as === "span" ? item.as : undefined;

                return (
                  <div key={index} className={item.lineBreak ? "mb-4" : ""}>
                    {item.parts && (
                      <Line display={display} as={as} value={item.parts} />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
