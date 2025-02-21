import Avatar from '@/ui/chats/misc/Avatar'
import IconButton from '@/ui/chats/misc/IconButton'

import * as types from '@/types'

type TitleBarProps = {
  data: types.Chat
}

export default function TitleBar(props: TitleBarProps) {
  const { name, avatar } = props.data

  return (
    <div className="z-20 flex gap-5 bg-zinc-900 px-5 py-2 shadow-[0px_10px_10px] shadow-black/25 [&>*:first-child]:md:hidden">
      <IconButton
        link="/chats"
        src="/icon-back.svg"
        alt="Close"
        size="2.3rem"
      />
      <Avatar name={name} url={avatar} size="3rem" style="circle" />

      <h1 className="my-auto h-fit grow truncate text-2xl font-semibold">
        {name}
      </h1>

      <IconButton
        src="/icon-phone.svg"
        alt="Phone"
        size="2.1rem"
        callback={() => {}}
      />

      <IconButton
        src="/icon-video.svg"
        alt="Video"
        size="2.25rem"
        callback={() => {}}
      />

      <IconButton
        src="/icon-search.svg"
        alt="Search"
        size="2.25rem"
        callback={() => {}}
      />
    </div>
  )
}
