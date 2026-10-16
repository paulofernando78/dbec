
type AudioPlayerProps = {
  src: string
}

export const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <audio controls src={src} className="w-full h-10 mb-4"></audio>
  )
}