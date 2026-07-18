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
    setIsLoggedIn((prev) => {
      const next = !prev;

      navigate(next ? "/welcome" : "/");

      return next;
    });
  };

  const location = useLocation();

  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";

  return (
    <div className="w-full h-10 p-[5px] flex items-center justify-between mb-[5px]">
      {!isPresentationPage && (
        <Button
          icon={<Menu />}
          onClick={onClick}
          className="
            min-[700px]:translate-x-[-55px]
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
            gap-[10px]
            font-[var(--font-oswald)]
            text-[1.3rem]
            font-bold
          "
        >
          <Link to="/">HOME</Link>

          <span className="w-[3px] h-[22px] bg-[#1D283B]" />

          <Link to="/about">ABOUT</Link>
        </div>
      )}

      <div className="flex gap-[7px]">
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