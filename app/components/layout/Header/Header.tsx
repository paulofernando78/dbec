import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { Button } from "@/components/ui/Button/Button";
import { LogIn, LogOut, Menu, MoonStar, Sun } from "lucide-react";

interface HeadersProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeadersProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    const next = !isLoggedIn;

    setIsLoggedIn(next);
    navigate(next ? "/welcome" : "/");
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

      {isPresentationPage && (
        <div className="font-font-oswald flex items-center gap-2.5 text-[1.3rem] font-bold">
          <Link to="/" className="text-lg">
            HOME
          </Link>

          <span className="h-5 w-0.75 bg-gray-500" />

          <Link to="/about" className="text-lg">
            ABOUT
          </Link>
        </div>
      )}

      <div className="flex gap-1.75">
        <Button
          icon={isDarkMode ? <Sun /> : <MoonStar />}
          onClick={toggleTheme}
        />

        <Button
          icon={isLoggedIn ? <LogOut /> : <LogIn />}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};
