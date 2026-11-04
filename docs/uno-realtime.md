# UNO real-time setup

UNO uses the same Cloudflare Worker project as real-time notes, with a separate
Durable Object class so every room has isolated, persistent state.

## Deploy the Worker

From the repository root:

```bash
npx wrangler deploy --config workers/notes-realtime/wrangler.jsonc
```

The `v2` migration creates the `UnoRoom` Durable Object class. Existing notes
rooms remain unchanged.

## Bind it to Cloudflare Pages

In the `dbec-private` Pages project, add a Durable Object binding:

- Variable name: `UNO_REALTIME`
- Worker: `dbec-notes-realtime`
- Durable Object class: `UnoRoom`

Redeploy the Pages project after adding the binding.

## How a game works

1. The authenticated teacher opens `/games/uno` and creates a room.
2. The host shares the five-digit room code.
3. Authenticated students open `/games/uno`, enter the code, and join.
4. The teacher starts the game when at least two players are connected.

Hands are sent only to their owner. The Durable Object validates every draw
and play, so clients cannot play out of turn or submit a card they do not own.
