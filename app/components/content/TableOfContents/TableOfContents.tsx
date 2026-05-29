
import { Fragment } from "react";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

import { Notebook, NotebookText } from "lucide-react";

type TableOfContentsItem = {
  title?: InlineRichContentValue[] | string;
  href?: string;
  id?: string;
  label?: InlineRichContentValue[] | string;
};

type TableOfContentsProps = {
  items?: TableOfContentsItem[];
};

export const TableOfContents = ({
  items = [],
}: TableOfContentsProps) => {
  const toValue = (value: InlineRichContentValue[] | string) =>
    Array.isArray(value) ? value : [value];

  return (
    <div className="mb-4">
      <div className="flex gap-2 mb-2">
        <Notebook color="var(--icon-color)"/>
        <span>
          <b>Table of Contents</b>
        </span>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => {
            const key = item.href || item.id || `item-${index}`;

            return (
              <Fragment key={key}>
                {item.title && (
                  <span>
                    <InlineRichContent value={toValue(item.title)} />
                  </span>
                )}

                {item.href && (
                  <li className="flex gap-2 ml-4">
                    <NotebookText color="var(--icon-color)"/>
                    <a href={`#${item.href}`}>
                      {item.label && (
                        <InlineRichContent value={toValue(item.label)} />
                      )}
                    </a>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
