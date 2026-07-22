import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { Button } from "@/components/ui/Button/Button";

import { Menu, Sun, MoonStar, LogIn, LogOut } from "lucide-react";

import styles from "./Header.module.css";

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
    <div className="w-full h-10 p-1.25 flex items-center justify-between mb-1.25">
      {!isPresentationPage && (
        <Button
          icon={<Menu />}
          onClick={onClick}
          className="
            min-[700px]:translate-x-13.75
            transition-all
            duration-1000
          "
        />
      )}

      {isPresentationPage && (
        <div
          className="
            flex
            items-center
            gap-2.5
            font-font-oswald
            text-[1.3rem]
            font-bold
          "
        >
          <Link to="/" className="text-lg">HOME</Link>

          <span className="w-0.75 h-5 bg-gray-500" />

          <Link to="/about" className="text-lg">ABOUT</Link>
        </div>
      )}

      <div className="flex gap-1.75">
        <Button
          icon={isDarkMode ? <Sun /> : <MoonStar />}
          onClick={toggleTheme}
        />

        <Button
          className={styles.logInOutBtn}
          icon={
            isLoggedIn ? (
              <LogOut className={styles.logOutArrow} />
            ) : (
              <LogIn className={styles.logInArrow} />
            )
          }
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};
