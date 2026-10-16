import { createSession, getUsers } from "../_auth.js";
import { verifyPassword } from "../_password.js";

const invalidCredentials = () =>
  Response.json(
    { error: "Usuário ou senha inválidos." },
    {
      status: 401,
      headers: { "Cache-Control": "no-store" },
    },
  );

export async function onRequestPost(context) {
  try {
    const { username, password } = await context.request.json();

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return invalidCredentials();
    }

    const normalizedUsername = username.trim().toLowerCase();
    const users = getUsers(context.env);

    const configuredUser = users[normalizedUsername];
    let user;

    if (configuredUser?.role === "teacher") {
      if (configuredUser.password !== password) {
        return invalidCredentials();
      }

      user = {
        username: normalizedUsername,
        role: "teacher",
        studentId: undefined,
      };
    } else {
      if (!context.env.DB) {
        return invalidCredentials();
      }

      const student = await context.env.DB.prepare(
        `SELECT
      username,
      student_slug AS studentId,
      password_hash AS passwordHash,
      password_salt AS passwordSalt
    FROM users
    WHERE username = ?
      AND role = 'student'
      AND active = 1`,
      )
        .bind(normalizedUsername)
        .first();

      if (!student || !student.passwordHash || !student.passwordSalt) {
        return invalidCredentials();
      }

      const passwordIsValid = await verifyPassword(
        password,
        student.passwordHash,
        student.passwordSalt,
      );

      if (!passwordIsValid) {
        return invalidCredentials();
      }

      user = {
        username: student.username,
        role: "student",
        studentId: student.studentId,
      };
    }

    const token = await createSession(
      {
        username: user.username,
        role: user.role,
        studentId: user.studentId,
      },
      context.env.SESSION_SECRET,
    );

    const redirectTo =
      user.role === "teacher"
        ? "/teacher/dashboard"
        : `/dashboard/${encodeURIComponent(user.studentId)}`;

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
