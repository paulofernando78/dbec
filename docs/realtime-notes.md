# Real-time student notes

The notes remain persisted by `PUT /api/notes` in D1. The WebSocket only
broadcasts changes between the teacher and the student while they are online.

## Cloudflare setup

1. Deploy the Durable Object Worker:

   ```sh
   npx wrangler deploy --config workers/notes-realtime/wrangler.jsonc
   ```

2. In the Pages project, add a Durable Object binding:

   - Variable name: `NOTES_REALTIME`
   - Durable Object namespace: `dbec-notes-realtime` / `NotesRoom`

3. Redeploy the Pages project after adding the binding.

`functions/api/notes-live.js` authenticates the session before forwarding the
WebSocket upgrade to the room named after the student's ID. The Durable Object
also checks that a teacher can only transmit `teacher` updates and a student can
only transmit `student` updates.

The regular D1 endpoint remains the source of truth, so loading a page after a
disconnect still restores the latest saved notes.
