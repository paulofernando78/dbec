import { useEffect, useRef, useState } from "react";
import { useFetcher, useLocation } from "react-router";

import { Button } from "@/components/ui/Button/Button";
import { LogIn, LogOut, Menu, MoonStar, Sun, X } from "lucide-react";

interface HeadersProps {
  onClick: () => void;
  isLoggedIn: boolean;
}

export const Header = ({ onClick, isLoggedIn }: HeadersProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginPopoverRef = useRef<HTMLDivElement>(null);
  const loginFetcher = useFetcher<{ error?: string }>();

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
  const requestedRedirect = new URLSearchParams(location.search).get(
    "redirectTo",
  );
  const loginRedirect =
    requestedRedirect?.startsWith("/") && !requestedRedirect.startsWith("//")
      ? requestedRedirect
      : "/welcome";

  useEffect(() => {
    if (!isLoginOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!loginPopoverRef.current?.contains(event.target as Node)) {
        setIsLoginOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLoginOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLoginOpen]);

  useEffect(() => {
    const openLogin = () => setIsLoginOpen(true);

    window.addEventListener("dbec:open-login", openLogin);
    return () => window.removeEventListener("dbec:open-login", openLogin);
  }, []);

  return (
    <>
      <div className="mb-1.25 flex h-10 w-full items-center justify-between border-slate-200 p-1.25 dark:border-slate-700">
        {!isPresentationPage && (
          <Button
            icon={<Menu />}
            onClick={onClick}
            className="transition-all duration-1000 min-[700px]:-translate-x-13.75"
          />
        )}
        <h1 className="font-black uppercase">daily basis english</h1>

        {isPresentationPage && (
          <div className="font-font-oswald flex items-center gap-2.5 text-[1.3rem] font-bold">
            {/* <Link to="/about" className="text-lg">
              ABOUT
            </Link> */}
          </div>
        )}

        <div className="flex gap-2">
          <Button
            icon={isDarkMode ? <Sun /> : <MoonStar />}
            onClick={toggleTheme}
            ariaLabel={isDarkMode ? "Use light mode" : "Use dark mode"}
            title={isDarkMode ? "Light mode" : "Dark mode"}
          />

          <div>
            {!isLoggedIn && isPresentationPage && (
              <div className="relative" ref={loginPopoverRef}>
                <Button
                  icon={<LogIn />}
                  onClick={() => setIsLoginOpen((current) => !current)}
                  ariaLabel={isLoginOpen ? "Close login" : "Open login"}
                  title="Log in"
                />

                {isLoginOpen && (
                  <div
                    className="absolute top-14 right-0 z-50 w-72 rounded-2xl border-2 border-slate-200 bg-white px-4 pt-3 pb-5.5 shadow-xl dark:border-slate-600 dark:bg-slate-800"
                    role="dialog"
                    aria-label="Log in"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <strong>Log in</strong>
                      <Button
                        icon={<X />}
                        onClick={() => setIsLoginOpen(false)}
                        ariaLabel="Close login"
                      />
                    </div>

                    <loginFetcher.Form
                      method="post"
                      action="/?index"
                      className="grid gap-3"
                    >
                      <input
                        type="hidden"
                        name="redirectTo"
                        value={loginRedirect}
                      />
                      <label className="grid gap-1 text-sm font-bold">
                        Email
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          className="rounded-xl border-2 border-slate-200 bg-slate-50 px-3 py-2 font-normal outline-none focus:border-amber-400 dark:border-slate-600 dark:bg-slate-900"
                        />
                      </label>
                      <label className="grid gap-1 text-sm font-bold">
                        Password
                        <input
                          required
                          type="password"
                          name="password"
                          autoComplete="current-password"
                          className="rounded-xl border-2 border-slate-200 bg-slate-50 px-3 py-2 font-normal outline-none focus:border-amber-400 dark:border-slate-600 dark:bg-slate-900"
                        />
                      </label>
                      {loginFetcher.data?.error && (
                        <p
                          className="m-0 rounded-lg bg-red-50 p-2 text-xs font-bold text-red-700 dark:bg-red-950 dark:text-red-300"
                          role="alert"
                        >
                          {loginFetcher.data.error}
                        </p>
                      )}
                      <Button
                        type="submit"
                        icon={<LogIn />}
                        disabled={loginFetcher.state !== "idle"}
                        className="mt-1 w-full!"
                      >
                        {loginFetcher.state !== "idle"
                          ? "Logging in..."
                          : "Log in"}
                      </Button>
                    </loginFetcher.Form>
                  </div>
                )}
              </div>
            )}

            {isLoggedIn && (
              <loginFetcher.Form method="post" action="/logout">
                <Button
                  type="submit"
                  icon={<LogOut />}
                  disabled={loginFetcher.state !== "idle"}
                  ariaLabel="Log out"
                  title="Log out"
                />
              </loginFetcher.Form>
            )}
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />
    </>
  );
};
