import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { defineConfig, type Plugin } from "vite";

import { students as developmentStudents } from "./app/data/students";

const localLessonCompletion = new Map<string, boolean>();
const localNotes = new Map<string, { teacher: string; student: string }>();
const localAiTutorRequests = new Map<string, number[]>();
const localDictionaryTtsCache = new Map<
  string,
  { audio: Buffer; model: string; usedFallback: boolean }
>();
let localSession: { username: string; role: string; studentId?: string } | null =
  null;

const aiTutorSystemInstruction = `You are DBEC's friendly English tutor.
Help teachers and English learners explain words and expressions, check grammar and spelling, explain corrections politely, give short examples, and practice age-appropriate conversation.
Reply in Portuguese unless the user asks for English. Keep answers concise and encouraging. Do not complete tests or graded assignments; teach the reasoning instead.`;

const pcmToWav = (pcm: Buffer, sampleRate = 24_000) => {
  const wav = Buffer.alloc(44 + pcm.length);
  wav.write("RIFF", 0);
  wav.writeUInt32LE(36 + pcm.length, 4);
  wav.write("WAVE", 8);
  wav.write("fmt ", 12);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(sampleRate, 24);
  wav.writeUInt32LE(sampleRate * 2, 28);
  wav.writeUInt16LE(2, 32);
  wav.writeUInt16LE(16, 34);
  wav.write("data", 36);
  wav.writeUInt32LE(pcm.length, 40);
  pcm.copy(wav, 44);
  return wav;
};

type LocalStudent = {
  studentId: string;
  username: string;
  name: string;
  schedule: string;
  time: string;
  plan: "free" | "plus";
};

const localStudents = new Map<string, LocalStudent>(
  Object.entries(developmentStudents).map(([studentId, student]) => [
    studentId,
    {
      studentId,
      username: studentId.split("-")[0],
      name: student.name,
      schedule: student.schedule,
      time: student.time,
      plan: "free",
    },
  ]),
);

const createStudentSlug = (name: string) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const mediaTypes: Record<string, string> = {
  ".aac": "audio/aac",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".m4a": "audio/mp4",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".webp": "image/webp",
};

const localMedia = (): Plugin => ({
  name: "local-media",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/media", async (request, response, next) => {
      if (!request.url || !["GET", "HEAD"].includes(request.method ?? "")) {
        return next();
      }

      try {
        const mediaPath = decodeURIComponent(request.url.split("?")[0])
          .replace(/^\/+/, "");
        const extension = extname(mediaPath).toLowerCase();
        const mediaRoot = resolve(process.cwd(), "local-media");
        const filePath = resolve(mediaRoot, mediaPath);

        if (!filePath.startsWith(`${mediaRoot}${sep}`)) return next();

        const file = await stat(filePath);
        if (!file.isFile()) return next();

        response.setHeader(
          "Content-Type",
          mediaTypes[extension] ?? "application/octet-stream",
        );
        response.setHeader("Accept-Ranges", "bytes");
        response.setHeader("Cache-Control", "no-store");

        const range = request.headers.range?.match(/bytes=(\d*)-(\d*)/);
        if (range) {
          const start = range[1] ? Number(range[1]) : 0;
          const end = range[2] ? Number(range[2]) : file.size - 1;

          if (start > end || end >= file.size) {
            response.statusCode = 416;
            response.setHeader("Content-Range", `bytes */${file.size}`);
            response.end();
            return;
          }

          response.statusCode = 206;
          response.setHeader("Content-Range", `bytes ${start}-${end}/${file.size}`);
          response.setHeader("Content-Length", String(end - start + 1));
          if (request.method === "HEAD") return response.end();
          createReadStream(filePath, { start, end }).pipe(response);
          return;
        }

        response.setHeader("Content-Length", String(file.size));
        if (request.method === "HEAD") return response.end();
        createReadStream(filePath).pipe(response);
      } catch {
        next();
      }
    });
  },
});

