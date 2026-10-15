import type { ElementType } from "react";
import { BookOpenCheck, BookOpenText, Gamepad2 } from "lucide-react";

import { AuthenticContent } from "@/components/Icons";

type NavLinkItem = {
  href?: string;
  label: string;
};

type NavGroup = {
  title?: string;
  href?: string;
  icon?: ElementType;
  iconClassName?: string;
  links: NavLinkItem[];
};

export const links: NavGroup[] = [
  {
    links: [
      {
        href: "/dashboard",
        label: "Dashboard",
      },
    ],
  },
  {
    title: "Levels",
    href: "/levels",
    icon: BookOpenCheck,
    iconClassName: "text-white",
    links: [],
  },
  {
    title: "Authentic Content",
    href: "/authentic-content",
    icon: AuthenticContent,
    iconClassName: "text-white",
    links: [],
  },
  {
    title: "Vocabulary",
    href: "/vocabulary",
    icon: BookOpenText,
    iconClassName: "text-white",
    links: [],
  },
  {
    title: "Games",
    href: "/games",
    icon: Gamepad2,
    iconClassName: "text-white",
    links: [],
  },
];
