CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  student_slug TEXT UNIQUE,
  display_name TEXT NOT NULL,
  schedule TEXT,
  class_time TEXT,
  password_hash TEXT,
  password_salt TEXT,
  active INTEGER NOT NULL DEFAULT 1
    CHECK (active IN (0, 1)),
  role TEXT NOT NULL DEFAULT 'student'
    CHECK (role IN ('teacher', 'student')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  note_type TEXT NOT NULL
    CHECK (note_type IN ('teacher', 'student')),
  content TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (student_id, note_type)
);

CREATE TABLE IF NOT EXISTS calendar_entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER NOT NULL,
  lesson_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT '...'
    CHECK (status IN ('...', 'P', 'OK', 'ROK', 'SC', 'TC', 'R', 'H')),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (student_id, lesson_date)
);

CREATE INDEX IF NOT EXISTS idx_calendar_entries_student_date
  ON calendar_entries (student_id, lesson_date);

CREATE INDEX IF NOT EXISTS idx_notes_student_type
  ON notes (student_id, note_type);

CREATE TABLE IF NOT EXISTS lesson_progress (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  lesson_id TEXT NOT NULL,
  completed INTEGER NOT NULL DEFAULT 0
    CHECK (completed IN (0, 1)),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_lesson_progress_user
  ON lesson_progress (user_id);
