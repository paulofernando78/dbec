import { readCookie, verifySession } from "../_auth.js";

const defaultModels = [
  "gemini-3.8-flash-tts",
  "gemini-3.8-flash-lite-tts",
  "gemini-3.1-flash-tts-preview",
  "gemini-2.5-flash-preview-tts",
];
const maxTextLength = 500;
const cacheControl = "public, max-age=2592000, immutable";

const decodeBase64 = (value) => {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
};

const writeAscii = (view, offset, value) => {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
};

const pcmToWav = (pcm, sampleRate = 24_000) => {
  const wav = new Uint8Array(44 + pcm.length);
  const view = new DataView(wav.buffer);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + pcm.length, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, pcm.length, true);
  wav.set(pcm, 44);
  return wav;
};

export async function onRequestGet(context) {
  const session = await verifySession(
    readCookie(context.request, "dbec_session"),
    context.env.SESSION_SECRET,
  );
  if (!session) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }
  if (!context.env.GEMINI_API_KEY) {
    return Response.json({ error: "Dictionary TTS is not configured." }, { status: 503 });
  }

  const text = new URL(context.request.url).searchParams.get("text")?.trim();
  if (!text || text.length > maxTextLength) {
    return Response.json({ error: "Invalid text." }, { status: 400 });
  }

  const cache = caches.default;
  const cached = await cache.match(context.request);
  if (cached) return cached;

  const models = (context.env.GEMINI_TTS_MODELS || defaultModels.join(","))
    .split(",")
    .map((model) => model.trim())
    .filter(Boolean);
  const skippedModels = [];
  const body = JSON.stringify({
    contents: [
      {
        parts: [
          {
            text,
          },
        ],
      },
    ],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: "Kore" },
        },
      },
    },
  });

  for (const model of models) {
    let geminiResponse;
    try {
      geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": context.env.GEMINI_API_KEY,
          },
          body,
        },
      );
    } catch (error) {
      console.error("Gemini Dictionary TTS request failed", model, error);
      skippedModels.push(model);
      continue;
    }

    const result = await geminiResponse.json().catch(() => null);
    if (!geminiResponse.ok) {
      console.error(
        "Gemini Dictionary TTS error",
        model,
        geminiResponse.status,
        result?.error?.message,
      );
      if (geminiResponse.status === 429 || geminiResponse.status >= 500) {
        skippedModels.push(model);
        continue;
      }
      return Response.json({ error: "Dictionary TTS could not generate audio." }, { status: 502 });
    }

    const candidate = result?.candidates?.[0];
    if (candidate?.finishReason === "SAFETY") {
      return Response.json(
        { error: "Dictionary TTS could not generate this audio." },
        { status: 422 },
      );
    }
    const inlineData = candidate?.content?.parts?.find(
      (part) => part.inlineData?.data,
    )?.inlineData;
    if (!inlineData?.data) {
      skippedModels.push(model);
      continue;
    }

    const decoded = decodeBase64(inlineData.data);
    const audio = inlineData.mimeType?.toLowerCase().startsWith("audio/wav")
      ? decoded
      : pcmToWav(decoded);
    const response = new Response(audio, {
      headers: {
        "Content-Type": "audio/wav",
        "Cache-Control": cacheControl,
        "Content-Length": String(audio.byteLength),
        "X-Gemini-Model": model,
        "X-Gemini-Fallback": skippedModels.length > 0 ? "true" : "false",
      },
    });
    context.waitUntil(cache.put(context.request, response.clone()));
    return response;
  }

  return Response.json(
    { error: "All available TTS models have reached their usage limits." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
