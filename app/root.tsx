import { useState, useEffect, useLayoutEffect } from "react";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button/Button";
import { House, Info, LogIn, LogOut, Menu, MoonStar, Sun } from "lucide-react";
import { BrandLogo } from "./components/layout/BrandLogo";
import { Card } from "./components/ui/Card";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then((response) => setIsAuthenticated(response.ok))
      .catch(() => setIsAuthenticated(false));
  }, [location.pathname]);

  const handleAuthentication = async () => {
    if (!isAuthenticated) {
      window.dispatchEvent(new Event("dbec:open-login"));
      return;
    }

    await fetch("/api/logout", { method: "POST" });
    localStorage.removeItem("dbec_dashboard_path");
    localStorage.removeItem("dbec_selected_student_id");
    window.location.assign("/");
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const contentScroll = document.getElementById("content-scroll");
    if (contentScroll) contentScroll.scrollTop = 0;

    document
      .querySelectorAll<HTMLElement>("[data-scroll-container]")
      .forEach((container) => {
        container.scrollTop = 0;
      });
  }, [location.key]);

  const toggleNav = () => {
    setIsNavBarOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setIsNavBarOpen(false);
  };

  const toggleNotes = () => {
    setIsNotesOpen((current) => !current);
  };

  useEffect(() => {
    const mobileBreakpoint = window.matchMedia("(max-width: 700px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsNavBarOpen(false);
        setIsNotesOpen(false);
      }
    };

    mobileBreakpoint.addEventListener("change", handleBreakpointChange);

    return () => {
      mobileBreakpoint.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <div className="app">
      <div className="app-container">
        <Card
          className={`grid items-center gap-2 min-[700px]:flex min-[700px]:justify-between min-[700px]:gap-4 ${
            isPresentationPage
              ? "grid-cols-[auto_minmax(0,1fr)_auto]"
              : "grid-cols-[auto_minmax(0,1fr)_auto]"
          }`}
        >
          {!isPresentationPage && (
            <Button
              ariaLabel="Menu"
              icon={<Menu />}
              onClick={toggleNav}
              className="size-10! justify-self-start p-0.75! min-[700px]:hidden!"
            />
          )}
          {isPresentationPage && (
            <div className="flex items-center gap-2 justify-self-start">
              <Button
                ariaLabel="Home"
                icon={<House />}
                pressed={location.pathname === "/"}
                onClick={() => navigate("/")}
                className="size-10! p-0.75!"
              />
              <Button
                ariaLabel="About"
                icon={<Info />}
                pressed={location.pathname === "/about"}
                onClick={() => navigate("/about")}
                className="size-10! p-0.75!"
              />
            </div>
          )}
          {location.pathname !== "/" && (
            <BrandLogo
              compact
              layout="responsive"
              className="dark:invert translate-y-[0.1rem] max-[699px]:col-start-2 max-[699px]:justify-self-center"
            />
          )}
          <div className="col-start-3 flex items-center gap-2 justify-self-end">
            <Button
              ariaLabel={isDarkMode ? "Light mode" : "Dark mode"}
              icon={isDarkMode ? <Sun /> : <MoonStar />}
              onClick={() => setIsDarkMode((current) => !current)}
            />
            {!isPresentationPage && (
              <Button
                ariaLabel={isAuthenticated ? "Log out" : "Log in"}
                icon={isAuthenticated ? <LogOut /> : <LogIn />}
                onClick={handleAuthentication}
              />
            )}
          </div>
        </Card>
        <Header />
        <div className="app-content">
          <div
            id="content-scroll"
            className={`app-scrollArea ${isPresentationPage ? "app-scrollArea--document" : ""}`}
          >
            <Outlet
              context={{
                isNavBarOpen,
                closeNavBar,
                isNotesOpen,
                toggleNotes,
              }}
            />
          </div>
        </div>
        {location.pathname !== "/" && <Footer />}
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
