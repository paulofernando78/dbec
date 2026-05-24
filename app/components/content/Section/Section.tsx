import type {
  ElementType,
  ReactNode,
} from "react";

import { Ribbon } from "@/components/ui/Ribbon/";

import { formatSectionLabel } from "@/utils/formatSectionLabel";

import styles from "./Section.module.css";

type RibbonProps = {
  children: ReactNode;
  className?: string;
};

type SectionProps = {
  id: string;
  label?: string;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export const Section = ({
  id,
  label,
  heading = 2,
  children,
}: SectionProps) => {
  const HeadingTag = `h${heading}` as ElementType;

  // If no label is passed, build one from the id
  const resolvedLabel =
    label ?? formatSectionLabel(id);

  return (
    <section
      id={id}
      className={styles.scrollOffset}
    >
      <Ribbon>
        <HeadingTag>
          {resolvedLabel}
        </HeadingTag>
      </Ribbon>
      {children}
    </section>
  );
};

Section.displayName = "Section";
