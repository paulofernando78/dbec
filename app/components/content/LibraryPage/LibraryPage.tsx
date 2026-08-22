import { PageSections } from "@/components/content/PageSections";
import { LessonCard } from "@/components/content/LessonCard";
import { Section } from "@/components/ui/Section";

import { BookText, LibraryBig } from "lucide-react";
import type { ElementType } from "react";

import type { LessonCardContent } from "@/components/content/LessonCard";

type LibraryLesson = LessonCardContent & {
  href?: string;
  label: string;
};

type LibrarySection = {
  label: string;
  numbered?: boolean;
  tocTitle?: string;
  iconClassName?: string;
  lessons?: LibraryLesson[];
  groups?: Array<{
    label: string;
    lessons: LibraryLesson[];
  }>;
};

type LibraryPageProps = {
  title: string;
  sections: LibrarySection[];
  startIndex?: number;
  headerIcon?: ElementType;
  itemIcon?: ElementType;
};

const getSectionId = (label: string) =>
  label.toLowerCase().replaceAll(" ", "-");

const levelColorClasses: Record<string, { section: string; group: string }> = {
  yellow: {
    section: "[&>div:first-child]:bg-yellow-400",
    group: "bg-yellow-100 border border-yellow-300 text-yellow-950 rounded-lg",
  },
  red: {
    section: "[&>div:first-child]:bg-red-500",
    group: "bg-red-200 border border-red-300 text-red-950 rounded-lg",
  },
  blue: {
    section: "[&>div:first-child]:bg-blue-500",
    group: "bg-blue-200 border border-blue-300 text-blue-950 rounded-lg",
  },
  green: {
    section: "[&>div:first-child]:bg-green-500",
    group: "bg-green-200 border border-green-300 text-green-950 rounded-lg",
  },
};

export function LibraryPage({
  title,
  sections,
  startIndex = 0,
  headerIcon = LibraryBig,
  itemIcon = BookText,
}: LibraryPageProps) {
  return (
    <PageSections
      title={title}
      headerIcon={headerIcon}
      itemIcon={itemIcon}
      headerIconClassName="text-gray-400"
      itemIconClassName="text-gray-400"
    >
      {sections.map((section, sectionIndex) => {
        const colorName = section.iconClassName?.match(
          /text-(yellow|red|blue|green)-/,
        )?.[1];
        const colorClasses = levelColorClasses[colorName ?? ""] ?? {
          section: "[&>div:first-child]:bg-gray-900",
          group: "bg-gray-100 text-gray-950",
        };
        const previousLessonCount = sections
          .slice(0, sectionIndex)
          .reduce(
            (total, previousSection) =>
              total +
              (previousSection.lessons?.length ??
                previousSection.groups?.reduce(
                  (groupTotal, group) => groupTotal + group.lessons.length,
                  0,
                ) ??
                0),
            0,
          );
        const lessonGroups = section.groups ?? [
          { label: "", lessons: section.lessons ?? [] },
        ];
        let sectionLessonOffset = 0;

        return (
          <Section
            key={section.label}
            id={getSectionId(section.label)}
            label={section.label}
            tocTitle={section.tocTitle}
            iconClassName={section.iconClassName}
            className={colorClasses.section}
          >
            {lessonGroups.map((group) => {
              const groupStartIndex = sectionLessonOffset;
              sectionLessonOffset += group.lessons.length;

              return (
                <div key={group.label || section.label}>
                  {group.label && (
                    <h3
                      className={`mb-3 mt-5 rounded px-3 py-2 font-bold first:mt-0 ${colorClasses.group}`}
                    >
                      {group.label}
                    </h3>
                  )}
                  {group.lessons.map((lesson, lessonIndex) => (
                    <LessonCard
                      key={lesson.href ?? lesson.label}
                      {...lesson}
                      index={
                        startIndex +
                        previousLessonCount +
                        groupStartIndex +
                        lessonIndex
                      }
                      numbered={section.numbered}
                      collapsible
                    />
                  ))}
                </div>
              );
            })}
          </Section>
        );
      })}
    </PageSections>
  );
}
