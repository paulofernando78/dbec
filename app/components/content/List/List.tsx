import styles from "./List.module.css";

import { Checkbox } from "@/components/ui/Checkbox";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type ListItem = {
  value: InlineRichContentValue[];
};

export type ListProps = {
  instruction?: string
  items?: ListItem[];
  type?: "ul" | "ol" | "checkbox" ;
};

export const List = ({
  instruction,
  items = [],
  type = "ul",
}: ListProps) => {
  if (type === "checkbox") {
    return (
      <>
        <p className="font-bold first:mb-0 mb-4">{instruction}</p>

        <div>
          {items.map((item, index) => (
            <label key={index} className={styles.wrapper}>
              <Checkbox />{" "}
              <InlineRichContent value={item.value}/>
            </label>
          ))}
        </div>
      </>
    );
  }

  const Tag = type === "ol" ? "ol" : "ul";

  return (
    <>
      <p className="font-bold mb-4">{instruction}</p>

      <Tag className={type === "ol" ? styles.ordered : styles.bulleted}>
        {items.map((item, index) => (
          <li key={index}>
            <InlineRichContent value={item.value} />
          </li>
        ))}
      </Tag>
    </>
  );
};
