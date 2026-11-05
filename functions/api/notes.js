import { readCookie, verifySession } from "../_auth.js";

export async function onRequestPut(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) return Response.json({ error: "Não autorizado." }, { status: 401 });

  const { studentId, noteType, content } = await context.request.json();
  const allowedStudentId = session.role === "teacher" ? studentId : session.studentId;
  const canEditNote =
    session.role === "teacher"
      ? noteType === "teacher" || noteType === "student"
      : noteType === "student";

  if (!allowedStudentId || !canEditNote || typeof content !== "string") {
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

  // Confirm the saved value through the real-time room as well. The browser
  // already broadcasts while typing; this second delivery recovers an update
  // lost during a short WebSocket/proxy transition.
  if (context.env.NOTES_REALTIME) {
    try {
      const id = context.env.NOTES_REALTIME.idFromName(allowedStudentId);
      const room = context.env.NOTES_REALTIME.get(id);
      await room.fetch("https://notes.internal/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "note:update", noteType, content }),
      });
    } catch (error) {
      console.error("Failed to confirm note through real-time room.", error);
    }
  }

  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
