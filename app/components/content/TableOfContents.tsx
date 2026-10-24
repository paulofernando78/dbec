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
  subtitle?: ReactNode;
  items?: TableOfContentsItem[];
  headerIcon?: ElementType;
  itemIcon?: ElementType;
  headerIconClassName?: string;
  itemIconClassName?: string;
};

export const TableOfContents = ({
  subtitle,
  items = [],
  headerIcon: HeaderIcon,
  itemIcon: ItemIcon,
  headerIconClassName = "text-gray-400",
  itemIconClassName = "text-gray-400",
}: TableOfContentsProps) => {
  const toValue = (value: RichContent | string): RichContent =>
    Array.isArray(value) ? value : [value];

  return (
    <Card className="mb-4 font-oswald text-lg">
      <div
        className="
        flex
        gap-2
        mb-2"
      >
        {HeaderIcon && (
          <HeaderIcon
            aria-hidden="true"
            className={`size-6 shrink-0 ${headerIconClassName}`}
          />
        )}
        <h2 className="mb-4 text-2xl font-bold">Table of Contents</h2>
      </div>
      {subtitle && <p className="mb-2 font-bold border">{subtitle}</p>}
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
                    className={`flex items-center gap-2 ml-4 ${item.className ?? ""}`}
                  >
                    {ItemIcon ? (
                      <ItemIcon
                        aria-hidden="true"
                        className={`size-4 shrink-0 ${item.iconClassName ?? itemIconClassName}`}
                      />
                    ) : (
                      <span className="font-bold">•</span>
                    )}
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
