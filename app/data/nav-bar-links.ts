import { learningLevels } from "@/data/learning";
import { LibraryBig as Course } from "lucide-react";
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
    title: "Levels",
    href: "/learn",
    icon: Course,
    iconClassName: "text-gray-400",
    links: Object.values(learningLevels).map((level) => ({
      href: `/learn/${level.id}`,
      label: level.label.replace(" ", " - "),
    })),
  },
];
