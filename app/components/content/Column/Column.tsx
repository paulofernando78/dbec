import { useRef } from "react";

import { Ribbon } from "@/components/ui/Ribbon";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";
import { useDragScroll } from "@/hooks/useDragScroll";

import styles from "./Column.module.css";

type ColumnBlockItem = {
  value?: InlineRichContentValue[];
};

type ColumnBlock = {
  lineBreak?: boolean;
  block?: ColumnBlockItem[];
};

type ColumnItem = {
  bgColor: string;
  textColor?: string;
  column: string;
  blocks?: ColumnBlock[];
};

type ColumnProps = {
  cols?: ColumnItem[];
  maxCols?: number;
  width?: number;
};

export const Column = ({
  cols = [],
  maxCols,
  width = 250,
}: ColumnProps) => {
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
  
                {(c.blocks || []).map((bs, bsIndex) => (
                  <div
                    key={bsIndex}
                    className={bs.lineBreak ? "line-break-item" : ""}
                  >
                    {(bs.block || []).map((b, bIndex) => (
                      <InlineRichContent key={bIndex} value={b.value ?? []} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </>
  );
};
