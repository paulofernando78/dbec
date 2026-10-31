import type { ElementType } from "react";
import {
  CircleUserRound,
  BookOpenCheck,
  BookOpenText,
  Gamepad2,
  AudioLines,
  Plane,
  BookMarked,
  MessageSquareQuote,
  Music2,
  BookOpen,
} from "lucide-react";

import { AuthenticContent } from "@/components/Icons";

export type NavLinkItem = {
  href: string;
  label: string;
  icon?: ElementType;
};

export type NavGroup = {
  group: string;
  children: Array<NavLinkItem | NavSubgroup>;
};

export type NavSubgroup = {
  subgroup: string;
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
    label: "course (A1-C1)",
    icon: BookOpenCheck,
  },

  {
    group: "keep learning",
    children: [
      {
        subgroup: "specific purposes",
        children: [
          {
            href: "/travel",
            label: "travel",
            icon: Plane,
          },
        ],
      },
      {
        subgroup: "language",
        children: [
          { href: "/vocabulary", label: "vocabulary", icon: BookOpenText },
          { href: "/grammar", label: "grammar", icon: BookMarked },
          { href: "/pronunciation", label: "pronunciation", icon: AudioLines },
          {
            href: "/expressions",
            label: "expressions",
            icon: MessageSquareQuote,
          },
        ],
      },
      {
        subgroup: "content",
        children: [
          { href: "/audiobooks", label: "audiobooks", icon: BookOpen },
          {
            href: "/authentic-content",
            label: "TED-Ed",
            icon: AuthenticContent,
          },
          { href: "/songs", label: "songs", icon: Music2 },
          { href: "/games", label: "games", icon: Gamepad2 },
        ],
      },
    ],
  },
];
