import { createSession, getUsers } from "../_auth.js";

export async function onRequestPost(context) {
  try {
    const { username, password } = await context.request.json();
    const users = getUsers(context.env);

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !Object.prototype.hasOwnProperty.call(users, username)
    ) {
      return Response.json(
        { error: "Usuário ou senha inválidos." },
        { status: 401, headers: { "Cache-Control": "no-store" } },
      );
    }

    const user = users[username];

    if (user.password !== password) {
      return Response.json(
        { error: "Usuário ou senha inválidos." },
        { status: 401, headers: { "Cache-Control": "no-store" } },
      );
    }

    const token = await createSession(
      { username, role: user.role, studentId: user.studentId },
      context.env.AUTH_USERS,
    );
    const redirectTo =
      user.role === "teacher"
        ? "/teacher/dashboard"
        : `/dashboard/${encodeURIComponent(user.studentId ?? username)}`;

    return Response.json(
      { ok: true, role: user.role, redirectTo },
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
