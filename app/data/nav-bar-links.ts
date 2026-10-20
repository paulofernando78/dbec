import type { ElementType } from "react";
import {
  CircleUserRound,
  BookOpenCheck,
  BookOpenText,
  Gamepad2,
  AudioLines,
  Plane,
} from "lucide-react";

import { AuthenticContent } from "@/components/Icons";

export type NavLinkItem = {
  href: string;
  label: string;
  icon?: ElementType;
};

export type NavGroup = {
  group: string;
  children: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavGroup;

export const links: NavItem[] = [
  {
    href: "/dashboard",
    label: "dashboard",
    icon: CircleUserRound,
  },
  {
    href: "/course",
    label: "course",
    icon: BookOpenCheck,
  },
  {
    group: "extra",
    children: [
      {
        href: "/vocabulary",
        label: "vocabulary",
        icon: BookOpenText,
      },
      {
        href: "/pronunciation",
        label: "Pronunciation",
        icon: AudioLines,
      },
    ],
  },
  {
    group: "specific purposes",
    children: [
      {
        href: "/travel",
        label: "travel",
        icon: Plane,
      },
    ],
  },
  {
    href: "/authentic-content",
    label: "authentic vontent",
    icon: AuthenticContent,
  },
  {
    href: "/games",
    label: "games",
    icon: Gamepad2,
  },
];
