type AvatarProps = {
  url: string
  size: string
}

export default function Avatar(props: AvatarProps) {
  const { url, size } = props

  return (
    <img
      src={url}
      style={{ width: size, height: size, minWidth: size }}
      className="aspect-square rounded-full object-cover"
    />
  )
}
