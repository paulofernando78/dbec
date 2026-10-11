import { createSession, getUsers } from "../_auth.js";

export async function onRequestPost(context) {
  try {
    if (!context.env.AUTH_SESSION_SECRET) {
      throw new Error("Session secret is not configured.");
    }

    const { username, password } = await context.request.json();
    const users = getUsers(context.env);

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

    const token = await createSession(username, context.env.AUTH_SESSION_SECRET);

    return Response.json(
      { ok: true },
      {
        headers: {
          "Cache-Control": "no-store",
          "Set-Cookie": `dbec_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=604800`,
        },
      },
    );
  } catch {
    return Response.json(
      { error: "A autenticação não está configurada corretamente." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
