import { Fragment, type ElementType, type ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";

type TableOfContentsItem = {
  title?: RichContent | string;
  href?: string;
  id?: string;
  label?: RichContent | string;
  iconClassName?: string;
  className?: string;
  contentAfter?: ReactNode;
};

type TableOfContentsProps = {
  title?: ReactNode;
  items?: TableOfContentsItem[];
  headerIcon?: ElementType;
  itemIcon?: ElementType;
  headerIconClassName?: string;
  itemIconClassName?: string;
};

export const TableOfContents = ({
  title = "Table of Contents",
  items = [],
  headerIconClassName = "text-gray-400",
  itemIconClassName = "text-gray-400",
}: TableOfContentsProps) => {
  const toValue = (value: RichContent | string): RichContent =>
    Array.isArray(value) ? value : [value];

  return (
    <Card className="mb-4 bg-gray-100 font-oswald text-lg">
      <div
        className="
        flex
        gap-2
        mb-2"
      >
        <span>
          <b>{title}</b>
        </span>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => {
            const key = item.href || item.id || `item-${index}`;

            return (
              <Fragment key={key}>
                {item.title && (
                  <span className="block font-bold uppercase">
                    <InlineRichContent value={toValue(item.title)} />
                  </span>
                )}

                {item.href && (
                  <li
                    className={`flex items-center gap-2 ${item.className ?? ""}`}
                  >
                    •
                    <a href={`#${item.href}`}>
                      {item.label && (
                        <InlineRichContent value={toValue(item.label)} />
                      )}
                    </a>
                  </li>
                )}

                {item.contentAfter}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </Card>
  );
};
