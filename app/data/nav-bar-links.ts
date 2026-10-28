import type { ElementType } from "react";
import {
  CircleUserRound,
  BookOpenCheck,
  BookOpenText,
  Gamepad2,
  AudioLines,
  Plane,
  BadgeHelp,
  BookMarked,
  MessageSquareQuote,
  Music2,
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
    href: "/guide",
    label: "guide",
    icon: BadgeHelp,
  },
  {
    href: "/dashboard",
    label: "dashboard",
    icon: CircleUserRound,
  },
  {
    group: "path",
    children: [
      {
        href: "/course",
        label: "course",
        icon: BookOpenCheck,
      },
      {
        href: "/authentic-content",
        label: "authentic content",
        icon: AuthenticContent,
      },
    ],
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
        href: "/expressions",
        label: "expressions",
        icon: MessageSquareQuote,
      },
      {
        href: "/grammar",
        label: "grammar",
        icon: BookMarked,
      },
      {
        href: "/pronunciation",
        label: "Pronunciation",
        icon: AudioLines,
      },
      {
        href: "/songs",
        label: "songs",
        icon: Music2,
      },
      {
        href: "/games",
        label: "games",
        icon: Gamepad2,
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
];
