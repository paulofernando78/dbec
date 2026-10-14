import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const localLessonCompletion = new Map<string, boolean>();
let localSession: { username: string; role: string; studentId?: string } | null =
  null;

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

      response.statusCode = 200;
      response.end(JSON.stringify({ ...localSession, dashboardPath }));
    });

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
    localAuth(),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
