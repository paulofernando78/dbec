import { NavLink } from "react-router";
import { links } from "../../../data/nav-bar-links";
import type { ElementType } from "react";

import {
  BookMarked as CourseBook,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  links?: NavItem[];
  iconClassName?: string;
};

type NavGroup = {
  title?: string;
  href?: string;
  icon?: ElementType;
  iconClassName?: string;
  links: NavItem[];
};

type NavBarProps = {
  closeNavBar: () => void;
};

const navGroups = links as NavGroup[];

const getNavItemKey = (item: NavItem) =>
  "href" in item && item.href ? item.href : item.label;

function RenderNavItem({
  item,
  closeNavBar,
}: {
  item: NavItem;
  closeNavBar: () => void;
}) {
  const isLesson = item.href?.startsWith("/course/") ?? false;

  if (item.links?.length) {
    return (
      <details className="mb-1 open:[&>summary_.chevron-down]:block open:[&>summary_.chevron-right]:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-2">
          <span className="flex shrink-0 items-center">
            <ChevronRight size={25} className="chevron-right" />
            <ChevronDown size={25} className="chevron-down hidden" />
          </span>

          {item.iconClassName && (
            <CourseBook
              width={25}
              height={25}
              className={`shrink-0 ${item.iconClassName}`}
            />
          )}

          {item.href ? (
            <NavLink
              to={item.href}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center"
            >
              <span>{item.label}</span>
            </NavLink>
          ) : (
            <span>{item.label}</span>
          )}
        </summary>

        <div>
          {item.links.map((child) => (
            <RenderNavItem
              key={getNavItemKey(child)}
              item={child}
              closeNavBar={closeNavBar}
            />
          ))}
        </div>
      </details>
    );
  }

  if (!item.href) {
    return (
      <div className="flex gap-3">
        <span>{item.label}</span>
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${isLesson ? "ml-4" : ""} `}>
      <NavLink
        to={item.href}
        end
        onClick={closeNavBar}
        className={({ isActive }) => `mb-1 ${isActive ? "text-blue-400" : ""} `}
      >
        <span>{item.label}</span>
      </NavLink>
    </div>
  );
}

export function NavBar({ closeNavBar }: NavBarProps) {
  return (
    <nav className="mx-1.25 mt-1.25 mb-2.5 h-full overflow-y-auto rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gray-900 px-5 py-4 font-oswald text-base text-lg text-white shadow-[2px_2px_5px_var(--slate-5)]">
      {navGroups.map((group, index) => (
        <div key={group.title ?? `group-${index}`}>
          {group.title && (
            <>
              {group.href ? (
                <NavLink
                  to={group.href}
                  end
                  onClick={closeNavBar}
                  className={({ isActive }) =>
                    `mt-4 mb-1 flex items-center gap-2 font-bold uppercase ${isActive ? "text-blue-400" : ""} `
                  }
                >
                  {group.icon && (
                    <group.icon
                      width={25}
                      height={25}
                      className={`shrink-0 ${group.iconClassName ?? ""}`}
                    />
                  )}
                  {group.title}
                </NavLink>
              ) : (
                <span className="mt-4 mb-1 flex items-center gap-2 font-bold uppercase">
                  {group.iconClassName && (
                    <CourseBook
                      width={25}
                      height={25}
                      className={`shrink-0${group.iconClassName}`}
                    />
                  )}
                  {group.title}
                </span>
              )}
            </>
          )}

          <div>
            {group.links.map((item) => (
              <RenderNavItem
                key={getNavItemKey(item)}
                item={item}
                closeNavBar={closeNavBar}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
