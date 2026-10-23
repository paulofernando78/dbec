# Local media mirror

Files inside `local-media/` are served only by the Vite development server and
are ignored by Git. They are never copied to the production build.

Keep the path after the media type identical to the R2 object key:

```text
R2 image key:
images/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif

Local image:
local-media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif

Local audio:
local-media/audio/course/a1/unit-1/lesson-1-hello/get-ready/audio-1.mp3

Application image URL in both environments:
/media/images/course/a1/unit-1/lesson-1-hello/get-ready/pic-1.avif
```

Images and audio are separated by media type. Keep everything after
`local-media/` identical to its R2 object key. In production, the existing
`/media/*` Cloudflare Function reads that key from the `MEDIA` R2 binding.

The same mapping is used for pronunciation audio:

```text
Application URL:
/media/audio/pronunciation/linking-sounds/flap-t/i-like-it-a-lot.mp3

Local file:
local-media/audio/pronunciation/linking-sounds/flap-t/i-like-it-a-lot.mp3

R2 key:
audio/pronunciation/linking-sounds/flap-t/i-like-it-a-lot.mp3
```
