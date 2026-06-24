import type { ElementType, ReactNode } from "react";

import { Ribbon } from "@/components/ui/Ribbon/";

import { formatSectionLabel } from "@/utils/formatSectionLabel";

type SectionProps = {
  id: string;
  label?: string;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export const Section = ({ id, label, heading = 2, children }: SectionProps) => {
  const HeadingTag = `h${heading}` as ElementType;

  // If no label is passed, build one from the id
  const resolvedLabel = label ?? formatSectionLabel(id);

  return (
    <section id={id} className="scroll-mt-2">
      <Ribbon>
        <HeadingTag>{resolvedLabel}</HeadingTag>
      </Ribbon>
      <div>{children}</div>
    </section>
  );
};

Section.displayName = "Section";
