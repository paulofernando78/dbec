import { NavLink } from "react-router";
import { links } from "../../../data/nav-bar-links";
import type { ElementType } from "react";

import { BookMarked as CourseBook } from "lucide-react";

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
  if (!item.href) {
    return (
      <div className="flex gap-3">
        <span>{item.label}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
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
    <nav className="mx-1.25 mt-1.25 mb-2.5 h-full overflow-y-auto rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gray-900 px-5 py-4 font-bold text-white shadow-[2px_2px_5px_var(--slate-5)]">
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
