import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
import { courseSyllabusSections } from "@/data/course/course-syllabus-sections";
import type { CourseLessonCard } from "@/data/course/course-lessons-card-data";

type NavLinkItem = {
  href: string;
  label: string;
};

type NavItem = {
  label: string;
  href?: string;
  iconClassName?: string;
  links?: Array<NavItem | NavLinkItem>;
};

type NavGroup = {
  title?: string;
  href?: string;
  iconClassName?: string;
  links: Array<NavItem | NavLinkItem>;
};

const lessonLinks = (lessons: CourseLessonCard[]): NavLinkItem[] =>
  lessons.map(({ href, label }) => ({ href, label }));

const chapter = (
  label: string,
  lessons: CourseLessonCard[],
): NavItem => ({
  label,
  links: lessonLinks(lessons),
});

const levelLinks = (levelLabel: string) =>
  courseSyllabusSections
    .find((level) => level.label === levelLabel)
    ?.groups.map((group) => chapter(group.label, group.lessons)) ?? [];

export const links: NavGroup[] = [
  {
    links: [
      {
        href: "/welcome",
        label: "Welcome",
      },
      {
        href: "/cefr",
        label: "What's CEFR?",
      },
    ],
  },
  {
    title: "Course",
    href: "/course",
    links: [
      {
        label: "A1 Beginner",
        iconClassName: "text-yellow-500",
        links: levelLinks("A1 Beginner"),
      },
      {
        label: "A2 Elementary",
        iconClassName: "text-red-500",
        links: levelLinks("A2 Elementary"),
      },
      {
        label: "B1 Intermediate",
        iconClassName: "text-blue-500",
        links: levelLinks("B1 Intermediate"),
      },
      {
        label: "B2 Upper-Intermediate",
        iconClassName: "text-green-500",
        links: levelLinks("B2 Upper-Intermediate"),
      },
      // C1 Advanced is intentionally kept out of the main library for now.
      // The cards exist in courseLessonsCardData.advanced and can be enabled
      // when the advanced route content is ready.
    ],
  },
  {
    title: "Authentic Content",
    href: "/authentic-content",
    links: [
      {
        label: "News",
  
        links: [
          {
            href: "/authentic-content/news/a-soccer-match-dramatic-moment",
            label: "A Soccer Match's Dramatic Moment",
          },
        ],
      },
      {
        label: "TED-Ed",
  
        links: authenticContentTedEdLessons.map(({ href, label }) => ({
          href,
          label,
        })),
      },
    ],
  },
  {
    title: "VOCABULARY",
    href: "/games",
    links: [
      {
        label: "Which one?",
  
        links: [
          {
            href: "/vocabulary/",
            label: "hear vs. listen",
          },
          {
            href: "/vocabulary/",
            label: "speak vs. say vs. tell",
          },
        ],
      },
    ],
  },
  {
    title: "GAMES",
    href: "/games",
    links: [
      {
        label: "Lucas Arts",
  
        links: [
          {
            href: "/games/lucas-arts/thimbleweed-park",
            label: "Thimbleweed Park",
          },
        ],
      },
    ],
  },
];
