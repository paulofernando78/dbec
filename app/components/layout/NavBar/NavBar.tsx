import { NavLink, useLocation } from "react-router";
import { links } from "../../../data/nav-bar-links";
import { useEffect, useState, type ElementType } from "react";

type NavItem = {
  label: string;
  href?: string;
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
  dashboardPath,
}: {
  item: NavItem;
  closeNavBar: () => void;
  dashboardPath: string;
}) {
  if (!item.href) {
    return (
      <div
        className="
        flex
        gap-3
        "
      >
        <span>{item.label}</span>
      </div>
    );
  }

  return (
    <div
      className={`
        flex
        gap-3
      `}
    >
      <NavLink
        to={item.href === "/dashboard" ? dashboardPath : item.href}
        end
        onClick={closeNavBar}
        className={({ isActive }) => `
          mb-1
          ${isActive ? "text-blue-400" : ""}
          `}
      >
        <span>{item.label}</span>
      </NavLink>
    </div>
  );
}

export function NavBar({ closeNavBar }: NavBarProps) {
  const [dashboardPath, setDashboardPath] = useState("/dashboard");
  const location = useLocation();

  useEffect(() => {
    const storedDashboardPath = localStorage.getItem("dbec_dashboard_path");
    if (storedDashboardPath) setDashboardPath(storedDashboardPath);

    if (location.pathname.startsWith("/teacher/dashboard")) {
      localStorage.setItem("dbec_dashboard_path", "/teacher/dashboard");
      setDashboardPath("/teacher/dashboard");
    } else if (location.pathname.startsWith("/dashboard/")) {
      localStorage.setItem("dbec_dashboard_path", location.pathname);
      setDashboardPath(location.pathname);
    }

    fetch("/api/session")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load session.");
        return response.json();
      })
      .then((session) => {
        const nextDashboardPath = session.dashboardPath ?? "/dashboard";
        localStorage.setItem("dbec_dashboard_path", nextDashboardPath);
        setDashboardPath(nextDashboardPath);
      })
      .catch(() => {});
  }, [location.pathname]);

  return (
    <nav
      className="
        h-full
        font-oswald
        text-lg
        px-5
        py-4
        text-white
        bg-gray-900
        rounded-tl-xl
        rounded-tr-xl
        shadow-[2px_2px_5px_var(--slate-5)]
        overflow-y-auto
        "
    >
      {navGroups.map((group, index) => (
        <div key={group.title ?? `group-${index}`}>
          {group.title && (
            <>
              {group.href ? (
                <NavLink
                  to={group.href}
                  end
                  onClick={closeNavBar}
                  className={({ isActive }) => `
                  flex
                  items-center
                  gap-2
                  font-bold
                  mt-4
                  mb-1
                  uppercase
                  ${isActive ? "text-blue-400" : ""}
                `}
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
                <span
                  className="
                flex
                items-center
                gap-2
                font-bold
                mt-4
                mb-1
                uppercase"
                >
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
                dashboardPath={dashboardPath}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
