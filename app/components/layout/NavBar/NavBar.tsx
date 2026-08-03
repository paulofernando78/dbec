import { NavLink } from "react-router";
import { links } from "../../../data/nav-bar-links";

import { BookText, Minus, Plus } from "lucide-react";
// import { Checkbox } from "@/components/ui/Checkbox";

type NavItem = {
  label: string;
  href?: string;
  links?: NavItem[];
  iconClassName?: string;
};

type NavBarProps = {
  closeNavBar: () => void;
};

const getCourseLessonLinks = (items: NavItem[]): NavItem[] =>
  items.flatMap((item) => {
    if (item.href?.startsWith("/courses/")) return [item];
    return item.links ? getCourseLessonLinks(item.links) : [];
  });

const courseLinks = links.find((group) => group.title === "Course")?.links ?? [];
const numberedCourseLessons = getCourseLessonLinks(courseLinks);

const lessonNumberByHref = new Map(
  numberedCourseLessons.map((lesson, index) => [lesson.href, index + 1]),
);

const getNavItemLabel = (item: NavItem) => {
  const lessonNumber = item.href
    ? lessonNumberByHref.get(item.href)
    : undefined;

  return lessonNumber ? `Lesson ${lessonNumber} • ${item.label}` : item.label;
};

const getNavItemKey = (item: NavItem) =>
  "href" in item && item.href ? item.href : item.label;

function RenderNavItem({
  item,
  closeNavBar,
}: {
  item: NavItem;
  closeNavBar: () => void;
}) {

  const isLesson = item.href ? lessonNumberByHref.has(item.href) : false;

  if (item.links?.length) {
    return (
      <details className="open:[&>summary_.plus]:hidden open:[&>summary_.minus]:block mb-1">
        <summary
          className="
          list-none
          ml-4
          flex
          items-center
          gap-2
          relative
          cursor-pointer
        "
        >
          <span
            className="
            absolute
            -left-5
            top-px
          "
          >
            <Plus size={18} className="plus translate-y-[0.3rem]" />
            <Minus size={18} className="minus hidden translate-y-[0.3rem]" />
          </span>

          {item.iconClassName && (
            <BookText
              size={20}
              className={`ml-[0.2rem] shrink-0 translate-y-[0.1rem] ${item.iconClassName}`}
            />
          )}

          {item.href ? (
            <NavLink to={item.href} onClick={(e) => e.stopPropagation()}>
              <span>{getNavItemLabel(item)}</span>
            </NavLink>
          ) : (
            <span>{getNavItemLabel(item)}</span>
          )}
        </summary>

        <div >
          {item.links.map((child) => (
            <RenderNavItem
              key={getNavItemKey(child)}
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
        ${isLesson ? "ml-4" : ""}
      `}
    >
      <NavLink
        to={item.href}
        end
        onClick={closeNavBar}
        className={({ isActive }) => `
          mb-1
          ${isActive ? "text-blue-400" : ""}
          `}
      >
        <span>{getNavItemLabel(item)}</span>
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
              <span
                className="
                block
                font-bold
                mt-4
                mb-1
                uppercase"
              >
                {group.title}
              </span>
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
