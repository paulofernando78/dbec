import styles from "./Column.module.css";

import { useRef } from "react";
import { Ribbon } from "@/components/ui/Ribbon";
import { InlineRichContent } from "../InlineRichContent";
import { useDragScroll } from "@/hooks/useDragScroll";

type ColumnItem = {
  parts?: any[];
  lineBreak?: boolean;
};

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

export const ColumnDrag = ({ cols = [], maxCols, width = 250 }: ColumnDragProps) => {
  const visibleCols = maxCols ? cols.slice(0, maxCols) : cols;
  const scrollRef = useRef(null);
  useDragScroll(scrollRef);

  return (
    <>
        <div className="border mb-4">
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
  
                {(c.items || []).map((item, index) => (
                  <div
                    key={index}
                    className={item.lineBreak ? "mb-4" : ""}
                  >
                    {item.parts && <InlineRichContent value={item.parts} />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </>
  );
};
