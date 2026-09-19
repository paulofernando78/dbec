import { Course } from "@/components/Icons";
import { learningLevels } from "@/data/learning";
import type { ElementType } from "react";

type NavLinkItem = {
  href?: string;
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
  icon?: ElementType;
  iconClassName?: string;
  links: Array<NavItem | NavLinkItem>;
};

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
    title: "Learn",
    href: "/learn",
    icon: Course,
    iconClassName: "text-lime-400",
    links: Object.values(learningLevels).map((level) => ({
      href: `/learn/${level.id}`,
      label: level.label.replace(" ", " · "),
      links: level.units.map((unit) => ({
        label: `Unit ${unit.order} · ${unit.title}`,
        links: unit.lessons
          .filter((lesson) => "exercises" in lesson)
          .map((lesson) => ({
            href: `/learn/${level.id}/${unit.id}/${lesson.slug}`,
            label: `${lesson.order} · ${lesson.title}`,
          })),
      })),
    })),
  },
];
