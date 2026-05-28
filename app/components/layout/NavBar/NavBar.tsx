import { NavLink } from "react-router";
import { links } from "./NavBarLinks";

import styles from "./NavBar.module.css";

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
    <nav className={styles.nav}>
      {links.map((group) => (
        <div key={group.title}>
          {group.title && (
            <span className={styles.navTitle}>{group.title}</span>
          )}

          <div>
            {group.links.map((item) => (
              <NavLink key={item.href} to={item.href} end onClick={closeNavBar}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
