import styles from "./Column.module.css";

import { useRef } from "react";
import { Ribbon } from "@/components/ui/Ribbon";
import { Line } from "@/components/content/Line";
import { Portuguese } from "@/components/content/Portuguese";
import { useDragScroll } from "@/hooks/useDragScroll";
import { getColumnTranslation } from "@/data/course/columnTranslations";

type ColumnContentItem = {
  display?: string;
  as?: string;
  parts?: any[];
  lineBreak?: boolean;
  translation?: string;
};

type ColumnSpacerItem = {
  type: "spacer";
};

type ColumnItem = ColumnContentItem | ColumnSpacerItem;

const isSpacerItem = (item: ColumnItem): item is ColumnSpacerItem =>
  "type" in item && item.type === "spacer";

const getPlainText = (parts: any[] = []) =>
  parts
    .map((part) => {
      if (typeof part === "string") return part;
      if (!part || typeof part !== "object") return "";
      if (
        ["portuguese", "portuguese-bold", "bold-portuguese"].includes(part.type)
      ) {
        return "";
      }
      return typeof part.part === "string" ? part.part : "";
    })
    .join("")
    .trim();

const hasPortuguese = (parts: any[] = []) =>
  parts.some(
    (part) =>
      part &&
      typeof part === "object" &&
      ["portuguese", "portuguese-bold", "bold-portuguese"].includes(part.type),
  );

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
                const translation =
                  item.translation ??
                  getColumnTranslation(getPlainText(item.parts));

                return (
                  <div key={index} className={item.lineBreak ? "mb-4" : ""}>
                    {item.parts && (
                      <Line display={display} as={as} value={item.parts} />
                    )}
                    {translation && !hasPortuguese(item.parts) && (
                      <div>
                        <Portuguese>{translation}</Portuguese>
                      </div>
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
