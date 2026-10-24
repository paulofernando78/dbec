import { useLocation, useNavigate } from "react-router";
import { links } from "@/data/nav-bar-links";
import { useEffect, useState, type ElementType } from "react";
import { NotebookPen, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

type NavBarProps = {
  closeNavBar: () => void;
  isNotesOpen: boolean;
  toggleNotes: () => void;
};

export function NavBar({ closeNavBar, isNotesOpen, toggleNotes }: NavBarProps) {
  const [dashboardPath, setDashboardPath] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const hasNotes =
    /^\/course\/[^/]+\/unit\//.test(location.pathname) ||
    /^\/travel\/unit\//.test(location.pathname) ||
    /^\/authentic-content\/[^/]+\/[^/]+/.test(location.pathname);

  useEffect(() => {
    fetch("/api/session")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load session.");
        return response.json();
      })
      .then((session) => {
        const nextDashboardPath = session.dashboardPath ?? "/dashboard";
        setDashboardPath(nextDashboardPath);
        localStorage.setItem("dbec_dashboard_path", nextDashboardPath);
      })
      .catch(() => {
        setDashboardPath(null);
        localStorage.removeItem("dbec_dashboard_path");
      });
  }, [location.pathname]);

  const renderNavigationButton = (
    href: string,
    label: string,
    Icon: ElementType,
    className = "",
  ) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        ariaLabel={label}
        pressed={
          href === dashboardPath
            ? location.pathname.startsWith(href)
            : location.pathname === href
        }
        icon={<Icon />}
        onClick={() => {
          navigate(href);
          closeNavBar();
        }}
        className="size-10! p-[3px]!"
      />
      <span className="font-bold uppercase">{label}</span>
    </div>
  );

  return (
    <nav
      className="w-max
        h-[calc(100%_-_0rem)]
        p-4
        text-gray-500
        bg-(--surface)
        rounded-xl
        overflow-y-auto
        "
    >
      {links.map((item) => {
        if ("group" in item) {
          return (
            <div key={item.group} className="mt-6">
              <p className="mb-2 font-black uppercase tracking-wider">
                {item.group}
              </p>
              <div className="space-y-2 pl-2">
                {item.children.map(
                  ({ href, label, icon: Icon }) =>
                    Icon && (
                      <div key={href}>
                        {renderNavigationButton(href, label, Icon)}
                      </div>
                    ),
                )}
              </div>
            </div>
          );
        }

        const { href, label, icon: Icon } = item;
        const isAuthenticatedLink = href === "/dashboard";
        const resolvedHref = href === "/dashboard" ? dashboardPath : href;

        if (href === "/dashboard") {
          return dashboardPath ? (
            <div key={href}>
              {renderNavigationButton(
                dashboardPath,
                "Dashboard",
                User,
                "mb-2",
              )}
              {hasNotes && (
                <div className="mb-2 flex items-center gap-2">
                  <Button
                    ariaLabel={isNotesOpen ? "Close notes" : "Open notes"}
                    pressed={isNotesOpen}
                    icon={<NotebookPen />}
                    onClick={toggleNotes}
                    className="size-10! p-[3px]!"
                  />
                  <span className="font-bold uppercase">Notes</span>
                </div>
              )}
            </div>
          ) : null;
        }

        return (
          <div key={href}>
            {resolvedHref &&
              Icon &&
              (!isAuthenticatedLink || dashboardPath) &&
              renderNavigationButton(
                resolvedHref,
                label,
                Icon,
                "",
              )}
          </div>
        );
      })}
    </nav>
  );
}
