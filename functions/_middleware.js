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

const unauthorized = () =>
  new Response("Login required.", {
    status: 401,
    headers: {
      "Cache-Control": "no-store",
      "WWW-Authenticate": 'Basic realm="DBEC", charset="UTF-8"',
    },
  });

export async function onRequest(context) {
  const pathname = new URL(context.request.url).pathname;

  if (!isProtectedPath(pathname)) {
    return context.next();
  }

  const expectedUsername = context.env.AUTH_USERNAME;
  const expectedPassword = context.env.AUTH_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return new Response("DBEC authentication is not configured.", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const authorization = context.request.headers.get("Authorization");

  if (!authorization?.startsWith("Basic ")) {
    return unauthorized();
  }

  try {
    const credentials = atob(authorization.slice(6));
    const separatorIndex = credentials.indexOf(":");
    const username = credentials.slice(0, separatorIndex);
    const password = credentials.slice(separatorIndex + 1);

    if (
      separatorIndex < 0 ||
      username !== expectedUsername ||
      password !== expectedPassword
    ) {
      return unauthorized();
    }
  } catch {
    return unauthorized();
  }

  return context.next();
}
