import { NavLink } from "react-router";
import { links } from "../../../data/nav-bar-links";
import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";

import { Book, Minus, Plus } from "lucide-react";
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

const numberedCourseLessons = [
  ...courseLessonsCardData.beginner,
  ...courseLessonsCardData.elementary,
  ...courseLessonsCardData.intermediate,
  ...courseLessonsCardData.upperIntermediate,
  ...courseLessonsCardData.advanced,
];

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
            <Plus size={18} className="plus translate-y-[0.2rem]" />
            <Minus size={18} className="minus hidden translate-y-[0.2rem]" />
          </span>

          {item.iconClassName && (
            <Book
              size={20}
              className={`ml-[0.1rem] shrink-0 translate-y-[0.1rem] ${item.iconClassName}`}
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

        <div className="ml-[1.55rem]">
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
        gap-3"
      >
        <span className="border">{item.label}</span>
      </div>
    );
  }

  return (
    <div
      className="
      flex
      gap-3"
    >
      <NavLink
        to={item.href}
        end
        onClick={closeNavBar}
        className={({ isActive }) => `
          block
          mb-1
          px-2
          text-[1.06rem]
          relative
          before:absolute
          before:left-0
          before:top-[.35rem]
          before:bottom-1
          before:w-0.75
          before:bg-current
          ${isActive ? "text-blue-400" : ""}
          `}
      >
        <span className="ml-1">{getNavItemLabel(item)}</span>
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
