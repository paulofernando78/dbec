import type { ElementType } from "react";
import {
  User,
  BookOpenCheck,
  BookOpenText,
  Gamepad2,
  AudioLines,
} from "lucide-react";

import { AuthenticContent } from "@/components/Icons";

export type NavItem = {
  href: string;
  label: string;
  icon?: ElementType;
};

export const links: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: User,
  },
  {
    href: "/levels",
    label: "Levels",
    icon: BookOpenCheck,
  },
  {
    href: "/authentic-content",
    label: "Authentic Content",
    icon: AuthenticContent,
  },
  {
    href: "/vocabulary",
    label: "Vocabulary",
    icon: BookOpenText,
  },
  {
    href: "/pronunciation",
    label: "Pronunciation",
    icon: AudioLines,
  },
  {
    href: "/games",
    label: "Games",
    icon: Gamepad2,
  },
];
