type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  applyPadding?: boolean
};

export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  applyPadding = false,
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
      className="mx-auto"
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover block rounded-lg ${className ?? ""}`}
      />
    </div>
  );
};
