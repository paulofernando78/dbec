CREATE TABLE IF NOT EXISTS ai_tutor_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_key TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ai_tutor_requests_user_created
  ON ai_tutor_requests (user_key, created_at);
