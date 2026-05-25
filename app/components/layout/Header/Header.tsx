import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useLocation, useNavigate } from "react-router";

import { Button } from "@/components/ui/Button";

import { Menu, Sun, MoonStar, LogIn, LogOut } from "lucide-react";

import styles from "./Header.module.css";

export const Header = () => {
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
      navigate(next ? "/dashboard" : "/");
      return next;
    });
  };

  const location = useLocation();
  const pathname = location.pathname;
  const isPresentationPage = pathname === "/" || pathname === "/about";

  return (
    <div className={styles.header}>
      {!isPresentationPage && <Button icon={<Menu />} />}

      {isPresentationPage && (
        <div className={styles.homeAbout}>
          <Link to="/">HOME</Link>
          <span className={styles.divider}></span>
          <Link to="/about">ABOUT</Link>
        </div>
      )}

      <div className={styles.darkMode}>
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
