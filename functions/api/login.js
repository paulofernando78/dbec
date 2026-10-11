import { createSession, getUsers } from "../_auth.js";

export async function onRequestPost(context) {
  try {
    const { username, password } = await context.request.json();
    const users = getUsers(context.env);
    const sessionSecret =
      context.env.AUTH_SESSION_SECRET || context.env.AUTH_USERS;

    if (!sessionSecret) {
      throw new Error("AUTH_SESSION_SECRET_MISSING");
    }

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !Object.prototype.hasOwnProperty.call(users, username) ||
      users[username] !== password
    ) {
      return Response.json(
        { error: "Usuário ou senha inválidos." },
        { status: 401, headers: { "Cache-Control": "no-store" } },
      );
    }

    const token = await createSession(username, sessionSecret);

    return Response.json(
      { ok: true },
      {
        headers: {
          "Cache-Control": "no-store",
          "Set-Cookie": `dbec_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=604800`,
        },
      },
    );
  } catch (error) {
    const configurationCode =
      error instanceof Error &&
      [
        "AUTH_SESSION_SECRET_MISSING",
        "AUTH_USERS_MISSING",
        "AUTH_USERS_INVALID_JSON",
        "AUTH_USERS_INVALID",
      ].includes(error.message)
        ? error.message
        : "AUTH_CONFIGURATION_ERROR";

    return Response.json(
      {
        error: "A autenticação não está configurada corretamente.",
        code: configurationCode,
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
