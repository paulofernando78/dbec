import { readCookie, verifySession } from "../_auth.js";

export async function onRequestGet(context) {
  if (context.request.headers.get("Upgrade") !== "websocket") {
    return new Response("WebSocket upgrade required.", { status: 426 });
  }

  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );

  if (!session) {
    return new Response("Não autorizado.", { status: 401 });
  }

  if (!context.env.NOTES_REALTIME) {
    return new Response("NOTES_REALTIME binding não configurado.", {
      status: 503,
    });
  }

  const url = new URL(context.request.url);
  const requestedStudentId = url.searchParams.get("studentId");
  const studentId =
    session.role === "teacher" ? requestedStudentId : session.studentId;

  if (!studentId) {
    return new Response("Aluno não informado.", { status: 400 });
  }

  if (session.role === "teacher" && context.env.DB) {
    const student = await context.env.DB.prepare(
      "SELECT id FROM users WHERE role = 'student' AND student_slug = ?",
    )
      .bind(studentId)
      .first();

    if (!student) {
      return new Response("Aluno não encontrado.", { status: 404 });
    }
  }

  const id = context.env.NOTES_REALTIME.idFromName(studentId);
  const room = context.env.NOTES_REALTIME.get(id);
  const headers = new Headers(context.request.headers);
  headers.set("X-DBEC-Role", session.role);
  headers.set("X-DBEC-Student-Id", studentId);

  return room.fetch(
    new Request(context.request, {
      headers,
    }),
  );
}
