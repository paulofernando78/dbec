import styles from "./Image.module.css"

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const Image = ({src, alt, width, height, className}: ImageProps) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} width={width} height={height} className={className}/>
    </div>
  )
}
