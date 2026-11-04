import type { ElementType } from "react";
import {
  CircleUserRound,
  BookOpenCheck,
  Gamepad2,
  Plane,
  BookMarked,
  MessageSquareQuote,
  Music2,
  Headphones,
} from "lucide-react";

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
    group: "learn",
    children: [
      {
        href: "/course",
        label: "course (A1-C1)",
        icon: BookOpenCheck,
      },
      {
        href: "/authentic-content",
        label: "TED-Ed",
        icon: BookOpenCheck,
      },
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
    ],
  },
  {
    group: "Skills",
    children: [
      {
        subgroup: "listening",
        children: [
          { href: "/audiobooks", label: "audiobooks", icon: Headphones },
        ],
      },
    ],
  },
  {
    group: "language",
    children: [
      {
        subgroup: "vocabulary",
        children: [
          { href: "/vocabulary", label: "which one?", icon: BookMarked },
        ],
      },
      {
        subgroup: "grammar",
        children: [
          {
            href: "/grammar/present-perfect",
            label: "present perfect",
            icon: BookMarked,
          },
          {
            href: "/grammar/present-perfect-progressive",
            label: "present perfect p.",
            icon: BookMarked,
          },
          {
            href: "/grammar/past-perfect",
            label: "past perfect",
            icon: BookMarked,
          },
          {
            href: "/grammar/past-perfect-progressive",
            label: "past perfect p.",
            icon: BookMarked,
          },
          {
            href: "/grammar/conditionals",
            label: "conditionals",
            icon: BookMarked,
          },
          {
            href: "/grammar/modal-verbs",
            label: "modal verbs",
            icon: BookMarked,
          },
        ],
      },
      {
        subgroup: "pronunciation",
        children: [
          {
            href: "/pronunciation/phonetics",
            label: "phonetics",
            icon: BookMarked,
          },
          {
            href: "/pronunciation/linking-sounds",
            label: "linking sounds",
            icon: BookMarked,
          },
        ],
      },

      {
        subgroup: "expressions",
        children: [
          {
            href: "/expressions",
            label: "common",
            icon: MessageSquareQuote,
          },
          {
            href: "/expressions/business",
            label: "business 1",
            icon: MessageSquareQuote,
          },
        ],
      },
    ],
  },
  {
    group: "content",
    children: [
      { href: "/songs", label: "songs", icon: Music2 },
      {
        subgroup: "games",
        children: [
          { href: "/games/uno", label: "UNO", icon: Gamepad2 },
          { href: "/games", label: "old PC games", icon: Gamepad2 },
        ],
      },
    ],
  },
];
