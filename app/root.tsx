import { useState, useEffect, useLayoutEffect } from "react";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DateTime } from "@/components/layout/DateTime";
import { Button } from "@/components/ui/Button/Button";
import { Menu } from "lucide-react";
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
  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  useEffect(() => {
    const mobileBreakpoint = window.matchMedia("(max-width: 700px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsNavBarOpen(false);
        setIsSideBarOpen(false);
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
        <Card className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 min-[700px]:flex min-[700px]:justify-between min-[700px]:gap-4">
          {!isPresentationPage && (
            <Button
              ariaLabel="Menu"
              icon={<Menu />}
              onClick={toggleNav}
              className="size-10! justify-self-start p-0.75! min-[700px]:hidden!"
            />
          )}
          <BrandLogo
            compact
            layout="responsive"
            className={`dark:invert translate-y-[0.1rem] max-[699px]:col-start-2 max-[699px]:justify-self-center ${
              isPresentationPage ? "max-[699px]:col-start-1" : ""
            }`}
          />
          <div className="col-start-3 justify-self-end">
            <DateTime />
          </div>
        </Card>
        <Header
          isSideBarOpen={isSideBarOpen}
          onSideBarClick={toggleSideBar}
        />
        <div className="app-content">
          <div
            id="content-scroll"
            className={`app-scrollArea ${isPresentationPage ? "app-scrollArea--document" : ""}`}
          >
            <Outlet
              context={{
                isNavBarOpen,
                closeNavBar,
                isSideBarOpen,
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
