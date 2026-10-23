import { NavLink, useLocation } from "react-router";
import { links } from "@/data/nav-bar-links";
import { useEffect, useState } from "react";
import { LogIn, LogOut } from "lucide-react";

type NavBarProps = {
  closeNavBar: () => void;
};

export function NavBar({ closeNavBar }: NavBarProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetch("/api/session")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load session.");
        return response.json();
      })
      .then((session) => {
        setIsAuthenticated(true);
        const nextDashboardPath = session.dashboardPath ?? "/dashboard";
        localStorage.setItem("dbec_dashboard_path", nextDashboardPath);
      })
      .catch(() => {
        setIsAuthenticated(false);
        localStorage.removeItem("dbec_dashboard_path");
      });
  }, [location.pathname]);

  const handleAuthentication = async () => {
    if (!isAuthenticated) {
      window.dispatchEvent(new Event("dbec:open-login"));
      return;
    }

    await fetch("/api/logout", { method: "POST" });
    localStorage.removeItem("dbec_dashboard_path");
    window.location.assign("/");
  };

  return (
    <nav
      className="
        h-[calc(100%_-_0rem)]
        p-4
        text-gray-500
        bg-(--surface)
        rounded-xl
        overflow-y-auto
        "
    >
      <button
        type="button"
        onClick={handleAuthentication}
        className={`flex cursor-pointer items-center gap-2 font-bold uppercase ${
          isAuthenticated ? "" : "mb-8"
        }`}
      >
        {isAuthenticated ? (
          <LogOut width={25} height={25} className="shrink-0" />
        ) : (
          <LogIn width={25} height={25} className="shrink-0" />
        )}
        <span>{isAuthenticated ? "Logout" : "Login"}</span>
      </button>
  
      {links.map((item) => {
        if ("group" in item) {
          return (
            <div key={item.group} className="mt-6">
              <p className="mb-2 font-black uppercase tracking-wider">
                {item.group}
              </p>
              <div className="pl-2">
                {item.children.map(({ href, label, icon: Icon }) => (
                  <NavLink
                    key={href}
                    to={href}
                    end
                    onClick={closeNavBar}
                    className={({ isActive }) => `
                      mt-2 flex w-fit items-center gap-2 font-bold uppercase
                      ${isActive ? "text-black" : ""}
                    `}
                  >
                    {Icon && (
                      <Icon width={25} height={25} className="shrink-0" />
                    )}
                    <span>{label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          );
        }

        const { href, label, icon: Icon } = item;

        return (
          <div key={href}>
            {href !== "/dashboard" &&
              (href !== "/guide" || isAuthenticated) && (
              <NavLink
                to={href}
                end
                onClick={closeNavBar}
                className={({ isActive }) => `
                  flex w-fit items-center gap-2
                  ${Icon ? "mt-2 font-bold uppercase" : ""}
                  ${isActive ? "text-black" : ""}
                  ${href === "/guide" ? "mb-8" : ""}
                `}
              >
                {Icon && <Icon width={25} height={25} className="shrink-0" />}
                <span>{label}</span>
              </NavLink>
            )}
          </div>
        );
      })}
    </nav>
  );
}
