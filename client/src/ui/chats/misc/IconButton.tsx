import { Link } from 'react-router'

interface IconClickableProps {
  src: string
  alt: string
  size: string
}

interface IconLinkProps extends IconClickableProps {
  link: string
}

interface IconButtonProps extends IconClickableProps {
  callback: () => void
}

export default function IconButton(props: IconButtonProps | IconLinkProps) {
  const { src, alt, size } = props

  const img = <img src={src} alt={alt} className="h-full w-full" />
  const style = {
    height: size,
    width: size,
    minWidth: size,
  }

  if ('link' in props)
    return (
      <Link
        to={props.link}
        className="m-auto rounded-lg p-[0.3rem] hover:bg-zinc-950"
        style={style}
      >
        {img}
      </Link>
    )
  else
    return (
      <button
        onClick={props.callback}
        className="m-auto rounded-lg p-[0.3rem] hover:bg-zinc-950"
        style={style}
      >
        {img}
      </button>
    )
}
