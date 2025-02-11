import { Link } from 'react-router'

interface FooterProps {
  text: string
  link: {
    text: string
    to: string
  }
}

export default function Footer({ text, link }: FooterProps) {
  return (
    <div className="flex grow p-1">
      <p className="mx-auto mt-auto text-sm">
        {text}{' '}
        <Link
          to={link.to}
          className="font-bold text-cyan-500 hover:text-cyan-600"
        >
          {link.text}
        </Link>
      </p>
    </div>
  )
}
