import { readCookie, verifySession } from "../_auth.js";

const headers = { "Cache-Control": "no-store" };

const getSession = async (context) => {
  const token = readCookie(context.request, "dbec_session");
  return verifySession(token, context.env.SESSION_SECRET);
};

const prepareTable = (db) =>
  db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS lesson_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      lesson_id TEXT NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0 CHECK (completed IN (0, 1)),
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      UNIQUE (user_id, lesson_id)
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS idx_lesson_progress_user
      ON lesson_progress (user_id)`),
  ]);

const getUser = (db, username) =>
  db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first();

export async function onRequestGet(context) {
  const session = await getSession(context);
  if (!session) {
    return Response.json({ error: "Não autorizado." }, { status: 401, headers });
  }
  if (!context.env.DB) {
    return Response.json(
      { error: "O banco D1 não está configurado." },
      { status: 503, headers },
    );
  }

  await prepareTable(context.env.DB);
  const user = await getUser(context.env.DB, session.username);
  if (!user) {
    return Response.json({ error: "Usuário não encontrado." }, { status: 404, headers });
  }

  const { results } = await context.env.DB.prepare(
    `SELECT lesson_id AS lessonId, completed
     FROM lesson_progress
     WHERE user_id = ?`,
  )
    .bind(user.id)
    .all();

  return Response.json(
    {
      lessons: Object.fromEntries(
        results.map((entry) => [entry.lessonId, entry.completed === 1]),
      ),
    },
    { headers },
  );
}

export async function onRequestPut(context) {
  const session = await getSession(context);
  if (!session) {
    return Response.json({ error: "Não autorizado." }, { status: 401, headers });
  }
  if (!context.env.DB) {
    return Response.json(
      { error: "O banco D1 não está configurado." },
      { status: 503, headers },
    );
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return Response.json({ error: "JSON inválido." }, { status: 400, headers });
  }

  const lessonId = typeof body.lessonId === "string" ? body.lessonId : "";
  if (
    !lessonId.startsWith("/authentic-content/ted-ed/") ||
    !/^\/authentic-content\/ted-ed\/[a-z0-9-]+$/.test(lessonId) ||
    typeof body.completed !== "boolean"
  ) {
    return Response.json({ error: "Dados inválidos." }, { status: 400, headers });
  }

  await prepareTable(context.env.DB);
  const user = await getUser(context.env.DB, session.username);
  if (!user) {
    return Response.json({ error: "Usuário não encontrado." }, { status: 404, headers });
  }

  await context.env.DB.prepare(
    `INSERT INTO lesson_progress (user_id, lesson_id, completed, updated_at)
     VALUES (?, ?, ?, CURRENT_TIMESTAMP)
     ON CONFLICT(user_id, lesson_id) DO UPDATE SET
       completed = excluded.completed,
       updated_at = CURRENT_TIMESTAMP`,
  )
    .bind(user.id, lessonId, body.completed ? 1 : 0)
    .run();

  return Response.json({ ok: true, lessonId, completed: body.completed }, { headers });
}
