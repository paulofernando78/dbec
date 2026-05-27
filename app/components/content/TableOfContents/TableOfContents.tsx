import styles from "./TableOfContents.module.css";

import { Fragment } from "react";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";
// import { Content, ContentLink } from "@/lib/svg-imports.js";

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
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
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
                  <span className={styles.title}>
                    <InlineRichContent value={toValue(item.title)} />
                  </span>
                )}

                {item.href && (
                  <li className={styles.topicWrapper}>
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
