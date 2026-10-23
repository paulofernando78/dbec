import { readCookie, verifySession } from "../_auth.js";

const statuses = new Set(["...", "P", "OK", "ROK", "SC", "TC", "R", "H"]);

export async function onRequestPut(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) return Response.json({ error: "Não autorizado." }, { status: 401 });
  if (session.role !== "teacher") {
    return Response.json({ error: "Somente o professor pode alterar o calendário." }, { status: 403 });
  }

  const { studentId, lessonDate, status, replacementDate = null } =
    await context.request.json();
  const hasValidReplacementDate =
    replacementDate === null ||
    (typeof replacementDate === "string" && replacementDate.length <= 30);

  if (
    !studentId ||
    !/^\d{4}-\d{2}-\d{2}$/.test(lessonDate) ||
    !statuses.has(status) ||
    !hasValidReplacementDate
  ) {
    return Response.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const student = await context.env.DB.prepare(
    "SELECT id FROM users WHERE role = 'student' AND student_slug = ?",
  ).bind(studentId).first();
  if (!student) return Response.json({ error: "Aluno não encontrado." }, { status: 404 });

  await context.env.DB.prepare(
    `INSERT INTO calendar_entries
       (student_id, lesson_date, replacement_date, status, updated_at)
     VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
     ON CONFLICT(student_id, lesson_date)
     DO UPDATE SET
       replacement_date = excluded.replacement_date,
       status = excluded.status,
       updated_at = CURRENT_TIMESTAMP`,
  ).bind(student.id, lessonDate, replacementDate?.trim() || null, status).run();

  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
