import type { ElementType, ReactNode } from "react";

import { Ribbon } from "@/components/ui/Ribbon/";

type SubSectionProps = {
  heading: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  children: ReactNode;
};


export const SubSection = ({ heading, label, children }: SubSectionProps) => {
  const HeadingTag = `h${heading}` as ElementType;
  return (
    <section className="scroll-mt-2">
      <Ribbon bgColor="bg-neutral-500">
        <HeadingTag>{label}</HeadingTag>
      </Ribbon>
      <div className="space-y-4">{children}</div>
    </section>
  );
};

SubSection.displayName = "Section";
