// Essa função impede que alunos ou visitantes cadastrem outros alunos. Somente a sessão do professor será aceita.

import { readCookie, verifySession } from "../_auth.js";
import { createPassword } from "../_password.js";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const authenticateTeacher = async (context) => {
  const token = readCookie(context.request, "dbec_session");

  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (session?.role !== "teacher") {
    return null;
  }

  return session;
};

const createStudentSlug = (name) =>
  name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const validateStudentInput = (input) => {
  if (!input || typeof input !== "object") {
    return "Dados inválidos.";
  }

  // Essa validação será executada também no servidor. A validação do formulário no React, sozinha, não é suficiente porque pode ser ignorada pelo navegador.

  const { name, username, password, schedule, time, plan } = input;

  if (typeof name !== "string" || name.trim().length < 3) {
    return "Informe o nome do aluno.";
  }

  if (typeof username !== "string" || username.trim().length < 3) {
    return "Informe um usuário com pelo menos 3 caracteres.";
  }

  if (typeof password !== "string" || password.length < 8) {
    return "A senha deve ter pelo menos 8 caracteres.";
  }

  if (typeof schedule !== "string" || !schedule) {
    return "Selecione os dias das aulas.";
  }

  if (typeof time !== "string" || !time) {
    return "Selecione o horário das aulas.";
  }

  if (plan !== "free" && plan !== "plus") {
    return "Selecione um plano válido.";
  }

  return null;
};

export async function onRequestGet(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
    return Response.json(
      { error: "Não autorizado." },
      { status: 401, headers: noStoreHeaders },
    );
  }

  if (!context.env.DB) {
    return Response.json(
      { error: "O banco D1 não está configurado." },
      { status: 503, headers: noStoreHeaders },
    );
  }

  const { results: students } = await context.env.DB.prepare(
    `SELECT
      student_slug AS studentId,
      username,
      display_name AS name,
      schedule,
      class_time AS time,
      plan,
      active
    FROM users
    WHERE role = 'student'
    ORDER BY display_name`,
  ).all();

  return Response.json({ students }, { headers: noStoreHeaders });
}

export async function onRequestPost(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
    return Response.json(
      { error: "Não autorizado." },
      { status: 401, headers: noStoreHeaders },
    );
  }

  if (!context.env.DB) {
    return Response.json(
      { error: "O banco D1 não está configurado." },
      { status: 503, headers: noStoreHeaders },
    );
  }

  let input;

  try {
    input = await context.request.json();
  } catch {
    return Response.json(
      { error: "JSON inválido." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const validationError = validateStudentInput(input);

  if (validationError) {
    return Response.json(
      { error: validationError },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const name = input.name.trim();
  const username = input.username.trim().toLowerCase();
  const studentId = createStudentSlug(name);
  const { hash, salt } = await createPassword(input.password);

  try {
    await context.env.DB.prepare(
      `INSERT INTO users (
        username,
        student_slug,
        display_name,
        schedule,
        class_time,
        plan,
        password_hash,
        password_salt,
        role
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'student')`,
    )
      .bind(
        username,
        studentId,
        name,
        input.schedule,
        input.time,
        input.plan,
        hash,
        salt,
      )
      .run();

    return Response.json(
      {
        ok: true,
        student: {
          studentId,
          username,
          name,
          schedule: input.schedule,
          time: input.time,
          plan: input.plan,
        },
      },
      { status: 201, headers: noStoreHeaders },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Usuário ou aluno já cadastrado." },
      { status: 409, headers: noStoreHeaders },
    );
  }
}

export async function onRequestPut(context) {
  const teacher = await authenticateTeacher(context);

  if (!teacher) {
    return Response.json(
      { error: "Não autorizado." },
      { status: 401, headers: noStoreHeaders },
    );
  }

  if (!context.env.DB) {
    return Response.json(
      { error: "O banco D1 não está configurado." },
      { status: 503, headers: noStoreHeaders },
    );
  }

  let input;

  try {
    input = await context.request.json();
  } catch {
    return Response.json(
      { error: "JSON inválido." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const studentId = input?.studentId;
  const name = input?.name?.trim();
  const username = input?.username?.trim().toLowerCase();
  const password = input?.password;
  const schedule = input?.schedule;
  const time = input?.time;
  const plan = input?.plan;

  if (
    !studentId ||
    !name ||
    !username ||
    !schedule ||
    !time ||
    (plan !== "free" && plan !== "plus")
  ) {
    return Response.json(
      { error: "Preencha os dados do aluno." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  if (password && (typeof password !== "string" || password.length < 8)) {
    return Response.json(
      { error: "A senha deve ter pelo menos 8 caracteres." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const existingUsername = await context.env.DB.prepare(
    `SELECT student_slug
     FROM users
     WHERE username = ? AND student_slug != ?
     LIMIT 1`,
  )
    .bind(username, studentId)
    .first();

  if (existingUsername) {
    return Response.json(
      { error: "Esse usuário já está sendo utilizado." },
      { status: 409, headers: noStoreHeaders },
    );
  }

  let result;

  try {
    if (password) {
      const { hash, salt } = await createPassword(password);

      result = await context.env.DB.prepare(
        `UPDATE users
         SET display_name = ?, username = ?, schedule = ?, class_time = ?, plan = ?,
             password_hash = ?, password_salt = ?
         WHERE student_slug = ? AND role = 'student'`,
      )
        .bind(name, username, schedule, time, plan, hash, salt, studentId)
        .run();
    } else {
      result = await context.env.DB.prepare(
        `UPDATE users
         SET display_name = ?, username = ?, schedule = ?, class_time = ?, plan = ?
         WHERE student_slug = ? AND role = 'student'`,
      )
        .bind(name, username, schedule, time, plan, studentId)
        .run();
    }
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Não foi possível atualizar o aluno." },
      { status: 500, headers: noStoreHeaders },
    );
  }

  if (result.meta.changes === 0) {
    return Response.json(
      { error: "Aluno não encontrado." },
      { status: 404, headers: noStoreHeaders },
    );
  }

  return Response.json({ ok: true }, { headers: noStoreHeaders });
}
