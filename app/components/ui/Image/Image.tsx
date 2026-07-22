type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  applyPadding?: boolean;
  rounded?: boolean;
  loading?: "lazy"| "eager"
};

export const Image = ({
  src,
  alt,
  loading = "lazy",
  width,
  height,
  className,
  applyPadding = false,
  rounded = true,
}: ImageProps) => {
  return (
    <div
      style={{
        width,
        height,
        ...(applyPadding && {
          paddingInline: "clamp(0px, calc(25vw - 160px), 100px)",
        }),
      }}
      className="mx-auto h-full mb-4"
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`
          w-full
          h-full
          block
          ${rounded ? "rounded-lg" : ""}
          ${className ?? ""}`}
      />
    </div>
  );
};
