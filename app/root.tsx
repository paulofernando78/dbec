import { useState, useEffect } from "react";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router";
import type { LoaderFunctionArgs } from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import { Loading } from "@/components/ui/Loading";
import { Header } from "@/components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { getLoggedInUser } from "@/utils/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return { userEmail: await getLoggedInUser(request) };
}

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
  const { userEmail } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNav = () => {
    setIsNavBarOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setIsNavBarOpen(false);
  };

  useEffect(() => {
    const mobileBreakpoint = window.matchMedia("(max-width: 700px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsNavBarOpen(false);
      }
    };

    mobileBreakpoint.addEventListener("change", handleBreakpointChange);

    return () => {
      mobileBreakpoint.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <div className="app">
      <div className="flex min-h-0 flex-1 flex-col gap-1.25 p-1.25">
        <Header onClick={toggleNav} isLoggedIn={Boolean(userEmail)} />
        <div className="flex min-h-0 flex-1 flex-col">
          <div id="content-scroll" className="app-scrollArea">
            {isLoading ? (
              <Loading />
            ) : (
              <Outlet context={{ isNavBarOpen, closeNavBar }} />
            )}
          </div>
        </div>
        <Footer />
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
    <main className="container mx-auto pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
