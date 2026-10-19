import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation } from "react-router";

import { Button } from "@/components/ui/Button/Button";
import { LogIn, LogOut, MoonStar, Sun } from "@/components/Icons";

import { Menu, X } from "lucide-react";

import { AccountSummary } from "./AccountSummary";

type Session = {
  username: string;
  role: "teacher" | "student";
  studentId?: string;
  dashboardPath: string;
  displayName: string;
  schedule: string | null;
  time: string | null;
};

interface HeadersProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeadersProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const location = useLocation();

  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";
  const isProtectedPage = [
    "/dashboard",
    "/teacher/dashboard",
    "/levels",
    "/authentic-content",
    "/vocabulary",
    "/games",
    "/lab",
  ].some(
    (path) =>
      location.pathname === path || location.pathname.startsWith(`${path}/`),
  );
  const isAuthenticated = Boolean(session) || isProtectedPage;

  useEffect(() => {
    if (new URLSearchParams(location.search).get("login") === "required") {
      setIsLoginOpen(true);
    }
  }, [location.search]);

  useEffect(() => {
    let isCurrent = true;

    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as Session;
      })
      .then((nextSession) => {
        if (isCurrent) setSession(nextSession);
      })
      .catch(() => {
        if (isCurrent) setSession(null);
      });

    return () => {
      isCurrent = false;
    };
  }, [location.pathname]);

  const handleAuthentication = async () => {
    if (!isAuthenticated) {
      setLoginError("");
      setIsLoginOpen(true);
      return;
    }

    await fetch("/api/logout", { method: "POST" });
    localStorage.removeItem("dbec_dashboard_path");
    window.location.assign("/");
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    });

    if (response.ok) {
      const result = (await response.json()) as { redirectTo?: string };
      const redirectTo = result.redirectTo ?? "/dashboard";
      localStorage.setItem("dbec_dashboard_path", redirectTo);
      window.location.assign(redirectTo);
      return;
    }

    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;
    setLoginError(result?.error ?? "Não foi possível entrar.");
    setIsSubmitting(false);
  };

  return (
    <div className="w-full h-10 px-4 mt-4 flex items-center justify-between">
      {!isPresentationPage && (
        <Button
          icon={<Menu />}
          onClick={onClick}
          className="icon transition-all duration-1000 min-[700px]:pointer-events-none min-[700px]:invisible min-[700px]:-translate-x-14 min-[700px]:opacity-0"
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
            self-start
          "
        >
          <Link to="/" className="text-lg">
            HOME
          </Link>

          <span className="w-0.75 h-5 bg-gray-500" />

          <Link to="/about" className="text-lg">
            ABOUT
          </Link>
        </div>
      )}

      <div className="ml-auto flex items-center gap-4">
        {session && (
          <AccountSummary
            name={session.displayName}
            subtitle={
              session.role === "student"
                ? [session.schedule, session.time].filter(Boolean).join(" · ")
                : "Teacher"
            }
            className="translate-y-1"
          />
        )}

        <Button
          icon={isDarkMode ? <Sun /> : <MoonStar />}
          onClick={toggleTheme}
          className="icon"
        />

        <Button
          icon={isAuthenticated ? <LogOut /> : <LogIn />}
          onClick={handleAuthentication}
          className="icon"
        />
      </div>

      {isLoginOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 p-4 pt-16"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsLoginOpen(false);
          }}
        >
          <div className="pointer-events-none mx-auto mt-4 flex w-full max-w-275 justify-end">
            <form
              onSubmit={handleLogin}
              className="pointer-events-auto w-full max-w-sm rounded-lg border border-gray-300 bg-white p-4 text-gray-900 shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="login-title"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 id="login-title" className="text-xl font-bold">
                  Login
                </h2>
                <button
                  type="button"
                  onClick={() => setIsLoginOpen(false)}
                  className="cursor-pointer"
                  aria-label="Fechar login"
                >
                  <X />
                </button>
              </div>

              <label className="mb-3 block">
                <span className="mb-1 block font-semibold">Usuário</span>
                <input
                  name="username"
                  autoComplete="username"
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </label>

              <label className="mb-4 block">
                <span className="mb-1 block font-semibold">Senha</span>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </label>

              {loginError && (
                <p
                  className="mb-3 text-sm font-semibold text-red-600"
                  role="alert"
                >
                  {loginError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-700 disabled:opacity-60"
              >
                {isSubmitting ? "Entrando…" : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
