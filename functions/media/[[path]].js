const immutableCache = "public, max-age=31536000, immutable";

const getObjectKey = (path) =>
  (Array.isArray(path) ? path : [path])
    .filter(Boolean)
    .map((part) => decodeURIComponent(part))
    .join("/");

export async function onRequestGet(context) {
  if (!context.env.MEDIA) {
    return new Response("Media bucket is not configured.", { status: 503 });
  }

  const key = getObjectKey(context.params.path);
  if (!key || key.includes("..")) {
    return new Response("Invalid media path.", { status: 400 });
  }

  const cache = caches.default;
  const cached = await cache.match(context.request);
  if (cached) return cached;

  const object = await context.env.MEDIA.get(key);
  if (!object) return new Response("Media not found.", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", immutableCache);
  headers.set("ETag", object.httpEtag);

  const response = new Response(object.body, { headers });
  context.waitUntil(cache.put(context.request, response.clone()));

  return response;
}
