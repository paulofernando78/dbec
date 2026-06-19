import styles from "./List.module.css";

import { Checkbox } from "@/components/ui/Checkbox";
import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type ListItem = {
  value: InlineRichContentValue[];
  textarea?: boolean;
};

export type ListProps = {
  instruction?: string;
  items?: ListItem[];
  type?: "none" | "ul" | "ol" | "checkbox";
};

export const List = ({
  instruction,
  items = [],
  type = "none",
}: ListProps) => {
  if (type === "checkbox") {
    return (
      <>
        <p className="font-bold first:mb-0 mb-4">{instruction}</p>

        <div>
          {items.map((item, index) => (
            <div key={index}>
              <label key={index} className={styles.wrapper}>
                <Checkbox /> <InlineRichContent value={item.value} />
              </label>
              {item.textarea && (
                <textarea
                  name=""
                  id=""
                  className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-lg"
                ></textarea>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }

  const Tag = type === "ol" ? "ol" : "ul";

  return (
    <>
      <p className="font-bold first:mb-0 mb-4">{instruction}</p>

      <Tag
        className={
          type === "none"
            ? styles.none
            : type === "ol"
              ? styles.ordered
              : styles.bulleted
        }
      >
        {items.map((item, index) => (
          <li key={index}>
            <InlineRichContent value={item.value} />
          </li>
        ))}
      </Tag>
    </>
  );
};
