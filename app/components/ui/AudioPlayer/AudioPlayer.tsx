import styles from "./AudioPlayer.module.css"

type AudioPlayerProps = {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <audio controls src={src} className={styles.audio}></audio>
  )
}