import { NavLink, useLocation } from "react-router";
import { links } from "../../../data/nav-bar-links";
import { useEffect, useState } from "react";

type NavBarProps = {
  closeNavBar: () => void;
};

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
        m-4
        mr-0
        p-4
        text-white
        bg-gray-900
        rounded-tl-xl
        rounded-tr-xl
        shadow-[2px_2px_5px_var(--slate-5)]
        overflow-y-auto
        "
    >
      {links.map(({ href, label, icon: Icon }) => (
        <NavLink
          key={href}
          to={href === "/dashboard" ? dashboardPath : href}
          end
          onClick={closeNavBar}
          className={({ isActive }) => `
            mb-1 flex items-center gap-2
            ${Icon ? "mt-4 font-bold uppercase" : ""}
            ${isActive ? "text-blue-400" : ""}
          `}
        >
          {Icon && <Icon width={25} height={25} className="shrink-0" />}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
