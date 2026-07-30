import type { ElementType, ReactNode } from "react";

import { Ribbon } from "@/components/ui/Ribbon/";

import { formatSectionLabel } from "@/utils/formatSectionLabel";

type SectionProps = {
  id: string;
  label?: string;
  iconClassName?: string;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  progress?: ReactNode;
  children: ReactNode;
};

export const Section = ({
  id,
  label,
  heading = 2,
  progress,
  children,
}: SectionProps) => {
  const HeadingTag = `h${heading}` as ElementType;

  // If no label is passed, build one from the id
  const resolvedLabel = label ?? formatSectionLabel(id);

  return (
    <section id={id} className="scroll-mt-2">
      <Ribbon className="flex justify-between">
        <HeadingTag>{resolvedLabel}</HeadingTag>
        {progress && <span className="">{progress}</span>}
      </Ribbon>
      <div>{children}</div>
    </section>
  );
};

Section.displayName = "Section";
