import { NavLink } from "react-router";
import { links } from "../../../data/NavBarLinks";


export type NavItem = {
  label: string;
  href: string;
  attention?: boolean;
};

export type NavGroup = {
  title?: string;
  links: NavItem[];
};

type NavBarProps = {
  closeNavBar: () => void;
};

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
              <NavLink
                key={item.href}
                to={item.href}
                end
                onClick={closeNavBar}
                className={({ isActive }) =>
                  `block ${isActive ? "text-blue-400" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
