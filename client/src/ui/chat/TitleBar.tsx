import { Link } from 'react-router'

import Avatar from '@/ui/misc/Avatar'

type TitleBarProps = {
  name: string
  avatar: string
}

export default function TitleBar(props: TitleBarProps) {
  const { name, avatar } = props

  return (
    <div className="flex gap-5 bg-zinc-900 px-5 py-2 shadow-[0px_10px_10px] shadow-black/25 [&>*:first-child]:md:hidden">
      <Link to="/chat" className="my-auto h-8 w-8 min-w-8 pt-1 invert">
        <img src="/icons/back.svg" />
      </Link>

      <Avatar name={name} url={avatar} size="2.5rem" style="circle" />

      <h1 className="my-auto h-fit grow truncate text-3xl font-semibold">
        {name}
      </h1>
    </div>
  )
}
