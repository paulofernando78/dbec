import { NavLink } from "react-router";
import { links } from "../../../data/NavBarLinks";

import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/Checkbox";

type NavLesson = {
  label: string;
  href: string;
};

type NavLevel = {
  label: string;
  href: string;
  links: NavLesson[];
};

type NavItem = NavLesson | NavLevel;

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
            {group.links.map((item) => {
              if ("links" in item) {
                return (
                  <details key={item.label} className="group ">
                    <summary className="list-none flex items-center gap-2 cursor-pointer">
                      <span className="transition-transform group-open:rotate-90 translate-x-[-0.15rem]">
                        <ChevronRight />
                      </span>

                      <NavLink
                        to={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className="translate-x-[-0.4rem]"
                      >
                        {item.label}
                      </NavLink>
                    </summary>

                    <div className="ml-">
                      {item.links.map((lesson) => (
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          <NavLink
                            key={lesson.href}
                            to={lesson.href}
                            end
                            onClick={closeNavBar}
                            className={({ isActive }) =>
                              `block text-[1.06rem] ${isActive ? "text-blue-400" : ""}`
                            }
                          >
                            {lesson.label}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </details>
                );
              }

              return (
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
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
