import { Fragment, type ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { InlineRichContent } from "@/components/content/InlineRichContent";
import type { RichContent } from "@/helpers/content";

import { Notebook, NotebookText, type LucideIcon } from "lucide-react";

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
  headerIcon?: LucideIcon;
  itemIcon?: LucideIcon;
  headerIconClassName?: string;
  itemIconClassName?: string;
};

export const TableOfContents = ({
  title = "Table of Contents",
  items = [],
  headerIcon: HeaderIcon = Notebook,
  itemIcon: ItemIcon = NotebookText,
  headerIconClassName = "text-gray-400",
  itemIconClassName = "text-gray-400",
}: TableOfContentsProps) => {
  const toValue = (value: RichContent | string): RichContent =>
    Array.isArray(value) ? value : [value];

  return (
    <Card className="mb-4 px-4 pt-[1.1rem] pb-3 bg-gray-100">
      <div
        className="
        flex
        gap-2
        mb-2"
      >
        <HeaderIcon size={22} className={headerIconClassName} />
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
                  <span
                    className={`block mb-1 font-bold uppercase ${
                      index === 0 ? "" : "mt-3"
                    }`}
                  >
                    <InlineRichContent value={toValue(item.title)} />
                  </span>
                )}

                {item.href && (
                  <li
                    className={`flex items-center gap-2 ml-4 space-y-1 ${item.className ?? ""}`}
                  >
                    <ItemIcon
                      size={22}
                      className={item.iconClassName ?? itemIconClassName}
                    />
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
