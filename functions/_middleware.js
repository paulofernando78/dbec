import { readCookie, verifySession } from "./_auth.js";

const protectedPaths = [
  "/dashboard",
  "/authentic-content",
  "/vocabulary",
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
  if (await verifySession(token, context.env.AUTH_USERS)) {
    return context.next();
  }

  url.pathname = "/";
  url.searchParams.set("login", "required");
  return Response.redirect(url.toString(), 302);
}
