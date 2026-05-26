import styles from "./Image.module.css";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export const Image = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <div className={styles.container} style={{ width, height }}>
      <img src={src} alt={alt} className={className} />
    </div>
  );
};
