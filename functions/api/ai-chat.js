import { readCookie, verifySession } from "../_auth.js";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 2_000;

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

export async function onRequestPost(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) return json({ error: "Não autorizado." }, 401);
  if (!context.env.GEMINI_API_KEY) {
    return json({ error: "O AI Tutor ainda não foi configurado." }, 503);
  }

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

  const model = context.env.GEMINI_MODEL || "gemini-3.8-flash";
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const geminiResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": context.env.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: messages.map((message) => ({
        role: message.role,
        parts: [{ text: message.text.trim() }],
      })),
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 800,
      },
    }),
  });

  const result = await geminiResponse.json().catch(() => null);
  if (!geminiResponse.ok) {
    console.error("Gemini API error", geminiResponse.status, result?.error?.message);
    return json({ error: "O tutor não conseguiu responder agora." }, 502);
  }

  const message = result?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join("\n")
    .trim();

  if (!message) return json({ error: "O tutor não gerou uma resposta." }, 502);
  return json({ message });
}
