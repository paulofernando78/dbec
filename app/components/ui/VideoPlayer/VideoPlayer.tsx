const getEmbedUrl = (src?: string, videoId?: string): string => {
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (!src) {
    return "";
  }

  if (src.includes("/embed/")) {
    return src;
  }

  try {
    const url = new URL(src);

    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    }

    const id = url.searchParams.get("v");

    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    return `https://www.youtube.com/embed/${src}`;
  }

  return "";
};

type VideoPlayerProps = {
  src?: string;
  videoId?: string;
  title?: string;
  instruction: string;
};

export const VideoPlayer = ({
  src,
  videoId,
  title = "YouTube video",
  instruction,
}: VideoPlayerProps) => {
  const embedUrl = getEmbedUrl(src, videoId);

  if (!embedUrl) {
    return null;
  }

  return (
    <>
      <p className="font-bold">{instruction}</p>
      <div
        className="
        w-full
        aspect-video
        border
        border-[var(--gray-3)]
        rounded-[var(--border-radius)]
        overflow-hidden
        bg-[var(--slate-10)]
    "
      >
        <iframe
          className="w-full h-full border-0"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
};
