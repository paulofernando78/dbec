import { NavLink } from "react-router";
import { links } from "./NavBarLinks";


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
        rounded-tl-xl
        rounded-tr-xl
        rounded-br-xl
        bg-slate-300
        shadow-[2px_2px_5px_var(--slate-5)]
        mt-[5px]
        mx-[5px]
        mb-[10px]
        py-[12px]
        px-[15px]
        overflow-y-auto
        text-[var(--text-color-fixed)]
        "
    >
      {links.map((group) => (
        <div key={group.title}>
          {group.title && (
            <span className="block font-bold mt-4 uppercase">
              {group.title}
            </span>
          )}

          <div>
            {group.links.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end
                onClick={closeNavBar}
                className={({ isActive }) =>
                  `block ${isActive ? "text-blue-500" : ""}`
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
