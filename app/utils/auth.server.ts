import { createHash, timingSafeEqual } from "node:crypto";
import { createCookieSessionStorage, redirect } from "react-router";

type SessionData = {
  userEmail: string;
};

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be defined in the server environment.");
}

const sessionStorage = createCookieSessionStorage<SessionData>({
  cookie: {
    name: "__dbec_session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === "production",
  },
});

const digest = (value: string) => createHash("sha256").update(value).digest();

const matches = (received: string, expected: string) =>
  timingSafeEqual(digest(received), digest(expected));

export const verifyLogin = (email: string, password: string) => {
  const expectedEmail = process.env.TEMP_LOGIN_EMAIL;
  const expectedPassword = process.env.TEMP_LOGIN_PASSWORD;

  if (!expectedEmail || !expectedPassword) {
    throw new Error(
      "TEMP_LOGIN_EMAIL and TEMP_LOGIN_PASSWORD must be defined in the server environment.",
    );
  }

  return (
    matches(email.trim().toLowerCase(), expectedEmail.trim().toLowerCase()) &&
    matches(password, expectedPassword)
  );
};

export const getLoggedInUser = async (request: Request) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );
  return session.get("userEmail");
};

export const requireLoggedInUser = async (request: Request) => {
  const userEmail = await getLoggedInUser(request);
  if (userEmail) return userEmail;

  const url = new URL(request.url);
  const redirectTo = `${url.pathname}${url.search}`;
  throw redirect(`/?redirectTo=${encodeURIComponent(redirectTo)}`);
};

export const createLoginSession = async (
  request: Request,
  email: string,
  redirectTo: string,
) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );
  session.set("userEmail", email.trim().toLowerCase());

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
};

export const safeRedirect = (value: string | null, fallback = "/welcome") => {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }
  return value;
};
