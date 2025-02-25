import { Link } from 'react-router'

type FooterProps = {
  text: string
  link: {
    text: string
    to: string
  }
}

export default function Footer(props: FooterProps) {
  const { text, link } = props

  return (
    <footer className="mx-auto p-1 text-sm">
      {text}{' '}
      <Link
        to={link.to}
        className="font-bold text-cyan-500 hover:text-cyan-700"
      >
        {link.text}
      </Link>
    </footer>
  )
}
