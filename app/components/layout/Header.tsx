import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router";

import { Button } from "@/components/ui/Button/Button";

import {
  House,
  Info,
  PanelRightClose,
  PanelRightOpen,
  User,
  X,
} from "lucide-react";
import { AccountSummary } from "./AccountSummary";

type Session = {
  username: string;
  role: "teacher" | "student";
  studentId?: string;
  dashboardPath: string;
  displayName: string;
  schedule: string | null;
  time: string | null;
  plan: "free" | "plus" | null;
};

type SelectedStudent = {
  studentId: string;
  name: string;
  schedule: string;
  time: string;
};

interface HeadersProps {
  isSideBarOpen: boolean;
  onSideBarClick: () => void;
}

export const Header = ({
  isSideBarOpen,
  onSideBarClick,
}: HeadersProps) => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [selectedStudent, setSelectedStudent] =
    useState<SelectedStudent | null>(null);

  const location = useLocation();

  const isPresentationPage =
    location.pathname === "/" || location.pathname === "/about";
  const hasNotesSidebar =
    /^\/course\/[^/]+\/unit\//.test(location.pathname) ||
    /^\/travel\/unit\//.test(location.pathname) ||
    /^\/authentic-content\/[^/]+\/[^/]+/.test(location.pathname);
  useEffect(() => {
    if (new URLSearchParams(location.search).get("login") === "required") {
      setIsLoginOpen(true);
    }
  }, [location.search]);

  useEffect(() => {
    const openLogin = () => {
      setLoginError("");
      setIsLoginOpen(true);
    };

    window.addEventListener("dbec:open-login", openLogin);
    return () => window.removeEventListener("dbec:open-login", openLogin);
  }, []);

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

  useEffect(() => {
    let isCurrent = true;

    if (session?.role !== "teacher") {
      setSelectedStudent(null);
      return;
    }

    const selectedStudentId = localStorage.getItem("dbec_selected_student_id");
    if (!selectedStudentId) {
      setSelectedStudent(null);
      return;
    }

    fetch("/api/students", { headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) return null;
        const result = (await response.json()) as {
          students?: SelectedStudent[];
        };
        return (
          result.students?.find(
            (student) => student.studentId === selectedStudentId,
          ) ?? null
        );
      })
      .then((student) => {
        if (isCurrent) setSelectedStudent(student);
      })
      .catch(() => {
        if (isCurrent) setSelectedStudent(null);
      });

    return () => {
      isCurrent = false;
    };
  }, [session?.role, location.pathname]);

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
    <>
      <div className="w-full shrink-0 rounded-xl bg-(--surface) p-4">
        <div
          className={`grid min-h-10 items-center gap-4 ${
            isPresentationPage
              ? "grid-cols-[auto_minmax(0,1fr)]"
              : "grid-cols-[minmax(0,1fr)_auto]"
          }`}
        >
          <div className="flex min-w-0 items-center gap-4 justify-self-start">
            {!isPresentationPage && session && (
              <>
                <Button
                  ariaLabel="Dashboard"
                  pressed={location.pathname.startsWith(session.dashboardPath)}
                  icon={<User />}
                  onClick={() => navigate(session.dashboardPath)}
                  className="size-10! shrink-0 p-[3px]!"
                />
                <AccountSummary
                  name={session.displayName}
                  subtitle={session.role === "student" ? "Full access" : "Teacher"}
                  className={
                    selectedStudent
                      ? "border-r border-gray-300 pr-4 dark:border-gray-600"
                      : ""
                  }
                />
                {selectedStudent && (
                  <AccountSummary
                    name={selectedStudent.name}
                    subtitle={`${selectedStudent.schedule} · ${selectedStudent.time}`}
                  />
                )}
              </>
            )}

            {isPresentationPage && (
              <div className="flex items-center gap-2.5">
                <Button
                  ariaLabel="Home"
                  icon={<House />}
                  pressed={location.pathname === "/"}
                  onClick={() => navigate("/")}
                  className="size-10! p-[3px]!"
                />
                <Button
                  ariaLabel="About"
                  icon={<Info />}
                  pressed={location.pathname === "/about"}
                  onClick={() => navigate("/about")}
                  className="size-10! p-[3px]!"
                />
              </div>
            )}
          </div>
          <div className="flex min-w-0 items-center gap-4 justify-self-end">
            {session && isPresentationPage && (
              <>
                <AccountSummary
                  name={session.displayName}
                  subtitle={
                    session.role === "student" ? "Full access" : "Teacher"
                  }
                />

                <Button
                  ariaLabel="Dashboard"
                  pressed={location.pathname.startsWith(session.dashboardPath)}
                  icon={<User />}
                  onClick={() => navigate(session.dashboardPath)}
                  className="size-10! p-[3px]!"
                />
              </>
            )}

            {hasNotesSidebar && (
              <Button
                ariaLabel={
                  isSideBarOpen ? "Close notes sidebar" : "Open notes sidebar"
                }
                pressed={isSideBarOpen}
                icon={isSideBarOpen ? <PanelRightClose /> : <PanelRightOpen />}
                onClick={onSideBarClick}
                className="hidden size-10! p-[3px]! max-[700px]:grid!"
              />
            )}
          </div>
        </div>
      </div>

      {isLoginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px]"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsLoginOpen(false);
          }}
        >
          <div className="pointer-events-none flex w-full justify-center">
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
    </>
  );
};
