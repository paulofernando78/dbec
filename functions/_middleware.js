import { readCookie, verifySession } from "./_auth.js";

const protectedPaths = [
  "/dashboard",
  "/teacher/dashboard",
  "/authentic-content",
  "/vocabulary",
  "/pronunciation",
  "/games",
  "/lab",
];

const isProtectedPath = (pathname) =>
  protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (!isProtectedPath(url.pathname)) {
    return context.next();
  }

  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (session) {
    if (session.role === "teacher" && url.pathname === "/dashboard") {
      url.pathname = "/teacher/dashboard";
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }

    if (
      url.pathname === "/teacher/dashboard" ||
      url.pathname.startsWith("/teacher/dashboard/")
    ) {
      if (session.role === "teacher") return context.next();

      url.pathname = `/dashboard/${encodeURIComponent(session.studentId)}`;
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }

    if (
      session.role === "student" &&
      (url.pathname === "/dashboard" ||
        (url.pathname.startsWith("/dashboard/") &&
          url.pathname !==
            `/dashboard/${encodeURIComponent(session.studentId)}`))
    ) {
      url.pathname = `/dashboard/${encodeURIComponent(session.studentId)}`;
      url.search = "";
      return Response.redirect(url.toString(), 302);
    }

    return context.next();
  }

  if (url.pathname === "/dashboard") {
    return context.next();
  }

  url.pathname = "/";
  url.searchParams.set("login", "required");
  return Response.redirect(url.toString(), 302);
}
