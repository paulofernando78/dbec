import styles from "./TableOfContents.module.css";

import { Fragment } from "react";
import type { ReactNode } from "react";
import { InlineRichContent } from "@/components/content/InlineRichContent";
// import { Content, ContentLink } from "@/lib/svg-imports.js";

import { Notebook, NotebookText } from "lucide-react";

type TableOfContentsItem = {
  title?: ReactNode[] | string;
  href?: string;
  id?: string;
  label?: ReactNode[] | string;
};

type TableOfContentsProps = {
  items?: TableOfContentsItem[];
};

export const TableOfContents = ({
  items = [],
}: TableOfContentsProps) => {
  return (
    <>
      <div className="flex-align">
        <Notebook />
        <span>
          <b>Contents</b>
        </span>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => {
            const key = item.href || item.id || `item-${index}`;

            return (
              <Fragment key={key}>
                {item.title && (
                  <span className={styles.title}>
                    <InlineRichContent text={item.title} />
                  </span>
                )}

                {item.href && (
                  <li className="flex-align">
                    <NotebookText />
                    <a href={`#${item.href}`}>
                      {Array.isArray(item.label) ? (
                        <InlineRichContent text={item.label} />
                      ) : (
                        item.label
                      )}
                    </a>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
