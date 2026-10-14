import { readCookie, verifySession } from "../_auth.js";

export async function onRequestPut(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.AUTH_USERS,
  );
  if (!session) return Response.json({ error: "Não autorizado." }, { status: 401 });

  const { studentId, noteType, content } = await context.request.json();
  const allowedStudentId = session.role === "teacher" ? studentId : session.studentId;
  const allowedNoteType = session.role === "teacher" ? "teacher" : "student";

  if (!allowedStudentId || noteType !== allowedNoteType || typeof content !== "string") {
    return Response.json({ error: "Operação não permitida." }, { status: 403 });
  }

  const student = await context.env.DB.prepare(
    "SELECT id FROM users WHERE role = 'student' AND student_slug = ?",
  ).bind(allowedStudentId).first();
  if (!student) return Response.json({ error: "Aluno não encontrado." }, { status: 404 });

  await context.env.DB.prepare(
    `INSERT INTO notes (student_id, note_type, content, updated_at)
     VALUES (?, ?, ?, CURRENT_TIMESTAMP)
     ON CONFLICT(student_id, note_type)
     DO UPDATE SET content = excluded.content, updated_at = CURRENT_TIMESTAMP`,
  ).bind(student.id, noteType, content).run();

  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
