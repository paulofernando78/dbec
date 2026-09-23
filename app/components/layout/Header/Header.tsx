import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import { Button } from "@/components/ui/Button/Button";
import { Menu, MoonStar, Sun } from "lucide-react";

interface HeadersProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeadersProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("dbec:theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark =
      savedTheme === "dark" || (savedTheme === null && prefersDark);

    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("dbec:theme", next ? "dark" : "light");
      return next;
    });
  };

  const location = useLocation();

  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";

  return (
    <div className="mb-1.25 flex h-10 w-full items-center justify-between p-1.25">
      {!isPresentationPage && (
        <Button
          icon={<Menu />}
          onClick={onClick}
          className="transition-all duration-1000 min-[700px]:-translate-x-13.75"
        />
      )}

      <h1 className="uppercase font-black">daily basis english course</h1>

      {isPresentationPage && (
        <div className="font-font-oswald flex items-center gap-2.5 text-[1.3rem] font-bold">
          {/* <Link to="/about" className="text-lg">
            ABOUT
          </Link> */}
        </div>
      )}

      <div className="flex gap-1.75">
        <Button
          icon={isDarkMode ? <Sun /> : <MoonStar />}
          onClick={toggleTheme}
          ariaLabel={isDarkMode ? "Use light mode" : "Use dark mode"}
          title={isDarkMode ? "Light mode" : "Dark mode"}
        />
      </div>
    </div>
  );
};
