const immutableCache = "public, max-age=31536000, immutable";

const getObjectKey = (path) =>
  (Array.isArray(path) ? path : [path])
    .filter(Boolean)
    .map((part) => decodeURIComponent(part))
    .join("/");

const createHeaders = (object) => {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", immutableCache);
  headers.set("ETag", object.httpEtag);
  return headers;
};

const getKeyFromContext = (context) => {
  const key = getObjectKey(context.params.path);
  return key && !key.includes("..") ? key : null;
};

export async function onRequestHead(context) {
  if (!context.env.MEDIA) {
    return new Response(null, { status: 503 });
  }

  const key = getKeyFromContext(context);
  if (!key) return new Response(null, { status: 400 });

  const object = await context.env.MEDIA.head(key);
  if (!object) return new Response(null, { status: 404 });

  const headers = createHeaders(object);
  headers.set("Content-Length", String(object.size));
  return new Response(null, { status: 200, headers });
}

export async function onRequestGet(context) {
  if (!context.env.MEDIA) {
    return new Response("Media bucket is not configured.", { status: 503 });
  }

  const key = getKeyFromContext(context);
  if (!key) {
    return new Response("Invalid media path.", { status: 400 });
  }

  const rangeRequested = context.request.headers.has("Range");
  const cache = caches.default;

  if (!rangeRequested) {
    const cached = await cache.match(context.request);
    if (cached) return cached;
  }

  let object;

  try {
    object = await context.env.MEDIA.get(
      key,
      rangeRequested ? { range: context.request.headers } : undefined,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!message.includes("InvalidRange") && !message.includes("10039")) {
      throw error;
    }

    const metadata = await context.env.MEDIA.head(key);
    const headers = new Headers({ "Accept-Ranges": "bytes" });
    if (metadata) headers.set("Content-Range", `bytes */${metadata.size}`);
    return new Response("Requested range is not satisfiable.", {
      status: 416,
      headers,
    });
  }

  if (!object) return new Response("Media not found.", { status: 404 });

  const headers = createHeaders(object);

  if (rangeRequested && object.range) {
    const { offset, length } = object.range;
    const end = offset + length - 1;
    headers.set("Content-Range", `bytes ${offset}-${end}/${object.size}`);
    headers.set("Content-Length", String(length));

    return new Response(object.body, { status: 206, headers });
  }

  headers.set("Content-Length", String(object.size));
  const response = new Response(object.body, { status: 200, headers });
  context.waitUntil(cache.put(context.request, response.clone()));

  return response;
}
