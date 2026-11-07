import { readCookie, verifySession } from "../_auth.js";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 2_000;
const MAX_REQUESTS_PER_HOUR = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1_000;
const MIN_REQUEST_INTERVAL_MS = 10 * 1_000;
let rateLimitStorageReady;

const systemInstruction = `You are DBEC's friendly English tutor.
Help teachers and English learners with:
- explaining the meaning and translation of English words and expressions;
- checking grammar, spelling, and natural phrasing;
- explaining corrections clearly and politely;
- giving short, useful examples in English;
- practicing age-appropriate English conversation.

Reply in Portuguese unless the user asks for English. Keep answers concise and encouraging. Never claim that a correction is certain when context could change the answer. Do not complete tests or graded assignments for the learner; teach the reasoning instead.`;

const json = (body, status = 200) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });

const userKeyFor = (session) =>
  session.role === "student"
    ? `student:${session.studentId}`
    : `teacher:${session.username}`;

const ensureRateLimitStorage = (db) => {
  rateLimitStorageReady ??= db.exec(
    `CREATE TABLE IF NOT EXISTS ai_tutor_requests (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       user_key TEXT NOT NULL,
       created_at INTEGER NOT NULL
     );
     CREATE INDEX IF NOT EXISTS idx_ai_tutor_requests_user_created
       ON ai_tutor_requests (user_key, created_at);`,
  );
  return rateLimitStorageReady;
};

const reserveRequest = async (db, userKey) => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const cooldownStart = now - MIN_REQUEST_INTERVAL_MS;
  const reservation = await db
    .prepare(
      `INSERT INTO ai_tutor_requests (user_key, created_at)
       SELECT ?, ?
       WHERE NOT EXISTS (
         SELECT 1 FROM ai_tutor_requests
         WHERE user_key = ? AND created_at > ?
       )
       AND (
         SELECT COUNT(*) FROM ai_tutor_requests
         WHERE user_key = ? AND created_at > ?
       ) < ?
       RETURNING id`,
    )
    .bind(
      userKey,
      now,
      userKey,
      cooldownStart,
      userKey,
      windowStart,
      MAX_REQUESTS_PER_HOUR,
    )
    .first();

  if (reservation?.id) return { id: reservation.id };

  const usage = await db
    .prepare(
      `SELECT COUNT(*) AS request_count,
              MAX(created_at) AS last_request_at,
              MIN(created_at) AS first_request_at
       FROM ai_tutor_requests
       WHERE user_key = ? AND created_at > ?`,
    )
    .bind(userKey, windowStart)
    .first();

  const requestCount = Number(usage?.request_count ?? 0);
  const lastRequestAt = Number(usage?.last_request_at ?? 0);
  const firstRequestAt = Number(usage?.first_request_at ?? now);
  if (lastRequestAt > cooldownStart) {
    return {
      error: `Aguarde ${Math.max(1, Math.ceil((lastRequestAt + MIN_REQUEST_INTERVAL_MS - now) / 1_000))} segundos antes de enviar outra pergunta.`,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((lastRequestAt + MIN_REQUEST_INTERVAL_MS - now) / 1_000),
      ),
    };
  }

  if (requestCount >= MAX_REQUESTS_PER_HOUR) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((firstRequestAt + RATE_LIMIT_WINDOW_MS - now) / 1_000),
    );
    const minutes = Math.max(1, Math.ceil(retryAfterSeconds / 60));
    return {
      error: `Você atingiu o limite de 10 perguntas por hora. Tente novamente em cerca de ${minutes} minutos.`,
      retryAfterSeconds,
    };
  }

  return {
    error: "Espere alguns segundos e tente novamente.",
    retryAfterSeconds: 10,
  };
};

const releaseRequest = async (db, reservationId) => {
  if (!reservationId) return;
  await db
    .prepare("DELETE FROM ai_tutor_requests WHERE id = ?")
    .bind(reservationId)
    .run();
};