const localAuth = (): Plugin => ({
  name: "local-auth",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/api/login", async (request, response, next) => {
      if (request.method !== "POST") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      try {
        request.setEncoding("utf8");
        let body = "";
        for await (const chunk of request) body += chunk;

        const { username, password } = JSON.parse(body);
        const variables = await readFile(resolve(process.cwd(), ".dev.vars"), "utf8");
        const authUsers = variables.match(/^AUTH_USERS=(.*)$/m)?.[1]?.trim();
        const users = authUsers ? JSON.parse(authUsers) : undefined;
        const rawUser = users?.[username];
        const user =
          typeof rawUser === "string"
            ? { password: rawUser, role: "student", studentId: username }
            : rawUser;

        if (
          !users ||
          typeof username !== "string" ||
          typeof password !== "string" ||
          !Object.prototype.hasOwnProperty.call(users, username) ||
          !user ||
          user.password !== password
        ) {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Usuário ou senha inválidos." }));
          return;
        }

        const redirectTo =
          user.role === "teacher"
            ? "/teacher/dashboard"
            : `/dashboard/${encodeURIComponent(user.studentId ?? username)}`;

        localSession = {
          username,
          role: user.role,
          studentId: user.studentId,
        };

        response.statusCode = 200;
        response.end(
          JSON.stringify({ ok: true, role: user.role, redirectTo }),
        );
      } catch {
        response.statusCode = 503;
        response.end(
          JSON.stringify({
            error: "Verifique o arquivo .dev.vars do ambiente local.",
          }),
        );
      }
    });

    server.middlewares.use("/api/logout", (request, response, next) => {
      if (request.method !== "POST") return next();
      localSession = null;
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ ok: true }));
    });

    server.middlewares.use("/api/session", (request, response, next) => {
      if (request.method !== "GET") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      const dashboardPath =
        localSession.role === "teacher"
          ? "/teacher/dashboard"
          : `/dashboard/${encodeURIComponent(localSession.studentId ?? localSession.username)}`;

      const student = localSession.studentId
        ? localStudents.get(localSession.studentId)
        : undefined;

      response.statusCode = 200;
      response.end(
        JSON.stringify({
          ...localSession,
          dashboardPath,
          displayName: student?.name ?? localSession.username,
          schedule: student?.schedule ?? null,
          time: student?.time ?? null,
          plan: student?.plan ?? null,
        }),
      );
    });

    server.middlewares.use(
      "/api/dictionary-tts.wav",
      async (request, response, next) => {
        if (request.method !== "GET") return next();
        if (!localSession) {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Unauthorized." }));
          return;
        }

        try {
          const text = new URL(request.url ?? "", "http://localhost")
            .searchParams.get("text")
            ?.trim();
          if (!text || text.length > 500) {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Invalid text." }));
            return;
          }

          const cached = localDictionaryTtsCache.get(text);
          if (cached) {
            response.setHeader("Content-Type", "audio/wav");
            response.setHeader("Content-Length", String(cached.audio.length));
            response.setHeader("X-Gemini-Model", cached.model);
            response.setHeader(
              "X-Gemini-Fallback",
              cached.usedFallback ? "true" : "false",
            );
            response.end(cached.audio);
            return;
          }

          const variables = await readFile(
            resolve(process.cwd(), ".dev.vars"),
            "utf8",
          );
          const apiKey = variables.match(/^GEMINI_API_KEY=(.*)$/m)?.[1]?.trim();
          const configuredModels = variables
            .match(/^GEMINI_TTS_MODELS=(.*)$/m)?.[1]
            ?.trim();
          const models = (
            configuredModels ||
            "gemini-3.8-flash-tts,gemini-3.8-flash-lite-tts,gemini-3.1-flash-tts-preview,gemini-2.5-flash-preview-tts"
          )
            .split(",")
            .map((model) => model.trim())
            .filter(Boolean);
          if (!apiKey) {
            response.statusCode = 503;
            response.end(
              JSON.stringify({ error: "Dictionary TTS is not configured." }),
            );
            return;
          }

          let skippedModels = 0;
          for (const model of models) {
            let geminiResponse;
            try {
              geminiResponse = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey,
                  },
                  body: JSON.stringify({
                    contents: [{
                      parts: [{
                        text: `Read the following text exactly as written in clear, natural American English for an English learner. Do not add or remove words: ${text}`,
                      }],
                    }],
                    generationConfig: {
                      responseModalities: ["AUDIO"],
                      speechConfig: {
                        voiceConfig: {
                          prebuiltVoiceConfig: { voiceName: "Kore" },
                        },
                      },
                    },
                  }),
                },
              );
            } catch (error) {
              console.error("Local Dictionary TTS request failed", model, error);
              skippedModels += 1;
              continue;
            }

            const result = (await geminiResponse.json().catch(() => null)) as {
              error?: { message?: string };
              candidates?: Array<{
                finishReason?: string;
                content?: {
                  parts?: Array<{
                    inlineData?: { data?: string; mimeType?: string };
                  }>;
                };
              }>;
            } | null;
            if (!geminiResponse.ok) {
              console.error(
                "Local Dictionary TTS error",
                model,
                geminiResponse.status,
                result?.error?.message,
              );
              if (geminiResponse.status === 429 || geminiResponse.status >= 500) {
                skippedModels += 1;
                continue;
              }
              break;
            }

            const candidate = result?.candidates?.[0];
            if (candidate?.finishReason === "SAFETY") break;
            const inlineData = candidate?.content?.parts?.find(
              (part) => part.inlineData?.data,
            )?.inlineData;
            if (!inlineData?.data) {
              skippedModels += 1;
              continue;
            }

            const decoded = Buffer.from(inlineData.data, "base64");
            const audio = inlineData.mimeType?.toLowerCase().startsWith("audio/wav")
              ? decoded
              : pcmToWav(decoded);
            localDictionaryTtsCache.set(text, {
              audio,
              model,
              usedFallback: skippedModels > 0,
            });
            response.statusCode = 200;
            response.setHeader("Content-Type", "audio/wav");
            response.setHeader("Content-Length", String(audio.length));
            response.setHeader("X-Gemini-Model", model);
            response.setHeader(
              "X-Gemini-Fallback",
              skippedModels > 0 ? "true" : "false",
            );
            response.end(audio);
            return;
          }

          response.statusCode = 503;
          response.end(
            JSON.stringify({
              error: "All available TTS models have reached their usage limits.",
            }),
          );
        } catch (error) {
          console.error("Local Dictionary TTS error", error);
          response.statusCode = 500;
          response.end(JSON.stringify({ error: "Dictionary TTS failed." }));
        }
      },
    );

    server.middlewares.use("/api/ai-chat", async (request, response, next) => {
      if (request.method !== "POST") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      let localReservation: { userKey: string; createdAt: number } | null = null;
      try {
        const variables = await readFile(resolve(process.cwd(), ".dev.vars"), "utf8");
        const apiKey = variables.match(/^GEMINI_API_KEY=(.*)$/m)?.[1]?.trim();
        const configuredModels =
          variables.match(/^GEMINI_MODELS=(.*)$/m)?.[1]?.trim() ||
          variables.match(/^GEMINI_MODEL=(.*)$/m)?.[1]?.trim() ||
          "gemini-3.8-flash";
        const models = configuredModels
          .split(",")
          .map((model) => model.trim())
          .filter(Boolean);
        if (!apiKey) {
          response.statusCode = 503;
          response.end(
            JSON.stringify({ error: "Adicione GEMINI_API_KEY ao arquivo .dev.vars." }),
          );
          return;
        }

        request.setEncoding("utf8");
        let body = "";
        for await (const chunk of request) body += chunk;
        const input = JSON.parse(body);
        const messages = Array.isArray(input.messages)
          ? input.messages.slice(-12)
          : [];
        const isValid =
          messages.length > 0 &&
          messages.every(
            (message: { role?: unknown; text?: unknown }) =>
              (message?.role === "user" || message?.role === "model") &&
              typeof message.text === "string" &&
              message.text.trim().length > 0 &&
              message.text.length <= 2_000,
          ) &&
          messages.at(-1)?.role === "user";
        if (!isValid) {
          response.statusCode = 400;
          response.end(JSON.stringify({ error: "Mensagem inválida." }));
          return;
        }

        const userKey =
          localSession.role === "student"
            ? `student:${localSession.studentId}`
            : `teacher:${localSession.username}`;
        const now = Date.now();
        const recentRequests = (localAiTutorRequests.get(userKey) ?? []).filter(
          (createdAt) => createdAt > now - 60 * 60 * 1_000,
        );
        const lastRequestAt = recentRequests.at(-1) ?? 0;
        if (lastRequestAt > now - 10_000) {
          const retryAfterSeconds = Math.max(
            1,
            Math.ceil((lastRequestAt + 10_000 - now) / 1_000),
          );
          response.statusCode = 429;
          response.end(
            JSON.stringify({
              error: `Aguarde ${retryAfterSeconds} segundos antes de enviar outra pergunta.`,
              retryAfterSeconds,
            }),
          );
          return;
        }
        if (recentRequests.length >= 10) {
          const retryAfterSeconds = Math.max(
            1,
            Math.ceil((recentRequests[0] + 60 * 60 * 1_000 - now) / 1_000),
          );
          response.statusCode = 429;
          response.end(
            JSON.stringify({
              error: `Você atingiu o limite de 10 perguntas por hora. Tente novamente em cerca de ${Math.max(1, Math.ceil(retryAfterSeconds / 60))} minutos.`,
              retryAfterSeconds,
            }),
          );
          return;
        }
        recentRequests.push(now);
        localAiTutorRequests.set(userKey, recentRequests);
        localReservation = { userKey, createdAt: now };

        const requestBody = JSON.stringify({
          systemInstruction: {
            parts: [{ text: aiTutorSystemInstruction }],
          },
          contents: messages.map(
            (message: { role: "user" | "model"; text: string }) => ({
              role: message.role,
              parts: [{ text: message.text.trim() }],
            }),
          ),
          generationConfig: { maxOutputTokens: 800 },
        });
        type GeminiTextResult = {
          error?: { message?: string };
          candidates?: Array<{
            content?: { parts?: Array<{ text?: string }> };
          }>;
        };
        let result: GeminiTextResult | null = null;
        let usedModel = "";
        const skippedModels: string[] = [];
        const rateLimitedModels: string[] = [];

        for (const model of models) {
          let geminiResponse;
          try {
            geminiResponse = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-goog-api-key": apiKey,
                },
                body: requestBody,
              },
            );
          } catch (error) {
            console.error("Gemini API request failed", model, error);
            skippedModels.push(model);
            continue;
          }

          const candidateResult = await geminiResponse.json().catch(() => null) as
            | GeminiTextResult
            | null;
          if (geminiResponse.ok) {
            result = candidateResult;
            usedModel = model;
            break;
          }

          console.error(
            "Gemini API error",
            model,
            geminiResponse.status,
            candidateResult?.error?.message,
          );
          if (geminiResponse.status === 429 || geminiResponse.status >= 500) {
            skippedModels.push(model);
            if (geminiResponse.status === 429) rateLimitedModels.push(model);
            continue;
          }
          break;
        }

        if (!result || !usedModel) {
          localAiTutorRequests.set(
            userKey,
            recentRequests.filter((createdAt) => createdAt !== now),
          );
          response.statusCode = 503;
          response.end(JSON.stringify({
            error:
              rateLimitedModels.length === models.length
                ? "All available AI models have reached their usage limits. Please try again later."
                : "The AI service is temporarily unavailable. Please try again later.",
          }));
          return;
        }

        const message = result.candidates?.[0]?.content?.parts
          ?.map((part) => part.text)
          .filter(Boolean)
          .join("\n")
          .trim();
        if (!message) {
          localAiTutorRequests.set(
            userKey,
            recentRequests.filter((createdAt) => createdAt !== now),
          );
          response.statusCode = 502;
          response.end(JSON.stringify({ error: "O tutor não gerou uma resposta." }));
          return;
        }

        response.statusCode = 200;
        response.end(JSON.stringify({
          message,
          model: usedModel,
          fallbackNotice:
            rateLimitedModels.length > 0
              ? `Some AI models have reached their usage limits. Your request was automatically completed using ${usedModel}.`
              : skippedModels.length > 0
                ? `Some AI models were temporarily unavailable. Your request was automatically completed using ${usedModel}.`
              : null,
        }));
      } catch (error) {
        if (localReservation) {
          const { userKey, createdAt } = localReservation;
          localAiTutorRequests.set(
            userKey,
            (localAiTutorRequests.get(userKey) ?? []).filter(
              (requestAt) => requestAt !== createdAt,
            ),
          );
        }
        console.error("Local AI Tutor error", error);
        response.statusCode = 500;
        response.end(JSON.stringify({ error: "Não foi possível acessar o AI Tutor." }));
      }
    });

    server.middlewares.use("/api/dashboard", (request, response, next) => {
      if (request.method !== "GET") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      const requestedStudentId = new URL(
        request.url ?? "",
        "http://localhost",
      ).searchParams.get("studentId");
      const studentId =
        localSession.role === "teacher"
          ? requestedStudentId
          : localSession.studentId;
      const student = studentId ? localStudents.get(studentId) : undefined;

      if (!studentId || !student) {
        response.statusCode = 404;
        response.end(JSON.stringify({ error: "Aluno não encontrado." }));
        return;
      }

      response.statusCode = 200;
      response.end(
        JSON.stringify({
          viewer: {
            username: localSession.username,
            role: localSession.role,
          },
          student,
          notes: localNotes.get(studentId) ?? { teacher: "", student: "" },
          calendar: [],
        }),
      );
    });

    server.middlewares.use("/api/notes", async (request, response, next) => {
      if (request.method !== "PUT") return next();

      response.setHeader("Content-Type", "application/json");
      response.setHeader("Cache-Control", "no-store");

      if (!localSession) {
        response.statusCode = 401;
        response.end(JSON.stringify({ error: "Não autorizado." }));
        return;
      }

      try {
        request.setEncoding("utf8");
        let body = "";
        for await (const chunk of request) body += chunk;

        const { studentId, noteType, content } = JSON.parse(body);
        const allowedStudentId =
          localSession.role === "teacher"
            ? studentId
            : localSession.studentId;
        const canEditNote =
          localSession.role === "teacher"
            ? noteType === "teacher" || noteType === "student"
            : noteType === "student";

        if (
          !allowedStudentId ||
          !localStudents.has(allowedStudentId) ||
          !canEditNote ||
          typeof content !== "string"
        ) {
          response.statusCode = 403;
          response.end(JSON.stringify({ error: "Operação não permitida." }));
          return;
        }

        const current = localNotes.get(allowedStudentId) ?? {
          teacher: "",
          student: "",
        };
        localNotes.set(allowedStudentId, {
          ...current,
          [noteType]: content,
        });

        response.statusCode = 200;
        response.end(JSON.stringify({ ok: true }));
      } catch {
        response.statusCode = 400;
        response.end(JSON.stringify({ error: "Dados inválidos." }));
      }
    });

    server.middlewares.use(
      "/api/students",
      async (request, response, next) => {
        if (!request.method || !["GET", "POST", "PUT"].includes(request.method)) {
          return next();
        }

        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        if (localSession?.role !== "teacher") {
          response.statusCode = 401;
          response.end(JSON.stringify({ error: "Não autorizado." }));
          return;
        }

        if (request.method === "GET") {
          response.statusCode = 200;
          response.end(
            JSON.stringify({
              students: [...localStudents.values()].sort((a, b) =>
                a.name.localeCompare(b.name),
              ),
            }),
          );
          return;
        }

        try {
          request.setEncoding("utf8");
          let body = "";
          for await (const chunk of request) body += chunk;

          const input = JSON.parse(body);
          const name = input.name?.trim();
          const username = input.username?.trim().toLowerCase();
          const schedule = input.schedule;
          const time = input.time;
          const plan = input.plan;

          if (
            !name ||
            !username ||
            !schedule ||
            !time ||
            (plan !== "free" && plan !== "plus")
          ) {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Preencha os dados do aluno." }));
            return;
          }

          if (request.method === "POST") {
            if (typeof input.password !== "string" || input.password.length < 8) {
              response.statusCode = 400;
              response.end(
                JSON.stringify({
                  error: "A senha deve ter pelo menos 8 caracteres.",
                }),
              );
              return;
            }

            const studentId = createStudentSlug(name);
            const duplicate = [...localStudents.values()].some(
              (student) =>
                student.studentId === studentId || student.username === username,
            );

            if (duplicate) {
              response.statusCode = 409;
              response.end(
                JSON.stringify({ error: "Usuário ou aluno já cadastrado." }),
              );
              return;
            }

            const student = {
              studentId,
              username,
              name,
              schedule,
              time,
              plan,
            };
            localStudents.set(studentId, student);
            response.statusCode = 201;
            response.end(JSON.stringify({ ok: true, student }));
            return;
          }

          const studentId = input.studentId;
          if (!studentId || !localStudents.has(studentId)) {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: "Aluno não encontrado." }));
            return;
          }

          const duplicateUsername = [...localStudents.values()].some(
            (student) =>
              student.studentId !== studentId && student.username === username,
          );

          if (duplicateUsername) {
            response.statusCode = 409;
            response.end(
              JSON.stringify({ error: "Esse usuário já está sendo utilizado." }),
            );
            return;
          }

          localStudents.set(studentId, {
            studentId,
            username,
            name,
            schedule,
            time,
            plan,
          });
          response.statusCode = 200;
          response.end(JSON.stringify({ ok: true }));
        } catch {
          response.statusCode = 400;
          response.end(JSON.stringify({ error: "JSON inválido." }));
        }
      },
    );

    server.middlewares.use(
      "/api/lesson-progress",
      async (request, response, next) => {
        response.setHeader("Content-Type", "application/json");
        response.setHeader("Cache-Control", "no-store");

        if (request.method === "GET") {
          response.statusCode = 200;
          response.end(
            JSON.stringify({ lessons: Object.fromEntries(localLessonCompletion) }),
          );
          return;
        }

        if (request.method === "PUT") {
          try {
            request.setEncoding("utf8");
            let body = "";
            for await (const chunk of request) body += chunk;

            const { lessonId, completed } = JSON.parse(body);
            if (
              typeof lessonId !== "string" ||
              typeof completed !== "boolean"
            ) {
              throw new Error("Invalid lesson progress");
            }

            localLessonCompletion.set(lessonId, completed);
            response.statusCode = 200;
            response.end(JSON.stringify({ ok: true, lessonId, completed }));
          } catch {
            response.statusCode = 400;
            response.end(JSON.stringify({ error: "Dados inválidos." }));
          }
          return;
        }

        next();
      },
    );
  },
});

export default defineConfig({
  plugins: [
    localMedia(),
    localAuth(),
    tailwindcss(),
    reactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
