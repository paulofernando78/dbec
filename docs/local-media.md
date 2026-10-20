# Local media mirror

Files inside `local-media/` are served only by the Vite development server and
are ignored by Git. They are never copied to the production build.

Keep the path after the media type identical to the R2 object key:

```text
R2 key:
course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif

Local image:
local-media/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif

Local audio:
local-media/course/a1/unit-1/lesson-1-hello/get-ready/audio-1.mp3

Application URL in both environments:
/media/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif
```

Images and audio stay together in the same step folder, exactly as they do in
R2. In production, the existing `/media/*` Cloudflare Function reads the same
key from the `MEDIA` R2 binding.