export async function onRequestPost(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) return json({ error: "Não autorizado." }, 401);
  if (!context.env.OPENROUTER_API_KEY) {
    return json({ error: "O AI Tutor ainda não foi configurado." }, 503);
  }
  if (!context.env.DB) {
    return json({ error: "O controle de uso do AI Tutor não está configurado." }, 503);
  }
  await ensureRateLimitStorage(context.env.DB);

  let input;
  try {
    input = await context.request.json();
  } catch {
    return json({ error: "Mensagem inválida." }, 400);
  }

  if (!Array.isArray(input.messages)) {
    return json({ error: "Histórico inválido." }, 400);
  }

  const messages = input.messages.slice(-MAX_MESSAGES);
  const isValid =
    messages.length > 0 &&
    messages.every(
      (message) =>
        (message?.role === "user" || message?.role === "model") &&
        typeof message.text === "string" &&
        message.text.trim().length > 0 &&
        message.text.length <= MAX_MESSAGE_LENGTH,
    ) &&
    messages.at(-1)?.role === "user";

  if (!isValid) return json({ error: "Mensagem inválida." }, 400);

  const reservation = await reserveRequest(context.env.DB, userKeyFor(session));
  if (reservation.error) {
    return json(
      {
        error: reservation.error,
        retryAfterSeconds: reservation.retryAfterSeconds,
      },
      429,
    );
  }

  const models = (context.env.OPENROUTER_MODELS || "openrouter/free")
    .split(",")
    .map((model) => model.trim())
    .filter(
      (model) => model === "openrouter/free" || model.endsWith(":free"),
    );
  if (models.length === 0) {
    await releaseRequest(context.env.DB, reservation.id);
    return json(
      {
        error:
          "OPENROUTER_MODELS deve conter apenas openrouter/free ou modelos terminados em :free.",
      },
      503,
    );
  }

  let result = null;
  let usedModel = null;
  const skippedModels = [];
  const rateLimitedModels = [];

  for (const model of models) {
    let openRouterResponse;
    try {
      openRouterResponse = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${context.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://dbec.com.br",
            "X-Title": "Daily Basis English Course",
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: systemInstruction },
              ...messages.map((message) => ({
                role: message.role === "model" ? "assistant" : "user",
                content: message.text.trim(),
              })),
            ],
            max_tokens: 800,
          }),
        },
      );
    } catch (error) {
      console.error("OpenRouter API request failed", model, error);
      skippedModels.push(model);
      continue;
    }

    const candidateResult = await openRouterResponse.json().catch(() => null);
    if (openRouterResponse.ok) {
      result = candidateResult;
      usedModel = candidateResult?.model ?? model;
      break;
    }

    console.error(
      "OpenRouter API error",
      model,
      openRouterResponse.status,
      candidateResult?.error?.message,
    );

    if (
      openRouterResponse.status === 429 ||
      openRouterResponse.status >= 500
    ) {
      skippedModels.push(model);
      if (openRouterResponse.status === 429) rateLimitedModels.push(model);
      continue;
    }
    break;
  }

  if (!result || !usedModel) {
    await releaseRequest(context.env.DB, reservation.id);
    return json(
      {
        error:
          rateLimitedModels.length === models.length
            ? "All available AI models have reached their usage limits. Please try again later."
            : "The AI service is temporarily unavailable. Please try again later.",
      },
      503,
    );
  }

  const rawContent = result?.choices?.[0]?.message?.content;
  const message = (
    typeof rawContent === "string"
      ? rawContent
      : rawContent
          ?.map((part) => part.text)
          .filter(Boolean)
          .join("\n")
  )?.trim();

  if (!message) {
    await releaseRequest(context.env.DB, reservation.id);
    return json({ error: "O tutor não gerou uma resposta." }, 502);
  }

  context.waitUntil(
    context.env.DB.prepare("DELETE FROM ai_tutor_requests WHERE created_at < ?")
      .bind(Date.now() - 24 * RATE_LIMIT_WINDOW_MS)
      .run(),
  );
  return json({
    message,
    model: usedModel,
    fallbackNotice:
      rateLimitedModels.length > 0
        ? `Some AI models have reached their usage limits. Your request was automatically completed using ${usedModel}.`
        : skippedModels.length > 0
          ? `Some AI models were temporarily unavailable. Your request was automatically completed using ${usedModel}.`
        : null,
  });
}
