type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  // ratio16x9?: boolean
};

export const Image = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <div
      style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover block rounded-lg ${className ?? ""}`}
      />
    </div>
  );
};
