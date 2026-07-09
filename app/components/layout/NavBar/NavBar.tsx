import { NavLink } from "react-router";
import { links } from "../../../data/nav-bar-links";

import { CircleChevronRight } from "lucide-react";
// import { Checkbox } from "@/components/ui/Checkbox";

type NavItem = {
  label: string;
  href?: string;
  // trackProgress?: boolean;
  links?: NavItem[];
};

type NavBarProps = {
  closeNavBar: () => void;
};

function RenderNavItem({
  item,
  closeNavBar,
}: {
  item: NavItem;
  closeNavBar: () => void;
}) {
  if (item.links?.length) {
    return (
      <details className="open:[&>summary_.chevron]:rotate-90">
        <summary className="list-none flex items-center gap-4 cursor-pointer">
          <span className="chevron transition-transform relative top-px">
            <CircleChevronRight />
          </span>

          {item.href ? (
            <NavLink
              to={item.href}
              onClick={(e) => e.stopPropagation()}
              className="translate-x-[-0.4rem]"
            >
              {item.label}
            </NavLink>
          ) : (
            <span className="translate-x-[-0.4rem]">{item.label}</span>
          )}
        </summary>

        <div className="ml-[2.1rem]">
          {item.links.map((child) => (
            <RenderNavItem
              key={child.href}
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
        <span className="block text-[1.06rem]">{item.label}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      {/* {item.trackProgress !== false && <Checkbox className="mt-[.2rem]" />} */}

      <NavLink
        to={item.href}
        end
        onClick={closeNavBar}
        className={({ isActive }) =>
          `block text-[1.06rem] ${isActive ? "text-blue-400" : ""}`
        }
      >
        {item.label}
      </NavLink>
    </div>
  );
}

export function NavBar({ closeNavBar }: NavBarProps) {
  return (
    <nav
      className="
        h-full
        font-oswald
        text-lg
        mt-1.25
        mx-1.25
        mb-2.5
        px-5
        py-4
        text-white
        bg-gray-900
        rounded-tl-lg
        rounded-tr-lg
        rounded-br-lg
        shadow-[2px_2px_5px_var(--slate-5)]
        overflow-y-auto
        "
    >
      {links.map((group, index) => (
        <div key={group.title ?? `group-${index}`}>
          {group.title && (
            <>
              <span className="block font-bold mt-4 uppercase">
                {group.title}
              </span>
            </>
          )}

          <div>
            {group.links.map((item) => (
              <RenderNavItem
                key={item.href}
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
