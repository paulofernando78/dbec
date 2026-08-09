import { PageSections } from "@/components/content/PageSections";
import { LessonCard } from "@/components/content/LessonCard";
import { Section } from "@/components/ui/Section";

import { BookText, LibraryBig } from "lucide-react";

import type { LessonCardContent } from "@/components/content/LessonCard";

type LibraryLesson = LessonCardContent & {
  href: string;
  label: string;
};

type LibrarySection = {
  label: string;
  tocTitle?: string;
  iconClassName?: string;
  lessons: LibraryLesson[];
};

type LibraryPageProps = {
  title: string;
  sections: LibrarySection[];
  startIndex?: number;
};

const getSectionId = (label: string) => label.toLowerCase().replaceAll(" ", "-");

export function LibraryPage({
  title,
  sections,
  startIndex = 0,
}: LibraryPageProps) {
  return (
    <PageSections
      title={title}
      headerIcon={LibraryBig}
      itemIcon={BookText}
      headerIconClassName="text-gray-400"
      itemIconClassName="text-gray-400"
    >
      {sections.map((section, sectionIndex) => {
        const previousLessonCount = sections
          .slice(0, sectionIndex)
          .reduce(
            (total, previousSection) => total + previousSection.lessons.length,
            0,
          );

        return (
          <Section
            key={section.label}
            id={getSectionId(section.label)}
            label={section.label}
            tocTitle={section.tocTitle}
            iconClassName={section.iconClassName}
          >
            {section.lessons.map((lesson, lessonIndex) => (
              <LessonCard
                key={lesson.href}
                {...lesson}
                index={startIndex + previousLessonCount + lessonIndex}
                collapsible
              />
            ))}
          </Section>
        );
      })}
    </PageSections>
  );
}
