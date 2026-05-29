import styles from "./List.module.css";

import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";


type ListItem = {
  value: InlineRichContentValue[];
};

type ListProps = {
  items?: ListItem[];
  ordered?: boolean;
};

export const List = ({
  items = [],
  ordered = false
}: ListProps) => {
  const Tag = ordered ? "ol" : "ul"
  return (
    <Tag className={ordered ? styles.ordered : styles.bulleted}>
      {items.map((item, index) => (
        <li key={index}>
          <InlineRichContent value={item.value} />
        </li>
      ))}
    </Tag>
  );
};
