# Project image style

- For every generated course illustration, use the images from A1 Unit 1, Lesson 1 as the mandatory visual reference.
- Preserve their established look: polished 2D semi-realistic digital illustration, clean drawn contours, gently stylized faces, warm colors, soft painterly shading, and detailed environments.
- Keep recurring characters visually consistent with Laura and Eric from that lesson when they reappear.
- Do not generate photorealistic or photographic-looking course art.
- Do not use generic flat-vector or SVG-style artwork as a substitute for lesson images.
- Final course images should be raster assets in AVIF unless the task explicitly requires another format.
- Convert generated source images to AVIF before wiring them into course data; do not leave PNG, JPEG, or SVG as the final lesson asset.
- Encode AVIF assets with Sharp (using the bundled workspace runtime when needed) and verify by decoding them with Sharp after writing; do not use macOS `sips` for AVIF because its output may fail in Chrome.
- Store lesson-specific images only in `local-media/`, inside that lesson's own folder and grouped by the step that consumes them (for example, `local-media/images/course/a1/unit-1/lesson-2-stay-in-touch/get-ready/`). Do not create course assets under `public/media/`.
- Keep everything after `local-media/` identical to its R2 object key. The `media:upload` command uploads `local-media/` to R2, while application code references the asset through `/media/...` (for example, `local-media/images/course/.../image.avif` maps to `/media/images/course/.../image.avif`).
- Before finishing an image task, verify that the file exists under `local-media/` and that its application URL `/media/...` maps to the same relative R2 key.
- Add a cache-version query to every new course image URL, starting with `?v=1`. When replacing an image while keeping the same filename, increment the version (`?v=2`, `?v=3`, and so on) so browsers and the CDN fetch the updated asset.
- Store reusable vocabulary images in the dictionary image collection instead of a lesson folder, using the existing first-letter routing: `/media/images/dictionary/{first-letter}/{filename}.avif`.
- Before adding an image, decide whether it is lesson-specific or reusable vocabulary content and choose the destination accordingly.
