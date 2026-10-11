const encoder = new TextEncoder();

const toBase64Url = (value) =>
  btoa(value)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");

const fromBase64Url = (value) => {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  return atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
};

const sign = async (value, secret) => {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(value),
  );

  return toBase64Url(String.fromCharCode(...new Uint8Array(signature)));
};

export const getUsers = (env) => {
  let users;

  if (env.AUTH_USERS) {
    try {
      users = JSON.parse(env.AUTH_USERS.trim());
    } catch {
      throw new Error("AUTH_USERS_INVALID_JSON");
    }
  } else if (env.AUTH_USERNAME && env.AUTH_PASSWORD) {
    users = { [env.AUTH_USERNAME]: env.AUTH_PASSWORD };
  } else {
    throw new Error("AUTH_USERS_MISSING");
  }

  const entries = users && typeof users === "object" ? Object.entries(users) : [];

  if (
    !users ||
    Array.isArray(users) ||
    entries.length === 0 ||
    entries.some(
      ([username, password]) =>
        !username || typeof password !== "string" || !password,
    )
  ) {
    throw new Error("AUTH_USERS_INVALID");
  }

  return users;
};

export const createSession = async (username, secret) => {
  const payload = toBase64Url(
    JSON.stringify({ username, expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 }),
  );
  return `${payload}.${await sign(payload, secret)}`;
};

export const verifySession = async (token, secret) => {
  if (!token || !secret) return false;

  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature || signature !== (await sign(payload, secret))) {
      return false;
    }

    const session = JSON.parse(fromBase64Url(payload));
    return typeof session.expiresAt === "number" && session.expiresAt > Date.now();
  } catch {
    return false;
  }
};

export const readCookie = (request, name) => {
  const cookie = request.headers.get("Cookie") ?? "";
  const entry = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  return entry ? decodeURIComponent(entry.slice(name.length + 1)) : undefined;
};
