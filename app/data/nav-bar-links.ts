import type { ElementType } from "react";
import { BookOpenText, Gamepad2 } from "lucide-react";

import { AuthenticContent } from "@/components/Icons";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

type NavLinkItem = {
  href?: string;
  label: string;
};

type NavItem = NavLinkItem & {
  links?: NavLinkItem[];
};

type NavGroup = {
  title?: string;
  href?: string;
  icon?: ElementType;
  iconClassName?: string;
  links: NavItem[];
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
    title: "Authentic Content",
    href: "/authentic-content",
    icon: AuthenticContent,
    iconClassName: "text-white",
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
    title: "Vocabulary",
    href: "/vocabulary",
    icon: BookOpenText,
    iconClassName: "text-white",
    links: [
      {
        label: "Which one?",
        links: [
          { label: "Hear vs. Listen" },
          { label: "Speak vs. Say vs. Tell" },
        ],
      },
    ],
  },
  {
    title: "Games",
    href: "/games",
    icon: Gamepad2,
    iconClassName: "text-white",
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
